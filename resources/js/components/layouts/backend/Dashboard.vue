<template>
  <BackendLayouts>
<!-- [ Main Content ] start -->
<div class="pc-container">
  <div class="pc-content">
    <!-- [ breadcrumb ] start -->
    <div class="page-header">
      <div class="page-block">
        <div class="row align-items-center">
          <div class="col-md-12">
            <ul class="breadcrumb">
              <li class="breadcrumb-item"><router-link to="/admin/dashboard">Home</router-link></li>
              <li class="breadcrumb-item" aria-current="page">Dashboard</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- [ breadcrumb ] end -->

    <!-- [ Main Content ] start -->
    <div class="row">
      <div class="col-lg-3 col-md-6">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <div class="avtar bg-light-primary">
                  <i class="ti ti-users f-24"></i>
                </div>
              </div>
              <div class="flex-grow-1 ms-3">
                <p class="mb-1">New Students</p>
                <div class="d-flex align-items-center justify-content-between">
                  <h4 class="mb-0">400+</h4>
                  <span class="text-success fw-medium">30.6%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <div class="avtar bg-light-warning">
                  <i class="ti ti-notebook f-24"></i>
                </div>
              </div>
              <div class="flex-grow-1 ms-3">
                <p class="mb-1">Total Course</p>
                <div class="d-flex align-items-center justify-content-between">
                  <h4 class="mb-0">520+</h4>
                  <span class="text-warning fw-medium">30.6%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12">
        <div class="card table-card">
          <div class="card-header">
            <div class="d-flex align-items-center justify-content-between">
              <h5 class="mb-0">Course States</h5>
              <router-link class="btn btn-sm btn-link-primary" to="/admin/courses/list">View All</router-link>
            </div>
          </div>
          <div class="card-body" >
            <div class="table-responsive">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>Course Name</th>
                    <th>Teacher Name</th>
                    <th>Started Date</th>
                    <th>Course Duration</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(items, index) in CoursesList" :key="index">
                      <td>{{ items.course_title }}</td>
                      <td>{{ items.teacher_name }}</td>
                      <td>{{ items.date }}</td>
                      <td>{{ items.duration }}</td>
                      <td>
                        <router-link :to="{path:'/admin/courses/edit-course/'+ items.id}" class="avtar avtar-xs btn-link-secondary">
                          <i class="ti ti-edit f-20"></i>
                        </router-link>
                        <a @click="deleteCourse(items.id)" class="avtar avtar-xs btn-link-secondary">
                          <i class="ti ti-trash f-20"></i>
                        </a>
                      </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- [ Main Content ] end -->
  </div>
</div>
<!-- [ Main Content ] end -->
  </BackendLayouts>
</template>

<script setup>

import axios from 'axios';
import BackendLayouts from '../backend/BackendLayouts.vue';

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