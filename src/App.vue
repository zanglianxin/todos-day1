<template>
  <div>
    <button @click="peeling">换肤</button>
    <div class="todoapp">
      <todo-header></todo-header>
      <todo-main></todo-main>
      <todo-footer></todo-footer>
    </div>
    <Mybutton title='我的内容' type="info" size='large'></Mybutton>
  </div>
</template>

<script>
import TodoFooter from './components/TodoFooter.vue' // shift + alt + 下
import TodoHeader from './components/TodoHeader.vue' // shift + alt + 下
import TodoMain from './components/TodoMain.vue' // shift + alt + 下
import Mybutton from '@/components/My-button.vue'
export default {
  data() {
    return {}
  },

  components: {
    TodoFooter,
    TodoHeader,
    TodoMain,
    Mybutton
  },

  created() {},

  methods: {
    peeling(){
      this.$store.dispatch('peeling/colorChangeAction')
    }
  },
}
</script>

<style scoped></style>
