<script setup>

    import Layouts from '../frontend/Layouts.vue';
    
</script>

<script>
export default {
  data() {
    return {
      CoursesList: [], 
      ServicesList: [],         // Stores courses data
      ReviewsList: [],          // Stores reviews data
      TeamMembersList: [],      // Team members array
      currentMemberIndex: 0,    // Track the current index of the first displayed team member
      membersPerSlide: 4,       // Default: Number of members to display per slide (for desktop)
      currentReviewIndex: 0,    // Track the current testimonial index
      slideInterval: null,      // Store the interval for automatic sliding

      partnersList: [
        { name: "Company A", logo_url: "frontend/img/brand/brand-2-logo-1.png" },
        { name: "Company B", logo_url: "frontend/img/brand/brand-2-logo-1.png" },
        { name: "Company C", logo_url: "frontend/img/brand/brand-2-logo-1.png" },
        { name: "Company D", logo_url: "frontend/img/brand/brand-2-logo-1.png" },
        { name: "Company E", logo_url: "frontend/img/brand/brand-2-logo-1.png" },
      ],
      currentSlideIndex: 0, // Track the index of the current visible logos
      logosPerSlide: 4, // Default: number of logos to display per slide
      slideWidth: 150, // Width of each partner logo (adjust according to your needs)
      autoScrollInterval: null,
    };
  },

  sliderStyle() {
      const totalWidth = this.partnersList.length * this.slideWidth;
      const offset = -this.currentSlideIndex * this.slideWidth;
      return {
        width: `${totalWidth}px`,
        transform: `translateX(${offset}px)`,
        transition: 'transform 0.5s ease-in-out',
      };
    },

  mounted() {
    // Fetch data when the component is mounted
    this.getTeamMembers();
    this.getReviews();
    this.getCourses();
    this.getServices();

    // Set initial number of members per slide based on screen size
    this.updateMembersPerSlide();

    // Set up window resize listener to adjust members per slide
    window.addEventListener('resize', this.updateMembersPerSlide);

    // Start automatic sliding
    this.startAutoSlide();

        this.updateLogosPerSlide();
        window.addEventListener('resize', this.updateLogosPerSlide);
        this.startAutoScroll();
  },
  beforeDestroy() {
    // Clean up resize event listener and stop sliding
    window.removeEventListener('resize', this.updateMembersPerSlide);
    clearInterval(this.slideInterval);
    
    clearInterval(this.autoScrollInterval);
    window.removeEventListener('resize', this.updateLogosPerSlide);
  },
  methods: {
    getCourses() {
      axios.get('/api/get_courses')
        .then((response) => {
          if (response.data.status === 200) {
            this.CoursesList = response.data.data;
          }
        })
        .catch((error) => {
          console.error('Error fetching courses:', error);
        });
    },
    getServices(){
      axios.get('/api/get_services')
      .then((response) => {
        if(response.data.status === 200){
          this.ServicesList = response.data.data;
        }
      })
      .catch((error)=>{
        console.error('error fetshing services, error');
      });
    },
    getReviews() {
      axios.get('/api/get_reviews')
        .then((response) => {
          if (response.data.status === 200) {
            this.ReviewsList = response.data.data;
          }
        })
        .catch((error) => {
          console.error('Error fetching reviews:', error);
        });
    },

    async getTeamMembers() {
      try {
        const response = await axios.get('/api/get_team_member');
        if (response.data.status === 200) {
          this.TeamMembersList = response.data.data;
        } else {
          console.error('Error fetching team members:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching team members:', error);
      }
    },
    nextMember() {
      if (this.currentMemberIndex + this.membersPerSlide < this.TeamMembersList.length) {
        this.currentMemberIndex++;
      } else {
        this.currentMemberIndex = 0; // Loop back to the first slide
      }
    },
    prevMember() {
      if (this.currentMemberIndex > 0) {
        this.currentMemberIndex--;
      } else {
        this.currentMemberIndex = this.TeamMembersList.length - this.membersPerSlide; // Loop to the last set of members
      }
    },
    getVisibleTeamMembers() {
      return this.TeamMembersList.slice(this.currentMemberIndex, this.currentMemberIndex + this.membersPerSlide);
    },
    updateMembersPerSlide() {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        // Mobile view: show 1 member per slide
        this.membersPerSlide = 1;
      } else {
        // Desktop view: show 4 members per slide
        this.membersPerSlide = 4;
      }
    },
    startAutoSlide() {
      // Automatically move to the next slide every 5 seconds
      this.slideInterval = setInterval(() => {
        this.nextMember();
      }, 5000);
    },
    stopAutoSlide() {
      clearInterval(this.slideInterval);
    },

    updateLogosPerSlide() {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        this.logosPerSlide = 1; // Show 1 logo on mobile
      } else {
        this.logosPerSlide = 4; // Show 4 logos on desktop
      }
    },
    startAutoScroll() {
      this.autoScrollInterval = setInterval(() => {
        this.nextSlide();
      }, 3000); // Change slide every 3 seconds
    },
    nextSlide() {
      if (this.currentSlideIndex + this.logosPerSlide < this.partnersList.length) {
        this.currentSlideIndex++;
      } else {
        this.currentSlideIndex = 0; // Reset to the beginning when the end is reached
      }
    },
  },
};
</script>





