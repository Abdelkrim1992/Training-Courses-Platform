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
 

                            <div class="tp-course-details-2-widget-btn">

                               <a class="active" href="#talk">Reserve Now</a>
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
                                  <li class=""><a href="#reviews">Reviews</a></li>
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
 
                            <h4 class="tp-course-details-2-main-title mt-50">Write a Review</h4>
                            <div class="tp-course-details-2-comment-box pr-25">
                               <span>What is it like to Course?</span>
                               <div class="tp-course-details-2-comment-star">
                                  <span><svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                     <path d="M10.0534 7.46476C9.88979 7.62328 9.81464 7.85253 9.8519 8.07736L10.4133 11.1845C10.4607 11.4479 10.3495 11.7144 10.1291 11.8666C9.91316 12.0245 9.62581 12.0434 9.39024 11.9171L6.59317 10.4582C6.49591 10.4065 6.38792 10.3787 6.2774 10.3755H6.10625C6.04689 10.3844 5.98879 10.4033 5.93574 10.4324L3.13803 11.8982C2.99972 11.9676 2.8431 11.9923 2.68964 11.9676C2.31577 11.8969 2.06631 11.5407 2.12757 11.1649L2.68964 8.05778C2.7269 7.83106 2.65174 7.60054 2.48818 7.4395L0.207697 5.22912C0.0169731 5.04408 -0.0493383 4.76621 0.0378138 4.51549C0.12244 4.2654 0.338425 4.08289 0.59925 4.04184L3.73799 3.5865C3.97671 3.56187 4.18638 3.41661 4.29374 3.20189L5.67681 0.366291C5.70965 0.303138 5.75196 0.245036 5.80311 0.195776L5.85995 0.151569C5.88963 0.118729 5.92374 0.0915728 5.96163 0.069469L6.03047 0.0442076L6.13783 0H6.40371C6.64116 0.0246299 6.8502 0.166726 6.95946 0.378922L8.36084 3.20189C8.46188 3.4084 8.65829 3.55176 8.88501 3.5865L12.0238 4.04184C12.289 4.07973 12.5107 4.26287 12.5984 4.51549C12.6812 4.76873 12.6098 5.04661 12.4153 5.22912L10.0534 7.46476Z" fill="#FFB21D" />
                                     </svg></span>
                                  <span><svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                     <path d="M10.0534 7.46476C9.88979 7.62328 9.81464 7.85253 9.8519 8.07736L10.4133 11.1845C10.4607 11.4479 10.3495 11.7144 10.1291 11.8666C9.91316 12.0245 9.62581 12.0434 9.39024 11.9171L6.59317 10.4582C6.49591 10.4065 6.38792 10.3787 6.2774 10.3755H6.10625C6.04689 10.3844 5.98879 10.4033 5.93574 10.4324L3.13803 11.8982C2.99972 11.9676 2.8431 11.9923 2.68964 11.9676C2.31577 11.8969 2.06631 11.5407 2.12757 11.1649L2.68964 8.05778C2.7269 7.83106 2.65174 7.60054 2.48818 7.4395L0.207697 5.22912C0.0169731 5.04408 -0.0493383 4.76621 0.0378138 4.51549C0.12244 4.2654 0.338425 4.08289 0.59925 4.04184L3.73799 3.5865C3.97671 3.56187 4.18638 3.41661 4.29374 3.20189L5.67681 0.366291C5.70965 0.303138 5.75196 0.245036 5.80311 0.195776L5.85995 0.151569C5.88963 0.118729 5.92374 0.0915728 5.96163 0.069469L6.03047 0.0442076L6.13783 0H6.40371C6.64116 0.0246299 6.8502 0.166726 6.95946 0.378922L8.36084 3.20189C8.46188 3.4084 8.65829 3.55176 8.88501 3.5865L12.0238 4.04184C12.289 4.07973 12.5107 4.26287 12.5984 4.51549C12.6812 4.76873 12.6098 5.04661 12.4153 5.22912L10.0534 7.46476Z" fill="#FFB21D" />
                                     </svg></span>
                                  <span><svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                     <path d="M10.0534 7.46476C9.88979 7.62328 9.81464 7.85253 9.8519 8.07736L10.4133 11.1845C10.4607 11.4479 10.3495 11.7144 10.1291 11.8666C9.91316 12.0245 9.62581 12.0434 9.39024 11.9171L6.59317 10.4582C6.49591 10.4065 6.38792 10.3787 6.2774 10.3755H6.10625C6.04689 10.3844 5.98879 10.4033 5.93574 10.4324L3.13803 11.8982C2.99972 11.9676 2.8431 11.9923 2.68964 11.9676C2.31577 11.8969 2.06631 11.5407 2.12757 11.1649L2.68964 8.05778C2.7269 7.83106 2.65174 7.60054 2.48818 7.4395L0.207697 5.22912C0.0169731 5.04408 -0.0493383 4.76621 0.0378138 4.51549C0.12244 4.2654 0.338425 4.08289 0.59925 4.04184L3.73799 3.5865C3.97671 3.56187 4.18638 3.41661 4.29374 3.20189L5.67681 0.366291C5.70965 0.303138 5.75196 0.245036 5.80311 0.195776L5.85995 0.151569C5.88963 0.118729 5.92374 0.0915728 5.96163 0.069469L6.03047 0.0442076L6.13783 0H6.40371C6.64116 0.0246299 6.8502 0.166726 6.95946 0.378922L8.36084 3.20189C8.46188 3.4084 8.65829 3.55176 8.88501 3.5865L12.0238 4.04184C12.289 4.07973 12.5107 4.26287 12.5984 4.51549C12.6812 4.76873 12.6098 5.04661 12.4153 5.22912L10.0534 7.46476Z" fill="#FFB21D" />
                                     </svg></span>
                                  <span><svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                     <path d="M10.0534 7.46476C9.88979 7.62328 9.81464 7.85253 9.8519 8.07736L10.4133 11.1845C10.4607 11.4479 10.3495 11.7144 10.1291 11.8666C9.91316 12.0245 9.62581 12.0434 9.39024 11.9171L6.59317 10.4582C6.49591 10.4065 6.38792 10.3787 6.2774 10.3755H6.10625C6.04689 10.3844 5.98879 10.4033 5.93574 10.4324L3.13803 11.8982C2.99972 11.9676 2.8431 11.9923 2.68964 11.9676C2.31577 11.8969 2.06631 11.5407 2.12757 11.1649L2.68964 8.05778C2.7269 7.83106 2.65174 7.60054 2.48818 7.4395L0.207697 5.22912C0.0169731 5.04408 -0.0493383 4.76621 0.0378138 4.51549C0.12244 4.2654 0.338425 4.08289 0.59925 4.04184L3.73799 3.5865C3.97671 3.56187 4.18638 3.41661 4.29374 3.20189L5.67681 0.366291C5.70965 0.303138 5.75196 0.245036 5.80311 0.195776L5.85995 0.151569C5.88963 0.118729 5.92374 0.0915728 5.96163 0.069469L6.03047 0.0442076L6.13783 0H6.40371C6.64116 0.0246299 6.8502 0.166726 6.95946 0.378922L8.36084 3.20189C8.46188 3.4084 8.65829 3.55176 8.88501 3.5865L12.0238 4.04184C12.289 4.07973 12.5107 4.26287 12.5984 4.51549C12.6812 4.76873 12.6098 5.04661 12.4153 5.22912L10.0534 7.46476Z" fill="#FFB21D" />
                                     </svg></span>
                                  <span><svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                     <path d="M10.2155 7.46476C10.0519 7.62328 9.97674 7.85253 10.014 8.07736L10.5754 11.1845C10.6228 11.4479 10.5117 11.7144 10.2913 11.8666C10.0753 12.0245 9.78792 12.0434 9.55235 11.9171L6.75528 10.4582C6.65802 10.4065 6.55003 10.3787 6.43951 10.3755H6.26836C6.209 10.3844 6.1509 10.4033 6.09785 10.4324L3.30014 11.8982C3.16183 11.9676 3.00521 11.9923 2.85175 11.9676C2.47788 11.8969 2.22842 11.5407 2.28968 11.1649L2.85175 8.05778C2.88901 7.83106 2.81385 7.60054 2.65029 7.4395L0.369807 5.22912C0.179082 5.04408 0.112771 4.76621 0.199923 4.51549C0.284549 4.2654 0.500535 4.08289 0.761359 4.04184L3.9001 3.5865C4.13882 3.56187 4.34849 3.41661 4.45585 3.20189L5.83892 0.366291C5.87176 0.303138 5.91407 0.245036 5.96522 0.195776L6.02206 0.151569C6.05174 0.118729 6.08585 0.0915728 6.12374 0.069469L6.19258 0.0442076L6.29994 0H6.56581C6.80327 0.0246299 7.01231 0.166726 7.12157 0.378922L8.52295 3.20189C8.62399 3.4084 8.8204 3.55176 9.04712 3.5865L12.1859 4.04184C12.4511 4.07973 12.6728 4.26287 12.7606 4.51549C12.8433 4.76873 12.7719 5.04661 12.5774 5.22912L10.2155 7.46476Z" fill="#BFC5CA"></path>
                                     </svg></span>
                               </div>
                               <form id="contact-form" action="https://html.hixstudio.net/acadia-prev/acadia/frontend/mail.php" method="POST">
                                  <div class="tp-contact-input-form">
                                     <div class="row">
                                        <div class="col-xl-12">
                                           <div class="tp-contact-input p-relative">
                                              <label>Review Title</label>
                                              <input type="text">
                                           </div>
                                        </div>
                                        <div class="col-xl-12">
                                           <div class="tp-contact-input p-relative">
                                              <label>Review Content</label>
                                              <textarea></textarea>
                                           </div>
                                        </div>
                                        <div class="tp-contact-btn">
                                           <button class="tp-btn-inner">Submit Review</button>
                                        </div>
                                     </div>
                                  </div>
                               </form>
                            </div>
                         </div>
 
                      </div>
                   </div>
                </div>
             </div>
      </section>


<!-- Talk area start here -->
  <section class="tp-breadcrumb__area pt-50 pb-25 mt-5"  id="talk">
   <div class="tp-breadcrumb__bg details3" ></div>
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
                  <input type="email" id="client_email" name="client_email" placeholder="Your email*" required class="text-right" />
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
 
 <script setup>
 
import Header from '../frontend/Header.vue'
 
 </script>

<script>
export default {
  data() {
    return {
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
  
   