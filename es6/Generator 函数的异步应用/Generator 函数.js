function* asyncJob() {
  // ...其他代码
  var f = yield readFile(fileA);
  // ...其他代码
}