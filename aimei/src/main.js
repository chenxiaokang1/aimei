// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css'
import Mui from 'vue-awesome-mui';
import "./assets/font/font_t/iconfont.css";



Vue.config.productionTip = false
Vue.use(Vant)
Vue.use(Mui);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
