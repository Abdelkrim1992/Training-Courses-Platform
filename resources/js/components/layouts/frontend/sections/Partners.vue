<template>
  <!-- partners -->
  <section class="testimonial-area mt-50 text-center">
    <div class="container">
      <div class="row mt-20">
        <h4 class="tp-section-3-title">Our Partners</h4>
        <div class="slider mt-50">
          <div class="slide-track">
            <!-- Loop through partners only once -->
            <div
              class="slide"
              v-for="(item, index) in PartnersList"
              :key="index"
            >
              <img :src="item.partner_image_url" :alt="`Partner Logo ${index + 1}`" />
            </div>
            <!-- Repeat the same logos for smooth scrolling -->
            <div
              class="slide"
              v-for="(item, index) in PartnersList"
              :key="`repeat-${index}`"
            >
              <img :src="item.partner_image_url" :alt="`Partner Logo ${index + 1}`" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- partners -->
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const PartnersList = ref([]);

onMounted(async () => {
  await getPartners();
});

const getPartners = async () => {
  try {
    const response = await axios.get('/api/get_partners');
    if (response.data.status === 200) {
      PartnersList.value = response.data.data;
    }
  } catch (error) {
    console.error('Error getting partners', error);
  }
};
</script>

<style scoped>
@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

.slider {
  overflow: hidden;
  white-space: nowrap;
  background: white;
  position: relative;
}

.slider .slide-track {
  display: flex;
  width: calc(200%); /* To ensure smooth looping */
  animation: scroll 15s linear infinite;
}

.slider .slide {
  flex: 0 0 auto;
  width: 150px;
  height: 100px;
  margin-right: 40px;
}

.slider .slide img {
  width: 100%;
  height: auto;
}
</style>