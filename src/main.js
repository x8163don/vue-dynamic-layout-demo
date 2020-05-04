import Vue from 'vue'
import App from './App.vue'
import router from './router'
import FullScreen from '@/layout/FullScreen'
import SideBar from '@/layout/SideBar.vue'

Vue.config.productionTip = false

// registry layout
Vue.component('full-screen-layout',FullScreen)
Vue.component('sidebar-layout',SideBar)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
