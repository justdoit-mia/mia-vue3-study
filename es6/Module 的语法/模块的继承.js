// circleplus.js

export * from 'circle';
export var e = 2.71828182846;
export default function(x) {
  return Math.exp(x);
}

// circleplus.js

export { area as circleArea } from 'circle';
// main.js

import * as math from 'circleplus';
import exp from 'circleplus';
console.log(exp(math.e));