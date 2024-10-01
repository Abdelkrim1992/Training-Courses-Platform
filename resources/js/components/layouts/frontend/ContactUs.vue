<script setup>
import Layouts from '../frontend/Layouts.vue';
import { ref, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();
const formMessage = ref(null); // To show success or error message
const messageClass = ref(''); // To style message as success or error

const formData = reactive({
  client_email: '',
  client_name: '',
  client_phone: '',
  message: '',
  course_choosed: '',
});


const add_reservation = () => {
  // Clear previous messages
  formMessage.value = null;
  messageClass.value = '';

  axios.post('/api/add_reservation', formData)
    .then((response) => {
      formMessage.value = 'Your consultation request was successfully submitted!';
      messageClass.value = 'alert alert-success';

      // Clear form fields after successful submission
      formData.client_name = '';
      formData.client_email = '';
      formData.client_phone = '';
      formData.message = '';
      formData.course_choosed = '';
      router.push('/contact-us');
    })
    .catch((error) => {
      formMessage.value = error.response.data.message || 'Adding reservation failed. Please try again.';
      messageClass.value = 'alert alert-danger';
    });
};
</script>

<script>

export default {
  data() {
    return {
      CoursesList: [],
    };
  },
  mounted() {
    this.getCourses();
  },
  methods: {
    getCourses() {
      axios.get('/api/get_courses')
        .then((response) => {
          if (response.data.status === 200) {
            this.CoursesList = response.data.data;
          }
        })
        .catch((error) => {
          console.error('Error fetching courses:', error);
        });
    },
  }
};

</script>

<template>
  <Layouts>
    <section class="tp-contact-area tp-contact-p fix p-relative pt-150 pb-125">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="tp-contact-wrap p-relative">
              <div class="tp-contact-heading text-center">
                <h3 class="tp-contact-title">Get in Touch</h3>
                <p>We are here to answer any question you may have.</p>
              </div>
              <div class="tp-contact-from-box">
                <h3 class="tp-contact-from-title">Send a Message 👍🏻</h3>

                <!-- Success and Error Messages -->
                <div v-if="formMessage" :class="messageClass">{{ formMessage }}</div>

                <form @submit.prevent="add_reservation">
                  <div class="tp-contact-input-form">
                    <div class="row">
                      <div class="col-xl-6 col-lg-6">
                        <div class="tp-contact-input p-relative">
                          <label>Your Name</label>
                          <input type="text" v-model="formData.client_name" class="input-field" />
                        </div>
                      </div>
                      <div class="col-xl-6 col-lg-6">
                        <div class="tp-contact-input p-relative">
                          <label>Email Address</label>
                          <input type="email" v-model="formData.client_email" class="input-field" />
                        </div>
                      </div>
                      <div class="col-xl-6 col-lg-6">
                        <div class="tp-contact-input p-relative">
                          <label>Phone</label>
                          <input type="text" v-model="formData.client_phone" class="input-field" />
                        </div>
                      </div>

                      <!-- Select Dropdown with Course Titles -->
                      <div class="col-xl-6 col-lg-6">
                        <div class="tp-cta-3-form-input p-relative">
                          <label>Choose a Course</label>
                          <select v-model="formData.course_choosed" class="custom-select">
                            <option value="" disabled>--Please choose an option--</option>
                            <option v-for="(items, index) in CoursesList" :key="index.id" :value="items.id">
                              {{ items.course_title }}
                            </option>
                          </select>
                        </div>
                      </div>

                      <div class="col-xl-12">
                        <div class="tp-contact-input p-relative">
                          <label>Your message</label>
                          <textarea v-model="formData.message"  class="input-field"></textarea>
                        </div>
                      </div>
                      <div class="tp-contact-btn">
                        <button class="tp-btn-inner" type="submit">Send message</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layouts>
</template>

<style scoped>
/* Style the select dropdown */
.custom-select {
  appearance: none;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;
  background: #f9f9f9;
  font-size: 16px;
  color: #333;
}

.custom-select:focus {
  outline: none;
  border-color: #007bff;
}

.input-field {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.input-field:focus {
  outline: none;
  border-color: #007bff;
}
</style>
