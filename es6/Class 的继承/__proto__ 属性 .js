var p1 = new Point(2, 3);
var p2 = new ColorPoint(2, 3, 'red');

p2.__proto__ === p1.__proto__ // false
p2.__proto__.__proto__ === p1.__proto__ // true

p2.__proto__.__proto__.printName = function () {
  console.log('Ha');
};

p1.printName() // "Ha"