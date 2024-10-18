<template>
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
               <router-link href="#" class="tp-category-item text-center mb-25 wow fadeInUp" data-wow-delay=".3s">
                  <div class="tp-course-thumb">
                     <img :src="items.service_image_url">
                  </div>
                  <div class="tp-category-content mt-20">
                     <h4 class="tp-category-title">{{items.service_title}}</h4>
                     <span >{{ items.short_description }}</span>
                  </div>
               </router-link>
            </div>
         </div>
      </div>
   </section>
<!-- category-area-end -->
</template>

<script setup>

import {ref, onMounted} from 'vue';
import axios from 'axios';

const ServicesList = ref([]);

onMounted ( async() =>{
    await getServices ();
});

const getServices = ( async() =>{
    try {
        const response = await axios.get('/api/get_services');
       if(response.data.status === 200){
        ServicesList.value = response.data.data;
       }
    } catch (error) {
        console.error('error getting services', error)
    }
});


</script>