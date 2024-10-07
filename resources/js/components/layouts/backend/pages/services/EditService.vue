<template>
  <BackendLayouts>
    <div class="pc-container">
      <div class="pc-content">
        <div class="page-header">
          <div class="page-block">
            <div class="row align-items-center">
              <div class="col-md-12">
                <ul class="breadcrumb">
                  <li class="breadcrumb-item"><router-link to="/admin/dashboard">Home</router-link></li>
                  <li class="breadcrumb-item" aria-current="page">Edit Service</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h5 class="mb-0">Service Information</h5>
              </div>
              <div class="card-body">
                <div class="row">
                  <div v-if="errorMessage" class="alert alert-danger" role="alert">
                    {{ errorMessage }}
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Service Name</label>
                      <input type="text" v-model="formData.service_title" class="form-control" placeholder="Enter service name">
                    </div>
                  </div>
                  <div class="col-md-12">
                    <label for="floatingTextarea2">Short Description</label>
                    <div class="form-floating mt-2">
                      <froala id="edit" :tag="'textarea'" :config="config" v-model:value="formData.short_description"></froala> 
                    </div>
                  </div>
                  <div class="col-md-6 mt-3">
                    <div class="mb-3">
                      <label class="form-label">Service Logo</label>
                      <input type="file" @change="handleFileUpload" class="form-control" accept="image/*" />
                    </div>
                  </div>
                </div>

                <div class="mt-3">
                  <button @click="edit_service" class="btn btn-primary">Update Service</button>
                </div>
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
import { useRouter, useRoute } from 'vue-router';
import axios from 'axios';
import BackendLayouts from '../../BackendLayouts.vue';

const router = useRouter();
const route = useRoute();
const errorMessage = ref(null);
const successMessage = ref(null); // Optional success message
const formData = reactive({
  service_name: '',
  service_description: '',
  city: '',
  budjet: '',
  domaine: '',
  service_tasks: '',
  started_date: '',
  dead_line: '',
  short_description: '',
  image: [] ,
});

const handleFileUpload = (event) => {
  formData.image = Array.from(event.target.files); // Convert FileList to Array
};


onMounted(() => {
  const serviceId = route.params.id;
  axios.get(`/api/get_service/${serviceId}`)
    .then(response => {
      const ServiceData = response.data.data;
      formData.service_name = ServiceData.service_title;
      formData.short_description = ServiceData.short_description;
    })
    .catch(error => {
      console.error('Error fetching course:', error);
      errorMessage.value = 'Error loading service data';
    });
});

const edit_service = async () => {
  const serviceId = route.params.id;

  // Create a new FormData instance for file uploads
  const formDataObj = new FormData();
  
  // Append data fields
  formDataObj.append('service_title', formData.service_title);
  formDataObj.append('short_description', formData.short_description);

  for (const key in formData) {
    if (Array.isArray(formData[key])) {
      formData[key].forEach(file => formDataObj.append('image[]', file));
    } else {
      formDataObj.append(key, formData[key]);
    }
  }

  try {
    // Use PUT request to update the course
    const response = await axios.post(`/api/update_service/${serviceId}`, formDataObj, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log('Edit service success', response.data);
    successMessage.value = 'service updated successfully!';
    router.push('/admin/services/list'); // Redirect to course list after successful update
  } catch (error) {
    console.error('Updating service failed', error);
    errorMessage.value = error.response?.data?.message || "Updating course failed. Please try again.";
  }
};
</script>

<script>
  
  export default {
    name: 'AddCourse',
    data () {
      return {
        config: {
          events: {
            initialized: function () {
              console.log('initialized')
            }
          }
        },
        model: 'Edit Your Content Here!'
      }
    }
  }
  </script>