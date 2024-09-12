<script setup>

import Layouts from '../frontend/Layouts.vue';

</script>

<script>

export default {
  data() {
    return {
      ProjectsList: [],
    };
  },
  mounted() {
    this.getProjects();
  },
  methods: {
    getProjects() {
      axios.get('/api/get_projects')
        .then((response) => {
          if (response.data.status === 200) {
            this.ProjectsList = response.data.data;
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
        <section class="tp-course-filter-area tp-course-filter-bg tp-course-filter-space p-relative">
            <div class="container">
               <div class="row">
                  <div class="col-lg-12">
                     <div class="tp-breadcrumb__content-filter mb-50">
                        <div class="tp-breadcrumb__list">
                           <span><router-link to="/"><svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.07207 0C8.19331 0 8.31107 0.0404348 8.40664 0.114882L16.1539 6.14233L15.4847 6.98713L14.5385 6.25079V12.8994C14.538 13.1843 14.4243 13.4574 14.2225 13.6589C14.0206 13.8604 13.747 13.9738 13.4616 13.9743H2.69231C2.40688 13.9737 2.13329 13.8603 1.93146 13.6588C1.72962 13.4573 1.61597 13.1843 1.61539 12.8994V6.2459L0.669148 6.98235L0 6.1376L7.7375 0.114882C7.83308 0.0404348 7.95083 0 8.07207 0ZM8.07694 1.22084L2.69231 5.40777V12.8994H13.4616V5.41341L8.07694 1.22084Z" fill="currentColor"/>
                           </svg></router-link></span>
                           <span class="color">Our Projects</span>
                        </div>
                        <h3 class="tp-breadcrumb__title">Our Projects</h3>
                        <p>Our Agency Projects</p>
                     </div>
                     
                  </div>
               </div>
            </div>
         </section>
         <!-- course filter end -->


         <!-- course filter area start -->
         <section class="tp-filter-mt pb-100">
            <div class="container">
               <div class="row">

                  <div v-for="(item, index) in ProjectsList" :key="index" class="tab-content" id="myTabContent">
                     <div class="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div class="tab-content" id="Content">
                           <div class="tab-pane fade show active" id="art-2" role="tabpanel" aria-labelledby="art-2-tab">
                              <div class="tp-course-filter-item mb-25 d-flex">
                                 <div class="tp-course-filter-thumb">
                                    <router-link :to="{ path: '/project-details/' + item.id }">
                                       <img class="course-pink" :src="item.project_image_url" alt="Project Image"  v-if="item.project_image_url">
                                    </router-link>
                                 </div>
                                 <div class="tp-course-filter-content">
                                    <div class="tp-course-filter-tag d-flex align-items-center justify-content-between mb-10">
                                       <span class="tag-span">{{item.domaine}}</span>
                                     
                                    </div>
                                    <h4 class="tp-course-filter-title ">
                                       <router-link :to="{ path: '/project-details/' + item.id }">{{item.project_name}}</router-link>
                                    </h4>
                                    <div class="tp-course-filter-p">
                                       <p>{{item.short_description}}</p>
                                    </div>
                                    <div class="tp-course-filter-pricing list d-flex align-items-center justify-content-between">
                                        
                                       <div class="tp-course-filter-btn">
                                          <router-link :to="{ path: '/project-details/' + item.id }">Learn More</router-link>
                                       </div>
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
         <!-- course filter area end -->
    </Layouts>
</template>

