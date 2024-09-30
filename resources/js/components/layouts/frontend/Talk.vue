<template>
  <section class="talk-area pt-50 pb-25 mt-5">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-7">
          <h1 class="text-white text-center">
            Start the conversation to develop your business skills
          </h1>
        </div>
        <div class="col-lg-5">
          <div class="contact__form">
            <h3 class="text-capitalize mb-30 text-center text-white">
              Get a free consultation
            </h3>
            <!-- Success and Error Messages -->
            <div v-if="formMessage" :class="messageClass">{{ formMessage }}</div>

            <!-- Form Fields -->
            <form @submit.prevent="add_reservation">
              <input type="text" v-model="formData.client_name" placeholder="Your name*" required />
              <div class="row g-3">
                <div class="col-6">
                  <input type="email" v-model="formData.client_email" placeholder="Your email*" required />
                </div>
                <div class="col-6">
                  <input type="text" v-model="formData.client_phone" placeholder="Your phone*" required />
                </div>
              </div>
              <textarea v-model="formData.message" placeholder="Message" required></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();
const formMessage = ref(null);  // To show success or error message
const messageClass = ref('');   // To style message as success or error

const formData = reactive({
  client_email: '',
  client_name: '',
  client_phone: '',
  message: '',
});

const add_reservation = () => {
  // Clear previous messages
  formMessage.value = null;
  messageClass.value = '';

  axios.post('/api/add_reservation', formData)
    .then((response) => {
      console.log('Reservation success', response.data);
      formMessage.value = 'Your consultation request was successfully submitted!';
      messageClass.value = 'alert alert-success';  // Success message style

      // Clear form fields after successful submission
      formData.client_name = '';
      formData.client_email = '';
      formData.client_phone = '';
      formData.message = '';
      router.push('/');
    })
    .catch((error) => {
      console.error('Adding reservation failed', error.response.data);
      formMessage.value = error.response.data.message || 'Adding reservation failed. Please try again.';
      messageClass.value = 'alert alert-danger';  // Error message style
    });
};
</script>
