<script setup>

import Layouts from '../frontend/layouts.vue';

</script>

<script>

export default {
  data() {
    return {
      CoursesList: [],
    };
  },
  mounted() {
    this.getCourses();
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
  }
};

</script>

<template>
    <Layouts>
      <!-- course filter start -->
      <section class="tp-course-filter-area tp-course-filter-bg p-relative pt-180 pb-220">
            <div class="container">
               <div class="row">
                  <div class="col-lg-12">
                     <div class="tp-breadcrumb__content-filter mb-50">
                        <div class="tp-breadcrumb__list">
                           <span><a href="index.html"><svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.07207 0C8.19331 0 8.31107 0.0404348 8.40664 0.114882L16.1539 6.14233L15.4847 6.98713L14.5385 6.25079V12.8994C14.538 13.1843 14.4243 13.4574 14.2225 13.6589C14.0206 13.8604 13.747 13.9738 13.4616 13.9743H2.69231C2.40688 13.9737 2.13329 13.8603 1.93146 13.6588C1.72962 13.4573 1.61597 13.1843 1.61539 12.8994V6.2459L0.669148 6.98235L0 6.1376L7.7375 0.114882C7.83308 0.0404348 7.95083 0 8.07207 0ZM8.07694 1.22084L2.69231 5.40777V12.8994H13.4616V5.41341L8.07694 1.22084Z" fill="currentColor"/>
                           </svg></a></span>
                           <span class="color">All Courses</span>
                        </div>
                        <h3 class="tp-breadcrumb__title">All Courses</h3>
                        <p>We have the largest collection of courses</p>
                     </div>
                     <div class="tp-course-filter-wrap p-relative">
                        <div class="row">
                           <div class="col-lg-6">
                              <div class="tp-course-filter-top-left d-flex align-items-center">
                                 <div class="tp-course-filter-top-tab tp-tab mb-20">
                                    <ul class="nav nav-tabs" id="filterTab" role="tablist">
                                       <li class="nav-item" role="presentation">
                                         <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                                           <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M5.66667 1H1V5.66667H5.66667V1Z" stroke="#031F42" stroke-linecap="round" stroke-linejoin="round" />
                                             <path d="M12.9997 1H8.33301V5.66667H12.9997V1Z" stroke="#031F42" stroke-linecap="round" stroke-linejoin="round" />
                                             <path d="M12.9997 8.33337H8.33301V13H12.9997V8.33337Z" stroke="#031F42" stroke-linecap="round" stroke-linejoin="round" />
                                             <path d="M5.66667 8.33337H1V13H5.66667V8.33337Z" stroke="#031F42" stroke-linecap="round" stroke-linejoin="round" />
                                           </svg>
                                           Grid
                                         </button>
                                       </li>
                                     </ul>
                                 </div>
                              </div>
                           </div>
                           <div class="col-lg-6">
                              <div class="tp-course-filter-top-right d-flex align-items-center justify-content-start justify-content-lg-end">
                                 <div class="tp-course-filter-top-right-search d-none d-lg-block mb-20">
                                    <form action="#">
                                       <input type="text" placeholder="Search for Courses...">
                                       <button class="tp-course-filter-top-right-search-btn" type="submit">
                                          <span>
                                             <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.625 12.625L16 16" stroke="#8B8B8B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14.5 7.75C14.5 4.02208 11.4779 1 7.75 1C4.02208 1 1 4.02208 1 7.75C1 11.4779 4.02208 14.5 7.75 14.5C11.4779 14.5 14.5 11.4779 14.5 7.75Z" stroke="#8B8B8B" stroke-width="1.5" stroke-linejoin="round"></path>
                                             </svg>
                                          </span>
                                       </button>
                                    </form>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <!-- course filter end -->


         <!-- course filter area start -->
         <section class="tp-filter-mt-2">
            <div class="container">
               <div class="tab-content" id="myTabContent">
                  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                     <div class="row">
  <div v-for="(item, index) in CoursesList" :key="index" class="col-lg-4 col-md-6">
    <div class="tp-course-item p-relative fix mb-30">
      <!-- Course Teacher -->
      <div class="tp-course-teacher mb-15">
        <span><img src="frontend/img/teacher/teacher-1.png" alt="">{{ item.teacher_name }}</span>
      </div>

      <!-- Course Image -->
      <div class="tp-course-thumb">
        <a href="course-details-2.html">
          <img class="course-pink" :src="item.course_image_url" alt="Course Image" v-if="item.course_image_url">
        </a>
      </div>

      <!-- Course Content -->
      <div class="tp-course-content">
        <!-- Course Category -->
        <div class="tp-course-tag mb-10">
          <span>{{ item.category }}</span>
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

        <!-- Course Title -->
        <h4 class="tp-course-title">
          <a href="course-details-2.html">{{ item.course_title }}</a>
        </h4>
        

        <!-- Course Rating -->
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

      <!-- Preview Course Button -->
      <div class="tp-course-btn">
        <router-link :to="{ path: '/course-details/' + item.id }">Preview this Course</router-link>
      </div>
    </div>
  </div>
</div>

                  </div>
               </div>

               <div class="row">
                  <div class="col-lg-12">
                     <div class="tp-event-inner-pagination pb-100">
                        <div class="tp-dashboard-pagination pt-20">
                           <div class="tp-pagination">
                              <nav>
                                 <ul class="justify-content-center">
                                    <li>
                                       <a href="#"><svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M1.00017 6.77879L14 6.77879" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                          <path d="M6.24316 11.9999L0.999899 6.77922L6.24316 1.55762" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                       </svg></a>
                                    </li>
                                    <li>
                                       <span class="current">1</span>
                                    </li>
                                    <li>
                                       <a href="#">2</a>
                                    </li>
                                    <li>
                                       <a href="#">3</a>
                                    </li>
                                    <li>
                                       <a href="#" class="next page-numbers">
                                          <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M13.9998 6.77883L1 6.77883" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                             <path d="M8.75684 1.55767L14.0001 6.7784L8.75684 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                          </svg>                                     
                                       </a>
                                    </li>
                                 </ul>
                              </nav>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <!-- course filter area end -->
    </Layouts>
</template>