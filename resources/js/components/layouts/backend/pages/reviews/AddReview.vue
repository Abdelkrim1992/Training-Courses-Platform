<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import BackendLayouts from '../../BackendLayouts.vue';

const router = useRouter();

const errorMessage = ref(null);

const formData = reactive({
  student_name: '',
  review_text: '',
  course_title: '',
});

const add_review = () => {
  axios.post('/api/add_review', formData)
    .then((response) => {
      console.log('Add student success', response.data);
      router.push('/admin/reviews/list');
    })
    .catch((error) => {
      console.error('Adding review failed', error.response.data);
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
                  <li class="breadcrumb-item" aria-current="page">Add Review</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h5 class="mb-0">Review Information</h5>
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
                  <div class="col-md-12 text-end">
                    <button @click="add_review" class="btn btn-primary">Submit</button>
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
