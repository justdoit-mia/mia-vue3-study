function add(x, y) { return x + y; }
function add7(x) { return x + 7; }

// bind 方法
const add7 = add.bind(null, 7);

// 箭头函数
const add7 = x => add(x, 7);


const add = (x, y) => x + y;
const addOne = add(1, ?);

const maxGreaterThanZero = Math.max(0, ...);

f(x, ?)
f(x, ...)
f(?, x)
f(..., x)
f(?, x, ?)
f(..., x, ...)

const g = f(?, 1, ...);
// 等同于
const g = (x, ...y) => f(x, 1, ...y);

let obj = {
  f(x, y) { return x + y; },
};

const g = obj.f(?, 3);
g(1) // 4

let f = (x, y) => x + y;

const g = f(?, 3);
g(1); // 4

// 替换函数 f
f = (x, y) => x * y;

g(1); // 3

let a = 3;
const f = (x, y) => x + y;

const g = f(?, a);
g(1); // 4

// 改变 a 的值
a = 10;
g(1); // 11

const f = (x, ...y) => [x, ...y];
const g = f(?, 1);
g(2, 3, 4); // [2, 1]


const f = (x, ...y) => [x, ...y];
const g = f(?, 1, ...);
g(2, 3, 4); // [2, 1, 3, 4];

const f = (...x) => x;
const g = f(..., 9, ...);
g(1, 2, 3); // [1, 2, 3, 9, 1, 2, 3]