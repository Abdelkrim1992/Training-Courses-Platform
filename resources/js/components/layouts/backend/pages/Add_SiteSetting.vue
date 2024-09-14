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
                <form @submit.prevent="submitSetting">
                  <div class="mb-3 row">
                    <label class="col-form-label col-sm-3 text-sm-end">Site Name</label>
                    <div class="col-lg-6 col-sm-7">
                      <input v-model="formData.site_name" type="text" class="form-control" placeholder="Enter site name">
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label class="col-form-label col-sm-3 text-sm-end">Email</label>
                    <div class="col-lg-6 col-sm-7">
                      <input v-model="formData.email" type="email" class="form-control" placeholder="Enter email">
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label class="col-form-label col-sm-3 text-sm-end">Phone</label>
                    <div class="col-lg-6 col-sm-7">
                      <input v-model="formData.phone" type="text" class="form-control" placeholder="Enter phone">
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label class="col-form-label col-sm-3 text-sm-end">Address</label>
                    <div class="col-lg-6 col-sm-7">
                      <input v-model="formData.address" type="text" class="form-control" placeholder="Enter address">
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label class="col-form-label col-sm-3 text-sm-end">Facebook</label>
                    <div class="col-lg-6 col-sm-7">
                      <input v-model="formData.facebook" type="text" class="form-control" placeholder="Enter Facebook link">
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label class="col-form-label col-sm-3 text-sm-end">Instagram</label>
                    <div class="col-lg-6 col-sm-7">
                      <input v-model="formData.instagram" type="text" class="form-control" placeholder="Enter Instagram link">
                    </div>
                  </div>
                  <div class="row mb-0">
                    <span class="col-form-label col-sm-3 text-sm-end"></span>
                    <div class="col-lg-6 col-sm-7">
                      <button type="submit" class="btn btn-primary me-2">
                        {{ formMode === 'add' ? 'Add Setting' : 'Update Setting' }}
                      </button>
                      <router-link to="/admin/dashboard" type="button" class="btn btn-outline-secondary">Cancel</router-link>
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
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import BackendLayouts from '../BackendLayouts.vue';

const router = useRouter();

const errorMessage = ref(null);
const successMessage = ref(null);

const formData = reactive({
  site_name: '',
  email: '',
  phone: '',
  address: '',
  facebook: '',
  instagram: '',
});

const submitSetting = () => {
  axios.post('/api/add_setting', formData)
    .then(response => {
      successMessage.value = response.data.message;
      setTimeout(() => {
        router.push('/admin/setting/add-setting');
      }, 1500);
    })
    .catch(error => {
      errorMessage.value = error.response.data.message || 'An error occurred while adding the setting.';
    });
};
</script>
