import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './views/Home.vue'
import RentOrBuy from './views/RentOrBuy.vue'
import Product from './views/Product.vue'
import Category from './views/Category.vue'
import Faq from './views/Faq.vue'
import Privacy from './views/Privacy.vue'
import Terms from './views/Terms.vue'
import Disclaimer from './views/Disclaimer.vue'
import Contact from './views/Contact.vue'
import Prom from './views/Prom.vue'
import Gallery from './views/Gallery.vue'
import Reviews from './views/Reviews.vue'
import Accessories from './views/Accessories.vue'
import CustomFit from './views/CustomFit.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/RentOrBuy', component: RentOrBuy, name: 'RentOrBuy' },
        { path: '/Gallery', component: Gallery, name: 'Gallery' },
        { path: '/Faq', component: Faq, name: 'Faq' },
        { path: '/Product/:id', component: Product, name: 'Product', props: true },
        { path: '/Accessories', component: Accessories, name: 'Accessories' },
        { path: '/Category/:category', component: Category, name: 'Category', props: true },
        { path: '/Privacy', component: Privacy, name: 'Privacy' },
        { path: '/Terms', component: Terms, name: 'Terms' },
        { path: '/Disclaimer', component: Disclaimer, name: 'Disclaimer' },
        { path: '/Contact', component: Contact, name: 'Contact' },
        { path: '/Prom', component: Prom, name: 'Prom' },
        { path: '/Reviews', component: Reviews, name: 'Reviews' },
        { path: '/CustomFit', component: CustomFit, name: 'CustomFit' },
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