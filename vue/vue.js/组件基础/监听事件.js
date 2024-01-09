const posts = ref([
  /* ... */
])

const postFontSize = ref(1)

export default {
  emits: ['enlarge-text'],
  setup(props, ctx) {
    ctx.emit('enlarge-text')
  }
}
