<template>
   <Header/>
 
   <section class="tp-breadcrumb__area pt-30 pb-90 p-relative z-index-1" >
     <div class="tp-breadcrumb__bg details3" :style="{backgroundImage: `url(${course.course_image_url})`}"></div>
     <div class="container current">
       <div class="row">
         <div class="col-sm-12">
           <div class="tp-breadcrumb__content">
             <div class="tp-breadcrumb__list inner-after">
               <span class="white"><router-link to="/">Home</router-link></span>
               <span class="white"><router-link to="/courses">Courses</router-link></span>
             </div>
 
             <div class="tp-course-details-2-header ">
               <h3 class="tp-course-details-3-title">{{ course.course_title }}</h3>
               <div class="tp-course-details-3-meta-wrapper d-flex align-items-center flex-wrap">
                 <div class="tp-course-details-2-meta">
                   <div class="tp-course-details-2-author d-flex align-items-center">
                     <div class="tp-course-details-2-author-avater">
                       <img :src="course.teacher_photo_url" alt="Teacher Photo">
                     </div>
                     <div class="tp-course-details-2-author-content">
                       <span class="tp-course-details-2-author-designation">Teacher</span>
                       <h3 class="tp-course-details-2-meta-title"><a href="#">{{ course.teacher_name }}</a></h3>
                     </div>
                   </div>
                 </div>
                 <div class="tp-course-details-2-meta">
                   <span class="tp-course-details-2-meta-subtitle">Category</span>
                   <h3 class="tp-course-details-2-meta-title">{{ course.category }}</h3>
                 </div>
                 <div class="tp-course-details-2-meta text-end">
                   <span class="tp-course-details-2-meta-subtitle">Review</span>
                   <div class="tp-course-rating-star">
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
             </div>
           </div>
         </div>
       
         <div class="col-lg-5 ">
           <div class="tp-course-details-3-widget">
             <div class="tp-course-details-2-widget-thumb p-relative">
               <img :src="course.course_image_url" alt="Course Image">
             </div>
             <div class="tp-course-details-3-widget-content">
               <div class="tp-contact-input-form">
                 <div class="row">
                   <div class="tp-contact-btn text-center ">
                     <router-link class="tp-btn-inner" to="/contact-us">Book Now</router-link>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
 
         <div class="col-lg-7 ">
           <div class="tp-course-details-3-list">
             <div class="tp-course-details-3-list-item d-flex align-items-center justify-content-between">
               <span>Duration of course</span>
               <span class="width">{{ course.duration }}</span>
             </div>
             <div class="tp-course-details-3-list-item d-flex align-items-center justify-content-between">
               <span>Level</span>
               <span class="width">Beginner</span>
             </div>
             <div class="tp-course-details-3-list-item d-flex align-items-center justify-content-between">
               <span>Start Date</span>
               <span class="width">{{ course.date }}</span>
             </div>
             <div class="tp-course-details-3-list-item d-flex align-items-center justify-content-between">
                  <span>Certificate after completing</span>
                  <span class="width">Yes</span>
             </div>
           </div>
 
           <div class="tp-course-details-3-main ">
             <div class="tp-course-details-2-nav d-flex align-items-center">
               <nav>
                 <ul id="course_details2_nav">
                   <li><a href="#info">Course Info</a></li>
                   <li><a href="#instructors">Instructors</a></li>
                 </ul>
               </nav>
             </div>
 
             <div class="tp-course-details-2-content">
               <div id="info">
                 <h4 class="tp-course-details-2-main-title">About Course</h4>
                 <div class="tp-course-details-2-text mb-60">
                   <p v-html="course.course_description"></p>
                 </div>
                 <h4 class="tp-course-details-2-main-title">What will you Learn?</h4>
                 <div class="tp-course-details-2-list">
                   <ul v-html="course.course_tips"></ul>
                 </div>
               </div>
 
               <div id="instructors" class="pt-100">
                 <h4 class="tp-course-details-2-main-title">Your Instructors</h4>
                 <div class="tp-course-details-2-instructor d-flex">
                   <div class="tp-course-details-2-author-avater mr-40">
                     <img :src="course.teacher_photo_url" alt="Instructor Image">
                   </div>
                   <div class="tp-course-details-2-instructor-content">
                     <h5>{{ course.teacher_name }}</h5>
                     <div class="tp-course-details-2-instructor-sub d-flex">
                       <span><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M11.9376 8.84884C11.7434 9.03675 11.6541 9.3085 11.6984 9.57502L12.365 13.2583C12.4213 13.5705 12.2893 13.8864 12.0276 14.0668C11.7711 14.254 11.4299 14.2764 11.1502 14.1267L7.82888 12.3974C7.7134 12.336 7.58517 12.303 7.45393 12.2993H7.25071C7.18022 12.3098 7.11123 12.3322 7.04824 12.3667L3.72617 14.1042C3.56194 14.1866 3.37597 14.2158 3.19374 14.1866C2.7498 14.1027 2.45359 13.6805 2.52633 13.2351L3.19374 9.55181C3.23798 9.28305 3.14875 9.0098 2.95452 8.8189L0.246625 6.19868C0.0201542 5.97933 -0.0585855 5.64993 0.044901 5.35273C0.145388 5.05627 0.401854 4.83991 0.711564 4.79125L4.43858 4.25149C4.72204 4.22229 4.97101 4.0501 5.09849 3.79557L6.74078 0.434207C6.77977 0.359344 6.83001 0.29047 6.89076 0.232076L6.95825 0.179672C6.99349 0.140743 7.03399 0.108552 7.07898 0.0823496L7.16072 0.0524043L7.2882 0H7.60391C7.88588 0.0291967 8.13409 0.197639 8.26383 0.44918L9.92786 3.79557C10.0478 4.04037 10.2811 4.21031 10.5503 4.25149L14.2773 4.79125C14.5922 4.83617 14.8555 5.05327 14.9597 5.35273C15.0579 5.65293 14.9732 5.98233 14.7422 6.19868L11.9376 8.84884Z" fill="#FFB21D" />
                       </svg> 4.4 Rating</span>
                     </div>
                     <div class="tp-course-details-2-instructor-text">
                       <p v-html="course.teacher_summary"></p>
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
 
   <section class="tp-course-details-2-related-area pb-80">
     <div class="container">
       <div class="tp-course-details-2-related-heading pt-80">
         <h3 class="tp-course-details-2-related-title">Related Courses</h3>
         <p>10,000+ unique online course list designs</p>
       </div>
       <div class="row">
         <div v-for="(item, index) in CoursesList" :key="index" class="col-lg-4 col-md-6">
           <div class="tp-course-item p-relative fix mb-30">
             <div class="tp-course-thumb">
               <a :href="`/course-details/${item.id} `">
                 <img class="course-pink" :src="item.course_image_url" alt="Course Image">
               </a>
             </div>
             <div class="tp-course-content">
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
                   {{ item.duration }} 
                 </span>
                 <span>
                   <span>
                     <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M6.57134 7.5C8.36239 7.5 9.81432 6.04493 9.81432 4.25C9.81432 2.45507 8.36239 1 6.57134 1C4.7803 1 3.32837 2.45507 3.32837 4.25C3.32837 6.04493 4.7803 7.5 6.57134 7.5Z" stroke="#94928E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                       <path d="M12.1426 14C12.1426 11.4845 9.64553 9.44995 6.57119 9.44995C3.49684 9.44995 0.999756 11.4845 0.999756 14" stroke="#94928E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                     </svg>
                   </span>
                   {{ item.date }}
                 </span>
               </div>
               <h4 class="tp-course-title">
                 <a :href="`/course-details/${item.id}`">{{ item.course_title }}</a>
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
           </div>
         </div>
       </div>
     </div>
   </section>
 
   <Footer/>      
 </template>
 
 <script setup>
 import Header from '../frontend/Header.vue';
 import Footer from '../frontend/Footer.vue';
 import { ref, onMounted } from 'vue';
 import axios from 'axios';
 import { useRoute } from 'vue-router';

 const route = useRoute();
 const CoursesList = ref([]);
 const course = ref({});
 const setting = ref({});
 const courseId = ref(route.params.id);
 
 onMounted(async () => {
  await fetchSettingDetails(); // Fetch settings when the component mounts
  await fetchCourseDetails(); // Fetch the course details when the component mounts
  getCourses();
});
 
 // Fetch Course Details
 const fetchCourseDetails = async () => {
   try {
     const response = await fetch(`/api/get_course/${courseId.value}`);
     const result = await response.json();
     if (result.status === 200) {
       course.value = result.data;
     } else {
       console.error(result.message);
     }
   } catch (error) {
     console.error('Error fetching course details:', error);
   }
 };

 const fetchSettingDetails = async () => {
  try {
    const response = await fetch('/api/get_setting/1');
    const result = await response.json();
    if (result.status === 200) {
      setting.value = result.data; // Assign the fetched data to settings
    } else {
       console.error(result.message);
     }
  } catch (error) {
    console.error('Error fetching setting details:', error);
  }
};
 
 // Fetch Related Courses
 const getCourses = async () => {
   try {
     const response = await axios.get('/api/get_courses');
     if (response.data.status === 200) {
       CoursesList.value = response.data.data;
     }
   } catch (error) {
     console.error('Error fetching courses:', error);
   }
 };

 </script>
    