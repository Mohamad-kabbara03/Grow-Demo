<template>
  <div class="hero_area">
    <div class="hero_bg_box">
      <div class="bg_img_box">
        <img src="../assets/images/hero-bg.png" alt="Grow Background">
      </div>
    </div>
    <section class="slider_section">
      <div id="customCarousel1" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <div class="detail-box">
                    <h1>Empowering Businesses <br> & Organizations</h1>
                    <p>At Grow, we help NGOs, startups, and SMEs thrive by providing expert consultancy, business management, digital transformation, and branding solutions. Together, we create impact-driven and sustainable growth.</p>
                    <div class="btn-box">
                      <a href="#" class="btn1">Discover More</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="img-box">
                    <img src="../assets/images/slider-img.png" alt="Grow Consulting">
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
                    <h1>Tailored Business <br> Solutions</h1>
                    <p>From management consulting to digital branding, we offer comprehensive solutions to optimize processes, enhance market presence, and drive long-term success.</p>
                    <div class="btn-box">
                      <a href="#" class="btn1">Learn More</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="img-box">
                    <img src="../assets/images/consulting.png" alt="Business Solutions">
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
                    <h1>Transforming <br> Businesses Digitally</h1>
                    <p>We integrate sustainability and innovation in digital transformation, providing website & app development, AI-driven solutions, and strategic digital marketing.</p>
                    <div class="btn-box">
                      <a href="#" class="btn1">Get Started</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="img-box">
                    <img src="../assets/images/digital-transformation.png" alt="Digital Transformation">
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
  </div>
</template>

<script>
export default {
  name: 'HeroSection'
};
</script>

<style scoped>
/* Add scoped styles here */
</style>
