let arrayLike = {
  '0': 'a',
  '1': 'b',
  '2': 'c',
  length: 3
};

// ES5 的写法
var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']

// ES6 的写法
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']

// NodeList 对象
let ps = document.querySelectorAll('p');
Array.from(ps).filter(p => {
return p.textContent.length > 100;
});

// arguments 对象
function foo() {
var args = Array.from(arguments);
// ...
}

Array.from('hello')
// ['h', 'e', 'l', 'l', 'o']

let namesSet = new Set(['a', 'b'])
Array.from(namesSet) // ['a', 'b']


Array.from([1, 2, 3])
// [1, 2, 3]

// arguments对象
function foo() {
const args = [...arguments];
}

// NodeList对象
[...document.querySelectorAll('div')]

Array.from({ length: 3 });
// [ undefined, undefined, undefined ]


const toArray = (() =>
Array.from ? Array.from : obj => [].slice.call(obj)
)();

Array.from(arrayLike, x => x * x);
// 等同于
Array.from(arrayLike).map(x => x * x);

Array.from([1, 2, 3], (x) => x * x)
// [1, 4, 9]

let spans = document.querySelectorAll('span.name');

// map()
let names1 = Array.prototype.map.call(spans, s => s.textContent);

// Array.from()
let names2 = Array.from(spans, s => s.textContent)

Array.from([1, , 2, , 3], (n) => n || 0)
// [1, 0, 2, 0, 3]

function typesOf () {
return Array.from(arguments, value => typeof value)
}
typesOf(null, [], NaN)
// ['object', 'object', 'number']

Array.from({ length: 2 }, () => 'jack')
// ['jack', 'jack']


function countSymbols(string) {
return Array.from(string).length;
}