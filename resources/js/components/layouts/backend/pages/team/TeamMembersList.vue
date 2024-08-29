<template>
  <BackendLayouts>
    <div class="pc-container">
      <div class="pc-content">
        <!-- Breadcrumb start -->
        <div class="page-header">
          <div class="page-block">
            <div class="row align-items-center">
              <div class="col-md-12">
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <router-link to="/admin/dashboard">Home</router-link>
                  </li>
                  <li class="breadcrumb-item" aria-current="page">Student List</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- Breadcrumb end -->

        <!-- Main Content start -->
        <div class="row">
          <div class="col-12">
            <div class="card table-card">
              <div class="card-header">
                <div class="d-sm-flex align-items-center justify-content-between">
                  <h5 class="mb-3 mb-sm-0">Team Member List</h5>
                  <div>
                    <router-link to="/admin/team/add-member" class="btn btn-primary">
                      Add Team Member
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="card-body pt-3">
                <div class="table-responsive">
                  <table class="table table-hover" id="pc-dt-simple">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Service</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(items, index) in TeamMemberList" :key="index">
                        <td>{{ items.member_name }}</td>
                        <td>{{ items.member_phone }}</td>
                        <td>{{ items.member_email }}</td>
                        <td>{{ items.member_service }}</td>
                        <td>
                          <router-link :to="{path:'/admin/team/edit-member/'+ items.id}" class="avtar avtar-xs btn-link-secondary">
                            <i class="ti ti-edit f-20"></i>
                          </router-link>
                          <a @click="deleteTeamMember(items.id)" class="avtar avtar-xs btn-link-secondary">
                            <i class="ti ti-trash f-20"></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Main Content end -->
      </div>
    </div>
  </BackendLayouts>
</template>

<script setup>
import axios from 'axios';
import BackendLayouts from '../../BackendLayouts.vue';
</script>

<script>
export default {
  data() {
    return {
      TeamMemberList: [],
    };
  },
  mounted() {
    console.log('Component mounted');
    this.getTeamMember();
  },
  methods: {
    getTeamMember() {
      console.log('getTeamMember method called');
      axios.get('/api/get_team_member')
        .then((response) => {
          console.log('API response:', response);
          const status = response.data.status;

          if (status === 200) {
            this.TeamMemberList = response.data.data;
            console.log('TeamMemberList updated:', this.TeamMemberList);
          } else {
            console.warn('Unexpected status:', status);
          }
        })
        .catch((error) => {
          console.error('API request error:', error);
        });
    },
    deleteTeamMember(id) {
      if (confirm('Are you sure you want to delete this member?')) {
        axios.delete(`/api/delete_team_member/${id}`)
          .then((response) => {
            const status = response.data.status;

            if (status === 200) {
              this.getTeamMember(); // Refresh the student list after deletion
              alert('Team Member deleted successfully.');
            } else {
              alert('Failed to delete the member.');
            }
          })
          .catch((error) => {
            console.error('API request error:', error);
          });
      }
    },
  },
};
</script>
