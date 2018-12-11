import Vue from "vue";
import App from "./App";
import lang from "./lang";
import store from "./store";

Vue.config.productionTip = false;
App.mpType = "app";


Vue.prototype.$langPackage = lang;
Vue.prototype.$store = store;
const app = new Vue(App);
app.$mount();
Vue.prototype.globalData = getApp().globalData;



/*
new Vue({
  i18n,
  store,
  render: h => h(App)
}).$mount("#app");*/