<template >
   <Layouts>
   <!-- hero-area-start -->
   <div class="tp-hero-area lightblue-bg tp-hero-2-bg">
      <div class="container custom-container">
         <div class="tp-hero-2-wrap">
            <div class="row align-items-end">
               <div class="col-xxl-5 col-xl-6 col-lg-7 col-md-12">
                  <div class="tp-hero-2-content">
                     <span class="tp-hero-2-subtitle wow fadeInUp" data-wow-delay=".3s">Keep Learning</span>
                     <h2 class="tp-hero-2-title wow fadeInUp" data-wow-delay=".5s">Best  
                         <span>Offline <img class="wow bounceIn" data-wow-duration="1.5s" data-wow-delay=".4s" src="frontend/img/unlerline/hero-2-svg-1.svg" alt=""></span> 
                   Training Courses</h2>
                     <p class=" wow fadeInUp" data-wow-delay=".7s">Acquire global knowledge and build your <br> professional skills</p>
                     <div class="tp-hero-2-btn wow fadeInUp" data-wow-delay=".9s">
                        <a class="tp-btn-border" href="https://wa.me/message/FBO52GTDTUCCE1">Get Started With Us 
                           <span>
                              <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M8.71533 1L13 5.28471L8.71533 9.56941" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                 <path d="M1 5.28473H12.88" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>
                           </span>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            <div class="tp-hero-2-thumb">
               <img src="frontend/img/hero/hero-2-thumb-1.png" alt="">
            </div>
         </div>
      </div>
      <div class="tp-hero-2-shape">
         <div class="tp-hero-2-shape-1">
            <span>
               <svg xmlns="http://www.w3.org/2000/svg" width="846" height="579" viewBox="0 0 846 579" fill="none">
                  <path class="line-2" d="M212.745 593.864C358.949 649.758 822.546 792.326 466.431 560.525C110.316 328.724 477.436 405.184 743.017 461.029C1008.6 516.874 193.087 -40.2421 69.0387 93.5502C-55.0097 227.343 493.91 431.765 484.946 51.9085" stroke="url(#paint0_linear_311_1041)" stroke-width="100" stroke-linecap="square"/>
                  <defs>
                    <linearGradient id="paint0_linear_311_1041" x1="769.255" y1="703.159" x2="-110.567" y2="48.8101" gradientUnits="userSpaceOnUse">
                    </linearGradient>
                  </defs>
                </svg>
            </span>
         </div>
         <div class="tp-hero-2-shape-2">
            <img src="frontend/img/hero/hero-2-shape-2.png" alt="">
         </div>
         <div class="tp-hero-2-shape-3">
            <img src="frontend/img/hero/hero-2-shape-3.png" alt="">
         </div>
         <div class="tp-hero-2-shape-4">
            <img src="frontend/img/hero/hero-2-shape-4.png" alt="">
         </div>
      </div>
   </div>
<!-- hero-area-end -->

<!-- testimonial-area-start -->
<section class="testimonial-area pb-50 text-center">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-xxl-6 col-lg-8">
        <div class="tp-testimonial-section">
          <div class="tp-section text-center mt-50">
            <h3 class="tp-section-3-title">
              Our Partners
            </h3>
          </div>
        </div>
      </div>
    </div>

    <div class="partners-slider-wrapper mt-70">
        <!-- Display partner logos -->
        <div class="partners-slider" :style="sliderStyle">
          <div
            v-for="(partner, index) in partnersList"
            :key="index"
            class="partner-logo"
          >
            <img :src="partner.logo_url" :alt="partner.name" />
          </div>
        </div>
      </div>

  </div>
