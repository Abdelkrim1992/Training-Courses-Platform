<script setup>

import Layouts from '../frontend/Layouts.vue';

</script>

<template>
    <Layouts>
      
      <!-- contact area start -->
      <section class="tp-contact-area tp-contact-p fix p-relative pt-150 pb-125">
         <div class="tp-contact-bg" style="background-image:url('frontend/img/live/contact-bg.png')"></div>
         <div class="tp-contact-shape">
            <span>
               <svg width="1920" height="559" viewBox="0 0 1920 559" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1958.7 6.55286C1332.03 310.106 2369.35 119.238 2232.58 220.873C2018.48 379.976 692.5 607.75 254.5 538.145C-27.1058 493.393 1387 130.595 -280 395.595" stroke="url(#paint0_linear_2756_1168)" stroke-width="14"/>
                  <defs>
                  <linearGradient id="paint0_linear_2756_1168" x1="92.1912" y1="171.542" x2="1827.4" y2="294.717" gradientUnits="userSpaceOnUse">
                  </linearGradient>
                  </defs>
               </svg>
            </span>
         </div>
         <div class="tp-contact-shape-2">
            <img src="frontend/img/live/contact-shape-2.svg" alt="">
         </div>
         <div class="container">
            <div class="row justify-content-center">
               <div class="col-lg-10">
                  <div class="tp-contact-wrap p-relative">
                     <div class="tp-contact-heading text-center">
                        <h3 class="tp-contact-title">Get in Touch</h3>
                        <p>We are here to answer any question you may have.</p>
                     </div>
                     <div class="tp-contact-from-box">
                        <h3 class="tp-contact-from-title">Send a Message 👍🏻</h3>
                        <form id="contact-form" action="https://html.hixstudio.net/acadia-prev/acadia/assets/mail.php" method="POST">
                           <div class="tp-contact-input-form">
                              <div class="row">
                                 <div class="col-xl-6 col-lg-6">
                                    <div class="tp-contact-input p-relative">
                                       <label>Your Name</label>
                                       <input type="text">
                                    </div>
                                 </div>
                                 <div class="col-xl-6 col-lg-6">
                                    <div class="tp-contact-input p-relative">
                                       <label>Email Address</label>
                                       <input type="email">
                                    </div>
                                 </div>
                                 <div class="col-xl-12 col-lg-12">
                                    <div class="tp-contact-input p-relative">
                                       <label>Subject</label>
                                       <input type="text">
                                    </div>
                                 </div>
                                 <div class="col-xl-12">
                                    <div class="tp-contact-input p-relative">
                                       <label>Your message</label>
                                       <textarea></textarea>
                                    </div>
                                 </div>
                                 <div class="col-xl-12">
                                    <div class="tp-contact-input-remeber">
                                       <input id="remeber" type="checkbox">
                                       <label for="remeber">Save my name, email, and website in this browser for the next time I comment.</label>
                                    </div>
                                 </div>
                                 <div class="tp-contact-btn">
                                    <button class="tp-btn-inner">Send message</button>
                                    <p style="display: none;" class="ajax-response text-danger mt-1 mb-0"></p>
                                 </div>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <!-- contact area end -->


      <!-- contact info area start -->
      <section class="tp-contact-info-area tp-contact-p pb-90">
         <div class="container">
            <div class="row justify-content-center">
               <div class="col-lg-10">
                  <div class="tp-contact-info-wrapper text-center">
                     <h3 class="tp-contact-main-title">Let us know how we can help</h3>
                  </div>
                  <div class="row">
                     <div class="col-lg-4 col-md-6">
                        <div class="tp-contact-info-item mb-30">
                           <div class="tp-contact-info-icon">
                              <span><svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M2.6 1H15.4C16.28 1 17 1.72 17 2.6V12.2C17 13.08 16.28 13.8 15.4 13.8H2.6C1.72 13.8 1 13.08 1 12.2V2.6C1 1.72 1.72 1 2.6 1Z" stroke="#57595F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                 <path d="M17 2.6001L9 8.2001L1 2.6001" stroke="#57595F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                 </svg></span>
                           </div>
                           <h4 class="tp-contact-info-title">Feedbacks</h4>
                           <p>Speak to our Friendly team.</p>
                           <a href="mailto:Support@gmail.com">Support@gmail.com</a>
                        </div>
                     </div>
                     <div class="col-lg-4 col-md-6">
                        <div class="tp-contact-info-item mb-30">
                           <div class="tp-contact-info-icon">
                              <span><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                 <path d="M10.291 3.86696C10.9924 4.00354 11.637 4.34592 12.1424 4.85028C12.6477 5.35463 12.9907 5.99801 13.1276 6.69808M10.291 1C11.7483 1.16158 13.1072 1.81291 14.1446 2.84704C15.182 3.88118 15.8363 5.23665 16 6.69091M15.2819 12.4105V14.5607C15.2827 14.7603 15.2417 14.9579 15.1616 15.1408C15.0815 15.3237 14.964 15.4879 14.8166 15.6228C14.6692 15.7578 14.4952 15.8605 14.3058 15.9244C14.1163 15.9884 13.9156 16.0121 13.7164 15.9942C11.5067 15.7545 9.38404 15.0009 7.5191 13.7938C5.78402 12.6934 4.31297 11.2251 3.21043 9.49336C1.99681 7.62353 1.24154 5.49467 1.00583 3.27923C0.987883 3.08103 1.01148 2.88127 1.07513 2.69267C1.13877 2.50407 1.24106 2.33076 1.37549 2.18378C1.50992 2.0368 1.67353 1.91937 1.85592 1.83896C2.03831 1.75855 2.23548 1.71693 2.43487 1.71674H4.58921C4.93771 1.71332 5.27557 1.83649 5.53981 2.06331C5.80406 2.29012 5.97665 2.6051 6.02543 2.94953C6.11636 3.63765 6.28499 4.31329 6.52811 4.96357C6.62472 5.22011 6.64564 5.49891 6.58836 5.76695C6.53109 6.03498 6.39803 6.28101 6.20496 6.47589L5.29296 7.38614C6.31523 9.18053 7.8038 10.6663 9.60163 11.6866L10.5136 10.7763C10.7089 10.5836 10.9554 10.4508 11.2239 10.3936C11.4925 10.3365 11.7718 10.3574 12.0288 10.4538C12.6804 10.6964 13.3573 10.8648 14.0467 10.9555C14.3956 11.0046 14.7142 11.18 14.9419 11.4483C15.1696 11.7165 15.2906 12.059 15.2819 12.4105Z" stroke="#57595F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                               </svg></span>
                           </div>
                           <h4 class="tp-contact-info-title">Call Us</h4>
                           <p>Mon-Fri from 8am to 5pm</p>
                           <a href="tel:555000-0000">+1(555) 000-0000</a>
                        </div>
                     </div>
                     <div class="col-lg-4 col-md-6">
                        <div class="tp-contact-info-item mb-30">
                           <div class="tp-contact-info-icon">
                              <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                 <g clip-path="url(#clip0_6207_333)">
                                   <path d="M14 6.6665C14 11.3332 8 15.3332 8 15.3332C8 15.3332 2 11.3332 2 6.6665C2 5.07521 2.63214 3.54908 3.75736 2.42386C4.88258 1.29864 6.4087 0.666504 8 0.666504C9.5913 0.666504 11.1174 1.29864 12.2426 2.42386C13.3679 3.54908 14 5.07521 14 6.6665Z" stroke="#57595F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                   <path d="M8 8.6665C9.10457 8.6665 10 7.77107 10 6.6665C10 5.56193 9.10457 4.6665 8 4.6665C6.89543 4.6665 6 5.56193 6 6.6665C6 7.77107 6.89543 8.6665 8 8.6665Z" stroke="#57595F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                 </g>
                                 <defs>
                                   <clipPath id="clip0_6207_333">
                                     <rect width="16" height="16" fill="white"/>
                                   </clipPath>
                                 </defs>
                               </svg></span>
                           </div>
                           <h4 class="tp-contact-info-title">Visit Us</h4>
                           <p>Visit our office HQ.</p>
                           <a href="#">77 Robinson Road #33-01</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <!-- contact info area end -->


      <!-- map area start -->
      <div class="tp-map-area">
         <div class="tp-contact-map-content">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3178401.37203209!2d35.68689745030553!3d38.926089619386694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1696137917870!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
         </div>
      </div>
      <!-- map area end -->
    </Layouts>
</template>
  
