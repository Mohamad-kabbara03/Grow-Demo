<template>
  <Header />
  <!-- About Section -->
  <section class="about_section layout_padding" id="about_section">
    <div class="container" data-aos="fade-up">
      <div class="heading_container heading_center about-heading">
        <h2>About <span>Us</span></h2>
        <p>
          Grow is a women-led business dedicated to empowering NGOs, associations, startups, and SMEs in Lebanon, built
          upon extensive national and international experience.
        </p>
      </div>
      <div class="about_content">
        <!-- Image on the Left -->
        <div class="img-box">
          <img src="@/assets/images/about-us-1.jpg" alt="About Grow" />
        </div>

        <!-- Text on the Right -->
        <div class="detail-box">
          <h3>We Are Grow</h3>
          <ul class="about-points">
            <li>
              <i class="fas fa-check-circle"></i>
              <span>Multi-disciplined enterprise offering business consultancy services.</span>
            </li>
            <li>
              <i class="fas fa-check-circle"></i>
              <span>Specializing in management consulting, organizational development, and training.</span>
            </li>
            <li>
              <i class="fas fa-check-circle"></i>
              <span>Committed to sustainability and circular economy practices.</span>
            </li>
            <li>
              <i class="fas fa-check-circle"></i>
              <span>Leveraging cutting-edge technologies like AI for impactful solutions.</span>
            </li>
            <li>
              <i class="fas fa-check-circle"></i>
              <span>Empowering women, youth, and marginalized groups through education and training.</span>
            </li>
          </ul>
          <a href="#" @click.prevent="toggleReadMore">Read More</a>
        </div>
      </div>
    </div>

    <!-- Overlay Effect -->
    <div v-if="showReadMore" class="overlay" @click="toggleReadMore"></div>

    <!-- Animated Card -->
    <transition name="fade-scale">
      <div v-if="showReadMore" class="additional-info-card">
        <button class="close-btn" @click.prevent="toggleReadMore">&times;</button>
        <div class="card-header">
          <img src="../assets/images/grow-logo.png" alt="Grow Logo" class="company-logo" width="150px" height="120px" />
        </div>
        <div class="card-body">
          <h4>More About Us</h4>
          <p>
            Grow is a women-led business dedicated to empowering NGOs, associations, startups, and SMEs in Lebanon, built upon extensive national and international experience.
          </p>
          <p>
            We specialize in management consulting, organizational development, training, digital transformation, and branding. Our team comprises highly skilled professionals committed to sustainability and innovation.
          </p>
          <p>
            Grow has worked with top-tier agencies, international NGOs, and private sector organizations to deliver impactful solutions.
          </p>

          <!-- Location Section -->
          <div class="location-box">
            <img src="../assets/images/lebanon.png"  class="country-flag" width="100px" height="100px"/>
            <span>Based in Lebanon</span>
          </div>
        </div>
      </div>
    </transition>
  </section>
  <!-- Service Section -->
  <section class="service_section layout_padding">
  <div class="container">
    <div class="heading_container heading_center" data-aos="fade-up">
      <h2>Our <span>Services</span></h2>
      <p>Empowering NGOs, associations, startups, and SMEs in Lebanon with tailored business consultancy services.</p>
    </div>

    <div class="service_grid">
      <div class="service_item" data-aos="fade-up" data-aos-delay="200">
        <div class="service_text">
          <h3>Consultancy Services</h3>
          <p>We specialize in organizational structuring, process optimization, market analysis, sustainability planning, and more.</p>
          <a href="/services/consultancy" class="service_btn">Explore More <i class="fas fa-angle-right"></i></a>
        </div>
        <div class="service_img">
          <img src="@/assets/images/consultancy.jpg" alt="Consultancy Services">
        </div>
      </div>

      <div class="service_item reverse" data-aos="fade-up" data-aos-delay="300">
        <div class="service_img">
          <img src="@/assets/images/training.webp" alt="Branding Services">
        </div>
        <div class="service_text">
          <h3>Concepts Creation & Branding</h3>
          <p>Craft compelling brand narratives through concept creation, branding, social media management, and graphic design.</p>
          <a href="/services/branding" class="service_btn">Explore More <i class="fas fa-angle-right"></i></a>
        </div>
      </div>

      <div class="service_item" data-aos="fade-up" data-aos-delay="400">
        <div class="service_text">
          <h3>Digital Transformation</h3>
          <p>Drive digital transformation with website and application development, emphasizing circular economy principles.</p>
          <a href="/services/digital-transformation" class="service_btn">Explore More <i class="fas fa-angle-right"></i></a>
        </div>
        <div class="service_img">
          <img src="@/assets/images/digital-transformation.png" alt="Digital Transformation">
        </div>
      </div>
    </div>
  </div>
