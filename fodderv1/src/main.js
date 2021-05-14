// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import 'animate.css'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import wow from 'wowjs'
import './components/common/font/font.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(MuseUI)
Vue.use(ElementUI);
Vue.prototype.$wow=wow
Vue.config.productionTip = false;
import data from '../static/data'
Vue.prototype.$json = data

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App),
}).$mount('#app')
