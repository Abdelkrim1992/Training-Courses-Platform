<script setup>
import axios from 'axios';
import BackendLayouts from '../../BackendLayouts.vue';
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';

// Define a ref to hold the list of students
let students = ref([]);

// Use the Vue Router for navigation
const router = useRouter();

// Fetch the students when the component is mounted
onMounted(async () => {
  await getStudents();
});

// Navigate to the add student page
const addStudent = () => {
  router.push('/admin/students/add-student');
};

// Function to fetch students from the API
const getStudents = async () => {
  try {
    const response = await axios.get('/api/students');
    students.value = response.data.students;
    console.log('Students data:', students.value); // Add this line
  } catch (error) {
    console.error('Error fetching students:', error);
  }
};
</script>

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
                    <button @click="addStudent" class="btn btn-primary">Add Student</button>
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
                      <!-- Loop through the students array -->
                      <tr v-for="student in students" :key="student.id">
  <td>{{ student.name }}</td>
  <td>{{ student.phone }}</td>
  <td>{{ student.email }}</td>
  <td>{{ student.course_name }}</td>
  <td>
    <a href="#" class="avtar avtar-xs btn-link-secondary">
      <i class="ti ti-eye f-20"></i>
    </a>
    <a href="#" class="avtar avtar-xs btn-link-secondary">
      <i class="ti ti-edit f-20"></i>
    </a>
    <a href="#" class="avtar avtar-xs btn-link-secondary">
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
