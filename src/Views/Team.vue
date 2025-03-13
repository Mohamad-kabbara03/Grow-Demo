<template>
    <div>
      <!-- Header Component -->
      <Header />
  
      <!-- Team Section -->
      <section class="team_section layout_padding">
        <div class="container-fluid">
          <div class="heading_container heading_center">
            <h2>
              Our <span>Team</span>
            </h2>
          </div>
  
          <div class="team_container">
            <div class="row">
              <div v-for="(teamMember, index) in teamMembers" :key="index" class="col-lg-3 col-sm-6">
                <div class="box">
                  <div class="img-box">
                    <img :src="teamMember.image" class="img1" alt="Team Member Image" />
                  </div>
                  <div class="detail-box">
                    <h5>{{ teamMember.name }}</h5>
                    <p>{{ teamMember.role }}</p>
                  </div>
                  <div class="social_box">
                    <a v-for="(social, socialIndex) in teamMember.socialLinks" :key="socialIndex" :href="social.url">
                      <i :class="social.icon" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Info Section Component -->
      <InfoSection />
  
      <!-- Footer Component -->
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from "@/components/Header.vue";  // Adjust path based on your project structure
  import Footer from "@/components/Footer.vue";  // Adjust path based on your project structure
  import InfoSection from "@/components/InfoSection.vue";  // Adjust path based on your project structure
  import team1 from "@/assets/images/team-1.jpg";
  import team2 from "@/assets/images/team-2.jpg";
  import team3 from "@/assets/images/team-3.jpg";
  import team4 from "@/assets/images/team-4.jpg";
  
  export default {
    name: "Team",
    components: {
      Header,
      Footer,
      InfoSection
    },
    data() {
      return {
        teamMembers: [
          {
            name: "Joseph Brown",
            role: "Marketing Head",
            image: team1,
            socialLinks: [
              { url: "#", icon: "fa fa-facebook" },
              { url: "#", icon: "fa fa-twitter" },
              { url: "#", icon: "fa fa-linkedin" },
              { url: "#", icon: "fa fa-instagram" },
              { url: "#", icon: "fa fa-youtube-play" }
            ]
          },
          {
            name: "Nancy White",
            role: "Marketing Head",
            image: team2,
            socialLinks: [
              { url: "#", icon: "fa fa-facebook" },
              { url: "#", icon: "fa fa-twitter" },
              { url: "#", icon: "fa fa-linkedin" },
              { url: "#", icon: "fa fa-instagram" },
              { url: "#", icon: "fa fa-youtube-play" }
            ]
          },
          {
            name: "Earl Martinez",
            role: "Marketing Head",
            image: team3,
            socialLinks: [
              { url: "#", icon: "fa fa-facebook" },
              { url: "#", icon: "fa fa-twitter" },
              { url: "#", icon: "fa fa-linkedin" },
              { url: "#", icon: "fa fa-instagram" },
              { url: "#", icon: "fa fa-youtube-play" }
            ]
          },
          {
            name: "Josephine Allard",
            role: "Marketing Head",
            image: team4,
            socialLinks: [
              { url: "#", icon: "fa fa-facebook" },
              { url: "#", icon: "fa fa-twitter" },
              { url: "#", icon: "fa fa-linkedin" },
              { url: "#", icon: "fa fa-instagram" },
              { url: "#", icon: "fa fa-youtube-play" }
            ]
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Add custom styles if needed */
  </style>
  