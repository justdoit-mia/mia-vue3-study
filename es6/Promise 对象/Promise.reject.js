const p = Promise.reject('出错了');
// 等同于
const p = new Promise((resolve, reject) => reject('出错了'))

p.then(null, function (s) {
  console.log(s)
});
// 出错了

Promise.reject('出错了')
.catch(e => {
  console.log(e === '出错了')
})
// true