</section>
<!-- testimonial-area-end -->

      <!-- tutor area start -->
      <section class="tp-about-tutor-area pt-50 ">
         <div class="container">
            <div class="row align-items-end justify-content-center ">
                <h3 class="tp-section-3-title text-center">About 
              <span>Skills Studies
                <img 
                  class="tp-underline-shape-9 wow bounceIn" 
                  data-wow-duration="1.5s" 
                  data-wow-delay=".4s" 
                  src="frontend/img/unlerline/team-2-svg-1.svg" 
                  alt="" 
                  style="visibility: visible; animation-duration: 1.5s; animation-delay: 0.4s; animation-name: bounceIn;"
                />
              </span> 
                </h3>
               <div class="col-lg-6 mt-50">
                  <div class="tp-about-tutor-heading mb-70">
                    <div class="tp-about-tutor-title">
                        <img src="frontend/img/about/main-image.png.webp" width="100%" max-width="100%" >
                    </div>
                  </div>
               </div>
               <div class="col-lg-6">
                  <div class="tp-about-tutor-right d-flex justify-content-lg-end mb-200">
                     <div class="tp-about-tutor-content text-center">
                    <h3 class="tp-about-tutor-title ">We create unique <br>
                     digital media experiences.
                    </h3>
                    <p class="mt-30">Online courses from the world's leading experts. <br>
                           Lorem ipsum is simply dummy of the printing and <br>
                           typesetting industry lorem
                    </p>
                     </div>
                  </div>
               </div>
            </div>
            <div class="row mt-30">
               <div class="col-lg-4 col-md-6 wow fadeInUp mt-15" data-wow-delay=".3s">
                  <div class="tp-tutor-item about text-center mb-30">
                     <div class="tp-tutor-icon">
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="42" height="30" viewBox="0 0 42 30" fill="none">
                           <path d="M40.4192 10.2148C41.0286 10.0341 41.1715 9.69793 41.1841 9.44579C41.1967 9.20197 41.0958 8.8616 40.5285 8.60946L23.9112 1.2085C22.8773 0.746307 21.8225 0.162038 20.6373 0.0318053C19.3346 -0.111111 18.0821 0.250341 16.9222 0.662205C11.0847 2.21724 7.66372 3.90242 2.00272 5.97435C0.56532 6.49972 -0.153302 7.33597 0.0274239 8.26481C0.182943 9.06753 0.956179 9.4836 1.60766 9.75675C4.28478 10.8788 7.10473 11.7194 9.80698 12.602C8.04189 15.0731 7.09205 17.8174 6.85251 21.2006C6.83991 21.3898 6.95334 21.5621 7.12986 21.6251L19.7631 26.1471H19.7715C19.8135 26.1639 19.8598 26.1723 19.9059 26.1723C19.9522 26.1723 19.9983 26.1639 20.0404 26.1471H20.0488L32.682 21.6251C32.8626 21.5621 32.9762 21.3898 32.9594 21.2006C32.7324 18.0234 32.2491 15.7456 30.4252 13.1862L37.1241 11.1941C37.0779 14.0982 37.0485 13.9259 36.9981 16.9686C35.9978 17.0905 35.1742 17.6327 34.7539 18.4689C34.5522 18.864 34.4556 19.3136 34.4556 19.7634C34.4556 20.3433 34.6152 20.9317 34.9347 21.4361C35.2372 21.9151 35.6786 22.3018 36.1786 22.5665C35.4684 24.6427 35.0818 26.5339 34.3674 28.5385C34.1446 29.1521 34.4136 29.5976 35.1197 29.6522L39.6417 29.9967C40.3561 30.0514 40.9403 29.4084 40.8016 28.694C40.3352 26.2775 39.8266 24.3526 39.1668 22.5077C39.4736 22.3311 39.7509 22.1042 39.9736 21.8268C40.7134 20.9275 40.8521 19.5826 40.3099 18.5487C39.8559 17.6788 38.9188 17.0736 37.8387 16.9601C37.8933 13.8039 37.9186 14.0519 37.9689 10.9419L40.4192 10.2148ZM24.4029 11.7908C24.5079 11.753 24.6298 11.8076 24.6676 11.9168C24.7096 12.0303 24.6508 12.1479 24.5415 12.1858L21.2845 13.3373C21.1752 13.3751 21.0575 13.3163 21.0155 13.207C20.9776 13.0977 21.0365 12.9801 21.1458 12.9381L24.4029 11.7908ZM19.2462 7.67222C19.9985 7.28136 20.9273 7.57971 21.5703 8.11349C22.1334 8.58417 22.0746 9.21457 21.4484 9.51712C20.944 9.76095 19.8388 9.76095 19.2462 9.45831C18.3721 9.00864 18.4898 8.06728 19.2462 7.67222ZM5.45736 8.60097C4.46131 8.23112 4.44862 7.5335 4.95299 7.09215C5.16312 6.90722 5.42367 6.819 5.65061 6.73498L11.9672 4.48653C12.0807 4.44872 12.1983 4.50334 12.2362 4.61264C12.274 4.72195 12.2193 4.84378 12.1101 4.88159L5.78932 7.13004C5.58759 7.20566 5.38166 7.27716 5.23042 7.40739C5.12111 7.50401 5.02449 7.67642 5.0623 7.82346C5.11691 8.00418 5.35233 8.11349 5.60439 8.20599L10.8115 10.1265C10.9208 10.1686 10.9754 10.2904 10.9375 10.3997C10.8955 10.5091 10.7736 10.5636 10.6644 10.5216L5.45736 8.60097ZM11.8748 10.9881C11.8075 11.0805 11.6773 11.1016 11.5847 11.0301L11.3284 10.841C11.2318 10.7737 11.2149 10.6393 11.2821 10.5468C11.3536 10.4544 11.4838 10.4334 11.5763 10.5049L11.8327 10.694C11.9252 10.7611 11.9462 10.8956 11.8748 10.9881ZM32.098 20.9442L19.9061 25.3066L7.71413 20.9442C7.98736 17.7754 8.92872 15.1949 10.6392 12.8793C12.005 13.3332 13.3709 13.8164 14.6947 14.367C16.3674 15.0646 18.0232 15.8673 19.8514 15.9051C21.1627 15.9303 22.352 15.5816 23.6128 15.2075L29.568 13.4382C31.3541 15.8548 31.8668 17.9897 32.098 20.9442ZM31.6315 7.41159C31.5852 7.5209 31.4633 7.56711 31.3583 7.5209L25.5712 4.9951C25.4661 4.94889 25.4199 4.82706 25.4661 4.71775C25.5124 4.61272 25.6343 4.56643 25.7435 4.61272L31.5263 7.13852C31.6315 7.18465 31.6777 7.30657 31.6315 7.41159ZM39.9779 28.8536C40.0074 29.0175 39.8771 29.1687 39.7048 29.1561L35.1828 28.8116H35.1618C35.8888 26.7648 36.2586 24.9367 36.9647 22.8564C37.4396 22.9657 37.8935 22.9572 38.3894 22.827C39.0239 24.6173 39.5199 26.4959 39.9779 28.8536Z" fill="#4661FD"/>
                         </svg></span>
                     </div>
                     <div class="tp-tutor-content">
                        <h4 class="tp-tutor-title"><a href="#">Professional Educators</a></h4>
                        <p>Get one-on-one help from our subject matter experts.</p>
                     </div>
                  </div>
               </div>
               <div class="col-lg-4 col-md-6 wow fadeInUp mt-15" data-wow-delay=".5s">
                  <div class="tp-tutor-item about text-center mb-30">
                     <div class="tp-tutor-icon">
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="40" height="35" viewBox="0 0 40 35" fill="none">
                           <path d="M39.3297 8.95436C38.2787 6.05524 36.3219 3.46143 33.826 1.64819C32.6919 0.828561 31.6342 0.393957 30.6654 0.341927C30.6522 0.339971 30.6044 0.335567 30.5919 0.337764C28.7768 0.27233 27.7574 1.48872 26.6763 2.91316C26.5294 3.0761 23.8914 6.89565 19.0609 9.99224C19.0575 9.99713 19.0533 9.99786 19.0499 10.0027C19.0499 10.0027 19.0458 10.0035 19.0417 10.0042L13.1065 14.2937C13.103 14.2985 13.0996 14.3035 13.0955 14.3042C13.0962 14.3084 13.0921 14.3091 13.0879 14.3098C8.63483 17.9182 4.15945 19.2385 3.98062 19.3172C2.82944 19.7129 1.52826 20.1566 0.771168 21.2325C0.0106555 22.3133 -0.0701696 23.8226 0.53298 25.7128C1.47055 28.649 3.32119 31.3215 5.74388 33.2291C6.9478 34.1777 8.43587 34.9392 9.91817 34.5751C11.2413 34.256 12.1375 33.1427 12.9246 32.1643C13.1484 31.9277 15.8468 28.2562 20.9053 24.7766C20.9094 24.7759 20.9087 24.7717 20.9087 24.7717C20.9467 24.7436 22.2013 23.8413 22.2013 23.8413C22.53 26.6536 23.1218 29.2567 24.092 32.1829C24.1469 32.3489 24.2999 32.4632 24.4727 32.4713C24.6455 32.4795 24.8083 32.3822 24.879 32.2241L25.9627 29.8181L28.9244 32.1833C29.0495 32.2855 29.2245 32.306 29.3785 32.2317C29.5234 32.1547 29.6163 32.0012 29.6086 31.8356C29.4931 29.0671 29.0812 26.4879 28.6117 23.996C31.3646 25.5411 32.118 26.0723 35.936 27.5112C36.0918 27.5693 36.265 27.5302 36.3818 27.4154C36.4979 27.2965 36.5358 27.1226 36.4789 26.9699L35.1623 23.415L37.783 23.1414C37.9555 23.1238 38.1007 22.9996 38.1484 22.8328C38.192 22.6666 38.1299 22.4847 37.9916 22.3806C35.5217 20.5455 33.2351 19.1666 30.677 17.9726C32.3658 17.0065 34.1213 16.1744 35.9287 15.4915L36.0656 15.4417C37.7852 14.7957 39.2849 14.1415 39.7077 12.3362L39.7111 12.3313C39.7192 12.3042 39.7224 12.2737 39.7264 12.2473C39.9193 11.3265 39.7939 10.2263 39.3297 8.95436ZM12.2703 31.637C11.5278 32.5519 10.7612 33.5009 9.71837 33.7577C8.72463 34.0015 7.56942 33.5968 6.26549 32.5672C3.97619 30.7604 2.22408 28.2333 1.33576 25.4554C0.817628 23.8289 0.861364 22.5702 1.46094 21.7191C2.06051 20.8679 3.17577 20.487 4.25016 20.1177C4.47673 20.0178 8.72937 18.771 13.1514 15.3266C14.6277 19.4231 16.8948 22.4891 19.9096 24.4508C15.19 27.8107 12.8066 31.0583 12.2703 31.637ZM19.5298 21.2278C19.4607 21.3214 19.3326 21.3483 19.2348 21.2798C17.3817 19.9787 16.0499 17.9644 15.5817 15.7465C15.5578 15.635 15.6282 15.5241 15.7438 15.4994C15.858 15.4665 15.9703 15.5451 15.995 15.6608C16.4401 17.7715 17.7087 19.6941 19.4779 20.9328C19.5714 21.0019 19.5949 21.1349 19.5298 21.2278ZM20.4663 21.898C20.4069 21.9985 20.2761 22.0344 20.1757 21.975L19.8221 21.7675C19.7216 21.708 19.6858 21.5773 19.7452 21.4769C19.8045 21.3764 19.9361 21.3447 20.0365 21.4041L20.39 21.6116C20.4905 21.671 20.5215 21.7983 20.4663 21.898ZM33.734 4.40611C34.3063 4.78499 34.8148 5.31222 35.2055 5.92446C35.5083 6.40226 35.933 6.94007 36.1259 7.54865C36.3025 8.11292 36.2605 8.87008 35.7608 9.29228C35.0705 9.87237 34.215 9.46635 33.5545 8.85458C32.9612 8.30803 32.4529 7.66085 32.0417 6.93213C31.8365 6.56991 31.5961 6.08111 31.5729 5.53681C31.5432 4.88233 31.8686 4.29799 32.3677 4.11576C32.7616 3.9693 33.2244 4.06756 33.734 4.40611ZM29.8249 4.05444C29.7966 3.40826 30.0167 2.83392 30.4198 2.47157C30.9164 2.03277 31.6679 1.99448 32.1266 2.3848C32.2168 2.45892 32.2277 2.59402 32.1537 2.68424C32.079 2.77022 31.9438 2.78121 31.8536 2.70717C31.5613 2.45887 31.0325 2.49637 30.703 2.79007C30.3948 3.05862 30.2243 3.52564 30.2458 4.0359C30.283 4.90326 30.7947 5.69133 31.2465 6.38273C31.3112 6.48266 31.2827 6.61197 31.1868 6.67598C31.0868 6.74072 30.9576 6.71212 30.8936 6.61626C30.4354 5.91305 29.8653 5.03687 29.8249 4.05444ZM28.7136 30.9396L26.065 28.8191C25.9609 28.7389 25.8308 28.7061 25.7042 28.7413C25.5768 28.7723 25.4723 28.8593 25.4158 28.9764L24.5596 30.8753C23.7521 28.2632 23.2613 25.8692 22.9838 23.2749C23.827 22.6635 26.3962 20.8096 27.0375 20.3409C27.141 20.8796 27.2446 21.4183 27.3537 21.9645C27.9224 24.8245 28.5063 27.7717 28.7136 30.9396ZM35.7674 14.6505L35.6312 14.7045C32.4457 15.9045 29.4168 17.5566 26.6124 19.6062C23.5308 17.7035 21.2403 14.6501 19.7955 10.5138C24.5831 7.36908 27.2056 3.58234 27.349 3.4243C27.5709 3.12807 27.7971 2.83116 28.0351 2.55366C27.8989 3.4815 28.1715 4.37168 28.4686 5.13327C29.6901 8.24658 31.8028 10.8985 34.5681 12.8056C35.2647 13.2825 36.1122 13.7885 37.1157 13.9158C37.2205 13.9272 37.3198 13.9312 37.4224 13.9303C36.9161 14.2165 36.3382 14.4384 35.7674 14.6505Z" fill="#4661FD"/>
                         </svg></span>
                     </div>
                     <div class="tp-tutor-content">
                        <h4 class="tp-tutor-title"><a href="#">Real-Time Support</a></h4>
                        <p>Ask questions over live chat or schedule a virtual meeting.</p>
                     </div>
                  </div>
               </div>
               <div class="col-lg-4 col-md-6 wow fadeInUp mt-15" data-wow-delay=".7s">
                  <div class="tp-tutor-item about text-center mb-30">
                     <div class="tp-tutor-icon">
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="40" height="34" viewBox="0 0 40 34" fill="none">
                           <path d="M31.4756 14.7773C31.3388 10.8337 29.045 7.03179 25.6202 5.07197C22.1954 3.11214 17.7554 3.06067 14.2861 4.94056C10.8168 6.82045 8.43548 10.5682 8.20721 14.5076L5.70099 13.2139C6.17619 8.56316 9.09653 4.23212 13.2298 2.04788C17.3632 -0.136354 22.5868 -0.108774 26.6969 2.11884C30.8069 4.34645 33.6814 8.70819 34.1076 13.3636L31.4756 14.7773Z" fill="#4661FD"/>
                           <path d="M18.4715 33.0031C19.1403 33.1232 19.8577 33.0557 20.4322 32.7038C20.8011 32.4781 21.0908 32.1416 21.2675 31.7557C25.3887 32.2859 29.4964 30.4481 31.8856 27.3931C32.606 27.9455 33.5419 28.2458 34.4986 28.2458C35.1876 28.2458 35.8859 28.0919 36.5183 27.7687C40.1388 25.9177 40.0733 20.3507 39.9671 18.6883C39.8535 16.9129 39.222 15.3712 38.1888 14.3474C37.2042 13.3722 35.8248 12.8524 34.4733 12.9277C33.9111 8.25525 31.0403 3.99911 26.8955 1.75257C22.6341 -0.557383 17.322 -0.586085 13.0353 1.67953C8.82345 3.90522 5.8894 8.19649 5.32031 12.9208C4.03821 12.9077 2.74529 13.4219 1.81124 14.3474C0.77801 15.3712 0.146462 16.9129 0.0329329 18.6883C-0.0733005 20.3506 -0.138805 25.9177 3.48171 27.7687C4.11406 28.0919 4.81199 28.2458 5.50095 28.2458C6.81776 28.2458 8.1017 27.6831 8.82802 26.6655C9.44698 25.7989 9.63579 24.7505 9.76399 23.8358C9.99554 22.1869 10.0908 20.5077 10.0473 18.8448C10.0143 17.5792 9.88939 16.2515 9.20733 15.1166C9.0469 14.8496 8.85215 14.6046 8.6376 14.3776C8.90996 10.6408 11.189 7.09286 14.4849 5.3071C17.8259 3.49624 22.1162 3.54627 25.4132 5.43386C28.695 7.31166 30.9038 10.9582 31.0555 14.7356C30.9619 14.8585 30.872 14.9843 30.7924 15.1166C30.1109 16.2518 29.9859 17.5792 29.9529 18.8446C29.9094 20.5078 30.0046 22.187 30.2362 23.8359C30.3644 24.7504 30.5532 25.7989 31.1721 26.6655C31.2069 26.7143 31.2489 26.7569 31.2862 26.8036C29.0213 29.7585 25.1524 31.386 21.4558 30.9404C21.4635 30.396 21.2515 29.8521 20.8706 29.4738C20.4661 29.0723 19.9224 28.8843 19.4434 28.7533C18.8131 28.581 18.164 28.4601 17.5145 28.394C17.1019 28.3515 16.6648 28.3362 16.2522 28.5004C15.4461 28.8219 14.9818 29.7841 15.1958 30.6909C15.5901 32.3628 17.8025 32.8834 18.4715 33.0031ZM37.7567 25.5407L31.1392 16.3567C31.2341 16.0742 31.3531 15.8018 31.5069 15.546C31.6067 15.3799 31.7254 15.2262 31.8516 15.0786L38.4382 24.2159C38.2523 24.6952 38.026 25.1407 37.7567 25.5407ZM38.6063 23.7369L32.1451 14.7732C32.4692 14.4728 32.8472 14.2293 33.2582 14.0548L39.0023 22.0229C38.9119 22.6145 38.782 23.1915 38.6063 23.7369ZM37.6019 14.9395C38.4407 15.7703 38.9678 17.0232 39.1093 18.4832L35.8102 13.9015C36.4758 14.089 37.1003 14.4424 37.6019 14.9395ZM34.3831 13.7633C34.4991 13.7527 34.6151 13.7474 34.7315 13.7474C34.8914 13.7474 35.0509 13.7607 35.2098 13.7804L39.1591 19.2649C39.1817 19.9707 39.1575 20.6992 39.0806 21.4192L33.6659 13.9082C33.8997 13.8386 34.139 13.7858 34.3831 13.7633ZM2.39805 14.9395C2.89682 14.445 3.51715 14.0946 4.1786 13.9065L0.89202 18.4707C1.0353 17.0162 1.56165 15.7679 2.39805 14.9395ZM0.841429 19.2534L4.78249 13.7803C5.05909 13.7456 5.33875 13.7379 5.61648 13.7633C5.85861 13.7856 6.09577 13.8379 6.32772 13.9064L0.918478 21.4099C0.84175 20.689 0.818338 19.9598 0.841429 19.2534ZM0.996329 22.0141L6.73582 14.0525C7.1472 14.2265 7.52547 14.4693 7.85019 14.7692L1.3912 23.7296C1.21585 23.1836 1.08629 22.6061 0.996329 22.0141ZM8.93866 23.7199C8.82393 24.5369 8.65908 25.4681 8.15005 26.1813C7.61094 26.9354 6.67601 27.3681 5.69 27.4137L9.05523 22.7418C9.0206 23.0686 8.98428 23.3952 8.93866 23.7199ZM9.12779 21.9289L5.18569 27.4016C4.73174 27.3612 4.27914 27.2404 3.86094 27.0265C3.85156 27.0217 3.8433 27.0152 3.834 27.0103L9.21751 19.5411C9.22008 20.3368 9.19001 21.1339 9.12779 21.9289ZM9.2127 18.8355L3.47554 26.7953C3.10584 26.5487 2.78322 26.2402 2.50003 25.8862L9.00096 16.8641C9.14712 17.5016 9.19482 18.1753 9.2127 18.8355ZM8.8584 16.3493L2.2397 25.5349C1.97071 25.1345 1.74445 24.6888 1.55893 24.2092L8.14395 15.074C8.27183 15.223 8.39186 15.3782 8.49272 15.5461C8.64521 15.7995 8.76379 16.0693 8.8584 16.3493ZM25.8273 4.71035C22.2841 2.68318 17.6768 2.62946 14.0877 4.57421C10.7229 6.39757 8.34054 9.93013 7.86165 13.7221C7.34676 13.3747 6.76404 13.1254 6.15013 13.0038C6.68803 8.61661 9.51753 4.48105 13.4244 2.41643C17.4074 0.312368 22.5381 0.338826 26.4984 2.48538C30.3543 4.57533 33.1267 8.6939 33.6485 13.0502C32.9854 13.213 32.3604 13.5183 31.8313 13.9405C31.4225 10.1606 29.1312 6.60122 25.8273 4.71035ZM30.9972 16.8722L37.496 25.8914C37.2125 26.2449 36.8893 26.5526 36.5192 26.7986L30.7869 18.8456C30.8045 18.1851 30.8518 17.5107 30.9972 16.8722ZM30.7824 19.5517L36.1606 27.0137C36.1531 27.0176 36.1465 27.0228 36.139 27.0266C35.7184 27.2415 35.2632 27.3623 34.8068 27.402L30.873 21.9408C30.8106 21.1455 30.7802 20.348 30.7824 19.5517ZM31.0613 23.7199C31.0163 23.3995 30.9806 23.0772 30.9462 22.7547L34.3017 27.4131C33.3185 27.3657 32.3874 26.9339 31.8499 26.1813C31.3408 25.4681 31.1761 24.5369 31.0613 23.7199ZM16.5606 29.2748C16.793 29.182 17.0766 29.1871 17.4298 29.2229C18.0337 29.2846 18.6372 29.3971 19.2236 29.5572C19.6163 29.6648 20.0167 29.8006 20.2829 30.0651C20.8301 30.6081 20.7049 31.5602 19.9976 31.9929C19.6415 32.2108 19.152 32.2782 18.6181 32.1828C17.5007 31.9827 16.2277 31.4355 16.0072 30.4997C15.8895 30.002 16.143 29.441 16.5606 29.2748Z" fill="#4661FD"/>
                           <path d="M17.746 16.7134C17.11 17.5694 16.3275 18.2311 15.4989 18.9316C14.9133 19.427 14.3074 19.9394 13.7629 20.5239C13.5696 20.731 13.6359 21.0668 13.8919 21.1858C14.8159 21.6149 16.3336 21.5091 17.4201 21.446C17.8918 21.4188 18.3369 21.3931 18.6918 21.3996C18.9119 21.3937 19.1117 21.2206 19.1162 20.9906C19.1203 20.7605 18.9376 20.5705 18.7072 20.5662C18.321 20.5593 17.86 20.5859 17.3717 20.614C16.5545 20.6614 15.5869 20.7176 14.8601 20.6022C15.2406 20.2416 15.6434 19.9008 16.0373 19.568C16.865 18.8677 17.7212 18.1435 18.415 17.2107C18.966 16.4697 19.2924 15.8208 19.4409 15.1689C19.6411 14.2934 19.4946 13.4276 19.0384 12.794C18.3165 11.7899 16.8328 11.4658 15.6625 12.0573C14.6228 12.582 13.924 13.7414 13.8834 15.0108C13.8757 15.2407 14.0563 15.4332 14.2863 15.4407C14.5088 15.4554 14.709 15.2681 14.716 15.0376C14.7469 14.0834 15.2784 13.1847 16.0381 12.8011C16.839 12.3968 17.8811 12.6117 18.3621 13.2807C18.6738 13.7139 18.7735 14.3501 18.6286 14.983C18.5062 15.5187 18.2258 16.0685 17.746 16.7134Z" fill="#4661FD"/>
                           <path d="M26.7539 18.947C26.7632 18.717 26.5846 18.5232 26.3547 18.5138C25.9184 18.4959 25.4814 18.484 25.0435 18.4782C25.0273 18.1914 24.849 15.0301 24.7603 13.3801C24.7505 13.1996 24.6256 13.046 24.451 12.9998C24.274 12.9522 24.0917 13.0248 23.9936 13.1766C22.7196 15.153 21.6689 16.9721 20.2096 18.7799C20.105 18.9093 20.0875 19.0887 20.1652 19.2359C20.2429 19.3834 20.4009 19.4694 20.5669 19.4571C21.789 19.36 23.0232 19.3099 24.2549 19.3071C24.2904 19.9432 24.3253 20.579 24.3595 21.2144C24.3717 21.4366 24.5556 21.6087 24.7754 21.6087C24.7831 21.6087 24.7904 21.6085 24.7981 21.6081C25.0281 21.5957 25.2042 21.3993 25.192 21.1696C25.1583 20.5509 25.1244 19.9315 25.0899 19.3122C25.5009 19.3183 25.9115 19.3297 26.3204 19.3463C26.5683 19.354 26.745 19.1769 26.7539 18.947ZM21.436 18.5612C22.3568 17.3355 23.1562 16.062 23.9985 14.7216C24.0558 15.7636 24.0955 16.4631 24.2084 18.4738C23.2835 18.477 22.3573 18.5061 21.436 18.5612Z" fill="#4661FD"/>
                           <path d="M22.5155 1.84614C18.5462 1.00926 14.2571 2.22401 11.317 5.01598C11.2336 5.09536 11.2303 5.22717 11.3097 5.31063C11.3883 5.39393 11.5209 5.39762 11.6044 5.31833C14.4464 2.61936 18.5947 1.44614 22.4293 2.25392C22.5408 2.27709 22.6526 2.20613 22.6763 2.093C22.6998 1.98043 22.6278 1.86995 22.5155 1.84614Z" fill="#4661FD"/>
                           <path d="M10.6874 5.71618L10.2951 6.05227C10.2077 6.12716 10.1975 6.25857 10.2724 6.34612C10.3466 6.43287 10.4776 6.44418 10.5662 6.36889L10.9585 6.03239C11.046 5.95751 11.0562 5.82586 10.9813 5.73855C10.906 5.65147 10.7745 5.64129 10.6874 5.71618Z" fill="#4661FD"/>
                         </svg></span>
                     </div>
                     <div class="tp-tutor-content">
                        <h4 class="tp-tutor-title"><a href="#">Free Access</a></h4>
                        <p>Every course offers online tutoring at no additional charge.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <!-- tutor area end -->


