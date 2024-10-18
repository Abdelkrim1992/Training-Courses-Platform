<template>
    <section class="team-area pt-100 mb-100">
      <div class="container">
        <div class="row align-items-end">
          <div class="col-lg-6 col-md-8">
            <div class="tp-section mb-45">
              <h5 class="tp-section-3-subtitle">Our Team</h5>
              <h3 class="tp-section-3-title">
                Meet Our 
                <span>Team
                  <img 
                    class="tp-underline-shape-9 wow bounceIn" 
                    data-wow-duration="1.5s" 
                    data-wow-delay=".4s" 
                    src="frontend/img/unlerline/team-2-svg-1.svg" 
                    alt="" 
                    style="visibility: visible; animation-duration: 1.5s; animation-delay: 0.4s; animation-name: bounceIn;"
                  />
                </span>
              </h3>
            </div>
          </div>
          <div class="col-lg-6 col-md-4">
            <div class="tp-team-2-arrow d-flex align-items-center justify-content-md-end mb-55">
              <!-- Previous Button -->
              <div class="tp-team-2-prev" @click="prevMember" tabindex="0" role="button" aria-label="Previous slide">
                <span>
                  <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 11L1 6L6 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </span>
              </div>
              <!-- Next Button -->
              <div class="tp-team-2-next" @click="nextMember" tabindex="0" role="button" aria-label="Next slide">
                <span>
                  <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 11L6 6L1 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Show 4 team members per slide -->
        <div class="swiper tp-team-2-active wow fadeInUp" data-wow-delay=".5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInUp;">
          <div class="swiper-wrapper align-items-end">
            <!-- Loop through the current 4 team members -->
            <div v-for="(item, index) in getVisibleTeamMembers()" :key="index" class="swiper-slide" style="width: 333px; margin-right: 30px;">
              <div class="tp-team-2-item">
                <div class="tp-team-2-bg strom"></div>
                <div class="tp-team-2-social">
                  <span class="tp-team-2-social-wrap">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </span>
                  <div class="tp-team-2-social-icon">
                    <a :href="item.facebook"><i class="fa-brands fa-facebook-f"></i></a>
                    <a :href="item.instagram"><i class="fa-brands fa-instagram"></i></a>
                    <a :href="item.linkedin"><i class="fa-brands fa-linkedin-in"></i></a>
                  </div>
                </div>
                <div class="tp-team-2-thumb">
                  <img :src="item.member_photo_url" alt="Team Member">
                </div>
                <div class="tp-team-2-content">
                  <h4 class="tp-team-2-title">
                    <a href="#">{{ item.member_name }}</a>
                  </h4>
                  <span>{{ item.member_service }}</span>
                </div>
              </div>
            </div>   
          </div>
        </div>
        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  import axios from 'axios';
  
  const TeamMembersList = ref([]);
  const membersPerSlide = ref(4);
  const currentMemberIndex = ref(0);
  let slideInterval = null;
  
  onMounted(async () => {
    await getTeamMembers();
    updateMembersPerSlide(); // Call updateMembersPerSlide directly
    window.addEventListener('resize', updateMembersPerSlide);
  });
  
  const getTeamMembers = async () => {
    try {
      const response = await axios.get('/api/get_team_member');
      if (response.data.status === 200) {
        TeamMembersList.value = response.data.data;
      }
    } catch (error) {
      console.error('Error fetching team members:', error);
    }
  };
  
  const getVisibleTeamMembers = () => {
    return TeamMembersList.value.slice(currentMemberIndex.value, currentMemberIndex.value + membersPerSlide.value);
  };
  
  const updateMembersPerSlide = () => {
    let screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      membersPerSlide.value = 1; // Mobile view: show 1 member per slide
    } else {
      membersPerSlide.value = 4; // Desktop view: show 4 members per slide
    }
  };
  
  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateMembersPerSlide);
    clearInterval(slideInterval);
  });
  
  const nextMember = () => {
    if (currentMemberIndex.value + membersPerSlide.value < TeamMembersList.value.length) {
      currentMemberIndex.value++;
    } else {
      currentMemberIndex.value = 0; // Loop back to the first slide
    }
  };
  
  const prevMember = () => {
    if (currentMemberIndex.value > 0) {
      currentMemberIndex.value--;
    } else {
      currentMemberIndex.value = TeamMembersList.value.length - membersPerSlide.value; // Loop to the last set of members
    }
  };
  </script>




<style scoped>

@media (max-width: 767px) {
  .swiper-slide {
    width: 100% !important; /* Full width for mobile */
  }
}

@media (min-width: 768px) {
  .swiper-slide {
    width: calc(33.33% - 30px) !important; /* Three slides for desktop, minus margin */
  }
}

@media (max-width: 768px) {
  .tp-team-2-arrow {
    display: flex;
    justify-content: center; /* Centers the buttons horizontally */
    align-items: center; /* Centers the buttons vertically */
    gap: 20px; /* Adds space between the buttons */
  }

  .tp-team-2-prev,
  .tp-team-2-next {
    cursor: pointer;
    padding: 10px;
  }
}

</style>
  