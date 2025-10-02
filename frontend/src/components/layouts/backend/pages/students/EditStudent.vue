<template>
  <BackendLayouts>
    <div class="pc-container">
      <div class="pc-content">
        <div class="page-header">
          <div class="page-block">
            <div class="row align-items-center">
              <div class="col-md-12">
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <router-link to="/admin/dashboard">Home</router-link>
                  </li>
                  <li class="breadcrumb-item">
                    <router-link to="/admin/students/list">Student List</router-link>
                  </li>
                  <li class="breadcrumb-item" aria-current="page">Edit Student</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h5>Edit Student</h5>
              </div>
              <div class="card-body">
                <form @submit.prevent="updateStudent">
                  <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" v-model="student.name" class="form-control" id="name" required />
                  </div>
                  <div class="mb-3">
                    <label for="phone" class="form-label">Mobile</label>
                    <input type="text" v-model="student.phone" class="form-control" id="phone" required />
                  </div>
                  <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" v-model="student.email" class="form-control" id="email" required />
                  </div>
                  <div class="mb-3">
                    <label for="course" class="form-label">Course</label>
                    <input type="text" v-model="student.course_name" class="form-control" id="course" required />
                  </div>
                  <button type="submit" class="btn btn-primary">Save Changes</button>
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
const student = ref({});

onMounted(() => {
  const studentId = route.params.id;
  axios.get(`/api/get_student/${studentId}`)
    .then(response => {
      student.value = response.data.data;
    })
    .catch(error => {
      console.error('Error fetching student:', error);
    });
});

const updateStudent = () => {
  const studentId = route.params.id;
  axios.put(`/api/update_student/${studentId}`, student.value)
    .then(response => {
      if (response.data.status === 200) {
        router.push('/admin/students/list');
      } else {
        console.error('Error updating student:', response.data.message);
      }
    })
    .catch(error => {
      console.error('Error updating student:', error);
    });
};
</script>
