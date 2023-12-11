const myObject = {};

// 旧写法
Object.isExtensible(myObject) // true

// 新写法
Reflect.isExtensible(myObject) // true

Object.isExtensible(1) // false
Reflect.isExtensible(1) // 报错