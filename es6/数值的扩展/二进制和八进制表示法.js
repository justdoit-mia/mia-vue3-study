0b111110111 === 503 // true
0o767 === 503 // true

// 非严格模式
(function(){
  console.log(0o11 === 011);
})() // true

// 严格模式
(function(){
  'use strict';
  console.log(0o11 === 011);
})() // Uncaught SyntaxError: Octal literals are not allowed in strict mode.

Number('0b111')  // 7
Number('0o10')  // 8