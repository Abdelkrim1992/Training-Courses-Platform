<template>

  <Header/>

  <section class="tp-breadcrumb__area pt-110 pb-90 p-relative z-index-1">
             <div class="tp-breadcrumb__bg details3" :style="{ backgroundImage: `url(${course.course_image_url})` }"></div>
             <div class="container current">
                <div class="row">
                   <div class="col-sm-12">
                      <div class="tp-breadcrumb__content">
                         <div class="tp-breadcrumb__list inner-after">
                            <span class="white"><router-link to="/"><svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                               <path fill-rule="evenodd" clip-rule="evenodd" d="M8.07207 0C8.19331 0 8.31107 0.0404348 8.40664 0.114882L16.1539 6.14233L15.4847 6.98713L14.5385 6.25079V12.8994C14.538 13.1843 14.4243 13.4574 14.2225 13.6589C14.0206 13.8604 13.747 13.9738 13.4616 13.9743H2.69231C2.40688 13.9737 2.13329 13.8603 1.93146 13.6588C1.72962 13.4573 1.61597 13.1843 1.61539 12.8994V6.2459L0.669148 6.98235L0 6.1376L7.7375 0.114882C7.83308 0.0404348 7.95083 0 8.07207 0ZM8.07694 1.22084L2.69231 5.40777V12.8994H13.4616V5.41341L8.07694 1.22084Z" fill="currentColor"></path>
                            </svg></router-link></span>
                            <span class="white">Course Grid</span>
                         </div>
 
                         <div class="tp-course-details-2-header">
                            <h3 class="tp-course-details-3-title">{{course.course_title}}</h3>
                            <div class="tp-course-details-3-meta-wrapper d-flex align-items-center flex-wrap">
                               <div class="tp-course-details-2-meta ">
                                  <div class="tp-course-details-2-author d-flex align-items-center">
                                     <div class="tp-course-details-2-author-avater">
                                        <img :src="course.teacher_photo_url" alt="Salim Rana">
                                     </div>
                                     <div class="tp-course-details-2-author-content">
                                        <span class="tp-course-details-2-author-designation">Teacher</span>
                                        <h3 class="tp-course-details-2-meta-title"><a href="#">{{course.teacher_name}}</a></h3>
                                     </div>
                                  </div>
                               </div>
                               <div class="tp-course-details-2-meta">
                                  <span class="tp-course-details-2-meta-subtitle">Category</span>
                                  <h3 class="tp-course-details-2-meta-title">{{course.category}}</h3>
                               </div>
                               <div class="tp-course-details-2-meta text-end">
                                  <div class="tp-course-details-2-meta-rating-wrapper">
                                     <div class="tp-course-rating-icon">
                                       <span><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.9096 8.4086C10.7321 8.58376 10.6505 8.83708 10.691 9.08551L11.3002 12.5189C11.3516 12.8099 11.231 13.1044 10.9918 13.2726C10.7575 13.4471 10.4456 13.468 10.19 13.3284L7.1547 11.7164C7.04916 11.6592 6.93197 11.6285 6.81204 11.625H6.62632C6.5619 11.6348 6.49885 11.6557 6.44128 11.6878L3.40529 13.3075C3.25521 13.3843 3.08525 13.4115 2.91871 13.3843C2.513 13.3061 2.2423 12.9125 2.30877 12.4973L2.91871 9.06388C2.95915 8.81335 2.87759 8.55864 2.70009 8.38068L0.225387 5.93822C0.0184187 5.73375 -0.0535404 5.42669 0.0410344 5.14965C0.132868 4.8733 0.367249 4.67162 0.650288 4.62626L4.05635 4.12311C4.3154 4.0959 4.54293 3.93539 4.65944 3.69812L6.1603 0.564786C6.19593 0.495001 6.24185 0.430799 6.29736 0.376367L6.35904 0.327518C6.39125 0.29123 6.42826 0.261222 6.46938 0.236797L6.54408 0.208884L6.66058 0.160034H6.94911C7.20679 0.18725 7.43363 0.344266 7.55219 0.578743L9.07293 3.69812C9.18258 3.92632 9.39572 4.08473 9.64175 4.12311L13.0478 4.62626C13.3356 4.66813 13.5762 4.87051 13.6715 5.14965C13.7612 5.42949 13.6838 5.73654 13.4727 5.93822L10.9096 8.4086Z" fill="#FBFF50"/>
                                        </svg>
                                        </span>
                                       <span><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.9096 8.4086C10.7321 8.58376 10.6505 8.83708 10.691 9.08551L11.3002 12.5189C11.3516 12.8099 11.231 13.1044 10.9918 13.2726C10.7575 13.4471 10.4456 13.468 10.19 13.3284L7.1547 11.7164C7.04916 11.6592 6.93197 11.6285 6.81204 11.625H6.62632C6.5619 11.6348 6.49885 11.6557 6.44128 11.6878L3.40529 13.3075C3.25521 13.3843 3.08525 13.4115 2.91871 13.3843C2.513 13.3061 2.2423 12.9125 2.30877 12.4973L2.91871 9.06388C2.95915 8.81335 2.87759 8.55864 2.70009 8.38068L0.225387 5.93822C0.0184187 5.73375 -0.0535404 5.42669 0.0410344 5.14965C0.132868 4.8733 0.367249 4.67162 0.650288 4.62626L4.05635 4.12311C4.3154 4.0959 4.54293 3.93539 4.65944 3.69812L6.1603 0.564786C6.19593 0.495001 6.24185 0.430799 6.29736 0.376367L6.35904 0.327518C6.39125 0.29123 6.42826 0.261222 6.46938 0.236797L6.54408 0.208884L6.66058 0.160034H6.94911C7.20679 0.18725 7.43363 0.344266 7.55219 0.578743L9.07293 3.69812C9.18258 3.92632 9.39572 4.08473 9.64175 4.12311L13.0478 4.62626C13.3356 4.66813 13.5762 4.87051 13.6715 5.14965C13.7612 5.42949 13.6838 5.73654 13.4727 5.93822L10.9096 8.4086Z" fill="#FBFF50"/>
                                        </svg>
                                        </span>
                                       <span><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.9096 8.4086C10.7321 8.58376 10.6505 8.83708 10.691 9.08551L11.3002 12.5189C11.3516 12.8099 11.231 13.1044 10.9918 13.2726C10.7575 13.4471 10.4456 13.468 10.19 13.3284L7.1547 11.7164C7.04916 11.6592 6.93197 11.6285 6.81204 11.625H6.62632C6.5619 11.6348 6.49885 11.6557 6.44128 11.6878L3.40529 13.3075C3.25521 13.3843 3.08525 13.4115 2.91871 13.3843C2.513 13.3061 2.2423 12.9125 2.30877 12.4973L2.91871 9.06388C2.95915 8.81335 2.87759 8.55864 2.70009 8.38068L0.225387 5.93822C0.0184187 5.73375 -0.0535404 5.42669 0.0410344 5.14965C0.132868 4.8733 0.367249 4.67162 0.650288 4.62626L4.05635 4.12311C4.3154 4.0959 4.54293 3.93539 4.65944 3.69812L6.1603 0.564786C6.19593 0.495001 6.24185 0.430799 6.29736 0.376367L6.35904 0.327518C6.39125 0.29123 6.42826 0.261222 6.46938 0.236797L6.54408 0.208884L6.66058 0.160034H6.94911C7.20679 0.18725 7.43363 0.344266 7.55219 0.578743L9.07293 3.69812C9.18258 3.92632 9.39572 4.08473 9.64175 4.12311L13.0478 4.62626C13.3356 4.66813 13.5762 4.87051 13.6715 5.14965C13.7612 5.42949 13.6838 5.73654 13.4727 5.93822L10.9096 8.4086Z" fill="#FBFF50"/>
                                        </svg>
                                        </span>
                                       <span><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.9096 8.4086C10.7321 8.58376 10.6505 8.83708 10.691 9.08551L11.3002 12.5189C11.3516 12.8099 11.231 13.1044 10.9918 13.2726C10.7575 13.4471 10.4456 13.468 10.19 13.3284L7.1547 11.7164C7.04916 11.6592 6.93197 11.6285 6.81204 11.625H6.62632C6.5619 11.6348 6.49885 11.6557 6.44128 11.6878L3.40529 13.3075C3.25521 13.3843 3.08525 13.4115 2.91871 13.3843C2.513 13.3061 2.2423 12.9125 2.30877 12.4973L2.91871 9.06388C2.95915 8.81335 2.87759 8.55864 2.70009 8.38068L0.225387 5.93822C0.0184187 5.73375 -0.0535404 5.42669 0.0410344 5.14965C0.132868 4.8733 0.367249 4.67162 0.650288 4.62626L4.05635 4.12311C4.3154 4.0959 4.54293 3.93539 4.65944 3.69812L6.1603 0.564786C6.19593 0.495001 6.24185 0.430799 6.29736 0.376367L6.35904 0.327518C6.39125 0.29123 6.42826 0.261222 6.46938 0.236797L6.54408 0.208884L6.66058 0.160034H6.94911C7.20679 0.18725 7.43363 0.344266 7.55219 0.578743L9.07293 3.69812C9.18258 3.92632 9.39572 4.08473 9.64175 4.12311L13.0478 4.62626C13.3356 4.66813 13.5762 4.87051 13.6715 5.14965C13.7612 5.42949 13.6838 5.73654 13.4727 5.93822L10.9096 8.4086Z" fill="#FBFF50"/>
                                        </svg>
                                        </span>
                                       <span><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.9096 8.4086C10.7321 8.58376 10.6505 8.83708 10.691 9.08551L11.3002 12.5189C11.3516 12.8099 11.231 13.1044 10.9918 13.2726C10.7575 13.4471 10.4456 13.468 10.19 13.3284L7.1547 11.7164C7.04916 11.6592 6.93197 11.6285 6.81204 11.625H6.62632C6.5619 11.6348 6.49885 11.6557 6.44128 11.6878L3.40529 13.3075C3.25521 13.3843 3.08525 13.4115 2.91871 13.3843C2.513 13.3061 2.2423 12.9125 2.30877 12.4973L2.91871 9.06388C2.95915 8.81335 2.87759 8.55864 2.70009 8.38068L0.225387 5.93822C0.0184187 5.73375 -0.0535404 5.42669 0.0410344 5.14965C0.132868 4.8733 0.367249 4.67162 0.650288 4.62626L4.05635 4.12311C4.3154 4.0959 4.54293 3.93539 4.65944 3.69812L6.1603 0.564786C6.19593 0.495001 6.24185 0.430799 6.29736 0.376367L6.35904 0.327518C6.39125 0.29123 6.42826 0.261222 6.46938 0.236797L6.54408 0.208884L6.66058 0.160034H6.94911C7.20679 0.18725 7.43363 0.344266 7.55219 0.578743L9.07293 3.69812C9.18258 3.92632 9.39572 4.08473 9.64175 4.12311L13.0478 4.62626C13.3356 4.66813 13.5762 4.87051 13.6715 5.14965C13.7612 5.42949 13.6838 5.73654 13.4727 5.93822L10.9096 8.4086Z" fill="#FBFF50"/>
                                        </svg>
                                        </span>
                                     </div>
                                     <span class="tp-course-details-2-meta-subtitle">Review</span>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
 
                   <div class="col-lg-5">
                      <div class="tp-course-details-3-widget">
                         <div class="tp-course-details-2-widget-thumb p-relative">
                            <img :src="course.course_image_url" alt="">
                         </div>
                         <div class="tp-course-details-3-widget-content">
                                  <div class="tp-contact-input-form">
                                     <div class="row">
                                        <div class="tp-contact-btn text-center mt-5">
                                           <router-link class="tp-btn-inner" to="/contact-us">Book Now</router-link>
                                        </div>
                                     </div>
                                  </div>
                         </div>
                      </div>
                   </div>
                   <div class="col-lg-7">
                      <div class="tp-course-details-3-list">
                         <div class="tp-course-details-3-list-item d-flex align-items-center justify-content-between">
                            <span>Duration of course</span>
                            <span class="width">{{course.duration}}</span>
                         </div>
                         <div class="tp-course-details-3-list-item d-flex align-items-center justify-content-between">
                            <span>Level</span>
                            <span class="width">Beginner</span>
                         </div>
                         <div class="tp-course-details-3-list-item d-flex align-items-center justify-content-between">
                            <span>Start Date</span>
                            <span class="width">{{course.date}}</span>
                         </div>
                         <div class="tp-course-details-3-list-item d-flex align-items-center justify-content-between">
                            <span>Certificate after completing</span>
                            <span><svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                               <path d="M13 1L4.75 9.25L1 5.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                             </svg></span>
                         </div>
                      </div>
 
                      <div class="tp-course-details-3-main">
                         <div class="tp-course-details-2-nav d-flex align-items-center">
                            <nav>
                               <ul id="course_details2_nav">
                                  <li class=""><a href="#info">Course Info</a></li>
                                  <li class=""><a href="#instructors">Instructors</a></li>
                               </ul>
                            </nav>
                         </div>
 
                         <div class="tp-course-details-2-content">
                            <div id="info">
                               <h4 class="tp-course-details-2-main-title">About Course</h4>
                               <div class="tp-course-details-2-text mb-60">
                                 <p>{{course.course_description}}</p>
                               </div>
                               <h4 class="tp-course-details-2-main-title">What will you Learn?</h4>
                               <div class="tp-course-details-2-list">
                                  <ul>
                                    {{course.course_tips}}
                                  </ul>
                               </div>
                            </div>
 
                            <div id="instructors" class="pt-100">
                               <h4 class="tp-course-details-2-main-title">Your Instructors</h4>
                               <div class="tp-course-details-2-instructor d-flex">
                                  <div class="tp-course-details-2-author-avater mr-40">
                                     <img :src="course.teacher_photo_url" alt="">
                                  </div>
                                  <div class="tp-course-details-2-instructor-content">
                                     <h5>{{course.teacher_name}}</h5>
                                     <div class="tp-course-details-2-instructor-sub d-flex">
                                        <span><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                           <path d="M11.9376 8.84884C11.7434 9.03675 11.6541 9.3085 11.6984 9.57502L12.365 13.2583C12.4213 13.5705 12.2893 13.8864 12.0276 14.0668C11.7711 14.254 11.4299 14.2764 11.1502 14.1267L7.82888 12.3974C7.7134 12.336 7.58517 12.303 7.45393 12.2993H7.25071C7.18022 12.3098 7.11123 12.3322 7.04824 12.3667L3.72617 14.1042C3.56194 14.1866 3.37597 14.2158 3.19374 14.1866C2.7498 14.1027 2.45359 13.6805 2.52633 13.2351L3.19374 9.55181C3.23798 9.28305 3.14875 9.0098 2.95452 8.8189L0.246625 6.19868C0.0201542 5.97933 -0.0585855 5.64993 0.044901 5.35273C0.145388 5.05627 0.401854 4.83991 0.711564 4.79125L4.43858 4.25149C4.72204 4.22229 4.97101 4.0501 5.09849 3.79557L6.74078 0.434207C6.77977 0.359344 6.83001 0.29047 6.89076 0.232076L6.95825 0.179672C6.99349 0.140743 7.03399 0.108552 7.07898 0.0823496L7.16072 0.0524043L7.2882 0H7.60391C7.88588 0.0291967 8.13409 0.197639 8.26383 0.44918L9.92786 3.79557C10.0478 4.04037 10.2811 4.21031 10.5503 4.25149L14.2773 4.79125C14.5922 4.83617 14.8555 5.05327 14.9597 5.35273C15.0579 5.65293 14.9732 5.98233 14.7422 6.19868L11.9376 8.84884Z" fill="#FFB21D" />
                                         </svg> 4.4 Rating</span>
                                     </div>
                                     <div class="tp-course-details-2-instructor-text">
                                        <p>I am also the founder of a large local design organization, Salt Lake <br>
                                           Designers, where I and other local influencers help cultivate the talents <br>
                                           of up and coming UX designers through workshops and panel discussions.</p>
                                        <p>Undon Xie is a brilliant educator, whose life was spent for computer <br>
                                           science and love of nature.</p>
                                     </div>
                                     <div class="tp-course-details-2-instructor-social">
                                        <a href="#"><span><svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                           <path fill-rule="evenodd" clip-rule="evenodd" d="M2.26878 7.01266C1.63274 7.01266 1.5 7.13497 1.5 7.721V8.7835C1.5 9.36953 1.63274 9.49183 2.26878 9.49183H3.80635V13.7418C3.80635 14.3279 3.9391 14.4502 4.57514 14.4502H6.11271C6.74875 14.4502 6.88149 14.3279 6.88149 13.7418V9.49183H8.60795C9.09034 9.49183 9.21464 9.40544 9.34716 8.97809L9.67664 7.91559C9.90365 7.18353 9.76376 7.01266 8.93743 7.01266H6.88149V5.24183C6.88149 4.85063 7.22569 4.5335 7.65028 4.5335H9.83836C10.4744 4.5335 10.6071 4.41119 10.6071 3.82516V2.4085C10.6071 1.82247 10.4744 1.70016 9.83836 1.70016H7.65028C5.52734 1.70016 3.80635 3.28582 3.80635 5.24183V7.01266H2.26878Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                                         </svg></span></a>
                                        <a href="#"><span>
                                           <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M1.0957 7.65019C1.0957 4.84534 1.0957 3.44291 1.96706 2.57155C2.83842 1.7002 4.24085 1.7002 7.0457 1.7002C9.85056 1.7002 11.253 1.7002 12.1243 2.57155C12.9957 3.44291 12.9957 4.84534 12.9957 7.65019C12.9957 10.4551 12.9957 11.8575 12.1243 12.7288C11.253 13.6002 9.85056 13.6002 7.0457 13.6002C4.24085 13.6002 2.83842 13.6002 1.96706 12.7288C1.0957 11.8575 1.0957 10.4551 1.0957 7.65019Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                                              <path d="M9.86145 7.65045C9.86145 9.20702 8.5996 10.4689 7.04303 10.4689C5.48646 10.4689 4.22461 9.20702 4.22461 7.65045C4.22461 6.09388 5.48646 4.83203 7.04303 4.83203C8.5996 4.83203 9.86145 6.09388 9.86145 7.65045Z" stroke="currentColor" stroke-width="1.5" />
                                              <path d="M10.4941 4.20557L10.4852 4.20557" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </span></a>
                                        <a href="#"><span>
                                           <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M14.2578 1.60544C13.7028 1.99691 13.0884 2.29632 12.438 2.49214C12.089 2.09081 11.6251 1.80636 11.1092 1.67726C10.5932 1.54816 10.05 1.58063 9.55311 1.77029C9.0562 1.95995 8.62952 2.29765 8.33079 2.7377C8.03206 3.17776 7.87568 3.69895 7.88281 4.23078V4.81032C6.86434 4.83673 5.85514 4.61085 4.9451 4.1528C4.03506 3.69474 3.25243 3.01874 2.6669 2.18498C2.6669 2.18498 0.348722 7.40089 5.56463 9.71907C4.37107 10.5293 2.94923 10.9355 1.50781 10.8782C6.72372 13.7759 13.0987 10.8782 13.0987 4.21339C13.0982 4.05196 13.0827 3.89093 13.0524 3.73237C13.6438 3.14905 14.0612 2.41258 14.2578 1.60544Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </span></a>
                                        <a href="#"><span>
                                           <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M7.27344 12.3997C8.42711 12.3997 9.53344 12.2857 10.5588 12.0767C11.8394 11.8156 12.4798 11.6851 13.0641 10.9338C13.6484 10.1825 13.6484 9.32007 13.6484 7.59517V6.36665C13.6484 4.64175 13.6484 3.77931 13.0641 3.02801C12.4798 2.27672 11.8394 2.14619 10.5588 1.88514C9.53344 1.67613 8.42711 1.56216 7.27344 1.56216C6.11976 1.56216 5.01343 1.67613 3.98812 1.88514C2.70744 2.14619 2.06711 2.27672 1.48277 3.02801C0.898438 3.77931 0.898438 4.64175 0.898438 6.36665V7.59517C0.898438 9.32007 0.898438 10.1825 1.48277 10.9338C2.06711 11.6851 2.70744 11.8156 3.98812 12.0767C5.01343 12.2857 6.11976 12.3997 7.27344 12.3997Z" stroke="currentColor" stroke-width="1.5" />
                                              <path d="M9.80164 7.18071C9.70704 7.56693 9.20365 7.84432 8.19688 8.3991C7.1019 9.00247 6.55441 9.30416 6.11094 9.18793C5.96074 9.14857 5.82241 9.07935 5.70625 8.98544C5.36328 8.70816 5.36328 8.13252 5.36328 6.98125C5.36328 5.82998 5.36328 5.25434 5.70625 4.97706C5.82241 4.88315 5.96074 4.81393 6.11094 4.77457C6.55441 4.65834 7.1019 4.96003 8.19688 5.5634C9.20365 6.11818 9.70704 6.39557 9.80164 6.78179C9.83383 6.9132 9.83383 7.0493 9.80164 7.18071Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                                            </svg>
                                        </span></a>
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


          <!-- course details area start -->
        <section class="tp-course-details-2-related-area pb-80">
            <div class="container">
               <div class="tp-course-details-2-related-border"></div>
               <div class="row">
                  <div class="col-lg-12">
                     <div class="tp-course-details-2-related-heading pt-80">
                        <h3 class="tp-course-details-2-related-title">Related Courses</h3>
                        <p>10,000+ unique online course list designs</p>
                     </div>
                  </div>
               </div>
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
        </section>
          <!-- course details area end -->


      <Footer/>      

