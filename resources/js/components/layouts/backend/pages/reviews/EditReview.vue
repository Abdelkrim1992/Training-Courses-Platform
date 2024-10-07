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
                      <router-link to="/admin/reviews/list">Review List</router-link>
                    </li>
                    <li class="breadcrumb-item" aria-current="page">Edit Review</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
  
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-header">
                  <h5>Edit Review</h5>
                </div>
                <div class="card-body">
                  <div class="row">
                  <div v-if="errorMessage" class="alert alert-danger" role="alert">
                    {{ errorMessage }}
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Student Name</label>
                      <input type="text" v-model="formData.student_name" class="form-control" placeholder="Enter full name">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Course Title</label>
                      <input type="text" v-model="formData.course_title" class="form-control" placeholder="Enter phone number">
                    </div>
                  </div>
                  <div class="col-md-12 mt-3">
                    <label for="floatingTextarea2">Review Text</label>
                    <div class="form-floating mt-2">
                      <froala id="edit" :tag="'textarea'" :config="config" v-model:value="formData.review_text"></froala>
                    </div>
                  </div>
                  <div class="col-md-12 text-end mt-3">
                    <button @click="updateReview" class="btn btn-primary">Update Review</button>
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
  
  <script setup>
  import { ref, reactive, onMounted } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import axios from 'axios';
  import BackendLayouts from '../../BackendLayouts.vue';
  
  const router = useRouter();
  const route = useRoute();
  const errorMessage = ref(null);
  const successMessage = ref(null); // Optional success message
  
  const formData = reactive({
    review_text: '',
    student_name: '',
    course_title: '',
  });
  
  
  onMounted(() => {
    const reviewId = route.params.id;
    axios.get(`/api/get_review/${reviewId}`)
      .then(response => {
        const reviewData = response.data.data;
        formData.student_name = reviewData.student_name;
        formData.review_text = reviewData.review_text;
        formData.course_title = reviewData.course_title;
      })
      .catch(error => {
        console.error('Error fetching course:', error);
        errorMessage.value = 'Error loading review data';
      });
  });
  
  const updateReview = async () => {
    const reviewId = route.params.id;
  
    // Create a new FormData instance for file uploads
    const formDataObj = new FormData();
    
      // Append other form fields
    formDataObj.append('student_name', formData.student_name);
    formDataObj.append('review_text', formData.review_text);
    formDataObj.append('course_title', formData.course_title);

    try {
      // Use PUT request to update the course
      const response = await axios.post(`/api/update_review/${reviewId}`, formDataObj, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Edit Review success', response.data);
      successMessage.value = 'Review  updated successfully!';
      router.push('/admin/reviews/list'); // Redirect to course list after successful update
    } catch (error) {
      console.error('Updating review failed', error);
      errorMessage.value = error.response?.data?.message || "Updating review failed. Please try again.";
    }
  };
  </script>
  
  <script>
  
  export default {
    name: 'EditReview',
    data () {
      return {
        config: {
          events: {
            initialized: function () {
              console.log('initialized')
            }
          }
        },
        model: 'Edit Your Content Here!'
      }
    }
  }
  </script>