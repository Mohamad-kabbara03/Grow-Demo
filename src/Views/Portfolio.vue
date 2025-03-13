<template>
    <!-- Header Section -->
    <Header :showHero="false" />
  
    <div class="portfolio-page">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-overlay">
          <div class="hero-content">
            <h1>Our Commitment to Sustainable Development</h1>
            <p>Transforming aspirations into impactful actions for a better future.</p>
            <router-link to="#projects" class="cta-button">Explore Our Projects</router-link>
          </div>
        </div>
      </section>
  
      <!-- Introduction Section -->
      <section class="intro-section">
        <div class="container">
          <h2>Transforming Aspirations into Impactful Actions</h2>
          <p>
            At Grow, we understand the importance of a comprehensive approach to international development. We are committed
            to supporting the UN’s Sustainable Development Goals, focusing on economic growth, innovation, inclusivity,
            gender equality, and global collaboration.
          </p>
          <div class="info-icons">
            <div class="info-icon" v-for="(icon, index) in icons" :key="index">
              <img :src="icon.src" :alt="icon.alt" class="icon" />
              <p>{{ icon.label }}</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- SDG Breakdown Section -->
      <section class="sdg-section">
        <div class="container">
          <h2>Our Impact on Sustainable Development Goals</h2>
          <div class="sdg-cards">
            <div class="sdg-card" v-for="(sdg, index) in sdgs" :key="index">
              <img :src="sdg.icon" :alt="sdg.title" class="sdg-icon" />
              <h3>{{ sdg.title }}</h3>
              <p>{{ sdg.description }}</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Project Showcase -->
      <section id="projects" class="projects-section">
        <div class="container">
          <h2>Our Projects</h2>
          <div class="project-cards">
            <div class="project-card" v-for="(project, index) in projects" :key="index">
              <img :src="project.image" :alt="project.title" class="project-image" />
              <div class="project-info">
                <h3>{{ project.title }}</h3>
                <p>{{ project.description }}</p>
                <div class="sdg-icons">
                  <img v-for="(sdg, index) in project.sdgIcons" :key="index" :src="sdg" class="sdg-icon" />
                </div>
                <p><strong>Results:</strong> {{ project.results }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Impact Section -->
      <section class="impact-section">
        <div class="container">
          <h2>The Impact of Our Work</h2>
          <div class="impact-counters">
            <div class="impact-counter" v-for="(counter, index) in counters" :key="index">
              <h3>{{ counter.value }}</h3>
              <p>{{ counter.label }}</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Partnerships Section -->
      <section class="partnerships-section">
        <div class="container">
          <h2>Our Global Partnerships</h2>
          <div class="partnership-logos">
            <img v-for="(partner, index) in partners" :key="index" :src="partner.logo" :alt="partner.name" class="partner-logo" />
          </div>
        </div>
      </section>
  
      <!-- Call to Action -->
      <section class="cta-section">
        <div class="container">
          <h2>Partner with Us to Make SDG #8 a Global Reality</h2>
          <router-link to="/contact-us" class="cta-button">Get Involved</router-link>
        </div>
      </section>
  
      <!-- Info Section -->
      <InfoSection />
    </div>
  </template>
  
  <script>
  import Header from '@/components/Header.vue';
  import InfoSection from '@/components/InfoSection.vue';
  
  export default {
    data() {
      return {
        icons: [
          { src: "../assets/icons/economic-growth.png", alt: "Economic Growth", label: "Economic Growth" },
          { src: "../assets/icons/innovation.png", alt: "Innovation", label: "Innovation" },
          { src: "../assets/icons/gender-equality.png", alt: "Gender Equality", label: "Gender Equality" },
        ],
        sdgs: [
          { title: "SDG 8", description: "Economic Growth", icon: "../assets/icons/sdg8.png" },
          { title: "SDG 9", description: "Innovation", icon: "../assets/icons/sdg9.png" },
          { title: "SDG 1 & 10", description: "Poverty & Inequality", icon: "../assets/icons/sdg1.png" },
          { title: "SDG 5", description: "Gender Equality", icon: "../assets/icons/sdg5.png" },
          { title: "SDG 17", description: "Collaboration", icon: "../assets/icons/sdg17.png" },
        ],
        projects: [
          {
            title: "SME Growth Initiative",
            description: "Supporting small and medium enterprises (SMEs) with sustainable growth strategies.",
            image: "../assets/images/project1.jpg",
            sdgIcons: ["../assets/icons/sdg8.png", "../assets/icons/sdg5.png"],
            results: "Over 500 jobs created.",
          },
          {
            title: "Innovation and Technology Support",
            description: "Fostering innovation in the tech sector with targeted support for startups.",
            image: "../assets/images/project2.jpg",
            sdgIcons: ["../assets/icons/sdg9.png", "../assets/icons/sdg8.png"],
            results: "10+ successful startups launched.",
          },
        ],
        counters: [
          { value: "2,500+", label: "Jobs Created" },
          { value: "800+", label: "Women Entrepreneurs Supported" },
          { value: "50+", label: "Partnerships Built" },
        ],
        partners: [
          { name: "Partner A", logo: "../assets/images/partner-a.png" },
          { name: "Partner B", logo: "../assets/images/partner-b.png" },
        ],
      };
    },
    components: {
      Header,
      InfoSection,
    },
  };
  </script>
  
  <style scoped>
  /* General Styling */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Arial', sans-serif;
    color: #333;
    line-height: 1.6;
  }
  
  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin: 60px 0 40px;
    color: #2c3e50;
  }
  
  /* Hero Section */
  .hero-section {
    background: url("../assets/images/our-work.jpg") no-repeat center center/cover;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    position: relative;
  }
  
  .hero-overlay {
    background: rgba(0, 0, 0, 0.6);
    padding: 40px;
    border-radius: 10px;
  }
  
  .hero-content h1 {
    font-size: 3.5rem;
    margin-bottom: 20px;
  }
  
  .hero-content p {
    font-size: 1.5rem;
    margin-bottom: 30px;
  }
  
  .cta-button {
    background: #f15229;
    color: white;
    padding: 15px 30px;
    border-radius: 30px;
    text-decoration: none;
    font-size: 1.2rem;
    transition: background 0.3s ease;
  }
  
  .cta-button:hover {
    background: #e84e24;
  }
  
  /* Info Section */
  .intro-section {
    padding: 60px 0;
    background-color: #f9f9f9;
  }
  
  .info-icons {
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 40px;
  }
  
  .info-icon {
    text-align: center;
  }
  
  .icon {
    width: 60px;
    height: 60px;
    margin-bottom: 15px;
  }
  
  /* SDG Section */
  .sdg-section {
    padding: 60px 0;
  }
  
  .sdg-cards {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
  }
  
  .sdg-card {
    text-align: center;
    width: 250px;
    padding: 20px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .sdg-card:hover {
    transform: translateY(-10px);
  }
  
  .sdg-card img {
    width: 80px;
    margin-bottom: 15px;
  }
  
  .sdg-card h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #2c3e50;
  }
  
  .sdg-card p {
    font-size: 1rem;
    color: #666;
  }
  
  /* Project Showcase */
  .projects-section {
    padding: 60px 0;
    background-color: #f9f9f9;
  }
  
  .project-cards {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
  }
  
  .project-card {
    width: 45%;
    background-color: #fff;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    padding: 20px;
    border-radius: 10px;
    transition: transform 0.3s ease;
  }
  
  .project-card:hover {
    transform: translateY(-10px);
  }
  
  .project-card img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 10px;
  }
  
  .project-info h3 {
    font-size: 1.5rem;
    margin-top: 15px;
    color: #2c3e50;
  }
  
  .project-info p {
    font-size: 1rem;
    color: #666;
  }
  
  .sdg-icons {
    margin-top: 10px;
  }
  
  .sdg-icon {
    width: 20px;
    margin-right: 5px;
  }
  
  /* Impact Section */
  .impact-section {
    padding: 60px 0;
  }
  
  .impact-counters {
    display: flex;
    justify-content: center;
    gap: 50px;
  }
  
  .impact-counter {
    text-align: center;
  }
  
  .impact-counter h3 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #f15229;
  }
  
  .impact-counter p {
    font-size: 1.2rem;
    margin-top: 10px;
    color: #666;
  }
  
  /* Partnerships Section */
  .partnerships-section {
    padding: 60px 0;
    background-color: #f9f9f9;
  }
  
  .partnership-logos {
    display: flex;
    justify-content: center;
    gap: 50px;
    flex-wrap: wrap;
  }
  
  .partner-logo {
    width: 150px;
    height: auto;
  }
  
  /* CTA Section */
  .cta-section {
    background-color: #f15229;
    text-align: center;
    padding: 60px 0;
  }
  
  .cta-section h2 {
    color: white;
    margin-bottom: 30px;
  }
  
  .cta-button {
    background-color: #ffec30;
    color: #f15229;
    padding: 15px 30px;
    border-radius: 30px;
    font-size: 1.2rem;
    transition: background 0.3s ease;
  }
  
  .cta-button:hover {
    background-color: #f4f4f4;
    color: #f15229;
  }
  </style>