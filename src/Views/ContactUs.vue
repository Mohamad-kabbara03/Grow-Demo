import InfoSection from '@/components/InfoSection.vue';
<template>
    <Header :showHero="false" />
    <div class="contact-page">
      <!-- Hero Section -->
      <section class="contact-hero">
        <div class="hero-overlay">
          <div class="hero-content">
            <h1>Get in Touch</h1>
            <p>We'd love to hear from you! Reach out to us for inquiries, collaborations, or feedback.</p>
          </div>
        </div>
      </section>
  
      <!-- Contact Details Section -->
      <section class="contact-details">
        <div class="container">
          <div class="contact-info">
            <div class="info-card">
              <div class="icon-wrapper">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <h3>Our Office</h3>
              <p>123 Sustainability Lane, Green City, Earth</p>
            </div>
            <div class="info-card">
              <div class="icon-wrapper">
                <i class="fas fa-phone-alt"></i>
              </div>
              <h3>Call Us</h3>
              <p>+1 (123) 456-7890</p>
            </div>
            <div class="info-card">
              <div class="icon-wrapper">
                <i class="fas fa-envelope"></i>
              </div>
              <h3>Email Us</h3>
              <p>info@grow-sustainability.com</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Contact Form and Map Section -->
      <section class="contact-form-map">
        <div class="container">
          <div class="form-container">
            <h2>Send Us a Message</h2>
            <form @submit.prevent="submitForm">
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" v-model="form.name" placeholder="Enter your name" required />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="form.email" placeholder="Enter your email" required />
              </div>
              <div class="form-group">
                <label for="subject">Subject</label>
                <input type="text" id="subject" v-model="form.subject" placeholder="Enter the subject" required />
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" v-model="form.message" placeholder="Enter your message" rows="5" required></textarea>
              </div>
              <button type="submit" class="submit-button">Send Message</button>
            </form>
          </div>
          <div class="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d144.95373531531664!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d6a32f9e6a3!2sSustainability%20Lane!5e0!3m2!1sen!2sus!4v1622549401417!5m2!1sen!2sus"
              width="100%"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
    <InfoSection />
  </template>
  
  <script scoped>
  import Header from '@/components/Header.vue';
  import InfoSection from"@/components/InfoSection.vue"

  export default {
    data() {
      return {
        form: {
          name: "",
          email: "",
          subject: "",
          message: "",
        },
      };
    },
    methods: {
      submitForm() {
        // Handle form submission logic here
        console.log("Form submitted:", this.form);
        alert("Thank you for contacting us! We'll get back to you soon.");
        this.form = { name: "", email: "", subject: "", message: "" }; // Reset form
      },
    },
    components: {
    Header,
    InfoSection
    }
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
  
  h1,
  h2,
  h3 {
    color: #2c3e50;
  }
  
  /* Hero Section */
  .contact-hero {
    background: url("../assets/images/contact-us.jpg") no-repeat center center/cover;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    position: relative;
  }
  
  .hero-overlay {
    background: rgba(0, 0, 0, 0.6);
    padding: 20px;
    border-radius: 10px;
  }
  
  .hero-content h1 {
    font-size: 3.5rem;
    margin-bottom: 15px;
  }
  
  .hero-content p {
    font-size: 1.5rem;
  }
  
  /* Contact Details Section */
  .contact-details {
    padding: 60px 0;
    background-color: #f9f9f9;
  }
  
  .contact-info {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    flex-wrap: wrap;
  }
  
  .info-card {
    text-align: center;
    background: #fff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    flex: 1 1 300px;
    transition: transform 0.3s ease;
  }
  
  .info-card:hover {
    transform: translateY(-10px);
  }
  
  .icon-wrapper {
    font-size: 2rem;
    color: #f15229;
    margin-bottom: 15px;
  }
  
  .info-card h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  
  .info-card p {
    font-size: 1rem;
    color: #666;
  }
  
  /* Contact Form and Map Section */
  .contact-form-map {
    padding: 60px 0;
  }
  
  .form-container {
    background: #fff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
  }
  
  .form-container h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .form-group label {
    display: block;
    font-size: 1rem;
    margin-bottom: 5px;
    color: #2c3e50;
  }
  
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
  }
  
  .form-group textarea {
    resize: vertical;
  }
  
  .submit-button {
    background: #f15229;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  
  .submit-button:hover {
    background: #e84e24;
  }
  
  .map-container {
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
  </style>