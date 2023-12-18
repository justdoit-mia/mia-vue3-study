class Point {
}

// 等同于
class Point {
  constructor() {}
}


class Foo {
  constructor() {
    return Object.create(null);
  }
}

new Foo() instanceof Foo
// false


class Foo {
  constructor() {
    return Object.create(null);
  }
}

Foo()
// TypeError: Class constructor Foo cannot be invoked without 'new'