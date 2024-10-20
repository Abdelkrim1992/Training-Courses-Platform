<template>
  <div class="auth-main v1">
    <div class="auth-wrapper">
      <div class="auth-form">
        <div class="card my-5">
          <div class="card-body">
            <div class="text-center">
              <h4 class="f-w-500 mb-1">Register with your email</h4>
              <p class="mb-3">Already have an Account? 
                <router-link to="/auth/login" class="link-primary">Log in</router-link>
              </p>
            </div>

            <!-- Error Message -->
            <div v-if="errorMessage" class="alert alert-danger text-center" role="alert">
              {{ errorMessage }}
            </div>

            <!-- Success Message -->
            <div v-if="successMessage" class="alert alert-success text-center" role="alert">
              {{ successMessage }}
            </div>
            
            <div class="mb-3">
              <input type="text" v-model="formData.name" class="form-control" placeholder="Full Name">
            </div>
            <div class="mb-3">
              <input type="email" v-model="formData.email" class="form-control" placeholder="Email Address">
            </div>
            <div class="mb-3">
              <input type="password" v-model="formData.password" class="form-control" placeholder="Password">
            </div>
            <div class="d-grid mt-4">
              <button @click="register_action" type="button" class="btn btn-primary">Create Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();
const errorMessage = ref(null);
const successMessage = ref(null);

// Reactive form data
const formData = reactive({
  name: '',
  email: '',
  password: '',
});

// Register action
const register_action = async () => {
  // Clear messages before making a new request

  const formDataObj = new FormData();
  formDataObj.append('name', formData.name);
  formDataObj.append('email', formData.email);
  formDataObj.append('password', formData.password);

  try {
    const response = await axios.post('/api/register', formDataObj, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    // On success, set the success message and redirect after 1 second
    successMessage.value = response.data.message || 'Registration successful!';
    setTimeout(() => {
      router.push('/auth/login');
    }, 2000);

  } catch (error) {
    // On error, capture the error message
    if (error.response && error.response.data) {
      errorMessage.value = error.response.data.message || 'Registration failed. Please try again.';
    } else {
      errorMessage.value = 'An unknown error occurred. Please try again.';
    }
  }
};
</script>