<!-- category-area-start -->
   <section class="category-area mb-50 mt-50 ">
      <div class="container">
         <div class="row justify-content-center">
            <div class="col-xl-8 col-lg-10">
               <div class="tp-section mb-40 text-center wow fadeInUp" data-wow-delay=".4s">
                  <h3 class="tp-section-3-title">Most Popular 
              <span>Services
                <img 
                  class="tp-underline-shape-9 wow bounceIn" 
                  data-wow-duration="1.5s" 
                  data-wow-delay=".4s" 
                  src="frontend/img/unlerline/team-2-svg-1.svg" 
                  alt="" 
                  style="visibility: visible; animation-duration: 1.5s; animation-delay: 0.4s; animation-name: bounceIn;"
                />
              </span>
                  </h3>
               </div>
            </div>
         </div>
         <div class="row mt-20">
            <div class=" col-lg-4 col-md-4 col-sm-6 " v-for="(items, index) in ServicesList" :key="index">
               <a href="#" class="tp-category-item text-center mb-25 wow fadeInUp" data-wow-delay=".3s">
                  <div class="tp-course-thumb">
                     <img :src="items.service_image_url">
                  </div>
                  <div class="tp-category-content mt-20">
                     <h4 class="tp-category-title">{{items.service_title}}</h4>
                     <span>{{items.short_description}}</span>
                  </div>
               </a>
            </div>
         </div>
      </div>
   </section>
