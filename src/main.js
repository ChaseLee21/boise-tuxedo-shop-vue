import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './components/Home.vue'
import RentOrBuy from './components/RentOrBuy.vue'
import Product from './components/Product.vue'
import Category from './components/Category.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/RentOrBuy', component: RentOrBuy, name: 'RentOrBuy' },
        { path: '/Product/:id', component: Product, name: 'Product', props: true },
        { path: '/Category/:category', component: Category, name: 'Category', props: true }
        // other routes...
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition;
        } else {
          return { top: 0 };
        }
      },
  })
  

  const app = createApp(App)
  app.use(router)
  app.mount('#app')