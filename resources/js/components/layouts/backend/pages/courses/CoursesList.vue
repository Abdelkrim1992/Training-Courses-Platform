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
                <li class="breadcrumb-item" aria-current="page">Courses List</li>
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
                <h5 class="mb-0">Courses </h5>
                <div>
                  <router-link to="/admin/courses/add-course"  class="btn btn-primary">Add Course</router-link>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-sm-6 col-lg-4 col-xxl-3">
                  <div class="card border">
                    <div class="card-body p-2">
                      <div class="position-relative">
                        <img src="/backend/images/admin/img-course-1.png" alt="img" class="img-fluid w-100">
                      </div>
                      <ul class="list-group list-group-flush my-2">
                        <li class="list-group-item px-0 py-2">
                          <div class="d-flex align-items-center">
                            <div class="flex-grow-1 me-2">
                              <h6 class="mb-1">Bootstrap 5 Beginner Course</h6>
                              <p class="mb-0 f-w-600"><i class="fas fa-star text-warning"></i> 4.8</p>
                            </div>
                            <div class="flex-shrink-0">
                              <a href="#" class="avtar avtar-xs btn-link-secondary">
                                <i class="ti ti-edit f-20"></i>
                              </a>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item px-0 py-2">
                          <div class="d-flex align-items-center">
                            <div class="flex-grow-1 me-2">
                              <p class="mb-0">Duration</p>
                            </div>
                            <div class="flex-shrink-0">
                              <p class="text-muted mb-0">10 Months</p>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item px-0 py-2">
                          <div class="d-flex align-items-center">
                            <div class="flex-grow-1 me-2">
                              <p class="mb-0">Teacher</p>
                            </div>
                            <div class="flex-shrink-0">
                              <p class="text-muted mb-0">Jimmy Morris</p>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item px-0 py-2">
                          <div class="d-flex align-items-center">
                            <div class="flex-grow-1 me-2">
                              <p class="mb-0">Students</p>
                            </div>
                            <div class="flex-shrink-0">
                              <p class="text-muted mb-0">+120</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <button class="btn btn-sm btn-outline-primary mb-2">Read More</button>
                    </div>
                  </div>
                </div>
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
    console.log('Component mounted');
    this.getCourses();
  },
  methods: {
    getCourses() {
      console.log('getCourses method called');
      axios.get('/api/get_courses')
        .then((response) => {
          console.log('API response:', response);
          const status = response.data.status;

          if (status === 200) {
            this.CoursesList = response.data.data;
            console.log('CoursesList updated:', this.CoursesList);
          } else {
            console.warn('Unexpected status:', status);
          }
        })
        .catch((error) => {
          console.error('API request error:', error);
        });
    },
    deleteCourse(id) {
      if (confirm('Are you sure you want to delete this course?')) {
        axios.delete(`/api/delete_course/${id}`)
          .then((response) => {
            const status = response.data.status;

            if (status === 200) {
              this.getCourses(); // Refresh the student list after deletion
              alert('Course deleted successfully.');
            } else {
              alert('Failed to delete the course.');
            }
          })
          .catch((error) => {
            console.error('API request error:', error);
          });
      }
    },
  },
};
</script>

