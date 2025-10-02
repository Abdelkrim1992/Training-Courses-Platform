<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import BackendLayouts from '../../BackendLayouts.vue';

const router = useRouter();
const errorMessage = ref(null);
const successMessage = ref(null);

const formData = reactive({
  member_name: '',
  member_email: '',
  member_phone: '',
  member_service: '', // v-model here binds the date
  facebook: '',
  instagram: '',
  linkden: '',
  photo: []  // For teacher photo
});

// Handle teacher photo upload
const handleFileUpload = (event) => {
  formData.photo = Array.from(event.target.files); // Convert FileList to Array for teacher photo
};

// Add course
const add_team_member = async () => {

  const formDataObj = new FormData();

  // Append other form fields
  formDataObj.append('member_name', formData.member_name);
  formDataObj.append('member_email', formData.member_email);
  formDataObj.append('member_phone', formData.member_phone);
  formDataObj.append('member_service', formData.member_service);
  formDataObj.append('facebook', formData.facebook);
  formDataObj.append('instagram', formData.instagram);
  formDataObj.append('linkden', formData.linkden);

  // Append teacher photo (only one photo expected)
  formData.photo.forEach(file => {
    formDataObj.append('photo[]', file);
  });

  try {
    const response = await axios.post('/api/add_team_member', formDataObj, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    successMessage.value = response.data.message;  // Set success message
    console.log('Add team member success', response.data);

    // Redirect to course list after success (with delay if needed)
    setTimeout(() => {
      router.push('/admin/team/list');
    }, 2000); // Delay of 2 seconds to display success message
  } catch (error) {
    console.error('Adding team member failed', error.response.data);
    errorMessage.value = error.response.data.message || "Adding team member failed. Please try again.";
  }
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
                  <li class="breadcrumb-item" aria-current="page">Add Team Member</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h5 class="mb-0">Member Information</h5>
              </div>
              <div class="card-body">
                <div class="row">
                  <div v-if="errorMessage" class="alert alert-danger" role="alert">
                    {{ errorMessage }}
                  </div>

                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Full Name</label>
                      <input type="text" v-model="formData.member_name" class="form-control" placeholder="Enter full name">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Phone</label>
                      <input type="text" v-model="formData.member_phone" class="form-control" placeholder="Enter phone number">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Email</label>
                      <input type="text" v-model="formData.member_email" class="form-control" placeholder="Enter email">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Member Service</label>
                      <input type="text" v-model="formData.member_service" class="form-control" placeholder="Enter member service">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Facebook</label>
                      <input type="text" v-model="formData.facebook" class="form-control" placeholder="Enter facebook link">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Instagram</label>
                      <input type="text" v-model="formData.instagram" class="form-control" placeholder="Enter instagram link">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Linkden</label>
                      <input type="text" v-model="formData.linkden" class="form-control" placeholder="Enter linkden link">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Member Photo</label>
                      <input type="file" @change="handleFileUpload" class="form-control" accept="image/*" />
                    </div>
                  </div>
                  <div class="col-md-12 text-end">
                    <button @click="add_team_member" class="btn btn-primary">Save</button>
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
