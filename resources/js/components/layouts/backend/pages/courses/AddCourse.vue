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
  date: '',
  category: '',
  course_tips: '',
  course_description: '',
  image: '' // Store the image path here
});

const handleFileUpload = async (event) => {
  const file = event.target.files[0];
  if (file) {
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post('/api/upload_image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });
      formData.image = response.data.filePath; // Ensure this path is a string
    } catch (error) {
      errorMessage.value = 'Image upload failed. Please try again.';
    }
  }
};

const add_course = () => {
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
