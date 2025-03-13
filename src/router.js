import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Service from '@/views/Service.vue';
import About from '@/views/About.vue'; 
import Why from '@/views/Why.vue';
import Team from '@/views/Team.vue'; 
import Portfolio from './Views/Portfolio.vue';
import ContactUs from './Views/ContactUs.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/services', component: Service },
  { path: '/about', component: About },
  { path: '/why', component: Why },
  { path: '/team', component: Team },
  { path: '/portfolio', component: Portfolio },
  { path: '/contact-us', component: ContactUs },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
