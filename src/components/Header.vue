<template>
  <div>
    <!-- Header Section -->
    <header :class="['header_section', { 'scrolled': isScrolled }]">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg custom_nav-container">
          <router-link class="navbar-brand" to="/">
            <span><img src="../assets/images/grow-logo.png" width="85px" height="50px"></span>
          </router-link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link class="nav-link" to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="#" @click.prevent="scrollToAbout">About</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/services">Services</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/portfolio">Portfolio</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/contact-us">Contact Us</router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>

    <!-- Conditionally Render Hero Section -->
    <section v-if="showHero" class="hero_section">
      <div class="hero_overlay">
        <div class="hero_content">
          <h1>
            <span class="grow_text">Elevate Your Business</span> with  
            <span class="highlight">Grow</span>
          </h1>
          <p>
            Unlock your business potential with expert consultancy and 
            innovative solutions designed to drive success.
          </p>
          <div class="hero_buttons">
            <router-link to="/portfolio" class="work_btn">
              See Our Work <i class="fas fa-angle-right"></i>
            </router-link>
            <router-link to="/about" class="about_btn">
              About Us <i class="fas fa-angle-right"></i>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    showHero: {
      type: Boolean,
      default: true,  // default to true so that Hero section shows by default
    }
  },
  data() {
    return {
      isScrolled: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
      const header = document.querySelector(".header_section");
      if (this.isScrolled) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    },

    scrollToAbout() {
      this.$nextTick(() => {
        const aboutSection = document.getElementById("about_section");
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          console.warn("About section not found!");
        }
      });
    }
  },
};
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');

/* Header Styles */
.header_section {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 15px 0;
  background: rgba(0, 0, 0, 0);
  transition: background 0.3s ease-in-out, padding 0.3s ease-in-out;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  font-family: var(--main-font);
  font-weight: 600;
}

.custom_nav-container .navbar-nav .nav-item .nav-link {
  font-family: var(--main-font);
  font-weight: 600;
}

.header_section.scrolled {
  background: white;
  padding: 10px 0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

/* Change navbar text color when scrolled */
.header_section.scrolled .nav-link {
  color: #f15229 !important;
  font-family: var(--main-font);
  font-weight: bolder;
}

/* Change navbar text color on hover when scrolled */
.header_section.scrolled .nav-link:hover {
  color: #f15229 !important;
}

.navbar-brand span {
  font-size: 24px;
  color: white;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.navbar-nav .nav-link {
  color: white;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 14px;
  padding: 12px 20px;
  transition: color 0.3s ease, transform 0.3s ease;
}

.navbar-nav .nav-link:hover {
  color: #f15229;
  transform: translateY(-3px);
}

/* Hero Section Styles */
.hero_section {
  background: url("../assets/images/hero-1.jpg") no-repeat center center/cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center;
  font-family: var(--main-font);
  font-weight: 600;
}

.hero_overlay {
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 10%;
  text-align: center;
}

.hero_content {
  color: #fff;
  max-width: 700px;
  animation: fadeInUp 1s ease-in-out;
  font-family: var(--main-font);
  font-weight: 600;
}
.hero_content h1 {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 15px;
  line-height: 1.2;
}

/* Highlighted 'Grow' Text */
.grow_text {
  display: block;
  font-size: 52px;
  font-family: var(--main-font);
  font-weight: 600;
  color: #ffec30;
  text-transform: uppercase;
  letter-spacing: 2px;
  animation: fadeInGrow 1.2s ease-in-out;

}

.highlight {
  background: linear-gradient(45deg, #f15229, #e6cf2a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 60px;
}

.hero_content p {
  font-size: 18px;
  margin-bottom: 20px;
  opacity: 0;
  animation: fadeIn 1.5s ease-in-out forwards;
  animation-delay: 0.5s;
  font-family: var(--main-font);
  font-weight: 400;
}

.hero_buttons {
  display: flex;
  gap: 15px;
  justify-content: center;
}

/* Buttons */
.work_btn,
.about_btn {
  display: inline-flex;
  align-items: center;
  padding: 12px 24px;
  font-weight: bold;
  border-radius: 25px;
  transition: all 0.3s ease;
  text-decoration: none;
}

.work_btn {
  background: #f15229;
  color: #fff;
}

.about_btn {
  background: #60a83d;
  color: #fff;
}

.work_btn:hover {
  background: #e6cf2a;
  transform: scale(1.05);
}

.about_btn:hover {
  background: #e6cf2a;
  transform: scale(1.05);
}

.work_btn i,
.about_btn i {
  margin-left: 10px;
  transition: transform 0.3s ease;
}

.work_btn:hover i,
.about_btn:hover i {
  transform: translateX(5px);
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInGrow {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .hero_content h1 {
    font-size: 36px;
  }
  
  .grow_text {
    font-size: 40px;
  }
  
  .highlight {
    font-size: 48px;
  }
}
</style>
