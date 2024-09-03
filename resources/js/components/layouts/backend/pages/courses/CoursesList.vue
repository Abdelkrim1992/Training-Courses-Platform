<template>
  <BackendLayouts>
    <div class="pc-container">
      <div class="pc-content">
        <!-- [ breadcrumb ] start -->
        <div class="page-header">
          <div class="page-block">
            <div class="row align-items-center">
              <div class="col-md-12">
                <ul class="breadcrumb">
                  <li class="breadcrumb-item"><router-link to="/admin/dashboard">Home</router-link></li>
                  <li class="breadcrumb-item" aria-current="page">Project List</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- [ breadcrumb ] end -->

        <!-- [ Main Content ] start -->
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <div class="d-flex align-items-center justify-content-between">
                  <h5 class="mb-0">Course List</h5>
                  <div>
                    <router-link to="/admin/courses/add-course" class="btn btn-primary">Add Course</router-link>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div class="row">
                  <!-- Loop through courses and render each course card -->
                  <div v-for="course in courses" :key="course.id" class="col-sm-6 col-lg-4 col-xxl-3 mb-3">
                    <div class="card border">
                      <div class="card-body p-2">
                        <div class="position-relative">
                          <!-- Display the course image -->
                          <img :src="'/storage/' + course.image" alt="Course Image" class="img-fluid w-100" />
                        </div>
                        <ul class="list-group list-group-flush my-2">
                          <li class="list-group-item px-0 py-2">
                            <div class="d-flex align-items-center">
                              <div class="flex-grow-1 me-2">
                                <!-- Display the course title -->
                                <h6 class="mb-1">{{ course.course_title }}</h6>
                              </div>
                              <div class="flex-shrink-0">
                                <a href="#" class="avtar avtar-xs btn-link-secondary">
                                  <i class="ti ti-trash f-20"></i>
                                </a>
                              </div>
                            </div>
                          </li>
                          <li class="list-group-item px-0 py-2">
                            <div class="d-flex align-items-center">
                              <div class="flex-grow-1 me-2">
                                <!-- Label for duration -->
                                <p class="mb-0">Duration</p>
                              </div>
                              <div class="flex-shrink-0">
                                <!-- Display the course duration -->
                                <p class="text-muted mb-0">{{ course.duration }}</p>
                              </div>
                            </div>
                          </li>
                          <li class="list-group-item px-0 py-2">
                            <div class="d-flex align-items-center">
                              <div class="flex-grow-1 me-2">
                                <!-- Label for teacher name -->
                                <p class="mb-0">Teacher</p>
                              </div>
                              <div class="flex-shrink-0">
                                <!-- Display the teacher name -->
                                <p class="text-muted mb-0">{{ course.teacher_name }}</p>
                              </div>
                            </div>
                          </li>
                          <li class="list-group-item px-0 py-2">
                            <div class="d-flex align-items-center">
                              <div class="flex-grow-1 me-2">
                                <!-- Label for date -->
                                <p class="mb-0">Date</p>
                              </div>
                              <div class="flex-shrink-0">
                                <!-- Display the course date -->
                                <p class="text-muted mb-0">{{ course.date }}</p>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <button class="btn btn-sm btn-outline-primary mb-2">Read More</button>
                      </div>
                    </div>
                  </div>
                  <!-- End of course card -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- [ Main Content ] end -->
      </div>
    </div>
  </BackendLayouts>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import BackendLayouts from '../../BackendLayouts.vue';

const courses = ref([]);

onMounted(() => {
  axios.get('/api/get_courses')
    .then(response => {
      courses.value = response.data;
    })
    .catch(error => {
      console.error('Failed to fetch courses', error);
    });
});
</script>