<!-- category-area-end -->


<!-- testimonial-area-start -->
<section class="testimonial-area lightblue-bg pb-85 text-center">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-xxl-6 col-lg-8">
        <div class="tp-testimonial-section">
          <div class="tp-section text-center mt-50">
            <h3 class="tp-section-3-title">
              Student Say
              About Our            
              <span>Services
                <img 
                  class="tp-underline-shape-9 wow bounceIn" 
                  data-wow-duration="1.5s" 
                  data-wow-delay=".4s" 
                  src="frontend/img/unlerline/team-2-svg-1.svg" 
                  alt="" 
                  style="visibility: visible; animation-duration: 1.5s; animation-delay: 0.4s; animation-name: bounceIn;"
                />
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>

    <div class="tp-team-2-arrow d-flex align-items-center justify-content-md-center  mt-20">
      <!-- Previous button -->
      <div class="tp-team-2-prev" @click="prevReview">
        <span>
          <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 11L1 6L6 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </span>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div v-if="currentReview" :key="currentReviewIndex" class="tp-testimonial-2-active">
            <div class="tp-testimonial-2-item text-center">
              <div class="tp-testimonial-2-avatar-info">
                <h3 class="text-center">{{ currentReview.student_name }}</h3>
                <h6 class="text-center mt-3">{{ currentReview.course_title }}</h6>
                <div class="tp-testimonial-2-avatar-rating">
                                 <i class="fa-solid fa-star"></i>
                                 <i class="fa-solid fa-star"></i>
                                 <i class="fa-solid fa-star"></i>
                                 <i class="fa-solid fa-star"></i>
                                 <i class="fa-solid fa-star"></i>
                 </div>
              </div>
              <div class="tp-testimonial-2-content p-relative">
                <p>{{ currentReview.review_text }}</p>
                <div class="tp-testimonial-2-shape">
                  <div class="shape-1">
                    <img src="frontend/img/testimonial/testimonial-shape-1.png" alt="">
                  </div>
                  <div class="shape-2">
                    <img src="frontend/img/testimonial/testimonial-shape-3.png" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Next button -->
      <div class="tp-team-2-next" @click="nextReview">
        <span>
          <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 11L6 6L1 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </span>
      </div>
    </div>
  </div>