</template>
 
 <script setup>
 
import Header from '../frontend/Header.vue'
import Footer from '../frontend/Footer.vue'

 </script>

<script>
export default {
  data() {
    return {
      CoursesList: [], 
      ReviewsList: [],
      course: [],
      setting: [],
      courseId: this.$route.params.id,
    };
  },
  created() {
   this.fetchSettingDetails();
   this.fetchCourseDetails();
  },
  computed: {
    backgroundStyle() {
      return {
        backgroundImage: `url(${this.backgroundImage})`,
        backgroundSize: 'cover', // Ensures the image covers the section
        backgroundPosition: 'center', // Centers the image
        backgroundRepeat: 'no-repeat', // Prevents the image from repeating
      };
    },
   },

   mounted() {
    this.getCourses();
    this.getReviews();
  },
  methods: {
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
    async fetchCourseDetails() {
      try {
        const response = await fetch(`/api/get_course/${this.courseId}`);
        const result = await response.json();
        
        if (result.status === 200) {
          this.course = result.data;
          console.log("Teacher Photo URL:", this.course.teacher_photo_url);
        } else {
          console.error(result.message);
          // Handle the error accordingly
        }
      } catch (error) {
        console.error('Error fetching course details:', error);
        // Handle the error accordingly
      }
    },
  },
};
</script>
  
   