import { createApp } from 'vue'
import App from './App.vue'
import components from '@/components/UI'
import router from "@/router/router";
import store from "@/store/store";




const app = createApp(App)
components.forEach(comp => app.component(comp.name, comp))
app.use(router).use(store).mount('#app')
