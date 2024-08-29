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
                  <div class="mb-3">
                    <label for="name" class="form-label">Member Name</label>
                    <input type="text" v-model="team_member.member_name" class="form-control" id="member_name" required />
                  </div>
                  <div class="mb-3">
                    <label for="phone" class="form-label">Member Mobile</label>
                    <input type="text" v-model="team_member.member_phone" class="form-control" id="member_phone" required />
                  </div>
                  <div class="mb-3">
                    <label for="email" class="form-label">Member Email</label>
                    <input type="email" v-model="team_member.member_email" class="form-control" id="member_email" required />
                  </div>
                  <div class="mb-3">
                    <label for="course" class="form-label">Member Service</label>
                    <input type="text" v-model="team_member.member_service" class="form-control" id="member_service" required />
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
const team_member = ref({});

onMounted(() => {
  const memberId = route.params.id;
  axios.get(`/api/get_team_member/${memberId}`)
    .then(response => {
      team_member.value = response.data.data;
    })
    .catch(error => {
      console.error('Error fetching student:', error);
    });
});

const updateTeamMember = () => {
  const memberId = route.params.id;
  axios.put(`/api/update_team_member/${memberId}`, team_member.value)
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
