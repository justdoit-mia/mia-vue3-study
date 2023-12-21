// ./node_modules/es-module-package/package.json
{
  "type": "module",
  "main": "./src/index.js"
}

// ./my-app.mjs

import { something } from 'es-module-package';
// 实际加载的是 ./node_modules/es-module-package/src/index.js