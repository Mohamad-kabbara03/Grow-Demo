<template>
        <!-- Header Section -->
       <Header />
  
      <!-- About Section -->
      <section class="about_section layout_padding">
        <div class="container">
          <div class="heading_container heading_center">
            <h2>
              About <span>Us</span>
            </h2>
            <p>
              Magni quod blanditiis non minus sed aut voluptatum illum quisquam aspernatur ullam vel beatae rerum ipsum voluptatibus
            </p>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="img-box">
                <img src="@/assets/images/about-img.png" alt="About Image" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="detail-box">
                <h3>We Are Finexo</h3>
                <p>
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All
                </p>
                <p>
                  Molestiae odio earum non qui cumque provident voluptates, repellendus exercitationem, possimus at iste corrupti officiis unde alias eius ducimus reiciendis soluta eveniet. Nobis ullam ab omnis quasi expedita.
                </p>
                <router-link to="#">Read More</router-link>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Info Section -->
      <section class="info_section layout_padding2">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-lg-3 info_col">
              <div class="info_contact">
                <h4>Address</h4>
                <div class="contact_link_box">
                  <a href="#">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <span>Location</span>
                  </a>
                  <a href="#">
                    <i class="fa fa-phone" aria-hidden="true"></i>
                    <span>Call +01 1234567890</span>
                  </a>
                  <a href="#">
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                    <span>demo@gmail.com</span>
                  </a>
                </div>
              </div>
              <div class="info_social">
                <a href="#">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 info_col">
              <div class="info_detail">
                <h4>Info</h4>
                <p>necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful</p>
              </div>
            </div>
            <div class="col-md-6 col-lg-2 mx-auto info_col">
              <div class="info_link_box">
                <h4>Links</h4>
                <div class="info_links">
                  <router-link class="active" to="/">Home</router-link>
                  <router-link to="/about">About</router-link>
                  <router-link to="/services">Services</router-link>
                  <router-link to="/why">Why Us</router-link>
                  <router-link to="/team">Team</router-link>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 info_col">
              <h4>Subscribe</h4>
              <form action="#">
                <input type="text" placeholder="Enter email" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Footer Section -->
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
import Header from '@/components/Header.vue';

  export default {
    name: 'About',
    components:{
        Header
    },
    mounted() {
      document.getElementById('displayYear').textContent = new Date().getFullYear();
    },
  };
  </script>
  
  <style scoped>
  /* Custom styles for this Vue component can go here */
  @import "@/assets/css/bootstrap.css";
  @import "@/assets/css/font-awesome.min.css";
  @import "@/assets/css/style.css";
  @import "@/assets/css/responsive.css";
  </style>
  