import { reactive } from 'vue'

const state = reactive({ count: 0 })

const raw = {}
const proxy = reactive(raw)

// 代理对象和原始对象不是全等的
console.log(proxy === raw) // false

// 在同一个对象上调用 reactive() 会返回相同的代理
console.log(reactive(raw) === proxy) // true

// 在一个代理上调用 reactive() 会返回它自己
console.log(reactive(proxy) === proxy) // true

const proxy = reactive({})

const raw = {}
proxy.nested = raw

console.log(proxy.nested === raw) // false

