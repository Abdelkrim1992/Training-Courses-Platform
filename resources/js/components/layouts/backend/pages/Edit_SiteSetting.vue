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
                  <div class="mb-3 row">
                    <label class="col-form-label col-sm-3 text-sm-end">Website Logo</label>
                    <div class="col-lg-6 col-sm-7">
                      <input type="file" @change="handleFileUpload" class="form-control" accept="image/*" />
                    </div>
                  </div>
                  <div class="row mb-0">
                    <span class="col-form-label col-sm-3 text-sm-end"></span>
                    <div class="col-lg-6 col-sm-7">
                      <button type="submit" class="btn btn-primary me-2">Apply Changes</button>
                      <button type="button" class="btn btn-outline-secondary" @click="cancel">Cancel</button>
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
import axios from 'axios';
import BackendLayouts from '../BackendLayouts.vue';

const router = useRouter();
const errorMessage = ref(null);
const successMessage = ref(null);

const setting = ref({
  site_name: '',
  email: '',
  phone: '',
  address: '',
  facebook: '',
  instagram: '',
});

const imageFile = ref(null);

// Fetch the first setting when the component is mounted
onMounted(() => {
  axios.get('/api/get_setting/1')  // Always fetching the first setting
    .then(response => {
      setting.value = response.data.data;
    })
    .catch(error => {
      errorMessage.value = 'Failed to load the setting.';
    });
});

const handleFileUpload = (event) => {
  imageFile.value = event.target.files[0];
};

const updateSetting = async () => {
  errorMessage.value = null;
  successMessage.value = null;

  const formData = new FormData();

  // Append regular fields
  formData.append('site_name', setting.value.site_name);
  formData.append('email', setting.value.email);
  formData.append('phone', setting.value.phone);
  formData.append('address', setting.value.address);
  formData.append('facebook', setting.value.facebook);
  formData.append('instagram', setting.value.instagram);

  // Append file if present
  if (imageFile.value) {
    formData.append('image', imageFile.value);
  }

  try {
    const response = await axios.post('/api/update_setting/1', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    successMessage.value = response.data.message;
    setTimeout(() => {
      router.push('/admin/setting/edit-setting');
    }, 1500);
  } catch (error) {
    if (error.response && error.response.data.errors) {
      // If the error response contains validation messages
      const errors = Object.values(error.response.data.errors).flat();
      errorMessage.value = errors.join(', ');
    } else {
      errorMessage.value = error.response?.data?.message || 'An error occurred while saving the setting.';
    }
  }
};

const cancel = () => {
  router.push('/admin/dashboard');
};
</script>
