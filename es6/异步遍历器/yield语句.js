async function* gen1() {
  yield 'a';
  yield 'b';
  return 2;
}

async function* gen2() {
  // result 最终会等于 2
  const result = yield* gen1();
}

(async function () {
  for await (const x of gen2()) {
    console.log(x);
  }
})();
// a
// b