import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
// import { dom } from "@dojo/framework/widget-core/d";
import Block from '@dojo/framework/widget-core/meta/Block';
import { tsx } from '@dojo/framework/widget-core/tsx';

import fromMarkdown from '../blocks/markdown.block';

import * as css from './styles/About.m.css';

export default class About extends WidgetBase {
	protected render() {
		const message = this.meta(Block).run(fromMarkdown)('../../markdown/post2.md');
		return (
			<div>
				<h1 classes={css.root}>About Page</h1>
				{message}
			</div>
		);
	}
}
