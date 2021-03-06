/* eslint-disable no-param-reassign */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    staticLang: 0
  },
  mutations: {
    setLang(val) {
      state.staticLang = val;
    }
  },
  actions: {}
});
