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
                  <li class="breadcrumb-item" aria-current="page">Course List</li>
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
                  <div v-for="(item, index) in CoursesList" :key="index" class="col-sm-6 col-lg-4 col-xxl-3 mb-3">
                    <div class="card border">
                      <div class="card-body p-2">
                        <div class="position-relative">
                          <!-- Display the course image from the courseImage relationship -->
                          <img :src="item.course_image_url" alt="Course Image" class="img-fluid w-100" v-if="item.course_image_url" />
                        </div>
                        <ul class="list-group list-group-flush my-2">
                          <li class="list-group-item px-0 py-2">
                            <div class="d-flex align-items-center">
                              <div class="flex-grow-1 me-2">
                                <!-- Display the course title -->
                                <h6 class="mb-1">{{ item.course_title }}</h6>
                              </div>
                              <div class="flex-shrink-0">
                                <a @click.prevent="deleteCourse(item.id)" class="avtar avtar-xs btn-link-secondary">
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
                                <p class="text-muted mb-0">{{ item.duration }}</p>
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
                                <p class="text-muted mb-0">{{ item.teacher_name }}</p>
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
                                <p class="text-muted mb-0">{{ item.date }}</p>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <router-link :to="{path:'/admin/courses/edit-course/'+ item.id}" class="btn btn-sm btn-outline-primary mb-2">Edit</router-link>
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
import axios from 'axios';
import BackendLayouts from '../../BackendLayouts.vue';

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
    deleteCourse(id) {
      if (confirm('Are you sure you want to delete this course?')) {
        axios.delete(`/api/delete_course/${id}`)
          .then((response) => {
            if (response.data.status === 200) {
              this.getCourses(); // Refresh the course list after deletion
              alert('Course deleted successfully.');
            } else {
              alert('Failed to delete the course.');
            }
          })
          .catch((error) => {
            console.error('Error deleting course:', error);
          });
      }
    },
  }
};

</script>