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
                  <form @submit.prevent="updateReview">
                    <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Student Name</label>
                      <input type="text" v-model="formData.student_name" class="form-control" placeholder="Enter full name">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Course Name</label>
                      <input type="text" v-model="formData.course_title" class="form-control" placeholder="Enter email">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating">
                      <textarea type="text" v-model="formData.review_text" class="form-control" id="floatingTextarea"></textarea>
                      <label for="floatingTextarea"> Review Text</label>
                    </div>
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
  const review = ref({});
  
  onMounted(() => {
    const reviewId = route.params.id;
    axios.get(`/api/get_review/${reviewId}`)
      .then(response => {
        review.value = response.data.data;
      })
      .catch(error => {
        console.error('Error fetching review:', error);
      });
  });
  
  const updateReview = () => {
    const reviewId = route.params.id;
    axios.put(`/api/update_review/${reviewId}`, review.value)
      .then(response => {
        if (response.data.status === 200) {
          router.push('/admin/reviews/list');
        } else {
          console.error('Error updating review:', response.data.message);
        }
      })
      .catch(error => {
        console.error('Error updating review:', error);
      });
  };
  </script>
  