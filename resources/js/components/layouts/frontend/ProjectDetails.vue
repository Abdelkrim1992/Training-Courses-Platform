<template>
    <Header/>
         <!-- course details breadcrumb start -->
         <section class="tp-breadcrumb__area pt-40 pb-90 p-relative z-index-1">
            <div class="tp-breadcrumb__bg details2" ></div>
            <div class="container current">
               <div class="row align-items-center">
                  <div class="col-sm-12">
                     <div class="tp-breadcrumb__content">
                        <div class="tp-breadcrumb__list course-details mb-70">
                           <span><router-link to="/"><svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.07207 0C8.19331 0 8.31107 0.0404348 8.40664 0.114882L16.1539 6.14233L15.4847 6.98713L14.5385 6.25079V12.8994C14.538 13.1843 14.4243 13.4574 14.2225 13.6589C14.0206 13.8604 13.747 13.9738 13.4616 13.9743H2.69231C2.40688 13.9737 2.13329 13.8603 1.93146 13.6588C1.72962 13.4573 1.61597 13.1843 1.61539 12.8994V6.2459L0.669148 6.98235L0 6.1376L7.7375 0.114882C7.83308 0.0404348 7.95083 0 8.07207 0ZM8.07694 1.22084L2.69231 5.40777V12.8994H13.4616V5.41341L8.07694 1.22084Z" fill="currentColor"></path>
                           </svg></router-link></span>
                           <span>Projects  /  {{project.project_name}}</span>
                        </div>
                        <div class="tp-course-details-2-header">
                           <span class="tp-course-details-2-category">{{project.domaine}}</span>
                           <h3 class="tp-course-details-2-title">{{project.project_name}}</h3>
                           <div class="tp-course-details-2-meta-wrapper d-flex align-items-center flex-wrap">
                              <div class="tp-course-details-2-meta">
                                 <span class="tp-course-details-2-meta-subtitle">Domain</span>
                                 <h3 class="tp-course-details-2-meta-title">{{project.domaine}}</h3>
                              </div>
                              <div class="tp-course-details-2-meta">
                                 <span class="tp-course-details-2-meta-subtitle">Start Date</span>
                                 <h3 class="tp-course-details-2-meta-title">{{project.dead_line}}</h3>
                              </div>
                              <div class="tp-course-details-2-meta">
                                 <span class="tp-course-details-2-meta-subtitle">End Date</span>
                                 <h3 class="tp-course-details-2-meta-title">{{project.dead_line}}</h3>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <!-- course details breadcrumb end -->

         <!-- course details area start -->
         <section class="tp-course-details-2-area pt-50 pb-80">
            <div class="container">
               <div class="row">
                  <div class="col-lg-8">
                     <div class="tp-course-details-2-main-inner pr-70">
                        <div class="tp-course-details-2-nav d-flex align-items-center">
                           <nav>
                              <ul id="course_details2_nav">
                                 <li class=""><a href="#info">Project Info</a></li>
                              </ul>
                           </nav>
                        </div>

                        <div class="tp-course-details-2-content">
                           <div id="info">
                              <h4 class="tp-course-details-2-main-title">About Course</h4>
                              <div class="tp-course-details-2-text mb-60">
                                <p v-html="project.project_description"></p>
                              </div>
                              <h4 class="tp-course-details-2-main-title">What will you Learn?</h4>
                              <div class="tp-course-details-2-list">
                                 <ul v-html="project.project_tasks">
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-lg-4">
                     <div class="tp-course-details-2-widget">
                        <div class="tp-course-details-2-widget-thumb p-relative">
                           <img :src="project.project_image_url" alt="">
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <!-- course details area end -->
 
    <Footer/>
  </template>
  
  <script setup>
  
  import Footer from '../frontend/sections/Footer.vue'
  import Header from '../frontend/sections/Header.vue'
  
  </script>
 
 <script>
 export default {
   data() {
     return {
        project: null,
        projectId: this.$route.params.id,
     };
   },
   created() {
     this.fetchProjectDetails();
   },
   methods: {
     async fetchProjectDetails() {
       try {
         const response = await fetch(`/api/get_project/${this.projectId}`);
         const result = await response.json();
         
         if (result.status === 200) {
           this.project = result.data;
         } else {
           console.error(result.message);
           // Handle the error accordingly
         }
       } catch (error) {
         console.error('Error fetching project details:', error);
         // Handle the error accordingly
       }
     },
   },
 };
 </script>
   
    