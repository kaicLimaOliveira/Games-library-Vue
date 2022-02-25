import { createApp } from 'vue'
import App from './App.vue'
import { router } from '@/router/index'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
// import BootstrapVue from 'bootstrap-vue'

const app = createApp(App)
app.use(router)
// app.use(BootstrapVue)
app.mount('#app')
