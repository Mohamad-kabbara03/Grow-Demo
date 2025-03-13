<template>
  <section class="slider_section">
    <div id="customCarousel1" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="detail-box">
                  <h1>
                    Business <br />
                    Consulting
                  </h1>
                  <p>
                    We provide expert business management consulting to help organizations optimize operations, develop
                    growth strategies, and enhance efficiency. Our tailored solutions drive success and sustainability.
                  </p>
                  <div class="btn-box">
                    <a href="#" class="btn1">Learn More</a>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="img-box">
                  <img :src="businessConsulting" alt="Business Consulting" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="detail-box">
                  <h1>
                    Digital <br />
                    Transformation
                  </h1>
                  <p>
                    Leverage the power of technology with our digital transformation services, including website & app
                    development, AI-driven solutions, and process automation tailored to your business needs.
                  </p>
                  <div class="btn-box">
                    <a href="#" class="btn1">Discover More</a>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="img-box">
                  <img :src="digitalTransformation" alt="Digital Transformation" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="detail-box">
                  <h1>
                    Branding & <br />
                    Marketing
                  </h1>
                  <p>
                    Build a strong brand identity with our comprehensive branding, rebranding, and digital marketing
                    services. We offer social media management, SEO, content creation, and strategic marketing
                    solutions.
                  </p>
                  <div class="btn-box">
                    <a href="#" class="btn1">Get Started</a>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="img-box">
                  <img :src="branding" alt="Branding & Marketing" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ol class="carousel-indicators">
        <li data-target="#customCarousel1" data-slide-to="0" class="active"></li>
        <li data-target="#customCarousel1" data-slide-to="1"></li>
        <li data-target="#customCarousel1" data-slide-to="2"></li>
      </ol>
    </div>
  </section>
</template>

<script setup>
import businessConsulting from '@/assets/images/business-consulting.png';
import digitalTransformation from '@/assets/images/digital-transformation.png';
import branding from '@/assets/images/branding.png';

</script>

<style scoped>

.slider_section .img-box img {
  width: 100%;
  -webkit-animation: upDown 5s infinite;
  animation: upDown 5s infinite;
  height: 400px;
}

</style>
