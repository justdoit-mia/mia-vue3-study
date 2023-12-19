class A {
}

class B extends A {
}

B.__proto__ === A // true
B.prototype.__proto__ === A.prototype // true

class A {
}

class B {
}

// B 的实例继承 A 的实例
Object.setPrototypeOf(B.prototype, A.prototype);

// B 继承 A 的静态属性
Object.setPrototypeOf(B, A);

const b = new B();

Object.setPrototypeOf = function (obj, proto) {
  obj.__proto__ = proto;
  return obj;
}

Object.setPrototypeOf(B.prototype, A.prototype);
// 等同于
B.prototype.__proto__ = A.prototype;

Object.setPrototypeOf(B, A);
// 等同于
B.__proto__ = A;

B.prototype = Object.create(A.prototype);
// 等同于
B.prototype.__proto__ = A.prototype;

class B extends A {
}


class A extends Object {
}

A.__proto__ === Object // true
A.prototype.__proto__ === Object.prototype // true


class A {
}

A.__proto__ === Function.prototype // true
A.prototype.__proto__ === Object.prototype // true