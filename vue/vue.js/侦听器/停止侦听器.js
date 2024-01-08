const unwatch = watchEffect(() => {})

// ...当该侦听器不再需要时
unwatch()

// 需要异步请求得到的数据
const data = ref(null)

watchEffect(() => {
  if (data.value) {
    // 数据加载后执行某些操作...
  }
})