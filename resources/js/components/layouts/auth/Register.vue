<script setup>
import axios from 'axios';
import {useRouter} from 'vue-router'
import { reactive, ref } from "vue";

const errorMessage = ref(null);

const router= useRouter();

const formData= reactive({
    email:"",
    password:"",
    name:"",
});

const register_action = ()=>{
    axios.post('/api/register',formData)
    .then( response =>{
        console.log('Registration successful:', response.data);
        router.push('/auth/login')
    })
    .catch(error => {
            // Handle error
            console.error('Registration failed:', error.response.data);
            errorMessage.value = error.response.data.message || "Login failed. Please try again.";
    });
};


</script>

<template>
    <div class="auth-main v1">
    <div class="auth-wrapper">
      <div class="auth-form">
        <div class="card my-5">
          <div class="card-body">
            <div class="text-center">
              <img src="/backend/images/authentication/img-auth-register.png" alt="images" class="img-fluid mb-3">
              <h4 class="f-w-500 mb-1">Register with your email</h4>
              <p class="mb-3">Already have an Account? 
                <router-link to="/auth/login" class="link-primary">Log in</router-link>
              </p>
            </div>
            
            <!-- Error Message -->
            <div v-if="errorMessage" class="alert alert-danger" role="alert">
              {{ errorMessage }}
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