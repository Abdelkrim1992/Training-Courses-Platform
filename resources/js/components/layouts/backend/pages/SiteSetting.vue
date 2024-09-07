<template>
    <BackendLayouts>
      <div class="pc-container">
        <div class="pc-content">
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
                  <form @submit.prevent="updateSetting">
                    <div class="mb-3 row">
                      <label class="col-form-label col-sm-3 text-sm-end">Site Name</label>
                      <div class="col-lg-6 col-sm-7">
                        <input v-model="setting.site_name" type="text" class="form-control" placeholder="Enter site name">
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-form-label col-sm-3 text-sm-end">Email</label>
                      <div class="col-lg-6 col-sm-7">
                        <input v-model="setting.email" type="email" class="form-control" placeholder="Enter email">
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-form-label col-sm-3 text-sm-end">Phone</label>
                      <div class="col-lg-6 col-sm-7">
                        <input v-model="setting.phone" type="text" class="form-control" placeholder="Enter phone">
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-form-label col-sm-3 text-sm-end">Address</label>
                      <div class="col-lg-6 col-sm-7">
                        <input v-model="setting.address" type="text" class="form-control" placeholder="Enter address">
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-form-label col-sm-3 text-sm-end">Facebook</label>
                      <div class="col-lg-6 col-sm-7">
                        <input v-model="setting.facebook" type="text" class="form-control" placeholder="Enter Facebook link">
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-form-label col-sm-3 text-sm-end">Instagram</label>
                      <div class="col-lg-6 col-sm-7">
                        <input v-model="setting.instagram" type="text" class="form-control" placeholder="Enter Instagram link">
                      </div>
                    </div>
                    <div class="row mb-0">
                      <span class="col-form-label col-sm-3 text-sm-end"></span>
                      <div class="col-lg-6 col-sm-7">
                        <button type="submit" class="btn btn-primary me-2">Apply Changes</button>
                        <button type="button" class="btn btn-outline-secondary">Cancel</button>
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
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import BackendLayouts from '../BackendLayouts.vue';
  import axios from 'axios';
  
  const router = useRouter();
  const setting = ref({});
  const errorMessage = ref('');
  const successMessage = ref('');
  
  onMounted(() => {
    axios.get('/api/settings/first')
      .then(response => {
        setting.value = response.data.data;
      })
      .catch(error => {
        errorMessage.value = 'Error fetching setting: ' + error;
      });
  });
  
  const updateSetting = () => {
    axios.put('/api/settings/first', setting.value)
      .then(response => {
        if (response.status === 200) {
          successMessage.value = 'Settings updated successfully!';
          router.push('/admin/dashboard');
        } else {
          errorMessage.value = 'Error updating setting: ' + response.data.message;
        }
      })
      .catch(error => {
        if (error.response && error.response.status === 422) {
          errorMessage.value = 'Validation error: ' + JSON.stringify(error.response.data.errors);
        } else {
          errorMessage.value = 'Error updating setting: ' + error;
        }
      });
  };
  </script>