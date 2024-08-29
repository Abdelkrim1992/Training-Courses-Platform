<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import BackendLayouts from '../../BackendLayouts.vue';

const router = useRouter();

const errorMessage = ref(null);

const formData = reactive({
  name: '',
  email: '',
  phone: '',
  course_name: '',
});

const add_student = () => {
  axios.post('/api/add_student', formData)
    .then((response) => {
      console.log('Add student success', response.data);
      router.push('/admin/students/list');
    })
    .catch((error) => {
      console.error('Adding student failed', error.response.data);
      errorMessage.value = error.response.data.message || "Adding student failed. Please try again.";
    });
};
</script>

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
                  <li class="breadcrumb-item" aria-current="page">Add Student</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h5 class="mb-0">Student Information</h5>
              </div>
              <div class="card-body">
                <div class="row">
                  <div v-if="errorMessage" class="alert alert-danger" role="alert">
                    {{ errorMessage }}
                  </div>

                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Full Name</label>
                      <input type="text" v-model="formData.name" class="form-control" placeholder="Enter full name">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Phone</label>
                      <input type="text" v-model="formData.phone" class="form-control" placeholder="Enter phone number">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Email</label>
                      <input type="text" v-model="formData.email" class="form-control" placeholder="Enter email">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Course Name</label>
                      <input type="text" v-model="formData.course_name" class="form-control" placeholder="Enter course name">
                    </div>
                  </div>
                  <div class="col-md-12 text-end">
                    <button @click="add_course" class="btn btn-primary">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </BackendLayouts>
</template>
