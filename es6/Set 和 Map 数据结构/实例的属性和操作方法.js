// （1）size 属性

const map = new Map();
map.set('foo', true);
map.set('bar', false);

map.size // 2
// （2）Map.prototype.set(key, value)

const m = new Map();

m.set('edition', 6)        // 键是字符串
m.set(262, 'standard')     // 键是数值
m.set(undefined, 'nah')    // 键是 undefined

let map = new Map()
  .set(1, 'a')
  .set(2, 'b')
  .set(3, 'c');
// （3）Map.prototype.get(key)

const m = new Map();

const hello = function() {console.log('hello');};
m.set(hello, 'Hello ES6!') // 键是函数

m.get(hello)  // Hello ES6!
// （4）Map.prototype.has(key)

const m = new Map();

m.set('edition', 6);
m.set(262, 'standard');
m.set(undefined, 'nah');

m.has('edition')     // true
m.has('years')       // false
m.has(262)           // true
m.has(undefined)     // true
// （5）Map.prototype.delete(key)
const m = new Map();
m.set(undefined, 'nah');
m.has(undefined)     // true

m.delete(undefined)
m.has(undefined)       // false
// （6）Map.prototype.clear()
let map = new Map();
map.set('foo', true);
map.set('bar', false);

map.size // 2
map.clear()
map.size // 0