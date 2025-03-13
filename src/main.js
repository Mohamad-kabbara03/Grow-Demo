import { createApp } from 'vue'
import './assets/css/bootstrap.css';
import './assets/css/font-awesome.min.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import $ from "jquery";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";
import routes from './router'
import 'bootstrap/dist/css/bootstrap.min.css';  // Make sure this is included
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AOS from 'aos';
import 'aos/dist/aos.css';


import App from './App.vue'

window.$ = window.jQuery = $;

createApp(App)
.use(routes)
.mount('#app')

AOS.init({
    duration: 1000,  // Animation duration (in ms)
    easing: 'ease',  // Easing function
    once: false,     // Allow animation on every scroll
    offset: 120,     // Distance from the top when the animation starts
  });