<template>
  <header class="header">
    <h1 :style="{ color }">todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" >
    <label for="toggle-all"></label>
    <input
      v-model="inp"
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      @keyup.enter="enterFn"
    />
  </header>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState: mapTodoState } = createNamespacedHelpers('todos')
export default {
  data () {
    return {
      inp: ''
    }
  },
  methods: {
    enterFn() {
      if (this.inp.trim().length === 0) {
        return alert('内容不能为空')
      }
      let id = this.list[0]?.id + 1 || 1
      const listObj = {
        id,
        name: this.inp,
        done: false
      }
      this.$store.dispatch('todos/addTodoListAction', listObj)
      this.inp = ''
    }
  },
  computed: {
    ...mapTodoState(['list']),
    color() {
      return this.$store.state.peeling.color
    }
  }
}
</script>
