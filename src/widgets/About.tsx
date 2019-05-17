import WidgetBase from "@dojo/framework/widget-core/WidgetBase";
// import { dom } from "@dojo/framework/widget-core/d";
import Block from "@dojo/framework/widget-core/meta/Block";
import { tsx } from "@dojo/framework/widget-core/tsx";
import { w } from '@dojo/framework/widget-core/d';

import fromMarkdown from "../blocks/markdown.block";

import * as css from "./styles/About.m.css";

export default class About extends WidgetBase {
  protected render() {
    // const node = document.createElement("div");
    // Use my block
    const message = this.meta(Block).run(fromMarkdown)("../../markdown/post2.md");
    // node.innerHTML = message;
    // Create a vnode to inject my HTML
    // const vnode = dom({ node });
    return (
      <div>
        <h1 classes={css.root}>About Page</h1>
        {message}
      </div>
    );
  }
}
