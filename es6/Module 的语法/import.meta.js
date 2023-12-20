// （1）import.meta.url
new URL('data.txt', import.meta.url)
// （2）import.meta.scriptElement
// HTML 代码为
// <script type="module" src="my-module.js" data-foo="abc"></script>

// my-module.js 内部执行下面的代码
import.meta.scriptElement.dataset.foo
// "abc"