<template>
  <!-- Talk area start here -->
  <section class="talk-area pt-50 pb-25 mt-5" style="background-image:url('frontend/img/shop/shop-thumb-bg.png')">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-7">
          <div class="tp-funfact-content pt-30">
            <h1 class="text-white wow fadeInUp pb-30 text-center" data-wow-delay="200ms" data-wow-duration="1000ms">
              Start the conversation to develop your business skills
            </h1>
            <h5 class="text-white wow fadeInUp text-center" data-wow-delay="400ms" data-wow-duration="1000ms">
              Schedule a free consultation with our experts. Discover opportunities and take the first step towards digital success
            </h5>
            <div class="d-flex align-items-center gap-4 mt-40 wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1000ms">
              <a href="https://wa.me/message/FBO52GTDTUCCE1" class="tp-btn-inner">Let's talk<i class="fa-regular fa-circle-arrow-right ml-10"></i></a>
            </div>
          </div>
        </div>
        <div class="col-lg-5 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1000ms">
          <div class="contact__form">
            <h3 class="text-capitalize mb-30 text-center text-white">Get a free consultation</h3>
            <div id="formMessage" style="display:none;" class="alert alert-success"></div>
            <form id="form" action="" method="POST">
              <input type="text" id="client_name" name="client_name" placeholder="Your name*" required class="text-right" />
              <div class="row g-3">
                <div class="col-6">
                  <input type="text" id="client_email" name="client_email" placeholder="Your email*" required class="text-right" />
                </div>
                <div class="col-6">
                  <input type="text" id="client_phone" name="client_phone" placeholder="Your phone*" required class="text-right" />
                </div>
              </div>
              <textarea name="message" id="message" placeholder="Message" class="form-control mb-3 text-right" required></textarea>
              <button type="submit" class="tp-btn-inner">Send <i class="fa-regular fa-circle-arrow-right ml-10"></i></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Talk area end here -->

  <!-- footer-area-start -->
  <footer>
    <div class="tp-footer-2">
      <div class="tp-footer-main pt-70 pb-55">
        <div class="container">
          <div class="row">
            <div class="col-xl-4 col-lg-4 col-md-6">
              <div class="tp-footer-widget tp-footer-2-col-1 mb-30">
                <div class="tp-footer-widget-logo mb-20 tp-header-logo">
                  <router-link to="/">
                    <img :src="setting?.setting_logo_url" alt="" />
                  </router-link>
                </div>
                <div class="tp-footer-widget-content">
                  <p>Acadia education theme, built specifically for the education centers which is teaching and involve learners.</p>
                </div>
                <div class="tp-footer-contact">
                  <div class="tp-footer-btn">
                    <router-link class="tp-btn-round" to="/contact-us">Contact Us 
                      <span>
                        <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.71533 1L13 5.28471L8.71533 9.56941" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M1 5.28467H12.88" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </span>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-5 col-lg-4 col-md-6 col-sm-6">
              <div class="tp-footer-widget tp-footer-2-col-3 mb-30">
                <h4 class="tp-footer-widget-title mb-15">Quick links</h4>
                <div class="tp-footer-widget-link">
                  <ul>
                    <li><router-link to="/about-us">About Us</router-link></li>
                    <li><router-link to="/courses">Courses</router-link></li>
                    <li><router-link to="/projects">Projects</router-link></li>
                    <li><router-link to="/contact-us">Contact</router-link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6">
              <div class="p-footer-widget tp-footer-2-col-4 mb-30">
                <h4 class="tp-footer-widget-title mb-20">Our Newsletter</h4>
                <div class="tp-footer-contact">
                  <span>Got Questions? Call us</span>
                  <a :href="`tel:${setting?.phone}`">{{ setting?.phone }}</a>
                </div>
                <div class="tp-footer-contact-mail mb-20">
                  <a :href="`mailto:${setting?.email}`">
                    <span>
                      <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5C1 2.2 2.6 1 5 1H13C15.4 1 17 2.2 17 5V10.6C17 13.4 15.4 14.6 13 14.6H5" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M13 5.40039L10.496 7.40015C9.672 8.05607 8.32 8.05607 7.496 7.40015L5 5.40039" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1 11.4004H5.8" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1 8.19922H3.4" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </span> 
                    {{ setting?.email }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tp-footer-bottom">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-3 col-md-4">
              <div class="tp-footer-bottom-social">
                <a :href="setting?.facebook" target="_blank">
                  <i class="fa-brands fa-facebook-f"></i>
                  
                </a>
                <a :href="setting?.instagram" target="_blank">
                  <i class="fa-brands fa-instagram"></i>
                  
                </a>
                <a :href="setting?.whatsapp" target="_blank">
                  <i class="fa-brands fa-whatsapp"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-6 col-md-5">
              <div class="tp-footer-copyright text-start text-md-center">
                <span>© 2024 <router-link to="/">{{ setting?.site_name }}</router-link>. All rights reserved.</span>
              </div>
            </div>
            <div class="col-lg-3 col-md-3">
              <div class="header-bottom__lang-2 text-start text-md-end">
                <ul>
                  <li>
                    <a id="header-bottom__lang-toggle" href="#">
                      <span>EN</span>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                          <path d="M1 1L5 5L9 1" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </span>
                    </a>
                    <ul class="header-bottom__lang-submenu-2">
                      <li><a href="#">Arabic</a></li>
                      <li><a href="#">Francais</a></li>
                      <li><a href="#">English</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- footer-area-end -->
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      setting: [],
    };
  },
  created() {
    this.fetchSettingDetails();
  },
  methods: {
    async fetchSettingDetails() {
      try {
        const response = await fetch(`/api/get_setting/1`);
        const result = await response.json();
        
        if (result.status === 200) {
          this.setting = result.data;
          console.log("Setting Logo URL:", this.setting.setting_logo_url);
        } else {
          console.error(result.message);
        }
      } catch (error) {
        console.error('Error fetching setting details:', error);
      }
    },
  },
}
</script>

<style scoped>
/* Add your styles here if needed */
</style>
