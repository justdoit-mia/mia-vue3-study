/foo.bar/.test('foo\nbar')
// false

/foo[^]bar/.test('foo\nbar')
// true
/foo.bar/s.test('foo\nbar') // true
const re = /foo.bar/s;
// 另一种写法
// const re = new RegExp('foo.bar', 's');

re.test('foo\nbar') // true
re.dotAll // true
re.flags // 's'