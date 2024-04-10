import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './components/Home.vue'
import RentOrBuy from './components/RentOrBuy.vue'
import Product from './components/Product.vue'
import Category from './components/Category.vue'
import Faq from './components/Faq.vue'
import Privacy from './components/Privacy.vue'
import Terms from './components/Terms.vue'
import Disclaimer from './components/Disclaimer.vue'
import Contact from './components/Contact.vue'
import Prom from './components/Prom.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/RentOrBuy', component: RentOrBuy, name: 'RentOrBuy' },
        { path: '/Faq', component: Faq, name: 'Faq' },
        { path: '/Product/:id', component: Product, name: 'Product', props: true },
        { path: '/Category/:category', component: Category, name: 'Category', props: true },
        { path: '/Privacy', component: Privacy, name: 'Privacy' },
        { path: '/Terms', component: Terms, name: 'Terms' },
        { path: '/Disclaimer', component: Disclaimer, name: 'Disclaimer' },
        { path: '/Contact', component: Contact, name: 'Contact' },
        { path: '/Prom', component: Prom, name: 'Prom' },
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