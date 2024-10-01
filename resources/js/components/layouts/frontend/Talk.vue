<template>
         <!-- cta-area-start -->
         <section class="cta-area tp-cta-3-bg">
            <div class="container">
               <div class="row align-items-center">
                  <div class="col-lg-5">
                     <div class="tp-cta-3-section text-center wow fadeInLeft" data-wow-delay=".3s">
                        <h3 class="tp-cta-3-title">We <br> are <br> better <br> together.</h3>
                        <div class="tp-cta-3-border"></div>
                        <p>Drop your contact details into the form, and <br> we’ll reach out to you!</p>
                     </div>
                  </div>
                  <div class="col-lg-7 ">
                     <div class="tp-cta-3-wrap wow fadeInRight" data-wow-delay=".3s">
                      <h3 class="text-capitalize mb-30 text-center">Get a free consultation</h3>
                                  <!-- Success and Error Messages -->
                        <div v-if="formMessage" :class="messageClass">{{ formMessage }}</div>
                        <div class="tp-cta-3-form">
                           <form @submit.prevent="add_reservation">
                              <div class="row">
                                 <div class="col-md-6">
                                    <div class="tp-cta-3-form-input">
                                       <input type="text" v-model="formData.client_name" placeholder="Full Name">
                                    </div>
                                 </div>
                                 <div class="col-md-6">
                                    <div class="tp-cta-3-form-input">
                                       <input type="text" v-model="formData.client_phone" placeholder="Phone">
                                    </div>
                                 </div>
                                 <div class="col-md-12">
                                    <div class="tp-cta-3-form-input">
                                       <input type="email" v-model="formData.client_email" placeholder="Email">
                                    </div>
                                 </div>
                                 <div class="col-md-12">
                                    <div class="tp-cta-3-form-input">
                                       <textarea name="message" v-model="formData.message" placeholder="Message...."></textarea>
                                    </div>
                                 </div>
                                 <div class="tp-contact-input-form">
                                     <div class="row">
                                        <div class="tp-contact-btn text-center">
                                           <button class="tp-btn-inner" type="submit">Send</button>
                                        </div>
                                     </div>
                                    </div>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="tp-cta-3-shape">
               <div class="tp-cta-3-shape-1">
                  <img src="assets/img/cta/cta-3-shape-1.png" alt="">
                  <div class="tp-cta-3-shape-2">
                     <img src="assets/img/cta/cta-3-shape-2.png" alt="">
                  </div>
                  <div class="tp-cta-3-shape-3">
                     <img src="assets/img/cta/cta-3-shape-3.png" alt="">
                  </div>
               </div>
            </div>
         </section>
         <!-- cta-area-end -->
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