export { foo, bar } from 'my_module';

// 可以简单理解为
import { foo, bar } from 'my_module';
export { foo, bar };

// 接口改名
export { foo as myFoo } from 'my_module';

// 整体输出
export * from 'my_module';

export { default } from 'foo';

export { es6 as default } from './someModule';

// 等同于
import { es6 } from './someModule';
export default es6;

export { default as es6 } from './someModule';

import * as someIdentifier from "someModule";
export * as ns from "mod";

// 等同于
import * as ns from "mod";
export {ns}