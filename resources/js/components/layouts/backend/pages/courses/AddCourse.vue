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
                      <Datepicker v-model="formData.date" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-floating">
                      <textarea v-model="formData.course_description" class="form-control" placeholder="Course Description"></textarea>
                      <label for="floatingTextarea2">Course Description</label>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-floating">
                      <textarea v-model="formData.course_tips" class="form-control" placeholder="Course Tips"></textarea>
                      <label for="floatingTextarea2">Course Tips</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Upload Image</label>
                      <input type="file" @change="handleFileUpload" class="form-control" accept="image/*" />
                    </div>
                  </div>
                </div>

                <div class="mt-3">
                  <button @click="add_course" class="btn btn-primary">Add Course</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </BackendLayouts>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import Datepicker from 'vue3-datepicker';
import BackendLayouts from '../../BackendLayouts.vue';

const router = useRouter();
const errorMessage = ref(null);

const formData = reactive({
  course_title: '',
  teacher_name: '',
  duration: '',
  date: '', // v-model here binds the date
  category: '',
  course_tips: '',
  course_description: '',
  image: [] // Array to handle multiple images
});

// Function to format the date as 'YYYY-MM-DD'
const formatDate = (date) => {
  const d = new Date(date);
  const month = `${d.getMonth() + 1}`.padStart(2, '0');
  const day = `${d.getDate()}`.padStart(2, '0');
  const year = d.getFullYear();
  return `${year}-${month}-${day}`;
};

// Handle file upload
const handleFileUpload = (event) => {
  formData.image = Array.from(event.target.files); // Convert FileList to Array
};

// Add course
const add_course = async () => {
  // Ensure the date is properly formatted before sending the request
  formData.date = formatDate(formData.date);

  const formDataObj = new FormData();
  for (const key in formData) {
    if (Array.isArray(formData[key])) {
      formData[key].forEach(file => formDataObj.append('image[]', file));
    } else {
      formDataObj.append(key, formData[key]);
    }
  }

  try {
    const response = await axios.post('/api/add_course', formDataObj, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log('Add course success', response.data);
    router.push('/admin/courses/list');
  } catch (error) {
    console.error('Adding course failed', error.response.data);
    errorMessage.value = error.response.data.message || "Adding course failed. Please try again.";
  }
};
</script>