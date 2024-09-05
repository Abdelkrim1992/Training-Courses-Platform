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
                  <li class="breadcrumb-item" aria-current="page">Edit Project</li>
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
                  <div v-if="errorMessage" class="alert alert-danger" role="alert">
                    {{ errorMessage }}
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Project Name</label>
                      <input type="text" v-model="formData.project_name" class="form-control" placeholder="Enter project name">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Budget</label>
                      <input type="text" v-model="formData.budjet" class="form-control" placeholder="Enter budget">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Deadline</label>
                      <Datepicker v-model="formData.dead_line" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-floating">
                      <textarea v-model="formData.project_description" class="form-control" placeholder="Project Description"></textarea>
                      <label for="floatingTextarea2">Project Description</label>
                    </div>
                  </div>
                  <div class="col-md-12 mt-4">
                    <div class="mb-3">
                      <div class="form-floating">
                        <textarea v-model="formData.project_tasks" class="form-control" placeholder="Project Tasks"></textarea>
                        <label for="floatingTextarea2">Project Tasks</label>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Upload Image</label>
                      <input type="file" @change="handleFileUpload" class="form-control" accept="image/*" />
                    </div>
                  </div>
                </div>

                <div class="mt-3">
                  <button @click="edit_project" class="btn btn-primary">Update Project</button>
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
import Datepicker from 'vue3-datepicker';
import BackendLayouts from '../../BackendLayouts.vue';

const router = useRouter();
const route = useRoute();
const errorMessage = ref(null);
const successMessage = ref(null); // Optional success message
const formData = reactive({
  project_name: '',
  budjet: '',
  dead_line: '',
  project_description: '',
  project_tasks: '',
  image: [] // for image files
});

const handleFileUpload = (event) => {
  formData.image = Array.from(event.target.files); // Convert FileList to Array
};

// Function to format the date as 'YYYY-MM-DD'
const formatDate = (date) => {
  const d = new Date(date);
  const month = `${d.getMonth() + 1}`.padStart(2, '0');
  const day = `${d.getDate()}`.padStart(2, '0');
  const year = d.getFullYear();
  return `${year}-${month}-${day}`;
};

onMounted(() => {
  const projectId = route.params.id;
  axios.get(`/api/get_project/${projectId}`)
    .then(response => {
      const projectData = response.data.data;
      formData.project_name = projectData.project_name;
      formData.budjet = projectData.budjet;
      formData.dead_line = new Date(projectData.dead_line); // Ensure this is a Date object
      formData.project_description = projectData.project_description;
      formData.project_tasks = projectData.project_tasks;
    })
    .catch(error => {
      console.error('Error fetching project:', error);
      errorMessage.value = 'Error loading project data';
    });
});

const edit_project = async () => {
  const projectId = route.params.id;

  // Format the deadline before submission
  formData.dead_line = formatDate(formData.dead_line);

  // Create a new FormData instance for file uploads
  const formDataObj = new FormData();
  
  // Append data fields
  formDataObj.append('project_name', formData.project_name);
  formDataObj.append('budjet', formData.budjet);
  formDataObj.append('dead_line', formData.dead_line);
  formDataObj.append('project_description', formData.project_description);
  formDataObj.append('project_tasks', formData.project_tasks);

  for (const key in formData) {
    if (Array.isArray(formData[key])) {
      formData[key].forEach(file => formDataObj.append('image[]', file));
    } else {
      formDataObj.append(key, formData[key]);
    }
  }

  try {
    // Use PUT request to update the project
    const response = await axios.post(`/api/update_project/${projectId}`, formDataObj, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log('Edit project success', response.data);
    successMessage.value = 'Project updated successfully!';
    router.push('/admin/projects/list'); // Redirect to project list after successful update
  } catch (error) {
    console.error('Updating project failed', error);
    errorMessage.value = error.response?.data?.message || "Updating project failed. Please try again.";
  }
};
</script>
