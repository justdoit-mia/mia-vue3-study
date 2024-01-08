export default {
  setup() {
    const input = ref(null)
    // ...
    return {
      input
    }
  }
}

watchEffect(() => {
  if (input.value) {
    input.value.focus()
  } else {
    // 此时还未挂载，或此元素已经被卸载（例如通过 v-if 控制）
  }
})