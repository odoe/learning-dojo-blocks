import fs from 'fs';
import { resolve } from 'path';
import { v } from '@dojo/framework/widget-core/d';

// import { Converter } from 'showdown';
import unified from 'unified';
import markdown from 'remark-parse';
import vdom from 'remark-vdom';

// const mdConverter = new Converter();

export default function (path: string) {
  path = resolve(__dirname, path);
  const file = fs.readFileSync(path, 'utf8');
  // convert Markdown to HTML
  // const html = mdConverter.makeHtml(file);
  const vnodes = unified()
      .use(markdown as any)
      .use(vdom as any, { h: v })
      .parse(file);
  // const vnodes = await new Promise<any>((res, rej) => {
  //   unified()
  //   .use(markdown as any)
  //   .use(vdom as any, { h: v })
  //   .process(file, function(err, f) {
  //     if (err) rej(err);
  //     res(f.contents);
  //     console.dir(f.contents, {depth: null})
  //   })
  // });
  console.dir('HAVE VNODES');
  console.dir(vnodes);
  return vnodes;

  // return html
};
