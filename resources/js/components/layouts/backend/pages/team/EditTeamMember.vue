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
                    <router-link to="/admin/team/list">Team Member List</router-link>
                  </li>
                  <li class="breadcrumb-item" aria-current="page">Edit Student</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h5>Edit Team Member</h5>
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
                    <button @click="updateTeamMember" class="btn btn-primary">Save</button>
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
  member_name: '',
  member_email: '',
  member_phone: '',
  member_service: '', // v-model here binds the date
  facebook: '',
  instagram: '',
  linkden: '',
  photo: []  // For teacher photo
});

const handleFileUpload = (event) => {
  formData.photo = Array.from(event.target.files); // Convert FileList to Array
};

onMounted(() => {
  const memberId = route.params.id;
  axios.get(`/api/get_team_member/${memberId}`)
    .then(response => {
      const memberData = response.data.data;
      formData.member_name = memberData.member_name;
      formData.member_email = memberData.member_email;
      formData.member_phone = memberData.member_phone;
      formData.member_service = memberData.member_service;
      formData.facebook = memberData.facebook; // Ensure this is a Date object
      formData.instagram = memberData.instagram;
      formData.linkden = memberData.linkden;
    })
    .catch(error => {
      console.error('Error fetching course:', error);
      errorMessage.value = 'Error loading team member data';
    });
});

const updateTeamMember = async () => {
  const memberId = route.params.id;

  // Create a new FormData instance for file uploads
  const formDataObj = new FormData();
  
    // Append other form fields
  formDataObj.append('member_name', formData.member_name);
  formDataObj.append('member_email', formData.member_email);
  formDataObj.append('member_phone', formData.member_phone);
  formDataObj.append('member_service', formData.member_service);
  formDataObj.append('facebook', formData.facebook);
  formDataObj.append('instagram', formData.instagram);
  formDataObj.append('linkden', formData.linkden);

  for (const key in formData) {
    if (Array.isArray(formData[key])) {
      formData[key].forEach(file => formDataObj.append('photo[]', file));
    } else {
      formDataObj.append(key, formData[key]);
    }
  }

  try {
    // Use PUT request to update the course
    const response = await axios.post(`/api/update_team_member/${memberId}`, formDataObj, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log('Edit team member success', response.data);
    successMessage.value = 'Team member  updated successfully!';
    router.push('/admin/team/list'); // Redirect to course list after successful update
  } catch (error) {
    console.error('Updating team member failed', error);
    errorMessage.value = error.response?.data?.message || "Updating team member failed. Please try again.";
  }
};
</script>