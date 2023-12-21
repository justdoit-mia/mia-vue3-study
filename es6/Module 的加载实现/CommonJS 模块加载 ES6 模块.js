(async () => {
  await import('./my-app.mjs');
})();


// 正确
import packageMain from 'commonjs-package';

// 报错
import { method } from 'commonjs-package';


import packageMain from 'commonjs-package';
const { method } = packageMain;

// cjs.cjs
module.exports = 'cjs';

// esm.mjs
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const cjs = require('./cjs.cjs');
cjs === 'cjs'; // true