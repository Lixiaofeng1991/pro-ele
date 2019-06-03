
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store";

Vue.prototype.$center = new Vue();

// Vue.config.productionTip = false
// zengjfaifjai

//滚动组件
import Page from "./components/common/Page.vue";
Vue.component("page",Page);

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
