// export-default.js
export default function () {
  console.log('foo');
}


// import-default.js
import customName from './export-default';
customName(); // 'foo'

// export-default.js
export default function foo() {
  console.log('foo');
}

// 或者写成

function foo() {
  console.log('foo');
}

export default foo;

// 第一组
export default function crc32() { // 输出
  // ...
}

import crc32 from 'crc32'; // 输入

// 第二组
export function crc32() { // 输出
  // ...
};

import {crc32} from 'crc32'; // 输入


// modules.js
function add(x, y) {
  return x * y;
}
export {add as default};
// 等同于
// export default add;

// app.js
import { default as foo } from 'modules';
// 等同于
// import foo from 'modules';

// 正确
export var a = 1;

// 正确
var a = 1;
export default a;

// 错误
export default var a = 1;


// 正确
export default 42;

// 报错
export 42;


import _ from 'lodash';

import _, { each, forEach } from 'lodash';

export default function (obj) {
  // ···
}

export function each(obj, iterator, context) {
  // ···
}

export { each as forEach };


// MyClass.js
export default class { ... }

// main.js
import MyClass from 'MyClass';
let o = new MyClass();
