import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
<<<<<<< HEAD
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import ElementUi from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUi)

=======
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
>>>>>>> b0271641196df457c481168be80c14e212bc695e
Vue.use(MintUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
