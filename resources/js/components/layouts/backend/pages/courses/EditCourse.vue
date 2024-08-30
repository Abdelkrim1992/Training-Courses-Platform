<template>
  <BackendLayouts>
    <div class="pc-container">
      <div class="pc-content">
        <div class="page-header">
          <div class="page-block">
            <div class="row align-items-center">
              <div class="col-md-12">
                <ul class="breadcrumb">
                  <li class="breadcrumb-item"><router-link to="/admin/dashboard">Home</router-link></li>
                  <li class="breadcrumb-item" aria-current="page">Add Course</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h5 class="mb-0">Course Information</h5>
              </div>
              <div class="card-body">
                <form @submit.prevent="updateCourse">
                  <div class="row">
                  <div v-if="errorMessage" class="alert alert-danger" role="alert">
                    {{ errorMessage }}
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Course Title</label>
                      <input type="text" v-model="formData.course_title" class="form-control" placeholder="Enter full name">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Category</label>
                      <input type="text" v-model="formData.category" class="form-control" placeholder="Enter full name">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Teacher Name</label>
                      <input type="text" v-model="formData.teacher_name" class="form-control" placeholder="Enter phone number">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Duration</label>
                      <input type="text" v-model="formData.duration" class="form-control" placeholder="Enter email">
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-9 col-sm-12">
                      <input type="text" class="form-control datepicker-input" id="pc-datepicker-1" placeholder="Select date"><div class="datepicker datepicker-dropdown datepicker-orient-left datepicker-orient-bottom" style="left: 25.6667px; top: 189.625px;"><div class="datepicker-picker"><div class="datepicker-header"><div class="datepicker-title" style="display: none;"></div><div class="datepicker-controls"><button type="button" class="btn prev-button prev-btn" tabindex="-1">«</button><button type="button" class="btn view-switch" tabindex="-1">July 2024</button><button type="button" class="btn next-button next-btn" tabindex="-1">»</button></div></div><div class="datepicker-main"><div class="datepicker-view"><div class="days"><div class="days-of-week"><span class="dow">Su</span><span class="dow">Mo</span><span class="dow">Tu</span><span class="dow">We</span><span class="dow">Th</span><span class="dow">Fr</span><span class="dow">Sa</span></div><div class="datepicker-grid"><span data-date="1719705600000" class="datepicker-cell day prev">30</span><span data-date="1719792000000" class="datepicker-cell day">1</span><span data-date="1719878400000" class="datepicker-cell day">2</span><span data-date="1719964800000" class="datepicker-cell day">3</span><span data-date="1720051200000" class="datepicker-cell day">4</span><span data-date="1720137600000" class="datepicker-cell day">5</span><span data-date="1720224000000" class="datepicker-cell day">6</span><span data-date="1720310400000" class="datepicker-cell day">7</span><span data-date="1720396800000" class="datepicker-cell day">8</span><span data-date="1720483200000" class="datepicker-cell day">9</span><span data-date="1720569600000" class="datepicker-cell day">10</span><span data-date="1720656000000" class="datepicker-cell day">11</span><span data-date="1720742400000" class="datepicker-cell day">12</span><span data-date="1720828800000" class="datepicker-cell day">13</span><span data-date="1720915200000" class="datepicker-cell day">14</span><span data-date="1721001600000" class="datepicker-cell day">15</span><span data-date="1721088000000" class="datepicker-cell day">16</span><span data-date="1721174400000" class="datepicker-cell day">17</span><span data-date="1721260800000" class="datepicker-cell day">18</span><span data-date="1721347200000" class="datepicker-cell day">19</span><span data-date="1721433600000" class="datepicker-cell day">20</span><span data-date="1721520000000" class="datepicker-cell day">21</span><span data-date="1721606400000" class="datepicker-cell day">22</span><span data-date="1721692800000" class="datepicker-cell day">23</span><span data-date="1721779200000" class="datepicker-cell day">24</span><span data-date="1721865600000" class="datepicker-cell day">25</span><span data-date="1721952000000" class="datepicker-cell day">26</span><span data-date="1722038400000" class="datepicker-cell day">27</span><span data-date="1722124800000" class="datepicker-cell day">28</span><span data-date="1722211200000" class="datepicker-cell day">29</span><span data-date="1722297600000" class="datepicker-cell day selected focused">30</span><span data-date="1722384000000" class="datepicker-cell day">31</span><span data-date="1722470400000" class="datepicker-cell day next">1</span><span data-date="1722556800000" class="datepicker-cell day next">2</span><span data-date="1722643200000" class="datepicker-cell day next">3</span><span data-date="1722729600000" class="datepicker-cell day next">4</span><span data-date="1722816000000" class="datepicker-cell day next">5</span><span data-date="1722902400000" class="datepicker-cell day next">6</span><span data-date="1722988800000" class="datepicker-cell day next">7</span><span data-date="1723075200000" class="datepicker-cell day next">8</span><span data-date="1723161600000" class="datepicker-cell day next">9</span><span data-date="1723248000000" class="datepicker-cell day next">10</span></div></div></div></div><div class="datepicker-footer"><div class="datepicker-controls"><button type="button" class="btn today-button today-btn" tabindex="-1" style="display: none;">Today</button><button type="button" class="btn clear-button clear-btn" tabindex="-1" style="display: none;">Clear</button></div></div></div></div>
                    </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Course Description</label>
                      <input type="text" v-model="formData.course_description" class="form-control" placeholder="Enter phone number">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">What you will learn with course?</label>
                      <input type="text" v-model="formData.course_tips" class="form-control" placeholder="Enter phone number">
                    </div>
                  </div>
                  <div class="col-md-12 text-end">
                    <button class="btn btn-primary">Submit</button>
                  </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </BackendLayouts>
</template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import BackendLayouts from '../../BackendLayouts.vue';
  import axios from 'axios';
  
  const route = useRoute();
  const router = useRouter();
  const course = ref({});
  
  onMounted(() => {
    const courseId = route.params.id;
    axios.get(`/api/get_course/${courseId}`)
      .then(response => {
        course.value = response.data.data;
      })
      .catch(error => {
        console.error('Error fetching course:', error);
      });
  });
  
  const updateCourse= () => {
    const courseId = route.params.id;
    axios.put(`/api/update_course/${courseId}`, course.value)
      .then(response => {
        if (response.data.status === 200) {
          router.push('/admin/courses/list');
        } else {
          console.error('Error updating course:', response.data.message);
        }
      })
      .catch(error => {
        console.error('Error updating course:', error);
      });
  };
  </script>
  