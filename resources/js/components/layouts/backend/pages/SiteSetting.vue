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
                                  <li class="breadcrumb-item" aria-current="page">Settings</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="row">
                  <div class="col-sm-12">
                      <div class="card">
                          <div class="card-header">
                              <h5>Site Settings</h5>
                          </div>
                          <div class="card-body">
                              <div v-if="errorMessage" class="alert alert-danger" role="alert">
                                  {{ errorMessage }}
                              </div>

                              <div v-if="successMessage" class="alert alert-success" role="alert">
                                  {{ successMessage }}
                              </div>

                              <form @submit.prevent="saveSettings">
                                  <div class="mb-3 row">
                                      <label class="col-form-label col-sm-3 text-sm-end">Site Name</label>
                                      <div class="col-lg-6 col-sm-7">
                                          <input type="text" v-model="form.site_name" class="form-control" placeholder="Enter site name">
                                      </div>
                                  </div>
                                  <div class="mb-3 row">
                                      <label class="col-form-label col-sm-3 text-sm-end">Email</label>
                                      <div class="col-lg-6 col-sm-7">
                                          <input type="email" v-model="form.email" class="form-control" placeholder="Enter email">
                                      </div>
                                  </div>
                                  <div class="mb-3 row">
                                      <label class="col-form-label col-sm-3 text-sm-end">Phone</label>
                                      <div class="col-lg-6 col-sm-7">
                                          <input type="text" v-model="form.phone" class="form-control" placeholder="Enter phone">
                                      </div>
                                  </div>
                                  <div class="mb-3 row">
                                      <label class="col-form-label col-sm-3 text-sm-end">Address</label>
                                      <div class="col-lg-6 col-sm-7">
                                          <input type="text" v-model="form.address" class="form-control" placeholder="Enter address">
                                      </div>
                                  </div>
                                  <div class="mb-3 row">
                                      <label class="col-form-label col-sm-3 text-sm-end">Facebook</label>
                                      <div class="col-lg-6 col-sm-7">
                                          <input type="text" v-model="form.facebook" class="form-control" placeholder="Enter Facebook link">
                                      </div>
                                  </div>
                                  <div class="mb-3 row">
                                      <label class="col-form-label col-sm-3 text-sm-end">Instagram</label>
                                      <div class="col-lg-6 col-sm-7">
                                          <input type="text" v-model="form.instagram" class="form-control" placeholder="Enter Instagram link">
                                      </div>
                                  </div>
                                  <div class="row mb-0">
                                      <span class="col-form-label col-sm-3 text-sm-end"></span>
                                      <div class="col-lg-6 col-sm-7">
                                          <button type="submit" class="btn btn-primary me-2">Apply Changes</button>
                                          <button type="button" class="btn btn-outline-secondary" @click="resetForm">Cancel</button>
                                      </div>
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
import { ref, reactive, onMounted } from 'vue';
import axios from 'axios';
import BackendLayouts from '../BackendLayouts.vue';

const form = reactive({
  site_name: '',
  email: '',
  phone: '',
  address: '',
  facebook: '',
  instagram: ''
});

const errorMessage = ref(null);
const successMessage = ref(null);

const resetForm = () => {
  errorMessage.value = null;
  successMessage.value = null;
  loadSettings();  // Reload settings when resetting form
};

const loadSettings = async () => {
  try {
      const response = await axios.get('/api/setting');
      Object.assign(form, response.data);
  } catch (error) {
      console.error(error);
      errorMessage.value = 'Failed to load settings';
  }
};

const saveSettings = async () => {
  try {
      await axios.post('/api/setting', form);
      successMessage.value = 'Settings updated successfully';
      errorMessage.value = null;
  } catch (error) {
      console.error(error);
      errorMessage.value = 'Failed to update settings';
  }
};

onMounted(loadSettings);
</script>