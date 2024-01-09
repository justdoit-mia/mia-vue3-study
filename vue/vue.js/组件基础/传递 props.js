const props = defineProps(['title'])
console.log(props.title)

export default {
  props: ['title'],
  setup(props) {
    console.log(props.title)
  }
}

const posts = ref([
  { id: 1, title: 'My journey with Vue' },
  { id: 2, title: 'Blogging with Vue' },
  { id: 3, title: 'Why Vue is so fun' }
])