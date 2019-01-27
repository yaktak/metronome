import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hello: 'hello',
  },

  mutations: {
    hello(state) {
      state.hello = 'hello, world!';
    },
  },
});
