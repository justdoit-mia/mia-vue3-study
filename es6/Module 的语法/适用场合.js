// （1）按需加载

button.addEventListener('click', event => {
  import('./dialogBox.js')
  .then(dialogBox => {
    dialogBox.open();
  })
  .catch(error => {
    /* Error handling */
  })
});

// （2）条件加载

if (condition) {
  import('moduleA').then(...);
} else {
  import('moduleB').then(...);
}
// （3）动态的模块路径

import(f())
.then(...);