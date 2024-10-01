<template>
   <!-- cta-area-start -->
   <section class="cta-area tp-cta-3-bg">
     <div class="container">
       <div class="row align-items-center">
         <div class="col-lg-5">
           <div class="tp-cta-3-section text-center wow fadeInLeft" data-wow-delay=".3s">
             <h3 class="tp-cta-3-title">We <br> are <br> better <br> together.</h3>
             <div class="tp-cta-3-border"></div>
             <p>Drop your contact details into the form, and <br> we’ll reach out to you!</p>
           </div>
         </div>
         <div class="col-lg-7">
           <div class="tp-cta-3-wrap wow fadeInRight" data-wow-delay=".3s">
             <h3 class="text-capitalize mb-30 text-center">Get a free consultation</h3>
 
             <!-- Success and Error Messages -->
             <div v-if="formMessage" :class="messageClass">{{ formMessage }}</div>
 
             <div class="tp-cta-3-form">
               <form @submit.prevent="add_reservation">
                 <div class="row">
                   <div class="col-md-6">
                     <div class="tp-cta-3-form-input">
                       <input type="text" v-model="formData.client_name" placeholder="Full Name">
                     </div>
                   </div>
                   <div class="col-md-6">
                     <div class="tp-cta-3-form-input">
                       <input type="text" v-model="formData.client_phone" placeholder="Phone">
                     </div>
                   </div>
                   <div class="col-md-12">
                     <div class="tp-cta-3-form-input">
                       <input type="email" v-model="formData.client_email" placeholder="Email">
                     </div>
                   </div>
 
                   <!-- Select Dropdown -->
                   <div class="col-md-12">
                     <div class="tp-cta-3-form-input">
                       <select v-model="formData.course_choosed" class="custom-select">
                         <option value="" disabled>--Please choose an option--</option>
                         <option v-for="(items, index) in CoursesList" :key="index.id" :value="items.id">
                              {{ items.course_title }}
                         </option>
                       </select>
                     </div>
                   </div>
 
                   <div class="col-md-12">
                     <div class="tp-cta-3-form-input">
                       <textarea name="message" v-model="formData.message" placeholder="Message...."></textarea>
                     </div>
                   </div>
                   <div class="tp-contact-input-form">
                     <div class="row">
                       <div class="tp-contact-btn text-center">
                         <button class="tp-btn-inner" type="submit">Send</button>
                       </div>
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
   <!-- cta-area-end -->
 </template>
 
 <script setup>
 import { ref, reactive } from 'vue';
 import { useRouter } from 'vue-router';
 import axios from 'axios';
 
 const router = useRouter();
 const formMessage = ref(null);
 const messageClass = ref('');
 
 const formData = reactive({
   client_email: '',
   client_name: '',
   client_phone: '',
   message: '',
   course_choosed: '', // For capturing selected option
 });
 
 const add_reservation = () => {
   formMessage.value = null;
   messageClass.value = '';
 
   axios.post('/api/add_reservation', formData)
     .then((response) => {
       formMessage.value = 'Your consultation request was successfully submitted!';
       messageClass.value = 'alert alert-success';
 
       formData.client_name = '';
       formData.client_email = '';
       formData.client_phone = '';
       formData.message = '';
       formData.course_choosed = '';  // Clear select input
       router.push('/');
     })
     .catch((error) => {
       formMessage.value = error.response.data.message || 'Adding reservation failed. Please try again.';
       messageClass.value = 'alert alert-danger';
     });
 };
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
 
 <style scoped>
 /* Styling the select dropdown */
 .custom-select {
   width: 100%;
   padding: 10px;
   border-radius: 5px;
   border: 1px solid #ccc;
   background-color: #fff;
   color: #333;
   font-size: 16px;
   appearance: none;
   -webkit-appearance: none;
   -moz-appearance: none;
   background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg width='14' height='12' viewBox='0 0 14 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7 12l6.938-6.938-1.313-1.313L7 9.375 1.375 3.75 0.062 5.062 7 12z' fill='%23333'/%3E%3C/svg%3E");
   background-position: right 10px center;
   background-repeat: no-repeat;
 }
 
 .custom-select:focus {
   outline: none;
   border-color: #4CAF50; /* Change border color on focus */
 }
 
 /* Adjusting for better appearance */
 .custom-select::-ms-expand {
   display: none; /* Remove the default dropdown arrow for IE */
 }
 
 .custom-select:hover {
   border-color: #999;
 }
 </style>
 