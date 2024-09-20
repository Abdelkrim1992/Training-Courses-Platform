<template>
  <div>
    <header class="header-area p-relative">
      <div id="header-sticky" class="tp-header-2">
        <div class="container custom-container-larg">
          <div class="row align-items-center">
            <div class="col-xxl-3 col-xl-3 col-lg-6 col-6">
              <div class="tp-header-2-right d-flex align-items-center">
                <div class="tp-header-inner-logo tp-header-logo">
                  <router-link to="/">
                    <img :src="setting?.setting_logo_url" alt="logo" />
                  </router-link>
                </div>
              </div>
            </div>
            <div class="col-xxl-6 col-xl-7 col-lg-6 d-none d-xl-block">
              <div class="main-menu text-xl-center d-none d-xl-block">
                <nav class="tp-main-menu-content">
                  <ul>
                    <li class="text-center">
                      <router-link to="/">Home</router-link>
                    </li>
                    <li class="text-center">
                      <router-link to="/about-us">About Us</router-link>
                    </li>
                    <li class="text-center">
                      <router-link to="/courses">Courses</router-link>
                    </li>
                    <li class="text-center">
                      <router-link to="/projects">Projects</router-link>
                    </li>
                    <li class="text-center">
                      <router-link to="/contact-us">Contact Us</router-link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="col-xxl-3 col-xl-2 col-lg-6 col-6">
              <div class="tp-header-2-contact d-flex align-items-center justify-content-end">
                <div class="tp-header-inner-btn home-2 d-none d-xxl-block">
                  <a class="tp-btn-inner" href="https://wa.me/message/FBO52GTDTUCCE1">Get Started Now</a>
                </div>
                <div class="offcanvas-btn d-xxl-none ml-30">
                  <button @click="toggleSidebar" class="offcanvas-open-btn">
                    <i class="fa fa-bars"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Sidebar -->
    <div
      :class="['sidebar', { open: sidebarOpen }]"
      style="background-color: white; right: 0; position: fixed; height: 100%; top: 0; z-index: 9999; padding: 20px; width: 300px; transition: transform 0.3s ease;"
      :style="{ transform: sidebarOpen ? 'translateX(0)' : 'translateX(100%)' }"
    >
      <button @click="toggleSidebar" class="close-btn" style="font-size: 24px; background: none; border: none;">
        <i class="fa fa-times"></i>
      </button>
      <nav class="sidebar-nav">
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/about-us">About Us</router-link>
          </li>
          <li>
            <router-link to="/courses">Courses</router-link>
          </li>
          <li>
            <router-link to="/projects">Projects</router-link>
          </li>
          <li>
            <router-link to="/contact-us">Contact Us</router-link>
          </li>
        </ul>
      </nav>
      <div class="company-info" style="margin-top: 70px;">
        <h3>About the Company</h3>
        <p>We are a leading provider of online education, offering a wide range of courses designed to help you achieve your goals.</p>
        <p>Contact us for more information on our services and how we can assist you in your learning journey.</p>
      </div>
    </div>

    <!-- Overlay -->
    <div
      v-if="sidebarOpen"
      class="sidebar-overlay"
      @click="toggleSidebar"
      style="background: rgba(0, 0, 0, 0.5); position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 9998;"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidebarOpen: false,
      setting: [],
    };
  },
  created() {
    this.fetchHeaderDetails()},

  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
    async fetchHeaderDetails() {
      try {
        const response = await fetch(`/api/get_setting/1`);
        const result = await response.json();
        
        if (result.status === 200) {
          this.setting = result.data;
          console.log("Teacher Photo URL:", this.setting.setting_logo_url);
        } else {
          console.error(result.message);
          // Handle the error accordingly
        }
      } catch (error) {
        console.error('Error fetching setting details:', error);
        // Handle the error accordingly
      }
    },
  },
};
</script>

<style scoped>
.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar ul li {
  margin: 20px 0;
}

.sidebar ul li a {
  text-decoration: none;
  color: #333;
  font-size: 18px;
}

.sidebar-nav ul li a:hover {
  color: #007bff;
}

.company-info h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

.company-info p {
  font-size: 16px;
  line-height: 1.5;
}

.close-btn {
  display: block;
  margin-left: auto;
  cursor: pointer;
}

@media (max-width: 1200px) {
  .sidebar {
    width: 100%;
  }
}
</style>
