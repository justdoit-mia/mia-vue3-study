// ES6 模块中将报错
import { something } from './index';

import './foo.mjs?query=1'; // 加载 ./foo 传入参数 ?query=1