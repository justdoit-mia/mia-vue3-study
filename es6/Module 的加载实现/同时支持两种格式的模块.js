import cjsModule from '../index.js';
export const foo = cjsModule.foo;


"exports"：{
  "require": "./index.js"，
  "import": "./esm/wrapper.js"
}

// 整体加载
import EventEmitter from 'events';
const e = new EventEmitter();

// 加载指定的输出项
import { readFile } from 'fs';
readFile('./foo.txt', (err, source) => {
  if (err) {
    console.error(err);
  } else {
    console.log(source);
  }
});