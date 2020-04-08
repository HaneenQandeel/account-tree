import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import vSelect from 'vue-select'
import Vuelidate from 'vuelidate'
import * as Tabs from 'vue-slim-tabs'
 
Vue.use(Tabs)
Vue.component('v-select', vSelect)
// Install BootstrapVue
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuelidate)
import "vue-select/dist/vue-select.css";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
