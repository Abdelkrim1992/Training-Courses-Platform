<script setup>

    import Layouts from '../frontend/Layouts.vue';
    
</script>

<script>
export default {
  data() {
    return {
      CoursesList: [],       // Stores courses data
      ReviewsList: [],       // Stores reviews data
      TeamMembersList: [],   // Stores team members data
      currentMemberIndex: 0, // Track the current team member index
      course_1: [],          // Store details of course with ID 1
    };
  },
  created() {
    // Fetch course with ID 1 on component creation
    this.fetchCourseID1Details();
  },
  computed: {
    currentMember() {
      // Compute the currently active team member
      return this.TeamMembersList[this.currentMemberIndex] || {};
    },
  },
  mounted() {
    // Fetch data for team members, reviews, and courses when the component is mounted
    this.getTeamMembers();
    this.getReviews();
    this.getCourses();
  },
  methods: {
    getCourses() {
      // Fetch list of courses from the API
      axios.get('/api/get_courses')
        .then((response) => {
          if (response.data.status === 200) {
            this.CoursesList = response.data.data;
            console.log("Courses List:", this.CoursesList);
          }
        })
        .catch((error) => {
          console.error('Error fetching courses:', error);
        });
    },
    getReviews() {
      // Fetch list of reviews from the API
      axios.get('/api/get_reviews')
        .then((response) => {
          if (response.data.status === 200) {
            this.ReviewsList = response.data.data;
            console.log("Reviews List:", this.ReviewsList);
          }
        })
        .catch((error) => {
          console.error('Error fetching reviews:', error);
        });
    },
    getTeamMembers() {
      // Fetch list of team members from the API
      axios.get('/api/get_team_member')
        .then((response) => {
          if (response.data.status === 200) {
            this.TeamMembersList = response.data.data;
            console.log("Team Members List:", this.TeamMembersList);
          }
        })
        .catch((error) => {
          console.error('Error fetching team members:', error);
        });
    },
    nextMember() {
    // Move to the next team member
    if (this.currentMemberIndex < this.TeamMembersList.length - 1) {
      this.currentMemberIndex++;
    } else {
      this.currentMemberIndex = 0; // Loop back to the first member
    }
  },
  prevMember() {
    // Move to the previous team member
    if (this.currentMemberIndex > 0) {
      this.currentMemberIndex--;
    } else {
      this.currentMemberIndex = this.TeamMembersList.length - 1; // Loop back to the last member
    }
  },
    async fetchCourseID1Details() {
      // Fetch details for course with ID 1
      try {
        const response = await fetch(`/api/get_course/1`);
        const result = await response.json();
        
        if (result.status === 200) {
          this.course_1 = result.data;
          console.log("Course 1 Details:", this.course_1);
        } else {
          console.error(result.message);
        }
      } catch (error) {
        console.error('Error fetching course details:', error);
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
               <div class="offset-xxl-4 col-xxl-3 offset-xl-2 col-xl-4 col-lg-5 col-md-6">
                  <div class="tp-hero-2-course p-relative wow fadeInUp" data-wow-delay=".5s">
                     <div class="tp-course-item p-relative fix mb-30">
                        <div class="tp-course-teacher mb-15">
                           <span><img :src="course_1.teacher_photo_url" alt="">{{course_1.teacher_name}}</span>
                           
                        </div>
                        <div class="tp-course-thumb">
                           <router-link to="/course-details/1"><img class="course-lightblue" :src="course_1.course_image_url" alt=""></router-link>
                        </div>
                        <div class="tp-course-content">
                           <div class="tp-course-tag mb-10">
                              <span>{{course_1.category}}</span>
                           </div>
                           <h4 class="tp-course-title">
                              <router-link to="/course-details/1">{{course_1.course_title}}</router-link>
                           </h4>
                           <div class="tp-course-rating d-flex align-items-end justify-content-between">
                              <div class="tp-course-rating-star">
                                 <p>5.0<span> /5</span></p>
                                 <div class="tp-course-rating-icon">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="tp-course-btn home-2">
                           <router-link to="/course-details/{id}">Preview this Course</router-link>
                        </div>
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

<!-- category-area-start -->
   <section class="category-area mb-80 mt-95">
      <div class="container">
         <div class="row justify-content-center">
            <div class="col-xl-8 col-lg-10">
               <div class="tp-section mb-40 text-center wow fadeInUp" data-wow-delay=".4s">
                  <h5 class="tp-section-3-subtitle">Top Categories</h5>
                  <h3 class="tp-section-3-title">Most demanding 
                     <span>Categories 
                        <img class="tp-underline-shape-5 wow bounceIn" data-wow-duration="1.5s" data-wow-delay=".4s" src="a/img/shape/bottom-line/line-2-category.svg" alt="">
                     </span>.
                  </h3>
               </div>
            </div>
         </div>
         <div class="row">
            <div class="col-lg-3 col-md-4 col-sm-6">
               <a href="course-categories.html" class="tp-category-item mb-25 wow fadeInUp" data-wow-delay=".3s">
                  <div class="tp-category-icon">
                     <span class="cat-purple"><img src="frontend/img/icon/category/cat-2-icon-1.svg" alt=""></span>
                  </div>
                  <div class="tp-category-content">
                     <h4 class="tp-category-title">Development</h4>
                     <span>Code with Confident</span>
                  </div>
               </a>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
               <a href="course-categories.html" class="tp-category-item mb-25 wow fadeInUp" data-wow-delay=".3s">
                  <div class="tp-category-icon">
                     <span class="cat-green"><img src="frontend/img/icon/category/cat-2-icon-2.svg" alt=""></span>
                  </div>
                  <div class="tp-category-content">
                     <h4 class="tp-category-title">UI/UX Design</h4>
                     <span>Design with Confident</span>
                  </div>
               </a>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
               <a href="course-categories.html" class="tp-category-item mb-25 wow fadeInUp" data-wow-delay=".3s">
                  <div class="tp-category-icon">
                     <span class="cat-purple"><img src="frontend/img/icon/category/cat-2-icon-3.svg" alt=""></span>
                  </div>
                  <div class="tp-category-content">
                     <h4 class="tp-category-title">Lifestyle</h4>
                     <span>New Skills, New You</span>
                  </div>
               </a>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
               <a href="course-categories.html" class="tp-category-item mb-25 wow fadeInUp" data-wow-delay=".3s">
                  <div class="tp-category-icon">
                     <span class="cat-blue"><img src="frontend/img/icon/category/cat-2-icon-4.svg" alt=""></span>
                  </div>
                  <div class="tp-category-content">
                     <h4 class="tp-category-title">Business</h4>
                     <span>Improve your business</span>
                  </div>
               </a>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
               <a href="course-categories.html" class="tp-category-item mb-25 wow fadeInUp" data-wow-delay=".5s">
                  <div class="tp-category-icon">
                     <span class="cat-pink"><img src="frontend/img/icon/category/cat-2-icon-5.svg" alt=""></span>
                  </div>
                  <div class="tp-category-content">
                     <h4 class="tp-category-title">Photography</h4>
                     <span>Major or Minor</span>
                  </div>
               </a>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
               <a href="course-categories.html" class="tp-category-item mb-25 wow fadeInUp" data-wow-delay=".5s">
                  <div class="tp-category-icon">
                     <span class="cat-l-purple"><img src="frontend/img/icon/category/cat-2-icon-6.svg" alt=""></span>
                  </div>
                  <div class="tp-category-content">
                     <h4 class="tp-category-title">Music</h4>
                     <span>Control your Wallet</span>
                  </div>
               </a>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
               <a href="course-categories.html" class="tp-category-item mb-25 wow fadeInUp" data-wow-delay=".5s">
                  <div class="tp-category-icon">
                     <span class="cat-yellow"><img src="frontend/img/icon/category/cat-2-icon-7.svg" alt=""></span>
                  </div>
                  <div class="tp-category-content">
                     <h4 class="tp-category-title">Teaching</h4>
                     <span>High Education Level</span>
                  </div>
               </a>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
               <a href="course-categories.html" class="tp-category-item mb-25 wow fadeInUp" data-wow-delay=".5s">
                  <div class="tp-category-icon">
                     <span class="cat-lgreen"><img src="frontend/img/icon/category/cat-2-icon-8.svg" alt=""></span>
                  </div>
                  <div class="tp-category-content">
                     <h4 class="tp-category-title">Development</h4>
                     <span>Improve your business</span>
                  </div>
               </a>
            </div>
         </div>
      </div>
   </section>
<!-- category-area-end -->

<!-- course-area-start -->
   <section class="course-area tp-course-wrapper mt-100 mb-100">
      <div class="container">
         <div class="row align-items-end">
            <div class="col-xxl-5 col-xl-6 col-lg-7">
               <div class="tp-section mb-40">
                  <h5 class="tp-section-3-subtitle">Our Courses</h5>
                  <h3 class="tp-section-3-title">Most Popular
                     <span>Courses
                        <img class="tp-underline-shape-6 wow bounceIn" data-wow-duration="1.5s" data-wow-delay=".4s" src="frontend/img/unlerline/course-2-svg-1.svg" alt="">
                     </span>
                  </h3>
               </div>
            </div>
         </div>
         <div class="row">
            <div class="col-lg-12">
               <div class="tab-content wow fadeInUp" data-wow-delay=".3s" id="nav-tabContent">
                  <div class="tab-pane fade show active" id="nav-all" role="tabpanel" aria-labelledby="nav-all-tab" tabindex="0">
                     <div class="row">
                        <div v-for="(item, index) in CoursesList" :key="index" class="col-lg-4 col-md-6">
                           <div class="tp-course-item p-relative fix mb-30">
                              <div class="tp-course-thumb">
                                 <router-link :to="{ path: '/course-details/' + item.id }"><img class="course-pink" :src="item.course_image_url" alt="Course Image" v-if="item.course_image_url"></router-link>
                              </div>
                              <div class="tp-course-content">
                                 <div class="tp-course-tag mb-10">
                                    <span>{{item.category}}</span>
                                 </div>
                                 <div class="tp-course-meta">
                                             <span>
                                                <span>
                                                   <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M13.9228 10.0426V2.29411C13.9228 1.51825 13.2949 0.953997 12.5252 1.01445H12.4847C11.1276 1.12529 9.07163 1.82055 7.91706 2.53596L7.80567 2.6065C7.62337 2.71733 7.30935 2.71733 7.11692 2.6065L6.9549 2.50573C5.81046 1.79033 3.75452 1.1152 2.3974 1.00437C1.62768 0.943911 0.999756 1.51827 0.999756 2.28405V10.0426C0.999756 10.6573 1.50613 11.2417 2.12393 11.3122L2.30622 11.3425C3.70386 11.5238 5.87126 12.2392 7.10685 12.9143L7.1372 12.9244C7.30937 13.0252 7.59293 13.0252 7.75498 12.9244C8.99057 12.2393 11.1681 11.5339 12.5758 11.3425L12.7885 11.3122C13.4164 11.2417 13.9228 10.6674 13.9228 10.0426Z" stroke="#94928E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                                      <path d="M7.46118 2.81787V12.4506" stroke="#94928E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                                   </svg>
                                                </span>
                                                {{item.duration}} 
                                             </span>
                                             <span>
                                                <span>
                                                   <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M6.57134 7.5C8.36239 7.5 9.81432 6.04493 9.81432 4.25C9.81432 2.45507 8.36239 1 6.57134 1C4.7803 1 3.32837 2.45507 3.32837 4.25C3.32837 6.04493 4.7803 7.5 6.57134 7.5Z" stroke="#94928E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                                      <path d="M12.1426 14C12.1426 11.4845 9.64553 9.44995 6.57119 9.44995C3.49684 9.44995 0.999756 11.4845 0.999756 14" stroke="#94928E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                                   </svg>
                                                </span>
                                                {{item.date}}
                                             </span>
                                 </div>
                                 <h4 class="tp-course-title">
                                    <a href="course-details-2.html">{{item.course_title}}</a>
                                 </h4>
                                 <div class="tp-course-rating d-flex align-items-end justify-content-between">
                                    <div class="tp-course-rating-star">
                                       <p>5.0<span> /5</span></p>
                                       <div class="tp-course-rating-icon">
                                          <i class="fa-solid fa-star"></i>
                                          <i class="fa-solid fa-star"></i>
                                          <i class="fa-solid fa-star"></i>
                                          <i class="fa-solid fa-star"></i>
                                          <i class="fa-solid fa-star"></i>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="tp-course-btn home-2">
                                 <router-link :to="{ 
        path:'/course-details/' + item.id }">Preview this Course</router-link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
<!-- course-area-end -->

<!-- testimonial-area-start -->
   <section class="testimonial-area lightblue-bg pb-85">
      <div class="container">
         <div class="row justify-content-center">
            <div class="col-xxl-6 col-lg-8">
               <div class="tp-testimonial-section">
                  <div class="tp-section text-center mb-40">
                     <h3 class="tp-section-3-title mt-100">Student
                        <span>Say
                           <img class="tp-underline-shape-8 wow bounceIn" data-wow-duration="1.5s" data-wow-delay=".4s" src="frontend/img/unlerline/testimonial-2-svg-1.svg" alt="">
                        </span>
                        About Acadia
                     </h3>
                  </div>
               </div>
            </div>
         </div>

         <div class="row justify-content-center">
            <div class="col-xl-5 col-lg-6 col-md-8">
               <div class="tp-testimonial-2-avatar-active">
                  <div class="tp-testimonial-2-avatar-item">
                     <img src="frontend/img/testimonial/test-2-avatar-1.png" alt="avatar">
                  </div>
               </div>
            </div>
         </div>
         <div class="row justify-content-center">
            <div class="col-lg-8">
               <div class="tp-testimonial-2-active">
                  <div class="tp-testimonial-2-item text-center">
                     <div class="tp-testimonial-2-avatar-info">
                        <h4 class="tp-testimonial-2-avatar-title">Annette </h4>
                        <span>Lecturer, Oxford university</span>
                        <div class="tp-testimonial-2-avatar-rating">
                           <i class="fa-solid fa-star"></i>
                           <i class="fa-solid fa-star"></i>
                           <i class="fa-solid fa-star"></i>
                           <i class="fa-solid fa-star"></i>
                           <i class="fa-solid fa-star"></i>
                        </div>
                     </div>
                     <div class="tp-testimonial-2-content p-relative">
                        <p>I need to get a certification for English proficiency and Acadia is my best choice.
                           Their tutors are smart and professional when dealing with students.  I wanted
                           to place a review since ! Thanks and 5 stars!
                        </p>
                        <div class="tp-testimonial-2-shape">
                           <div class="shape-1"><img src="frontend/img/testimonial/testimonial-shape-1.png" alt=""></div>
                           <div class="shape-2"><img src="frontend/img/testimonial/testimonial-shape-3.png" alt=""></div>
                        </div>
                     </div>
                  </div>
                  
               </div>
            </div>
         </div>
      </div>
   </section>

   <!-- team-area-start -->
<section class="team-area pt-100 mb-100">
  <div class="container">
    <div class="row align-items-end">
      <div class="col-lg-6 col-md-8">
        <div class="tp-section mb-45">
          <h5 class="tp-section-3-subtitle">Our Team</h5>
          <h3 class="tp-section-3-title">Meet Our 
            <span>Teachers
              <img class="tp-underline-shape-9 wow bounceIn" data-wow-duration="1.5s" data-wow-delay=".4s" src="frontend/img/unlerline/team-2-svg-1.svg" alt="">
            </span>
          </h3>
        </div>
      </div>
      <div class="col-lg-6 col-md-4">
        <div class="tp-team-2-arrow d-flex align-items-center justify-content-md-end mb-55">
          <!-- Previous button -->
          <div class="tp-team-2-prev" @click="prevMember">
            <span>
              <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 11L1 6L6 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </div>
          <!-- Next button -->
          <div class="tp-team-2-next" @click="nextMember">
            <span>
              <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 11L6 6L1 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="swiper tp-team-2-active wow fadeInUp" data-wow-delay=".5s">
      <div class="swiper-wrapper align-items-end">
        <!-- Use v-for to loop through the team members dynamically -->
        <div 
          class="swiper-slide" 
          v-for="(item, index) in TeamMembersList" 
          :key="index" 
          v-show="currentMemberIndex === index">
          <div class="tp-team-2-item">
            <div class="tp-team-2-bg"></div>
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
                <a :href="item.linkden"><i class="fa-brands fa-linkedin-in"></i></a>
              </div>
            </div>
            <div class="tp-team-2-thumb">
              <img src="frontend/img/team/team-2-thumb-1.png" alt="Team Member Image">
            </div>
            <div class="tp-team-2-content">
              <h4 class="tp-team-2-title"><a href="my-profile.html">{{ item.member_name || 'No Name Available' }}</a></h4>
              <span>{{ item.member_service || 'No Service Available' }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- team-area-end -->


 </Layouts>
</template>

<style>

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
