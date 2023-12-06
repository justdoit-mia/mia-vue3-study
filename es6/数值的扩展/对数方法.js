Math.expm1(-1) // -0.6321205588285577
Math.expm1(0)  // 0
Math.expm1(1)  // 1.718281828459045

Math.expm1 = Math.expm1 || function(x) {
  return Math.exp(x) - 1;
};
// （2）Math.log1p()
Math.log1p(1)  // 0.6931471805599453
Math.log1p(0)  // 0
Math.log1p(-1) // -Infinity
Math.log1p(-2) // NaN

Math.log1p = Math.log1p || function(x) {
  return Math.log(1 + x);
};
// （3）Math.log10()
Math.log10(2)      // 0.3010299956639812
Math.log10(1)      // 0
Math.log10(0)      // -Infinity
Math.log10(-2)     // NaN
Math.log10(100000) // 5

Math.log10 = Math.log10 || function(x) {
  return Math.log(x) / Math.LN10;
};
// （4）Math.log2()

Math.log2(3)       // 1.584962500721156
Math.log2(2)       // 1
Math.log2(1)       // 0
Math.log2(0)       // -Infinity
Math.log2(-2)      // NaN
Math.log2(1024)    // 10
Math.log2(1 << 29) // 29

Math.log2 = Math.log2 || function(x) {
  return Math.log(x) / Math.LN2;
};