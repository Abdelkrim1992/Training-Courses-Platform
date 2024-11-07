<template>
  <div class="auth-main v1">
    <div class="auth-wrapper">
      <div class="auth-form">
        <div class="card my-5">
          <div class="card-body">
            <div class="text-center">
              <h4 class="f-w-500 mb-3">Login with your email</h4>
            </div>
            <!-- Error Message -->
            <div v-if="error" class="alert alert-danger text-center" role="alert">
              {{ error }}
            </div>

            <!-- Success Message -->
            <div v-if="successMessage" class="alert alert-success text-center" role="alert">
              {{ successMessage }}
            </div>

            <form @submit.prevent="loginUser">
              <div class="mb-3">
                <input type="email" v-model="formData.email" class="form-control" placeholder="Email Address" />
              </div>
              <div class="mb-3">
                <input type="password" v-model="formData.password" class="form-control" placeholder="Password" />
              </div>
              <div class="d-grid mt-4">
                <button type="submit" class="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useAuthStore } from '../../../stores/auth.store';
import { useRouter } from 'vue-router';

// Set up form data
const formData = reactive({
  email: '',
  password: '',
});

const authStore = useAuthStore();
const router = useRouter()

// Register user and handle response
const loginUser = async () => {
      await authStore.login(formData);
      if (authStore.user) {
        router.push({ name: 'Dashboard' });
      }
};

</script>
