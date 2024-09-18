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
               
                <form @submit.prevent="updateTeamMember">
                  <div class="row">
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
                </div>
                <div class="col-md-12 text-end">
                  <button type="submit" class="btn btn-primary">Save Changes</button>
                </div>
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
const formData = ref({});

onMounted(() => {
  const memberId = route.params.id;
  axios.get(`/api/get_team_member/${memberId}`)
    .then(response => {
      formData.value = response.data.data;
    })
    .catch(error => {
      console.error('Error fetching student:', error);
    });
});

const updateTeamMember = () => {
  const memberId = route.params.id;
  axios.put(`/api/update_team_member/${memberId}`, formData.value)
    .then(response => {
      if (response.data.status === 200) {
        router.push('/admin/team/list');
      } else {
        console.error('Error updating member:', response.data.message);
      }
    })
    .catch(error => {
      console.error('Error updating member:', error);
    });
};
</script>
