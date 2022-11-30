import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
export const CSV_URL = "https://raw.githubusercontent.com/aivuk/TimeMapper2/master/docs/battles.csv"
createApp(App).use(router).mount('#app')