</section>





  <!-- why section -->
  <!-- Why Choose Us Section -->
  <section class="why_us_section">
    <div class="why_us_container" data-aos="fade-up">
      <div class="why_us_heading">
        <h2>Why Choose <span>Us</span></h2>
        <p>We are committed to driving socio-economic development and empowering communities through innovative
          solutions and sustainable practices.</p>
      </div>

      <div class="why_us_cards">
        <!-- Card 1: Expert Management -->
        <div class="why_us_card" data-aos="fade-up" data-aos-delay="100">
          <div class="why_us_icon">
            <i class="fas fa-users"></i>
          </div>
          <div class="why_us_text">
            <h5>Expert Management</h5>
            <p>Our team of accomplished professionals brings over a decade of expertise across various sectors, ensuring
              top-notch management and consultancy services.</p>
          </div>
        </div>

        <!-- Card 2: Sustainable Practices -->
        <div class="why_us_card" data-aos="fade-up" data-aos-delay="200">
          <div class="why_us_icon">
            <i class="fas fa-leaf"></i>
          </div>
          <div class="why_us_text">
            <h5>Sustainable Practices</h5>
            <p>We integrate sustainability principles, circular economy practices, and the 6R concept into every
              project, ensuring environmental protection.</p>
          </div>
        </div>

        <!-- Card 3: Cutting-Edge Technology -->
        <div class="why_us_card" data-aos="fade-up" data-aos-delay="300">
          <div class="why_us_icon">
            <i class="fas fa-microchip"></i>
          </div>
          <div class="why_us_text">
            <h5>Cutting-Edge Technology</h5>
            <p>We leverage cutting-edge technologies like artificial intelligence to drive digital transformation and
              innovation in our projects.</p>
          </div>
        </div>

        <!-- Card 4: Empowering Communities -->
        <div class="why_us_card" data-aos="fade-up" data-aos-delay="400">
          <div class="why_us_icon">
            <i class="fas fa-hand-holding-heart"></i>
          </div>
          <div class="why_us_text">
            <h5>Empowering Communities</h5>
            <p>We prioritize women, youth, and marginalized groups, empowering them through education, training, and
              active participation in their communities.</p>
          </div>
        </div>

        <!-- Card 5: Socio-Economic Development -->
        <div class="why_us_card" data-aos="fade-up" data-aos-delay="500">
          <div class="why_us_icon">
            <i class="fas fa-globe"></i>
          </div>
          <div class="why_us_text">
            <h5>Socio-Economic Development</h5>
            <p>We design and implement large-scale projects aligned with SDGs, fostering economic growth, innovation,
              and gender equality.</p>
          </div>
        </div>

        <!-- Card 6: Partnerships for Success -->
        <div class="why_us_card" data-aos="fade-up" data-aos-delay="600">
          <div class="why_us_icon">
            <i class="fas fa-handshake"></i>
          </div>
          <div class="why_us_text">
            <h5>Partnerships for Success</h5>
            <p>We build robust partnerships with civil society organizations to drive inclusive development and societal
              progress.</p>
          </div>
        </div>
      </div>

      <!-- Button -->
      <div class="why_us_btn" data-aos="fade-up" data-aos-delay="700">
        <a href="#" class="why_us_button">See Our Work <i class="fas fa-arrow-right"></i></a>
      </div>
    </div>
  </section>
  <!-- End Why Choose Us Section -->
  <InfoSection />
  <!-- <Footer /> -->
</template>

<script>
import { watch, ref } from 'vue';
import { useRouter } from 'vue-router';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS styles

import Header from '@/components/Header.vue';
import InfoSection from '@/components/InfoSection.vue';
import Footer from '@/components/Footer.vue';

import clientImage1 from '@/assets/images/client1.jpg';
import clientImage2 from '@/assets/images/client2.jpg';

