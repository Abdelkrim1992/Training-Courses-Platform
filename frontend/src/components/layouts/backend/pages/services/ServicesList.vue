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
                  <li class="breadcrumb-item" aria-current="page">Service List</li>
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
                  <h5 class="mb-0">Service List</h5>
                  <div>
                    <router-link to="/admin/services/add-service" class="btn btn-primary">Add Service</router-link>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div class="row">
                  <div v-for="(item, index) in ServicesList" :key="index" class="col-sm-6 col-lg-4 col-xxl-3 mb-3">
                    <div class="card border">
                      <div class="card-body p-2">
                        <div class="position-relative">
                          <!-- Display the service image -->
                          <img :src="item.service_image_url" alt="Service Image" class="img-fluid w-100" v-if="item.service_image_url" />
                        </div>
                        <ul class="list-group list-group-flush my-2">
                          <li class="list-group-item px-0 py-2">
                            <div class="d-flex align-items-center">
                              <div class="flex-grow-1 me-2">
                                <h6 class="mb-1">{{ item.service_title }}</h6>
                              </div>
                              <div class="flex-shrink-0">
                                <a @click.prevent="deleteService(item.id)" class="avtar avtar-xs btn-link-secondary">
                                  <i class="ti ti-trash f-20"></i>
                                </a>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <router-link :to="{path:'/admin/services/edit-service/'+ item.id}" class="btn btn-sm btn-outline-primary mb-2">Edit service</router-link>
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
      ServicesList: [],
    };
  },
  mounted() {
    this.getServices();
  },
  methods: {
    getServices() {
      axios.get('/api/get_services')
        .then((response) => {
          if (response.data.status === 200) {
            this.ServicesList = response.data.data;
          } else {
            console.error('Failed to fetch services:', response.data.message);
          }
        })
        .catch((error) => {
          console.error('Error fetching services:', error);
        });
    },
    deleteService(id) {
      if (confirm('Are you sure you want to delete this service?')) {
        axios.delete(`/api/delete_service/${id}`)
          .then((response) => {
            if (response.data.status === 200) {
              this.getServices(); // Refresh the service list after deletion
              alert('Service deleted successfully.');
            } else {
              alert('Failed to delete the service.');
            }
          })
          .catch((error) => {
            console.error('Error deleting service:', error);
          });
      }
    },
  }
};
</script>
