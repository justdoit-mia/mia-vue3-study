var x = 1;

function f(m) {
  return m * 2;
}

f(x + 5)


f(x + 5)
// 传值调用时，等同于
f(6)

f(x + 5)
// 传名调用时，等同于
(x + 5) * 2


function f(a, b){
  return b;
}

f(3 * x * x - 2 * x - 1, x);