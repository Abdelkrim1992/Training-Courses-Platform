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
                  <li class="breadcrumb-item" aria-current="page">Add Partner</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h5 class="mb-0">Partner Information</h5>
              </div>
              <div class="card-body">
                <div class="row">
                  <div v-if="errorMessage" class="alert alert-danger" role="alert">
                    {{ errorMessage }}
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Partner Name</label>
                      <input type="text" v-model="formData.partner_name" class="form-control" placeholder="Enter partner name">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Partner Logo</label>
                      <input type="file" @change="handleFileUpload" class="form-control" accept="image/*" />
                    </div>
                  </div>
                </div>

                <div class="mt-3">
                  <button @click="add_partner" class="btn btn-primary">Add Partner</button>
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
import BackendLayouts from '../../BackendLayouts.vue';

const router = useRouter();
const errorMessage = ref(null);

const formData = reactive({
  partner_name: '',
  short_description: '',
  image: [], // For course images
});

// Handle course image upload
const handleFileUpload = (event) => {
  formData.image = Array.from(event.target.files); // Convert FileList to Array for course images
};

// Add course
const add_partner = async () => {

  const formDataObj = new FormData();

  // Append other form fields
  formDataObj.append('partner_name', formData.partner_name);

  // Append course images
  formData.image.forEach(file => {
    formDataObj.append('image[]', file);
  });

  try {
    const response = await axios.post('/api/add_partner', formDataObj, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log('Add course success', response.data);
    router.push('/admin/partners/list');
  } catch (error) {
    console.error('Adding partner failed', error.response.data);
    errorMessage.value = error.response.data.message || "Adding partner failed. Please try again.";
  }
};
</script>