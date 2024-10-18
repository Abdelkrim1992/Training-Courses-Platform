<script setup>

import Layouts from '../frontend/Layouts.vue';
import About from '../frontend/sections/About.vue';
import Team from '../frontend/sections/Team.vue';

</script>


<template>
    <Layouts>
      <!-- about banner area start -->
      <section class="tp-about-pt fix p-relative pt-200">
         <div class="tp-about-bg-main" >
            <img src="frontend/img/about/about/about-bg.png">
         </div>
         <div class="container">
            <div class="row align-items-center text-center">
               <div class="col-lg-12">
                  <div class="tp-about-banner mb-80">
                     <span>About our classes</span>
                     <h3 class="tp-about-banner-title">We providing the <br>
                        best quality training courses.</h3>
                  </div>
               </div>
            </div>
         </div>
<div class="container-fluid p-0">
    <div class="tp-about-banner-bg" style="background-image: url('frontend/img/about/about/about-thumb-1.jpg'); background-size: cover; background-position: center;">
        <div class="row g-0">
            <div class="col-xl-6 col-lg-12"></div>
            <div class="col-xl-6 col-lg-12">
                <div class="tp-about-banner-content p-relative" style="background: rgba(255, 255, 255, 0.8); padding: 20px;">
                    <span class="span">Our Stories</span>
                    <p>When you design products and <br> services in close partnership with <br> clients, you are creating a solution <br> that is tailored to their specific <br> needs.</p>
                    <a href="#">Meet the Team 
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M1 6H11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6 1L11 6L6 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                    </a>
                    <div class="tp-about-banner-content-year">
                        <span>2</span>
                        <p>Years of Experience</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

      </section>
      <!-- about banner area end -->

      <About/>

      <!-- our-mission-area-start -->
      <section class="tp-our-mission-area pt-120 pb-120" data-bg-color="#F3F4F8">
         <div class="container">
            <div class="row">
               <div class="col-lg-4">
                  <div class="tp-our-mission-thumb wow fadeInUp" data-wow-delay=".3s">
                     <img src="frontend/img/our-mission/thumb-1.png" alt="">
                  </div>
               </div>
               <div class="col-lg-8">
                  <div class="tp-our-mission-wrapper wow fadeInUp" data-wow-delay=".5s">
                     <div class="tp-our-mission-heading">
                        <h3 class="tp-our-mission-title">Mission and values</h3>
                        <p>We prepare you to launch your career by providing a supportive, creative, <br>
                           and professional. Our mission is to prepare students to understand, contribute <br>
                           to, and succeed in a rapidly changing society,</p>
                     </div>
                     
                     <div class="tp-our-mission-item about d-flex align-items-center justify-content-center justify-content-md-between mb-20">
                        <div class="tp-our-mission-item-content">
                           <h4 class="tp-our-mission-item-title">Creativity</h4>
                           <p>Encouraging behaviours which <br>
                              encompass notions of originality, and <br>
                              problem-solving in all that we do.</p>
                           <div class="tp-our-mission-item-btn">
                              <router-link class="tp-btn-3" to="/courses">Learn More <i>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                                    <path d="M1.5 6H11.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M6.5 1L11.5 6L6.5 11" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                 </svg>
                              </i></router-link>
                           </div>
                        </div>
                        <div class="tp-our-mission-item-thumb">
                           <div class="tp-our-mission-item-thumb-1">
                              <img src="frontend/img/our-mission/mission-item-1.jpg" alt="">
                           </div>
                        </div>
                     </div>
                     <div class="tp-our-mission-item about d-flex align-items-center justify-content-center justify-content-md-between mb-20">
                        <div class="tp-our-mission-item-content">
                           <h4 class="tp-our-mission-item-title">Education</h4>
                           <p>Encouraging behaviours which <br>
                              encompass notions of originality, and <br>
                              problem-solving in all that we do.</p>
                           <div class="tp-our-mission-item-btn">
                              <router-link class="tp-btn-3" to="/courses">Learn More <i>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                                    <path d="M1.5 6H11.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M6.5 1L11.5 6L6.5 11" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                 </svg>
                              </i></router-link>
                           </div>
                        </div>
                        <div class="tp-our-mission-item-thumb">
                           <div class="tp-our-mission-item-thumb-3">
                              <img src="frontend/img/our-mission/mission-item-2.jpg" alt="">
                           </div>
                        </div>
                     </div>
                     <div class="tp-our-mission-item about d-flex align-items-center justify-content-center justify-content-md-between">
                        <div class="tp-our-mission-item-content">
                           <h4 class="tp-our-mission-item-title">Community</h4>
                           <p>Encouraging behaviours which <br>
                              encompass notions of originality, and <br>
                              problem-solving in all that we do.</p>
                           <div class="tp-our-mission-item-btn">
                              <router-link class="tp-btn-3" to="/courses">Learn More <i>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                                    <path d="M1.5 6H11.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M6.5 1L11.5 6L6.5 11" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                 </svg>
                              </i></router-link>
                           </div>
                        </div>
                        <div class="tp-our-mission-item-thumb">
                           <div class="tp-our-mission-item-thumb-2">
                              <img src="frontend/img/our-mission/mission-item-3.jpg" alt="">
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <!-- our-mission-area-end -->


      <Team/>

    </Layouts>
</template>
