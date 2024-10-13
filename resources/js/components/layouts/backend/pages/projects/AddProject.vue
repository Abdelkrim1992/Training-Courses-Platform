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
                  <li class="breadcrumb-item" aria-current="page">Add Project</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h5 class="mb-0">Project Information</h5>
              </div>
              <div class="card-body">
                <div class="row">
                  <!-- Display error message -->
                  <div v-if="errorMessage" class="alert alert-danger" role="alert">
                    {{ errorMessage }}
                  </div>

                  <!-- Project Name -->
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Project Name</label>
                      <input type="text" v-model="formData.project_name" class="form-control" placeholder="Enter project name" />
                    </div>
                  </div>

                  <!-- City -->
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">City</label>
                      <input type="text" v-model="formData.city" class="form-control" placeholder="Enter project city" />
                    </div>
                  </div>

                  <!-- Start Date -->
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Started Date</label>
                      <input type="date" v-model="formData.started_date" class="form-control" />
                    </div>
                  </div>

                  <!-- Deadline -->
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Deadline</label>
                      <input type="date" v-model="formData.dead_line" class="form-control" />
                    </div>
                  </div>

                  <!-- Domain -->
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Domain</label>
                      <input type="text" v-model="formData.domaine" class="form-control" placeholder="Enter domain" />
                    </div>
                  </div>

                  <!-- Short Description -->
                  <div class="col-md-12">
                    <div class="form-floating">
                      <froala id="edit" :tag="'textarea'" :config="config" v-model:value="formData.short_description"></froala>
                      <label for="floatingTextarea2">Short Description</label>
                    </div>
                  </div>

                  <!-- Full Description (Rich Text Editor) -->
                  <div class="col-md-12 mt-4">
                    <label for="floatingTextarea2">Full Description</label>
                    <div class="form-floating mt-2">
                      <froala id="edit" :tag="'textarea'" :config="config" v-model:value="formData.project_description"></froala>
                    </div>
                  </div>

                  <!-- Project Tasks (Rich Text Editor) -->
                  <div class="col-md-12 mt-4">
                    <div class="mb-3">
                      <label for="floatingTextarea2">Project Tasks</label>
                      <div class="form-floating mt-2">
                        <froala id="edit" :tag="'textarea'" :config="config" v-model:value="formData.project_tasks"></froala>                      
                      </div>
                    </div>
                  </div>

                  <!-- Project Logo Upload -->
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Project Logo</label>
                      <input type="file" @change="handleFileUpload" class="form-control" accept="image/*" />
                    </div>
                  </div>
                </div>

                <!-- Submit Button -->
                <div class="mt-3">
                  <button @click="add_project" class="btn btn-primary">Add Project</button>
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

// Form data for the project
const formData = reactive({
  project_name: '',
  project_description: '',
  city: '',
  dead_line: '',
  started_date: '',
  project_tasks: '',
  short_description: '',
  domaine: '',
  image: [], // For project logo
});

// Handle project logo upload
const handleFileUpload = (event) => {
  formData.image = Array.from(event.target.files);
};

// Submit project data
const add_project = async () => {
  const formDataObj = new FormData();

  // Append form data
  formDataObj.append('project_name', formData.project_name);
  formDataObj.append('project_description', formData.project_description);
  formDataObj.append('city', formData.city);
  formDataObj.append('domaine', formData.domaine);
  formDataObj.append('dead_line', formData.dead_line);
  formDataObj.append('started_date', formData.started_date);
  formDataObj.append('project_tasks', formData.project_tasks);
  formDataObj.append('short_description', formData.short_description);

  // Append project logo
  formData.image.forEach(file => {
    formDataObj.append('image[]', file);
  });

  try {
    const response = await axios.post('/api/add_project', formDataObj, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log('Add project success', response.data);
    successMessage.value = 'Course updated successfully!';
    router.push('/admin/projects/list');
  } catch (error) {
    console.error('Adding project failed', error.response.data);
    errorMessage.value = error.response.data.message || 'Adding project failed. Please try again.';
  }
};
</script>

<script>
  
  export default {
    name: 'AppProject',
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
