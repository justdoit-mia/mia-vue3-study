// （1）let 取代 var
'use strict';

if (true) {
  let x = 'hello';
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

'use strict';

if (true) {
  console.log(x); // ReferenceError
  let x = 'hello';
}

// （2）全局常量和线程安全
// bad
var a = 1, b = 2, c = 3;

// good
const a = 1;
const b = 2;
const c = 3;

// best
const [a, b, c] = [1, 2, 3];