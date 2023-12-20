// profile.js
export var firstName = 'Michael';
export var lastName = 'Jackson';
export var year = 1958;

// profile.js
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;

export { firstName, lastName, year };


export function multiply(x, y) {
  return x * y;
};

function v1() { ... }
function v2() { ... }

export {
  v1 as streamV1,
  v2 as streamV2,
  v2 as streamLatestVersion
};

// 报错
export 1;

// 报错
var m = 1;
export m;

// 写法一
export var m = 1;

// 写法二
var m = 1;
export {m};

// 写法三
var n = 1;
export {n as m};

// 报错
function f() {}
export f;

// 正确
export function f() {};

// 正确
function f() {}
export {f};

export var foo = 'bar';
setTimeout(() => foo = 'baz', 500);


function foo() {
  export default 'bar' // SyntaxError
}
foo()