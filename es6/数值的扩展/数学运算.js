9n / 5n
// 1n


1n + 1.3 // 报错

// 错误的写法
Math.sqrt(4n) // 报错

// 正确的写法
Math.sqrt(Number(4n)) // 2

1n | 0 // 报错