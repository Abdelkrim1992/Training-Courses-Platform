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
                  <!-- Error Message -->
                  <div v-if="errorMessage" class="alert alert-danger" role="alert">
                    {{ errorMessage }}
                  </div>

                  <!-- Success Message -->
                  <div v-if="successMessage" class="alert alert-success" role="alert">
                    {{ successMessage }}
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
                      <label class="form-label">Date of course</label>
                      <Datepicker v-model="formData.date" class="form-control" placeholder="Choose date of course" />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-floating">
                      <textarea v-model="formData.course_description" class="form-control" placeholder="Course Description"></textarea>
                      <label for="floatingTextarea2">Course Description</label>
                    </div>
                  </div>
                  <div class="col-md-12 mt-4">
                    <div class="form-floating">
                      <textarea v-model="formData.course_tips" class="form-control" placeholder="Course Tips"></textarea>
                      <label for="floatingTextarea2">Course Tips</label>
                    </div>
                  </div>
                  <div class="col-md-12 mt-4">
                    <div class="form-floating">
                      <textarea v-model="formData.teacher_summery" class="form-control" placeholder="Course Tips"></textarea>
                      <label for="floatingTextarea2">Teacher Summery</label>
                    </div>
                  </div>
                  <div class="col-md-6 mt-4">
                    <div class="mb-3">
                      <label class="form-label">Course Logo</label>
                      <input type="file" @change="handleFileUpload" class="form-control" accept="image/*" />
                    </div>
                  </div>
                  <div class="col-md-6 mt-4">
                    <div class="mb-3">
                      <label class="form-label">Teacher Photo</label>
                      <input type="file" @change="handleFileUpload_photo" class="form-control" accept="photo/*" />
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
const successMessage = ref(null);

const formData = reactive({
  course_title: '',
  teacher_name: '',
  duration: '',
  date: '', // v-model here binds the date
  category: '',
  course_tips: '',
  teacher_summery:'',
  course_description: '',
  image: [], // For course images
  photo: []  // For teacher photo
});

// Function to format the date as 'YYYY-MM-DD'
const formatDate = (date) => {
  const d = new Date(date);
  const month = `${d.getMonth() + 1}`.padStart(2, '0');
  const day = `${d.getDate()}`.padStart(2, '0');
  const year = d.getFullYear();
  return `${year}-${month}-${day}`;
};

// Handle course image upload
const handleFileUpload = (event) => {
  formData.image = Array.from(event.target.files); // Convert FileList to Array for course images
};

// Handle teacher photo upload
const handleFileUpload_photo = (event) => {
  formData.photo = Array.from(event.target.files); // Convert FileList to Array for teacher photo
};

// Add course
const add_course = async () => {
  // Ensure the date is properly formatted before sending the request
  formData.date = formatDate(formData.date);

  const formDataObj = new FormData();

  // Append other form fields
  formDataObj.append('course_title', formData.course_title);
  formDataObj.append('teacher_name', formData.teacher_name);
  formDataObj.append('duration', formData.duration);
  formDataObj.append('date', formData.date);
  formDataObj.append('category', formData.category);
  formDataObj.append('course_tips', formData.course_tips);
  formDataObj.append('course_description', formData.course_description);
  formDataObj.append('teacher_summery', formData.teacher_summery);

  // Append course images
  formData.image.forEach(file => {
    formDataObj.append('image[]', file);
  });

  // Append teacher photo (only one photo expected)
  formData.photo.forEach(file => {
    formDataObj.append('photo[]', file);
  });

  try {
    const response = await axios.post('/api/add_course', formDataObj, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    successMessage.value = response.data.message;  // Set success message
    console.log('Add course success', response.data);

    // Redirect to course list after success (with delay if needed)
    setTimeout(() => {
      router.push('/admin/courses/list');
    }, 2000); // Delay of 2 seconds to display success message
  } catch (error) {
    console.error('Adding course failed', error.response.data);
    errorMessage.value = error.response.data.message || "Adding course failed. Please try again.";
  }
};
</script>
