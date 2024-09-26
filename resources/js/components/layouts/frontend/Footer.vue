<template>

  <Talk/>

   <!-- footer-area-start -->
      <footer>
         <div class="tp-footer-main tp-footer-inner pt-80 pb-55">
            <div class="container">
               <div class="row">
                  <div class="col-xl-4 col-lg-3 col-md-6 col-sm-6">
                     <div class="tp-footer-widget tp-footer-col-1 mb-30">
                        <div class="tp-footer-widget-logo mb-20 tp-header-logo">
                           <a href="/"><img :src="setting?.setting_logo_url" alt=""></a>
                        </div>
                        <div class="tp-footer-widget-content">
                           <p>Lorem ipsum dolor sit amet, consectetur <br> adipisc ing elit.</p>
                        </div>
                        <div class="tp-footer-contact">
                           <span>Got Questions? Call us</span>
                           <a href="tel:012345678">{{setting?.phone}}</a>
                        </div>
                        <div class="tp-footer-contact-mail">
                           <a href="mailto:sofial@gmail.com">
                              <span>
                                 <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 5C1 2.2 2.6 1 5 1H13C15.4 1 17 2.2 17 5V10.6C17 13.4 15.4 14.6 13 14.6H5" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M13 5.40039L10.496 7.40015C9.672 8.05607 8.32 8.05607 7.496 7.40015L5 5.40039" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M1 11.4004H5.8" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M1 8.19922H3.4" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                 </svg>
                              </span> 
                          {{setting?.email}}</a>
                        </div>
                     </div>
                  </div>
                  <div class="col-xl-4 col-lg-3 col-md-6 col-sm-6">
                     <div class="tp-footer-widget tp-footer-col-2 mb-30">
                        <h4 class="tp-footer-widget-title mb-15">About</h4>
                        <div class="tp-footer-widget-link">
                           <ul>
                              <li><router-link to="/about-us">About Us</router-link></li>
                              <li><router-link to="/courses">Courses</router-link></li>
                              <li><router-link to="/projects">Projects</router-link></li>
                              <li><router-link to="/contact-us">Contact Us</router-link></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div class="col-xl-3 col-lg-3 col-md-7 col-sm-7">
                     <div class="p-footer-widget tp-footer-5-col-4 mb-30">
                        <h4 class="tp-footer-widget-title mb-15">Our Newsletter</h4>
                        <div class="tp-footer-newsletter-wrap">
                           <p>Enter your email and we'll send you <br> more information</p>
                           <form action="#">
                              <div class="tp-footer-newsletter-wrapper tp-footer-inner-input mb-30">
                                 <div class="tp-footer-newsletter-input">
                                    <input type="email" placeholder="Your email">
                                 </div>
                                 <div class="tp-footer-5-newsletter-submit">
                                    <button class="tp-btn-inner">Subscribe</button>
                                 </div>
                              </div>
                           </form>
                           <div class="tp-footer-newsletter-social tp-footer-inner-social">
                              <a class="social-fb" href="#"><i class="fa-brands fa-facebook-f"></i></a>
                              <a class="social-twit" href="#"><i class="fa-brands fa-twitter"></i></a>
                              <a class="social-lnkd" href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                              <a class="social-yout" href="#"><i class="fa-brands fa-youtube"></i></a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="tp-footer-5-bottom tp-footer-inner-bottom">
            <div class="container">
               <div class="row">
                  <div class="col-lg-12">
                     <div class="tp-footer-copyright text-center">
                        <span>© 2024 <a href="#">{{setting?.site_name}}</a>. All rights reserved.</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   <!-- footer-area-end -->

</template>

<script>

import Talk from '../frontend/Talk.vue';

export default {
  name: 'Footer',
  components:{
    Talk,
  },
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
