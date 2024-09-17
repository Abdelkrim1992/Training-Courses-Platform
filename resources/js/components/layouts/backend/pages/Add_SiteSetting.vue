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
                <!-- Error Message -->
                <div v-if="errorMessage" class="alert alert-danger" role="alert">
                  {{ errorMessage }}
                </div>

                <!-- Success Message -->
                <div v-if="successMessage" class="alert alert-success" role="alert">
                  {{ successMessage }}
                </div>

                <!-- Form Start -->
                <form @submit.prevent="submitSetting">
                  <!-- Site Name -->
                  <div class="mb-3 row">
                    <label class="col-form-label col-sm-3 text-sm-end">Site Name</label>
                    <div class="col-lg-6 col-sm-7">
                      <input v-model="formData.site_name" type="text" class="form-control" placeholder="Enter site name">
                    </div>
                  </div>

                  <!-- Email -->
                  <div class="mb-3 row">
                    <label class="col-form-label col-sm-3 text-sm-end">Email</label>
                    <div class="col-lg-6 col-sm-7">
                      <input v-model="formData.email" type="email" class="form-control" placeholder="Enter email">
                    </div>
                  </div>

                  <!-- Phone -->
                  <div class="mb-3 row">
                    <label class="col-form-label col-sm-3 text-sm-end">Phone</label>
                    <div class="col-lg-6 col-sm-7">
                      <input v-model="formData.phone" type="text" class="form-control" placeholder="Enter phone">
                    </div>
                  </div>

                  <!-- Address -->
                  <div class="mb-3 row">
                    <label class="col-form-label col-sm-3 text-sm-end">Address</label>
                    <div class="col-lg-6 col-sm-7">
                      <input v-model="formData.address" type="text" class="form-control" placeholder="Enter address">
                    </div>
                  </div>

                  <!-- Facebook -->
                  <div class="mb-3 row">
                    <label class="col-form-label col-sm-3 text-sm-end">Facebook</label>
                    <div class="col-lg-6 col-sm-7">
                      <input v-model="formData.facebook" type="text" class="form-control" placeholder="Enter Facebook link">
                    </div>
                  </div>

                  <!-- Instagram -->
                  <div class="mb-3 row">
                    <label class="col-form-label col-sm-3 text-sm-end">Instagram</label>
                    <div class="col-lg-6 col-sm-7">
                      <input v-model="formData.instagram" type="text" class="form-control" placeholder="Enter Instagram link">
                    </div>
                  </div>

                  <!-- Image Upload -->
                    <div class="mb-3 row">
                      <label class="col-form-label col-sm-3 text-sm-end">Website Logo</label>
                      <div class="col-lg-6 col-sm-7">
                        <input type="file" @change="handleFileUpload" class="form-control" accept="image/*" multiple />
                      </div>
                  </div>

                  <!-- Submit Button -->
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

// Reactive data object for form fields
const formData = reactive({
  site_name: '',
  email: '',
  phone: '',
  address: '',
  facebook: '',
  instagram: '',
  image: null, // Will hold the uploaded file(s)
});

// Handle file uploads
const handleFileUpload = (event) => {
  formData.image = event.target.files;
};

// Submit form data including image
const submitSetting = async () => {
  errorMessage.value = null;
  successMessage.value = null;

  const formDataObj = new FormData();

  // Append regular fields
  formDataObj.append('site_name', formData.site_name);
  formDataObj.append('email', formData.email);
  formDataObj.append('phone', formData.phone);
  formDataObj.append('address', formData.address);
  formDataObj.append('facebook', formData.facebook);
  formDataObj.append('instagram', formData.instagram);

  // Append files if present
  if (formData.image) {
    for (let i = 0; i < formData.image.length; i++) {
      formDataObj.append('image[]', formData.image[i]);
    }
  }

  try {
    const response = await axios.post('/api/add_setting', formDataObj, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    successMessage.value = response.data.message;
    setTimeout(() => {
      router.push('/admin/setting/add-setting');
    }, 1500);
  } catch (error) {
    errorMessage.value = error.response?.data?.message || 'An error occurred while saving the setting.';
  }
};
</script>
