/^\uD83D/u.test('\uD83D\uDC2A') // false
/^\uD83D/.test('\uD83D\uDC2A') // true
// （1）点字符
var s = '𠮷';
/^.$/.test(s) // false
/^.$/u.test(s) // true
// （2）Unicode 字符表示法
/\u{61}/.test('a') // false
/\u{61}/u.test('a') // true
/\u{20BB7}/u.test('𠮷') // true
// （3）量词
/a{2}/.test('aa') // true
/a{2}/u.test('aa') // true
/𠮷{2}/.test('𠮷𠮷') // false
/𠮷{2}/u.test('𠮷𠮷') // true
// （4）预定义模式
/^\S$/.test('𠮷') // false
/^\S$/u.test('𠮷') // true
function codePointLength(text) {
  var result = text.match(/[\s\S]/gu);
  return result ? result.length : 0;
}

var s = '𠮷𠮷';

s.length // 4
codePointLength(s) // 2
// （5）i 修饰符
/[a-z]/i.test('\u212A') // false
/[a-z]/iu.test('\u212A') // true
/\,/ // /\,/
/\,/u // 报错
// （6）转义
/\,/ // /\,/
/\,/u // 报错