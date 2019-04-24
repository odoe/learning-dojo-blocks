import * as fs from 'fs';
import { resolve } from 'path';

import { Converter } from 'showdown';

const mdConverter = new Converter();

export default function (path: string) {
  path = resolve(__dirname, path);
  const file = fs.readFileSync(path, 'utf8');
  // convert Markdown to HTML
  const html = mdConverter.makeHtml(file);
  return html
};
