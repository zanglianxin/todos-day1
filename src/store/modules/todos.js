export default{
    namespaced: true,
    state: {
      list: [
        {
          name: "吃饭",
          done: false,
          id: 1,
        },
        {
          name: "睡觉",
          done: false,
          id: 2,
        },
        {
          name: "打豆豆",
          done: false,
          id: 3,
        },
      ],
    },
    getters: {},
    mutations: {
        addTodoList(state, payload) {
            state.list.unshift(payload)
        },
        delTodoList(state, id) {
            const index = state.list.findIndex(ele => ele.id === id)
            state.list.splice(index, 1)
        }
    },
    actions: {
        addTodoListAction({commit}, payload) {
            commit('addTodoList', payload)
        },
        delTodoListAction({commit}, id) {
            commit('delTodoList', id)
        }
    },
}