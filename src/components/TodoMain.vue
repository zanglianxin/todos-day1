<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li class="completed" v-for="item in list" :key="item.id">
      <div class="view">
        <input class="toggle" type="checkbox" />
        <label>{{ item.name }}</label>
        <button class="destroy" @click="delFn(item.id)"></button>
      </div>
    </li>
  </ul>
  
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    delFn(id){
      this['todos/delTodoListAction'](id)
    },
    ...mapActions(['todos/delTodoListAction'])
  },
  computed: {
    list() {
      return this.$store.state.todos.list
    }
  }
}
</script>
