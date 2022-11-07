import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n'
import FlagIcon from 'vue-flag-icon'
import VueFlags from "@growthbunker/vueflags";
import CountryFlag from 'vue-country-flag'

Vue.config.productionTip = false
Vue.use(FlagIcon);
Vue.use(VueFlags);
Vue.component('country-flag', CountryFlag)

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')