</section>
<!-- testimonial-area-end -->

<section class="team-area pt-100 mb-100">
    <div class="container">
      <div class="row align-items-end">
        <div class="col-lg-6 col-md-8">
          <div class="tp-section mb-45">
            <h5 class="tp-section-3-subtitle">Our Team</h5>
            <h3 class="tp-section-3-title">
              Meet Our 
              <span>Team
                <img 
                  class="tp-underline-shape-9 wow bounceIn" 
                  data-wow-duration="1.5s" 
                  data-wow-delay=".4s" 
                  src="frontend/img/unlerline/team-2-svg-1.svg" 
                  alt="" 
                  style="visibility: visible; animation-duration: 1.5s; animation-delay: 0.4s; animation-name: bounceIn;"
                />
              </span>
            </h3>
          </div>
        </div>
        <div class="col-lg-6 col-md-4">
          <div class="tp-team-2-arrow d-flex align-items-center justify-content-md-end mb-55">
            <!-- Previous Button -->
            <div class="tp-team-2-prev" @click="prevMember" tabindex="0" role="button" aria-label="Previous slide">
              <span>
                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 11L1 6L6 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </span>
            </div>
            <!-- Next Button -->
            <div class="tp-team-2-next" @click="nextMember" tabindex="0" role="button" aria-label="Next slide">
              <span>
                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 11L6 6L1 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Show 4 team members per slide -->
      <div class="swiper tp-team-2-active wow fadeInUp" data-wow-delay=".5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInUp;">
        <div class="swiper-wrapper align-items-end">
          <!-- Loop through the current 4 team members -->
          <div v-for="(item, index) in getVisibleTeamMembers()" :key="index" class="swiper-slide" style="width: 333px; margin-right: 30px;">
            <div class="tp-team-2-item">
              <div class="tp-team-2-bg strom"></div>
              <div class="tp-team-2-social">
                <span class="tp-team-2-social-wrap">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </span>
                <div class="tp-team-2-social-icon">
                  <a :href="item.facebook"><i class="fa-brands fa-facebook-f"></i></a>
                  <a :href="item.instagram"><i class="fa-brands fa-instagram"></i></a>
                  <a :href="item.linkedin"><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
              </div>
              <div class="tp-team-2-thumb">
                <img :src="item.member_photo_url" alt="">
              </div>
              <div class="tp-team-2-content">
                <h4 class="tp-team-2-title">
                  <a href="#">{{ item.member_name }}</a>
                </h4>
                <span>{{ item.member_service }}</span>
              </div>
            </div>
          </div>   
        </div>
      </div>
      <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
    </div>
