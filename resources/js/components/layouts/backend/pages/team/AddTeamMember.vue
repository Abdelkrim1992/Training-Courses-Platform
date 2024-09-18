<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import BackendLayouts from '../../BackendLayouts.vue';

const router = useRouter();

const errorMessage = ref(null);

const formData = reactive({
  member_name: '',
  member_email: '',
  member_phone: '',
  member_service: '',
  facebook: '',
  instagram: '',
  linkden: '',
});

const add_team_member = () => {
  axios.post('/api/add_team_member', formData)
    .then((response) => {
      console.log('Add student success', response.data);
      router.push('/admin/team/list');
    })
    .catch((error) => {
      console.error('Adding member failed', error.response.data);
      errorMessage.value = error.response.data.message || "Adding member failed. Please try again.";
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
