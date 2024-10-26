<template>
  <div class="auth-main v1">
    <div class="auth-wrapper">
      <div class="auth-form">
        <div class="card my-5">
          <!-- Form with @submit.prevent to handle login -->
          <form @submit.prevent="onSubmit">
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

<script setup>
import { ref } from 'vue';
import { useAuthStore } from './stores/auth.store'

const email = ref('');
const password = ref('');
const authStore = useAuthStore();

const onSubmit = () => {
  authStore.login(email.value, password.value);
}
</script>
