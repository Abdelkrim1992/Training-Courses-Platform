<template>
    <!-- testimonial-area-start -->
    <section class="testimonial-area lightblue-bg pb-85 text-center">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xxl-6 col-lg-8">
            <div class="tp-testimonial-section">
              <div class="tp-section text-center mt-50">
                <h3 class="tp-section-3-title">
                  Student Say
                  About Our            
                  <span>Services
                    <img 
                      class="tp-underline-shape-9 wow bounceIn" 
                      data-wow-duration="1.5s" 
                      data-wow-delay=".4s" 
                      src="frontend/img/underline/team-2-svg-1.svg" 
                      alt="" 
                      style="visibility: visible; animation-duration: 1.5s; animation-delay: 0.4s; animation-name: bounceIn;"
                    />
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>
    
        <div class="tp-team-2-arrow d-flex align-items-center justify-content-md-center  mt-20">
          <!-- Previous button -->
          <div class="tp-team-2-prev" @click="prevReview">
            <span>
              <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 11L1 6L6 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div v-if="currentReview" :key="currentReviewIndex" class="tp-testimonial-2-active">
                <div class="tp-testimonial-2-item text-center">
                  <div class="tp-testimonial-2-avatar-info">
                    <h3 class="text-center">{{ currentReview.student_name }}</h3>
                    <h6 class="text-center mt-3">{{ currentReview.course_title }}</h6>
                    <div class="tp-testimonial-2-avatar-rating text-center">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                  </div>
                  <div class="tp-testimonial-2-content text-center p-relative">
                    <p v-html="currentReview.review_text"></p>
                    <div class="tp-testimonial-2-shape">
                      <div class="shape-1">
                        <img src="frontend/img/testimonial/testimonial-shape-1.png" alt="">
                      </div>
                      <div class="shape-2">
                        <img src="frontend/img/testimonial/testimonial-shape-3.png" alt="">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Next button -->
          <div class="tp-team-2-next" @click="nextReview">
            <span>
              <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 11L6 6L1 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
    <!-- testimonial-area-end -->
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted, computed } from 'vue'; // Added computed import

const ReviewsList = ref([]);
const currentReviewIndex = ref(0);

onMounted(async () => {
  await getReviews();
});

const getReviews = async () => {
  try {
    const response = await axios.get('/api/get_reviews');
    if (response.data.status === 200) {
      ReviewsList.value = response.data.data;
    }
  } catch (error) {
    console.error('error getting reviews', error); // Fixed spelling mistake
  }
};

const currentReview = computed(() => {
  return ReviewsList.value[currentReviewIndex.value] || {};
});

const nextReview = () => {
  if (currentReviewIndex.value < ReviewsList.value.length - 1) {
    currentReviewIndex.value++;
  } else {
    currentReviewIndex.value = 0; // Loop back to the first review
  }
};

const prevReview = () => {
  if (currentReviewIndex.value > 0) {
    currentReviewIndex.value--;
  } else {
    currentReviewIndex.value = ReviewsList.value.length - 1; // Loop back to the last review
  }
};
</script>