export default {
  name: "Home",
  components: {
    Header,
    InfoSection,
    Footer,
  },
  data() {
    return {
      reviews: [
        {
          name: "John Doe",
          subtitle: "CEO, NGO Lebanon",
          text: "Grow has been instrumental in helping us streamline our operations and achieve our sustainability goals. Their expertise is unmatched.",
          image: clientImage1,
        },
        {
          name: "Jane Smith",
          subtitle: "Founder, Startup XYZ",
          text: "The digital transformation services provided by Grow have revolutionized our business. We are now more efficient and customer-focused.",
          image: clientImage2,
        },
        {
          name: "Emily Johnson",
          subtitle: "Director, Association ABC",
          text: "Grow's training programs have empowered our team with the skills needed to thrive in today's competitive landscape.",
          image: clientImage1,
        },
        {
          name: "Michael Brown",
          subtitle: "Manager, SME Lebanon",
          text: "The branding and consultancy services from Grow have helped us establish a strong market presence and grow our business exponentially.",
          image: clientImage2,
        },
      ],
    };
  },
  methods: {
  },
  setup() {
    const router = useRouter();

    const toggleReadMore = () => {
      showReadMore.value = !showReadMore.value;
      console.log("Read More Clicked: ", showReadMore.value); // Debugging log
    };

    watch(
      () => router.currentRoute,
      () => {
        AOS.refresh();
      }
    );

    return{
      showReadMore,
      toggleReadMore
    }
  },
};

const showReadMore = ref(false);

const toggleReadMore = () => {
  showReadMore.value = !showReadMore.value;
  console.log("Read More Clicked: ", showReadMore.value); // Debugging log
};
</script>


<style scoped>
/*
@font-face {
  font-family: 'Alvar Essential';
  src: url('@/assets/fonts/Alvar-Essential-Bold.otf') format('otf'),
    url('@/assets/fonts/alvar-essential-medium-bold.woff') format('woff');
  font-weight: 700;
}
 */

