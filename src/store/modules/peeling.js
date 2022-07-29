export default {
  namespaced: true,
  state: {
    color: "#b83f45",
  },
  getters: {},
  mutations: {
    colorChange(state) {
      state.color = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
        Math.random() * 256
      )},${Math.floor(Math.random() * 256)})`;
    },
  },
  actions: {
    colorChangeAction(context) {
      context.commit("colorChange");
    },
  },
};
