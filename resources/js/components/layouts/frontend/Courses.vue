<script setup>

import Layouts from '../frontend/Layouts.vue';

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
                        <div class="col-lg-4 col-md-6">
                           <div class="tp-course-item p-relative fix mb-30">
                              <div class="tp-course-teacher mb-15">
                                 <span><img src="frontend/img/teacher/teacher-1.png" alt="">Hilary Ouse</span>
                              </div>
                              <div class="tp-course-thumb">
                                 <a href="course-details-2.html"><img class="course-pink" src="frontend/img/course/course-thumb-1.jpg" alt=""></a>
                              </div>
                              <div class="tp-course-content">
                                 <div class="tp-course-tag mb-10">
                                    <span>Art &amp; Design</span>
                                 </div>
                                 <h4 class="tp-course-title">
                                    <a href="course-details-2.html">Interior design concepts <br> Masterclass</a>
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
                              <div class="tp-course-btn">
                                 <a href="course-details-2.html">Preview this Course</a>
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