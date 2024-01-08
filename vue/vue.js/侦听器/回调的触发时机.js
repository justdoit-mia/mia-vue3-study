watch(source, callback, {
  flush: 'post'
})

watchEffect(callback, {
  flush: 'post'
})

import { watchPostEffect } from 'vue'

watchPostEffect(() => {
  /* 在 Vue 更新后执行 */
})

