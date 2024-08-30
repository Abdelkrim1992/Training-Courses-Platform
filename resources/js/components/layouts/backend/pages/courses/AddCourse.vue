<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import BackendLayouts from '../../BackendLayouts.vue';
import Datepicker from 'vue3-datepicker';

const router = useRouter();
const errorMessage = ref(null);

const formData = reactive({
  course_title: '',
  teacher_name: '',
  duration: '',
  date: '',
  category:'',
  course_tips:'',
  course_description:'',
});

const add_course = () => {
  // Ensure the date is correctly formatted before submission
  formData.date = formData.date instanceof Date ? formData.date.toISOString().split('T')[0] : formData.date;

  if (!formData.date) {
    errorMessage.value = 'Invalid date. Please select a valid date.';
    return;
  }

  axios.post('/api/add_course', formData)
    .then((response) => {
      console.log('Add course success', response.data);
      router.push('/admin/courses/list');
    })
    .catch((error) => {
      console.error('Adding course failed', error.response.data);
      errorMessage.value = error.response.data.message || "Adding course failed. Please try again.";
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
                <div class="row">
                  <div v-if="errorMessage" class="alert alert-danger" role="alert">
                    {{ errorMessage }}
                  </div>

                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Course Title</label>
                      <input type="text" v-model="formData.course_title" class="form-control" placeholder="Enter course title">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Category</label>
                      <input type="text" v-model="formData.category" class="form-control" placeholder="Enter category">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Teacher Name</label>
                      <input type="text" v-model="formData.teacher_name" class="form-control" placeholder="Enter teacher name">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Duration</label>
                      <input type="text" v-model="formData.duration" class="form-control" placeholder="Enter duration of course">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Date</label>
                      <Datepicker v-model="formData.date" format="YYYY-MM-DD" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-floating">
                      <textarea v-model="formData.course_description" class="form-control" id="floatingTextarea"></textarea>
                      <label for="floatingTextarea">Course Description</label>
                    </div>
                  </div>
                  <div class="col-md-12 mt-3 mb-3">
                    <div class="form-floating">
                      <textarea v-model="formData.course_tips" class="form-control" id="floatingTextareaTips"></textarea>
                      <label for="floatingTextareaTips">What you will learn?</label>
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
