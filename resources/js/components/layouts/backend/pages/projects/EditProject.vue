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
                      <label class="form-label">City</label>
                      <input type="text" v-model="formData.city" class="form-control" placeholder="Enter project city">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Started Date</label>
                      <input v-model="formData.started_date" class="form-control" placeholder="Enter started date"/>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Dead Line</label>
                      <input v-model="formData.dead_line" class="form-control" placeholder="Enter end date"/>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Domaine</label>
                      <input type="text" v-model="formData.domaine" class="form-control" placeholder="Enter domaine">
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-floating">
                      <textarea v-model="formData.short_description" class="form-control" placeholder="Enter Short Description"></textarea>
                      <label for="floatingTextarea2">Short Description</label>
                    </div>
                  </div>
                  <!-- Project Description (Rich Text Editor) -->
                  <div class="col-md-12 mt-4">
                    <div class="mb-3">
                      <label for="floatingTextarea2">Project Description</label>
                      <div class="form-floating mt-2">
                        <ejs-richtexteditor v-model="formData.project_description" id="projectTasks"></ejs-richtexteditor>
                      </div>
                    </div>
                  </div>

                  <!-- Project Description (Rich Text Editor) -->
                  <div class="col-md-12 mt-4">
                    <div class="mb-3">
                      <label for="floatingTextarea2">Project Tasks</label>
                      <div class="form-floating mt-2">
                        <ejs-richtexteditor v-model="formData.project_tasks" id="projectTasks"></ejs-richtexteditor>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Project Logo</label>
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
import BackendLayouts from '../../BackendLayouts.vue';

const router = useRouter();
const route = useRoute();
const errorMessage = ref(null);
const successMessage = ref(null); // Optional success message
const formData = reactive({
  project_name: '',
  project_description: '',
  city: '',
  domaine: '',
  project_tasks: '',
  started_date: '',
  dead_line: '',
  short_description: '',
  image: [] ,
});

const handleFileUpload = (event) => {
  formData.image = Array.from(event.target.files); // Convert FileList to Array
};


onMounted(() => {
  const projectId = route.params.id;
  axios.get(`/api/get_project/${projectId}`)
    .then(response => {
      const ProjectData = response.data.data;
      formData.project_name = ProjectData.project_name;
      formData.project_description = ProjectData.project_description;
      formData.city = ProjectData.city;
      formData.domaine = ProjectData.domaine;
      formData.short_description = ProjectData.short_description; // Ensure this is a Date object
      formData.started_date = ProjectData.started_date;
      formData.dead_line = ProjectData.dead_line;
      formData.project_tasks = ProjectData.project_tasks;
    })
    .catch(error => {
      console.error('Error fetching course:', error);
      errorMessage.value = 'Error loading project data';
    });
});

const edit_project = async () => {
  const projectId = route.params.id;

  // Create a new FormData instance for file uploads
  const formDataObj = new FormData();
  
  // Append data fields
  formDataObj.append('project_name', formData.project_name);
  formDataObj.append('project_description', formData.project_description);
  formDataObj.append('city', formData.city);
  formDataObj.append('domaine', formData.domaine);
  formDataObj.append('dead_line', formData.dead_line);
  formDataObj.append('started_date', formData.started_date);
  formDataObj.append('project_tasks', formData.project_tasks);
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
    const response = await axios.post(`/api/update_project/${projectId}`, formDataObj, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log('Edit project success', response.data);
    successMessage.value = 'project updated successfully!';
    router.push('/admin/projects/list'); // Redirect to course list after successful update
  } catch (error) {
    console.error('Updating project failed', error);
    errorMessage.value = error.response?.data?.message || "Updating course failed. Please try again.";
  }
};
</script>

<script>
import { RichTextEditorComponent, Toolbar, Link, Image, HtmlEditor, Table } from '@syncfusion/ej2-vue-richtexteditor';

export default {
  name: 'AddProject',
  components: {
    'ejs-richtexteditor': RichTextEditorComponent,
  },
  provide: {
    richtexteditor: [Toolbar, Link, Image, HtmlEditor, Table],
  },
};
</script>