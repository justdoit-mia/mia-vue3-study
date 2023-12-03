'中' === '\u4e2d' // true

const json = '"\u2028"';
JSON.parse(json); // 可能报错

const PS = eval("'\u2029'");

