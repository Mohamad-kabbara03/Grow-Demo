<template>
  <!-- Header Section -->
  <Header :showHero="false"/>
  
  <!-- Hero Section -->
  <section class="hero-section" data-aos="fade-up">
    <div class="container text-center">
      <h1>Our <span>Services</span></h1>
      <p>Discover our range of expert services tailored to elevate your business success.</p>
    </div>
  </section>

  <!-- Services Section -->
  <section class="services-section">
    <div class="container">
      <div class="service-grid">
        <div class="service-category" data-aos="fade-up" data-aos-delay="200">
          <h2>Consultancy Services</h2>
          <p>With a proven track record, we specialize in:</p>
          <ul>
            <li>Organizational Structuring & Change Management</li>
            <li>Process Mapping & Optimization</li>
            <li>Market & Gap Analysis</li>
            <li>Sustainability & Resilience Planning</li>
            <li>Standard Operating Procedures (SOPs) Development</li>
            <li>Monitoring & Evaluation (MEAL)</li>
          </ul>
          <a href="#" class="cta-button">Learn More</a>
        </div>
        
        <div class="service-category" data-aos="fade-up" data-aos-delay="300">
          <h2>Concept Creation & Branding</h2>
          <p>We craft captivating brand identities that resonate with audiences.</p>
          <ul>
            <li>Brand Strategy & Identity</li>
            <li>Logo & Visual Design</li>
            <li>Social Media Branding</li>
            <li>Rebranding Initiatives</li>
          </ul>
          <a href="#" class="cta-button">Learn More</a>
        </div>

        <div class="service-category" data-aos="fade-up" data-aos-delay="400">
          <h2>Digital Transformation</h2>
          <p>Transform your business through cutting-edge digital solutions.</p>
          <ul>
            <li>Website & App Development</li>
            <li>Process Automation</li>
            <li>Data & Analytics Solutions</li>
          </ul>
          <a href="#" class="cta-button">Learn More</a>
        </div>
      
        <div class="service-category" data-aos="fade-up" data-aos-delay="500">
          <h2>Training & Coaching</h2>
          <p>Empower your team with expert-led training programs.</p>
          <ul>
            <li>Business & Strategy Training</li>
            <li>Marketing & Sales Training</li>
            <li>Soft Skills & Leadership Development</li>
          </ul>
          <a href="#" class="cta-button">Learn More</a>
        </div>
      
        <div class="service-category" data-aos="fade-up" data-aos-delay="600">
          <h2>Digital Marketing</h2>
          <p>Boost your online presence with our marketing expertise.</p>
          <ul>
            <li>SEO & Content Marketing</li>
            <li>Social Media Management</li>
            <li>Email Marketing Campaigns</li>
            <li>Paid Ads & Promotion</li>
          </ul>
          <a href="#" class="cta-button">Learn More</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Info Section -->
  <InfoSection />
  
  <!-- Footer -->
  <Footer />
</template>

<script scoped>
import Header from '@/components/Header.vue';
import InfoSection from '@/components/InfoSection.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: "Services",
  components: {
    Header,
    Footer,
    InfoSection
  }
}
</script>

<style scoped>
.hero-section {
  background: url('../assets/images/our-services.jpg') no-repeat center center/cover;
  padding: 120px 0;
  color: #fff;
  position: relative;
  text-align: center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.5); /* Dark overlay for better text visibility */
}

.hero-section h1 {
  font-size: 56px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 15px;
}

.hero-section span {
  color: #f15229;
}

.hero-section p {
  font-size: 20px;
  margin-top: 10px;
  opacity: 0.9;
  font-weight: 500;
}

.services-section {
  padding: 80px 0;
  background: #f9f9f9;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  justify-items: center;
}

.service-category {
  background: #fff;
  padding: 35px;
  border-radius: 10px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  max-width: 400px;
  text-align: center;
}

.service-category:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}

.service-category h2 {
  font-size: 26px;
  color: #333;
  margin-bottom: 15px;
  font-weight: 600;
}

.service-category p {
  font-size: 16px;
  color: #777;
  margin-bottom: 20px;
}

.service-category ul {
  list-style: none;
  padding: 0;
  margin-bottom: 25px;
}

.service-category ul li {
  font-size: 16px;
  color: #444;
  padding-left: 20px;
  position: relative;
  margin-bottom: 10px;
}

.service-category ul li::before {
  content: '\f00c';
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  position: absolute;
  left: 0;
  color: #f15229;
}

.cta-button {
  display: inline-block;
  padding: 10px 25px;
  background-color: #f15229;
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  border-radius: 50px;
  margin-top: 15px;
  transition: background-color 0.3s ease;
  text-decoration: none;
}

.cta-button:hover {
  background-color: #e03a1e;
}
</style>