/* About Section */
.about_section {
  padding: 80px 0;
  background: linear-gradient(135deg, #f9f9f9, #e6f4ff);
}

.heading_container {
  text-align: center;
  margin-bottom: 60px;
}

.heading_container h2 {
  font-size: 36px;
  font-weight: 700;
  color: #333;
}

.heading_container h2 span {
  color: #f15229;
}

.heading_container p {
  font-size: 18px;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
}

/* Flexbox Layout for Image and Text */
.about_content {
  display: flex;
  align-items: center;
  gap: 40px;
}

.img-box {
  flex: 1;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.img-box img {
  width: 100%;
  height: auto;
  display: block;
}

.detail-box {
  flex: 1;
  padding: 20px;
}

.detail-box h3 {
  font-size: 28px;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
}

.about-points {
  list-style: none;
  padding: 0;
  margin: 0;
}

.about-points li {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
  font-size: 16px;
  color: #666;
}

.about-points li i {
  color: #f15229;
  font-size: 20px;
}

.detail-box a {
  display: inline-block;
  margin-top: 20px;
  color: white;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.3s ease-in-out;
}

.detail-box a:hover {
  background: #e6cf2a;
  transform: scale(1.05);
}

/* Additional Information Card */
/* Expanded Information Card */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10;
  backdrop-filter: blur(5px);
}

/* Animated Card */
.additional-info-card {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 500px;
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  z-index: 20;
  text-align: center;
  animation: fadeInScale 0.3s ease-out;
}

/* Close Button */
.close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

/* Location Box */
.location-box {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
}

.location-box img {
  width:50px;
  height: 50px;
  margin-right: 8px;
}

/* Transition Animation */
.fade-scale-enter-active, .fade-scale-leave-active {
  transition: all 0.3s ease-out;
}

.fade-scale-enter-from, .fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

/* Keyframes for smooth entry */
@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.detail-box a {
  color: #333;
  border-radius: 30px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .about_content {
    flex-direction: column;
  }

  .img-box {
    margin-bottom: 30px;
  }

  .heading_container h2 {
    font-size: 28px;
  }

  .detail-box h3 {
    font-size: 24px;
  }

  .about-points li {
    font-size: 14px;
  }
}

.hero-img {
  width: 100%;

}


.carousel-navigation {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.carousel-btn {
  background: #ff5e14;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 50%;
}

.carousel-btn:hover {
  background: #e64a19;
}

.client_owl-carousel .owl-item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.additional-info-card {
  margin-top: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.additional-info-card h4 {
  margin-bottom: 15px;
  font-size: 1.5em;
  color: #333;
}

.additional-info-card p {
  margin-bottom: 10px;
  font-size: 1em;
  color: #555;
}

.additional-info-card a {
  display: inline-block;
  margin-top: 10px;
  color: #ff5e14;
  text-decoration: none;
  font-weight: bold;
}

.additional-info-card a:hover {
  text-decoration: underline;
}

.bg_img_box img {
  object-fit: contain;
}

.service_section {
    background: linear-gradient(135deg, #f6f6f6 0%, #ffffff 100%);
    padding: 80px 0;
  }
  .heading_container h2 {
    font-size: 36px;
    color: #222;
    position: relative;
    display: inline-block;
    padding-bottom: 10px;
  }
  .heading_container h2 span {
    color: #f15229;
  }
  .heading_container h2::after {
    content: '';
    position: absolute;
    width: 60px;
    height: 4px;
    background: #f15229;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;
  }
  .service_grid {
    display: flex;
    flex-direction: column;
    gap: 60px;
  }
  .service_item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
    padding: 30px;
    background: #fff;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
  }
  .service_item:hover {
    transform: translateY(-5px);
  }
  .service_item.reverse {
    flex-direction: row-reverse;
  }
  .service_text {
    flex: 1;
    max-width: 500px;
  }
  .service_text h3 {
    font-size: 26px;
    font-weight: 700;
    color: #222;
    margin-bottom: 15px;
  }
  .service_text p {
    font-size: 17px;
    color: #555;
    line-height: 1.7;
    margin-bottom: 20px;
  }
  .service_btn {
    display: inline-flex;
    align-items: center;
    padding: 12px 25px;
    background: #f15229;
    color: #fff;
    border-radius: 25px;
    text-decoration: none;
    font-weight: 600;
    transition: background 0.3s ease;
  }
  .service_btn:hover {
    background: #e6cf2a;
  }
  .service_btn i {
    margin-left: 8px;
    transition: transform 0.3s ease;
  }
  .service_btn:hover i {
    transform: translateX(5px);
  }
  .service_img {
    flex: 1;
    position: relative;
  }
  .service_img img {
    width: 100%;
    
    height: 300px;
    border-radius: 20px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .service_img img:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }

@media (max-width: 992px) {
  .service_item {
    flex-direction: column !important;
    text-align: center;
  }
  .service_img img {
    max-width: 100%;
  }
}
/* Why Choose Us Section */
/* Why Choose Us Section */
.why_us_section {
  padding: 80px 0;
  background: linear-gradient(135deg, #f0f4ff, #e0e8ff);
  position: relative;
  overflow: hidden;
}

.why_us_container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.why_us_heading {
  text-align: center;
  margin-bottom: 60px;
}

.why_us_heading h2 {
  font-size: 36px;
  font-weight: 700;
  color: #333;
  position: relative;
  display: inline-block;
}

.why_us_heading h2 span {
  color: #f15229;
}

.why_us_heading p {
  font-size: 18px;
  color: #666;
  max-width: 800px;
  margin: 20px auto 0;
}

/* Cards Container */
.why_us_cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 40px;
}

/* Card Styling */
.why_us_card {
  background: #fff;
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.why_us_card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

/* Icon Styling */
.why_us_icon {
  font-size: 50px;
  color: #f15229;
  margin-bottom: 20px;
  transition: transform 0.3s ease;
}

.why_us_card:hover .why_us_icon {
  transform: rotate(15deg) scale(1.1);
}

/* Text Styling */
.why_us_text h5 {
  font-size: 22px;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
}

.why_us_text p {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
}

/* Button Styling */
.why_us_btn {
  text-align: center;
  margin-top: 40px;
}

.why_us_button {
  display: inline-flex;
  align-items: center;
  padding: 12px 24px;
  background: #f15229;
  color: #fff;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.3s ease;
}

.why_us_button:hover {
  background: #d63e1e;
}

.why_us_button i {
  margin-left: 8px;
  transition: transform 0.3s ease;
}

.why_us_button:hover i {
  transform: translateX(5px);
}

/* Responsive Design */
@media (max-width: 992px) {
  .why_us_cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .why_us_cards {
    grid-template-columns: 1fr;
  }

  .why_us_heading h2 {
    font-size: 28px;
  }

  .why_us_heading p {
    font-size: 16px;
  }

  .why_us_text h5 {
    font-size: 20px;
  }

  .why_us_text p {
    font-size: 14px;
  }
}
</style>
