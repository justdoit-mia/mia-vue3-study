const jsPromise = Promise.resolve($.ajax('/whatever.json'));

Promise.resolve('foo')
// 等价于
new Promise(resolve => resolve('foo'))


// （2）参数是一个thenable对象

let thenable = {
  then: function(resolve, reject) {
    resolve(42);
  }
};

let thenable = {
  then: function(resolve, reject) {
    resolve(42);
  }
};

let p1 = Promise.resolve(thenable);
p1.then(function (value) {
  console.log(value);  // 42
});

// （3）参数不是具有then()方法的对象，或根本就不是对象


const p = Promise.resolve('Hello');

p.then(function (s) {
  console.log(s)
});
// Hello
// （4）不带有任何参数
const p = Promise.resolve();

p.then(function () {
  // ...
});

setTimeout(function () {
  console.log('three');
}, 0);

Promise.resolve().then(function () {
  console.log('two');
});

console.log('one');

// one
// two
// three