</section>
  

   </Layouts>
</template>

<style>

@media (max-width: 767px) {
  .swiper-slide {
    width: 100% !important; /* Full width for mobile */
  }
}

@media (min-width: 768px) {
  .swiper-slide {
    width: calc(33.33% - 30px) !important; /* Three slides for desktop, minus margin */
  }
}

@media (max-width: 768px) {
  .tp-about-tutor-area .row {
    justify-content: center;
  }
  
  .tp-about-tutor-heading, .tp-about-tutor-right {
    text-align: center;
    margin-bottom: 30px;
  }

  .tp-tutor-item {
    margin: 0 auto;
  }
}


@media (max-width: 768px) {
  .tp-team-2-arrow {
    display: flex;
    justify-content: center; /* Centers the buttons horizontally */
    align-items: center; /* Centers the buttons vertically */
    gap: 20px; /* Adds space between the buttons */
  }

  .tp-team-2-prev,
  .tp-team-2-next {
    cursor: pointer;
    padding: 10px;
  }
}


@media (max-width: 768px) {
   
    /* Center text for all headings and paragraphs */
    .tp-hero-2-content,
    .tp-hero-2-content h2,
    .tp-hero-2-content p,
    .tp-section,
    .tp-section h5,
    .tp-section h3,
    .tp-course-content,
    .tp-funfact-content {
        text-align: center;
    }

    /* Ensure buttons are centered */
    .tp-hero-2-btn,
    .tp-course-btn,
    .tp-category-item,
    .tp-funfact-item {
        text-align: center;
        margin: 0 auto;
    }

    /* Center align images, if needed */
    .tp-course-thumb img,
    .tp-category-icon img,
    .tp-funfact-icon img {
        display: block;
        margin: 0 auto;
    }
}

</style>

<style scoped>
.partners-area {
  padding: 50px 0;
}
.partners-title {
  text-align: center;
  margin-bottom: 30px;
}
.partners-slider-wrapper {
  overflow: hidden;
  width: 100%;
}
.partners-slider {
  display: flex;
  align-items: center;
}
.partner-logo {
  width: 150px; /* Adjust logo width */
  margin-right: 30px; /* Adjust margin between logos */
  flex-shrink: 0;
}
.partner-logo img {
  width: 100%;
  object-fit: contain;
}
</style>
