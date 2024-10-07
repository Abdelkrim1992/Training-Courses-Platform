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
                  <li class="breadcrumb-item" aria-current="page">Edit Partner</li>
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
                      <input type="text" v-model="formData.partner_title" class="form-control" placeholder="Enter partner name">
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-floating">
                      <textarea v-model="formData.short_description" class="form-control" placeholder="Enter Short Description"></textarea>
                      <label for="floatingTextarea2">Short Description</label>
                    </div>
                  </div>
                  <div class="col-md-6 mt-3">
                    <div class="mb-3">
                      <label class="form-label">Partner Logo</label>
                      <input type="file" @change="handleFileUpload" class="form-control" accept="image/*" />
                    </div>
                  </div>
                </div>

                <div class="mt-3">
                  <button @click="edit_partner" class="btn btn-primary">Update Partner</button>
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
  partner_name: '',
  image: [] ,
});

const handleFileUpload = (event) => {
  formData.image = Array.from(event.target.files); // Convert FileList to Array
};


onMounted(() => {
  const partnerId = route.params.id;
  axios.get(`/api/get_partner/${partnerId}`)
    .then(response => {
      const PartnerData = response.data.data;
      formData.partner_name = PartnerData.partner_name;
    })
    .catch(error => {
      console.error('Error fetching course:', error);
      errorMessage.value = 'Error loading partner data';
    });
});

const edit_partner = async () => {
  const partnerId = route.params.id;

  // Create a new FormData instance for file uploads
  const formDataObj = new FormData();
  
  // Append data fields
  formDataObj.append('partner_name', formData.partner_name);

  for (const key in formData) {
    if (Array.isArray(formData[key])) {
      formData[key].forEach(file => formDataObj.append('image[]', file));
    } else {
      formDataObj.append(key, formData[key]);
    }
  }

  try {
    // Use PUT request to update the course
    const response = await axios.post(`/api/update_partner/${partnerId}`, formDataObj, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log('Edit partner success', response.data);
    successMessage.value = 'partner updated successfully!';
    router.push('/admin/partners/list'); // Redirect to course list after successful update
  } catch (error) {
    console.error('Updating partner failed', error);
    errorMessage.value = error.response?.data?.message || "Updating course failed. Please try again.";
  }
};
</script>
