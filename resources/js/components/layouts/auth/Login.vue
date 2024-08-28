<script setup>
import { ref } from 'vue';
import axios from 'axios';

// Define reactive variables for email and password
const email = ref('');
const password = ref('');
const showErrorEmail = ref(false);
const showErrorPassword = ref(false);

// Function to validate inputs and log in the user
const validateAndLogin = async () => {
  // Validate email and password fields
  showErrorEmail.value = !email.value;
  showErrorPassword.value = !password.value;

  // If validation fails, do not proceed
  if (showErrorEmail.value || showErrorPassword.value) {
    return;
  }

  try {
    // Send a login request to the server
    const response = await axios.post('/auth/login', {
      email: email.value,
      password: password.value
    });

    // Retrieve token and user data from the response
    const token = response.data.authorisation.token;
    const user = response.data.user;

    // If token is received, store it and redirect to dashboard
    if (token) {
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      window.location.href = '/admin/dashboard';
    } else {
      console.error('Token not received');
    }
  } catch (error) {
    console.error('Login failed:', error);
  }
};
</script>

<template>
  <div class="auth-main v1">
    <div class="auth-wrapper">
      <div class="auth-form">
        <div class="card my-5">
          <!-- Form with @submit.prevent to handle login -->
          <form @submit.prevent="validateAndLogin">
            <div class="card-body">
              <div class="text-center">
                <img src="/backend/images/authentication/img-auth-login.png" alt="images" class="img-fluid mb-3">
                <h4 class="f-w-500 mb-3">Login with your email</h4>
              </div>
              <!-- Email input field with validation -->
              <div class="mb-3">
                <input
                  type="email"
                  class="form-control"
                  v-model="email"
                  placeholder="Email Address"
                  :class="{'is-invalid': showErrorEmail}"
                >
                <div v-if="showErrorEmail" class="invalid-feedback">
                  Email is required.
                </div>
              </div>
              <!-- Password input field with validation -->
              <div class="mb-3">
                <input
                  type="password"
                  class="form-control"
                  v-model="password"
                  placeholder="Password"
                  :class="{'is-invalid': showErrorPassword}"
                >
                <div v-if="showErrorPassword" class="invalid-feedback">
                  Password is required.
                </div>
              </div>
              <div class="d-flex mt-1 justify-content-between align-items-center">
                <div class="form-check">
                  <input class="form-check-input input-primary" type="checkbox" id="customCheckc1">
                  <label class="form-check-label text-muted" for="customCheckc1">Remember me?</label>
                </div>
                <a href="../pages/forgot-password-v1.html">
                  <h6 class="f-w-400 mb-0">Forgot Password?</h6>
                </a>
              </div>
              <!-- Login button -->
              <div class="d-grid mt-4">
                <button type="submit" class="btn btn-primary">Login</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>