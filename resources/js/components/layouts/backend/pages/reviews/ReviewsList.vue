<template>
  <BackendLayouts>
    <div class="pc-container">
      <div class="pc-content">
        <!-- Breadcrumb start -->
        <div class="page-header">
          <div class="page-block">
            <div class="row align-items-center">
              <div class="col-md-12">
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <router-link to="/admin/dashboard">Home</router-link>
                  </li>
                  <li class="breadcrumb-item" aria-current="page">Student List</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- Breadcrumb end -->

        <!-- Main Content start -->
        <div class="row">
          <div class="col-12">
            <div class="card table-card">
              <div class="card-header">
                <div class="d-sm-flex align-items-center justify-content-between">
                  <h5 class="mb-3 mb-sm-0">Student List</h5>
                  <div>
                    <router-link to="/admin/students/add-student" class="btn btn-primary">
                      Add Student
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="card-body pt-3">
                <div class="table-responsive">
                  <table class="table table-hover" id="pc-dt-simple">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Course</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(items, index) in StudentsList" :key="index">
                        <td>{{ items.name }}</td>
                        <td>{{ items.phone }}</td>
                        <td>{{ items.email }}</td>
                        <td>{{ items.course_name }}</td>
                        <td>
                          <router-link :to="{path:'/admin/students/edit-student/'+ items.id}" class="avtar avtar-xs btn-link-secondary">
                            <i class="ti ti-edit f-20"></i>
                          </router-link>
                          <a @click="deleteStudent(items.id)" class="avtar avtar-xs btn-link-secondary">
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
        <!-- Main Content end -->
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
      StudentsList: [],
    };
  },
  mounted() {
    console.log('Component mounted');
    this.getStudents();
  },
  methods: {
    getStudents() {
      console.log('getStudents method called');
      axios.get('/api/get_students')
        .then((response) => {
          console.log('API response:', response);
          const status = response.data.status;

          if (status === 200) {
            this.StudentsList = response.data.data;
            console.log('StudentsList updated:', this.StudentsList);
          } else {
            console.warn('Unexpected status:', status);
          }
        })
        .catch((error) => {
          console.error('API request error:', error);
        });
    },
    deleteStudent(id) {
      if (confirm('Are you sure you want to delete this student?')) {
        axios.delete(`/api/delete_student/${id}`)
          .then((response) => {
            const status = response.data.status;

            if (status === 200) {
              this.getStudents(); // Refresh the student list after deletion
              alert('Student deleted successfully.');
            } else {
              alert('Failed to delete the student.');
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
