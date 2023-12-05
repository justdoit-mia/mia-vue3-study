// 差集运算（A 减去 B）
[A--B]

// 交集运算（A 与 B 的交集）
[A&&B]
// 方括号嵌套的例子
[A--[0-9]]

// 十进制字符去除 ASCII 码的0到9
[\p{Decimal_Number}--[0-9]]

// Emoji 字符去除 ASCII 码字符
[\p{Emoji}--\p{ASCII}]