import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'v-calendar/dist/style.css';
import VCalendar from 'v-calendar';
import { ProCalendar } from '@lbgm/pro-calendar-vue';
import PrimeVue from 'primevue/config'
import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core CSS
import "primeicons/primeicons.css"; //icons
import Locale from "./locale/locale"


createApp(App).use(store).use(router).use(PrimeVue, { locale: Locale }).use(VCalendar, {
    componentPrefix: 'vc',
}).use(ProCalendar).mount('#app')


