defineProps({
  disabled: Boolean
})

// disabled 将被转换为 true
defineProps({
  disabled: [Boolean, Number]
})
  
// disabled 将被转换为 true
defineProps({
  disabled: [Boolean, String]
})
  
// disabled 将被转换为 true
defineProps({
  disabled: [Number, Boolean]
})
  
// disabled 将被解析为空字符串 (disabled="")
defineProps({
  disabled: [String, Boolean]
})