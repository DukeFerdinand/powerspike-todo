// Vue libraries
import Vue from "vue";
import Vuex from "vuex";

import App from "./App.vue";
import { state } from "./store/store";

Vue.use(Vuex);

const store = new Vuex.Store(state);

/* eslint-disable no-new */
let v = new Vue({
  el: "#app",
  store,
  template: "<App/>",
  components: { App },
  render: h => h(App)
});
