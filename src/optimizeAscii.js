// Source - https://stackoverflow.com/a/74967829
// Posted by jsejcksn, modified by community. See post 'Timeline' for change history
// Retrieved 2026-03-06, License - CC BY-SA 4.0

import {ok as assert} from 'node:assert/strict';
import {readFile, writeFile} from 'node:fs/promises';

const [inputPath, outputPath] = process.argv.slice(2);

assert(inputPath, 'File input path not found');
assert(outputPath, 'File output path not found');

const encodingOpts = {encoding: 'utf-8'};

const text = await readFile(inputPath, encodingOpts);

const trimmed = text
  // Remove empty lines from beginning
  .replace(/^(\r?\n)+/, '')
  // Remove whitespace from end
  .trimEnd()
  // Remove whitespace from ends of lines
  .split('\n').map(line => line.trimEnd()).join('\n');

const json = JSON.stringify(trimmed);

const moduleSource = `export default ${json};\n`;

await writeFile(outputPath, moduleSource, encodingOpts);

console.log(`Text art module written to: ${outputPath}`);

