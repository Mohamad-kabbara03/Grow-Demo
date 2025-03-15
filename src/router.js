import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/Views/Home.vue';
import Service from '@/Views/Service.vue';
import About from '@/Views/About.vue'; 
import Why from '@/Views/Why.vue';
import Team from '@/Views/Team.vue'; 
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
  history: createWebHashHistory(),
  routes,
});

export default router;
