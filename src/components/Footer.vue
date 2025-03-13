<template>
    <section class="footer_section">
      <div class="container">
        <p>
          &copy; <span id="displayYear"></span> All Rights Reserved By
          <a href="https://html.design/">Free Html Templates</a>
        </p>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Footer',
    mounted() {
      const currentYear = new Date().getFullYear();
      document.getElementById('displayYear').textContent = currentYear;
    },
  };
  </script>
  
  <style scoped>
  @import '@/assets/css/bootstrap.css';
  @import '@/assets/css/font-awesome.min.css';
  @import '@/assets/css/style.css';
  @import '@/assets/css/responsive.css';
  </style>
  