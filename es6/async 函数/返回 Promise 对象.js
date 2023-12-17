async function f() {
  return 'hello world';
}

f().then(v => console.log(v))
// "hello world"


async function f() {
  throw new Error('出错了');
}

f().then(
  v => console.log('resolve', v),
  e => console.log('reject', e)
)
//reject Error: 出错了