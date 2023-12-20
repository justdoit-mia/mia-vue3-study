// main.js
import { firstName, lastName, year } from './profile.js';

function setName(element) {
  element.textContent = firstName + ' ' + lastName;
}


import { lastName as surname } from './profile.js';

import {a} from './xxx.js'

a = {}; // Syntax Error : 'a' is read-only;

import {a} from './xxx.js'

a.foo = 'hello'; // 合法操作


import { myMethod } from 'util';

foo();

import { foo } from 'my_module';

// 报错
import { 'f' + 'oo' } from 'my_module';

// 报错
let module = 'my_module';
import { foo } from module;

// 报错
if (x === 1) {
  import { foo } from 'module1';
} else {
  import { foo } from 'module2';
}


import 'lodash';

import 'lodash';
import 'lodash';

import { foo } from 'my_module';
import { bar } from 'my_module';

// 等同于
import { foo, bar } from 'my_module';

require('core-js/modules/es6.symbol');
require('core-js/modules/es6.promise');
import React from 'React';