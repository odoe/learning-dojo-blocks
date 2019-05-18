const { resolve } = require('path');
const fs = require('fs');

// import { Converter } from 'showdown';
const unified = require('unified');
const markdown = require('remark-parse');
const remark2rehype = require('remark-rehype');
const toH = require('hast-to-hyperscript');
const { v } = require('@dojo/framework/widget-core/d');
const slug = require('rehype-slug');

// const mdConverter = new Converter();

function process(content: string) {
	let counter = 0;
	const pipeline = unified().use(markdown as any, { commonmark: true }).use(remark2rehype).use(slug);

	const nodes = pipeline.parse(content);
	const result = pipeline.runSync(nodes);
	return toH((tag: string, props: any, children: any[]) => v(tag, { ...props, key: counter++ }, children), result);
}

export default function(path: string) {
	path = resolve(__dirname, path);
	const file = fs.readFileSync(path, 'utf8');
	// convert Markdown to HTML
	// const html = mdConverter.makeHtml(file);
	const vnodes = process(file);
	return vnodes;

	// return html
}
