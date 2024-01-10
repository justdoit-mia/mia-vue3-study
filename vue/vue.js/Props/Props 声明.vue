<script setup>
const props = defineProps(['foo'])

console.log(props.foo)
</script>

<script setup lang="ts">
defineProps<{
  title?: string
  likes?: number
}>()
</script>

<script setup lang="ts">
defineProps<{
  title?: string
  likes?: number
}>()
</script>