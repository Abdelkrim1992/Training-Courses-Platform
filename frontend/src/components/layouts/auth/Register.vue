<template>
  <div class="auth-main v1">
    <div class="auth-wrapper">
      <div class="auth-form">
        <div class="card my-5">
          <div class="card-body">
            <div class="text-center">
              <h4 class="f-w-500 mb-1">Register with your email</h4>
              <p class="mb-3">
                Already have an Account? 
                <router-link to="/auth/login" class="link-primary">Log in</router-link>
              </p>
            </div>

            <!-- Error Message -->
            <div v-if="error" class="alert alert-danger text-center" role="alert">
              {{ error }}
            </div>

            <!-- Success Message -->
            <div v-if="successMessage" class="alert alert-success text-center" role="alert">
              {{ successMessage }}
            </div>

            <form @submit.prevent="registerUser">
              <div class="mb-3">
                <input type="email" v-model="formData.email" class="form-control" placeholder="Email Address" />
              </div>
              <div class="mb-3">
                <input type="password" v-model="formData.password" class="form-control" placeholder="Password" />
              </div>
              <div class="d-grid mt-4">
                <button type="submit" class="btn btn-primary">Create Account</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useAuthStore } from '../../../stores/auth.store';

// Set up form data
const formData = reactive({
  email: '',
  password: '',
});

const authStore = useAuthStore();
const successMessage = ref("");

// Register user and handle response
const registerUser = async () => {
  try {
    await authStore.register(formData);
    successMessage.value = "Registration successful! You can now log in.";
  } catch (e) {
    console.error("Error during registration:", e);
  }
};
</script>

<style scoped>
.auth-main {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f8f9fa;
}

.auth-wrapper {
  max-width: 400px;
  width: 100%;
}

.card {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.alert {
  margin-bottom: 1rem;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}
</style>
