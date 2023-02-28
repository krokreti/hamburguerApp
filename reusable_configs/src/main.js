import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'v-calendar/dist/style.css';
import VCalendar from 'v-calendar';
import { ProCalendar } from '@lbgm/pro-calendar-vue';

createApp(App).use(store).use(router).use(VCalendar, {
    componentPrefix: 'vc',
}).use(ProCalendar).mount('#app')
