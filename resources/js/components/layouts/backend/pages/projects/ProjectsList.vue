<template>
  <BackendLayouts>
    <div class="pc-container">
      <div class="pc-content">
        <!-- [ breadcrumb ] start -->
        <div class="page-header">
          <div class="page-block">
            <div class="row align-items-center">
              <div class="col-md-12">
                <ul class="breadcrumb">
                  <li class="breadcrumb-item"><router-link to="/admin/dashboard">Home</router-link></li>
                  <li class="breadcrumb-item" aria-current="page">Project List</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- [ breadcrumb ] end -->

        <!-- [ Main Content ] start -->
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <div class="d-flex align-items-center justify-content-between">
                  <h5 class="mb-0">Project List</h5>
                  <div>
                    <router-link to="/admin/projects/add-project" class="btn btn-primary">Add Project</router-link>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div class="row">
                  <div v-for="(item, index) in ProjectsList" :key="index" class="col-sm-6 col-lg-4 col-xxl-3 mb-3">
                    <div class="card border">
                      <div class="card-body p-2">
                        <div class="position-relative">
                          <!-- Display the project image -->
                          <img :src="item.project_image_url" alt="Project Image" class="img-fluid w-100" v-if="item.project_image_url" />
                        </div>
                        <ul class="list-group list-group-flush my-2">
                          <li class="list-group-item px-0 py-2">
                            <div class="d-flex align-items-center">
                              <div class="flex-grow-1 me-2">
                                <h6 class="mb-1">{{ item.project_name }}</h6>
                              </div>
                              <div class="flex-shrink-0">
                                <a @click.prevent="deleteProject(item.id)" class="avtar avtar-xs btn-link-secondary">
                                  <i class="ti ti-trash f-20"></i>
                                </a>
                              </div>
                            </div>
                          </li>
                          <li class="list-group-item px-0 py-2">
                            <div class="d-flex align-items-center">
                              <div class="flex-grow-1 me-2">
                                <p class="mb-0">Budjet</p>
                              </div>
                              <div class="flex-shrink-0">
                                <p class="text-muted mb-0">{{ item.budjet }} Dhs</p>
                              </div>
                            </div>
                          </li>
                          <li class="list-group-item px-0 py-2">
                            <div class="d-flex align-items-center">
                              <div class="flex-grow-1 me-2">
                                <p class="mb-0">Dead Line</p>
                              </div>
                              <div class="flex-shrink-0">
                                <p class="text-muted mb-0">{{ item.dead_line }}</p>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <router-link :to="{path:'/admin/projects/edit-project/'+ item.id}" class="btn btn-sm btn-outline-primary mb-2">Edit project</router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- [ Main Content ] end -->
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
      ProjectsList: [],
    };
  },
  mounted() {
    this.getProjects();
  },
  methods: {
    getProjects() {
      axios.get('/api/get_projects')
        .then((response) => {
          if (response.data.status === 200) {
            this.ProjectsList = response.data.data;
          } else {
            console.error('Failed to fetch projects:', response.data.message);
          }
        })
        .catch((error) => {
          console.error('Error fetching projects:', error);
        });
    },
    deleteProject(id) {
      if (confirm('Are you sure you want to delete this project?')) {
        axios.delete(`/api/delete_project/${id}`)
          .then((response) => {
            if (response.data.status === 200) {
              this.getProjects(); // Refresh the project list after deletion
              alert('Project deleted successfully.');
            } else {
              alert('Failed to delete the project.');
            }
          })
          .catch((error) => {
            console.error('Error deleting project:', error);
          });
      }
    },
  }
};
</script>
