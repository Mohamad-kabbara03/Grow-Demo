import { createApp } from 'vue'
import './assets/css/bootstrap.css';
import './assets/css/font-awesome.min.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import $ from "jquery";
import routes from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AOS from 'aos';
import 'aos/dist/aos.css';


import App from './App.vue'

window.$ = window.jQuery = $;

createApp(App)
.use(routes)
.mount('#app')

AOS.init({
    duration: 1000,
    easing: 'ease',
    once: false,
    offset: 120,
  });