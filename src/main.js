// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import  vuex from 'vuex'
import iView from "view-design";
import locale from 'view-design/dist/locale/zh-CN';
import  {codemirror} from 'vue-codemirror'
import 'view-design/dist/styles/iview.css';
Vue.config.devtools = true
Vue.config.productionTip = false
Vue.use(vuex)
Vue.use(iView,{
  locale
})
Vue.use(router)
Vue.use(codemirror)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
