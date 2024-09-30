<template>
  <section class="talk-area pt-50 pb-25 mt-5">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-7">
          <h1 class="text-white text-center">Start the conversation to develop your business skills</h1>
        </div>
        <div class="col-lg-5">
          <div class="contact__form">
            <h3 class="text-capitalize mb-30 text-center text-white">Get a free consultation</h3>
            <div v-if="formMessage" class="alert alert-success">{{ formMessage }}</div>
            <form @submit.prevent="submitForm">
              <input type="text" v-model="client_name" placeholder="Your name*" required />
              <div class="row g-3">
                <div class="col-6">
                  <input type="email" v-model="client_email" placeholder="Your email*" required />
                </div>
                <div class="col-6">
                  <input type="text" v-model="client_phone" placeholder="Your phone*" required />
                </div>
              </div>
              <textarea v-model="message" placeholder="Message" required></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      client_name: '',
      client_email: '',
      client_phone: '',
      message: '',
      formMessage: '',
    };
  },
  methods: {
    submitForm() {
      axios
        .post('/api/reservations', {
          client_name: this.client_name,
          client_email: this.client_email,
          client_phone: this.client_phone,
          message: this.message,
        })
        .then((response) => {
          if (response.data.status === 200) {
            this.formMessage = 'Your consultation request was submitted successfully!';
            this.client_name = '';
            this.client_email = '';
            this.client_phone = '';
            this.message = '';
          }
        })
        .catch((error) => {
          console.error('Form submission error:', error);
        });
    },
  },
};
</script>
