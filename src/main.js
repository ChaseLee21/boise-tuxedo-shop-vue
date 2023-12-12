import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './components/Home.vue'
import RentOrBuy from './components/RentOrBuy.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/RentOrBuy', component: RentOrBuy },
        // other routes...
    ],
  })
  

  const app = createApp(App)
  app.use(router)
  app.mount('#app')