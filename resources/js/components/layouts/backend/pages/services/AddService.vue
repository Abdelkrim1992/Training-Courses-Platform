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
                  <li class="breadcrumb-item" aria-current="page">Add Service</li>
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
                    <label for="floatingTextarea2 ">Short Description</label>
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

                <div class="mt-2">
                  <button @click="add_service" class="btn btn-primary">Add Service</button>
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
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import BackendLayouts from '../../BackendLayouts.vue';

const router = useRouter();
const errorMessage = ref(null);

const formData = reactive({
  service_title: '',
  short_description: '',
  image: [], // For course images
});

// Handle course image upload
const handleFileUpload = (event) => {
  formData.image = Array.from(event.target.files); // Convert FileList to Array for course images
};

// Add course
const add_service = async () => {

  const formDataObj = new FormData();

  // Append other form fields
  formDataObj.append('service_title', formData.service_title);
  formDataObj.append('short_description', formData.short_description);

  // Append course images
  formData.image.forEach(file => {
    formDataObj.append('image[]', file);
  });

  try {
    const response = await axios.post('/api/add_service', formDataObj, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log('Add course success', response.data);
    router.push('/admin/services/list');
  } catch (error) {
    console.error('Adding service failed', error.response.data);
    errorMessage.value = error.response.data.message || "Adding service failed. Please try again.";
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