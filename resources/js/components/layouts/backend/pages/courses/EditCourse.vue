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
                  <li class="breadcrumb-item" aria-current="page">Edit Course</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h5 class="mb-0">Course Information</h5>
              </div>
              <div class="card-body">
                <div class="row">
                  <div v-if="errorMessage" class="alert alert-danger" role="alert">
                    {{ errorMessage }}
                  </div>

                  <!-- Success Message -->
                  <div v-if="successMessage" class="alert alert-success" role="alert">
                    {{ successMessage }}
                  </div>

                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Course Title</label>
                      <input type="text" v-model="formData.course_title" class="form-control" placeholder="Enter course title">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Category</label>
                      <input type="text" v-model="formData.category" class="form-control" placeholder="Enter category">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Teacher Name</label>
                      <input type="text" v-model="formData.teacher_name" class="form-control" placeholder="Enter teacher name">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Duration</label>
                      <input type="text" v-model="formData.duration" class="form-control" placeholder="Enter duration of course">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Date of course</label>
                      <Datepicker v-model="formData.date" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <label for="floatingTextarea2">Course Description</label>
                    <div class="form-floating mt-2">
                      <froala id="edit" :tag="'textarea'" :config="config" v-model:value="formData.course_description"></froala> 
                      
                    </div>
                  </div>
                  <div class="col-md-12 mt-4">
                    <label for="floatingTextarea2">Course Tips</label>
                    <div class="form-floating mt-2">
                      <froala id="edit" :tag="'textarea'" :config="config" v-model:value="formData.course_tips"></froala> 
                      
                    </div>
                  </div>
                  <div class="col-md-12 mt-4">
                    <label for="floatingTextarea2">Teacher Summery</label>
                    <div class="form-floating mt-2">
                      <froala id="edit" :tag="'textarea'" :config="config" v-model:value="formData.teacher_summery"></froala> 
                      
                    </div>
                  </div>
                  <div class="col-md-6 mt-3">
                    <div class="mb-3">
                      <label class="form-label">Course Logo</label>
                      <input type="file" @change="handleFileUpload" class="form-control" accept="image/*" />
                    </div>
                  </div>
                  <div class="col-md-6 mt-3">
                    <div class="mb-3">
                      <label class="form-label">Teacher Photo</label>
                      <input type="file" @change="handleFileUpload_photo" class="form-control" accept="photo/*" />
                    </div>
                  </div>
                </div>

                <div class="mt-3">
                  <button @click="edit_course" class="btn btn-primary">Update Course</button>
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
  teacher_name: '',
  course_title: '',
  category: '',
  duration: '',
  date: '',
  course_description: '',
  teacher_summery:'',
  course_tips: '',
  image: [] ,
  photo: [] 
});

const handleFileUpload = (event) => {
  formData.image = Array.from(event.target.files); // Convert FileList to Array
};

const handleFileUpload_photo = (event) => {
  formData.photo = Array.from(event.target.files); // Convert FileList to Array
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
  const courseId = route.params.id;
  axios.get(`/api/get_course/${courseId}`)
    .then(response => {
      const courseData = response.data.data;
      formData.teacher_name = courseData.teacher_name;
      formData.course_title = courseData.course_title;
      formData.category = courseData.category;
      formData.duration = courseData.duration;
      formData.date = new Date(courseData.date); // Ensure this is a Date object
      formData.course_description = courseData.course_description;
      formData.course_tips = courseData.course_tasks;
      formData.teacher_summery = courseData.teacher_summery;
    })
    .catch(error => {
      console.error('Error fetching course:', error);
      errorMessage.value = 'Error loading course data';
    });
});

const edit_course = async () => {
  const courseId = route.params.id;

  // Format the date before submission
  formData.date = formatDate(formData.date);

  // Create a new FormData instance for file uploads
  const formDataObj = new FormData();
  
  // Append data fields
  formDataObj.append('teacher_name', formData.teacher_name);
  formDataObj.append('course_title', formData.course_title);
  formDataObj.append('category', formData.category);
  formDataObj.append('duration', formData.duration);
  formDataObj.append('date', formData.date);
  formDataObj.append('course_description', formData.course_description);
  formDataObj.append('course_tips', formData.course_tips);
  formDataObj.append('teacher_summery', formData.teacher_summery);

  for (const key in formData) {
    if (Array.isArray(formData[key])) {
      formData[key].forEach(file => formDataObj.append('image[]', file));
    } else {
      formDataObj.append(key, formData[key]);
    }
  }

  try {
    // Use PUT request to update the course
    const response = await axios.post(`/api/update_course/${courseId}`, formDataObj, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log('Edit course success', response.data);
    successMessage.value = 'course updated successfully!';
    router.push('/admin/courses/list'); // Redirect to course list after successful update
  } catch (error) {
    console.error('Updating course failed', error);
    errorMessage.value = error.response?.data?.message || "Updating course failed. Please try again.";
  }
};
</script>

<script>
  
  export default {
    name: 'EditCourse',
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