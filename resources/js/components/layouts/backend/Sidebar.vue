<template>
  <!-- [ Sidebar Menu ] start -->
  <nav class="pc-sidebar">
    <div class="navbar-wrapper">
      <div class="m-header">
        <router-link to="/admin/dashboard" class="b-brand text-primary mt-2">
          <!-- ========   Change your logo from here   ============ -->
          <img :src="setting?.setting_logo_url" width="150px" height="80px"/>
        </router-link>
      </div>
      <div class="navbar-content">
        <ul class="pc-navbar">
          <li class="pc-item pc-caption">
            <label>Application</label>
            <i class="ph-duotone ph-buildings"></i>
          </li>
          <li class="pc-item">
            <a href="/admin/dashboard" class="pc-link">
              <span class="pc-micon">
                <i class="ph-duotone ph-gauge"></i>
              </span>
              <span class="pc-mtext">Dashboard</span>
            </a>
          </li>

          <!-- Projects Dropdown -->
          <li class="dropdown pc-h-itemu pc-item">
            <a href="#" class="pc-link" @click.prevent="toggleDropdown('projects')" data-bs-toggle="dropdown" role="button"
              aria-haspopup="false" aria-expanded="false">
              <span class="pc-micon">
                <i class="ph-duotone ph-circles-four"></i>
              </span>
              <span class="pc-mtext">Projects</span>
              <span class="pc-arrow"><i data-feather="chevron-right"></i></span>
            </a>
            <ul v-if="dropdowns.projects" class="pc-submenu">
              <li v-for="(item, index) in projects" :key="index" class="pc-item d-flex justify-content-between align-items-center">
                <router-link class="pc-link" :to="item.link">
                  <span>{{ item.name }}</span>
                </router-link>
                
              </li>
            </ul>
          </li>
          <!-- End Projects Dropdown -->

          <!-- Courses Dropdown -->
          <li class="dropdown pc-h-itemu pc-item">
            <a href="#" class="pc-link" @click.prevent="toggleDropdown('courses')" data-bs-toggle="dropdown" role="button"
              aria-haspopup="false" aria-expanded="false">
              <span class="pc-micon">
                <i class="ph-duotone ph-books"></i>
              </span>
              <span class="pc-mtext">Courses</span>
              <span class="pc-arrow"><i data-feather="chevron-right"></i></span>
            </a>
            <ul v-if="dropdowns.courses" class="pc-submenu">
              <li v-for="(item, index) in courses" :key="index" class="pc-item d-flex justify-content-between align-items-center">
                <router-link class="pc-link" :to="item.link">
                  <span>{{ item.name }}</span>
                </router-link>
                
              </li>
            </ul>
          </li>
          <!-- End Courses Dropdown -->

          <li class="pc-item">
            <router-link to="/admin/reservations/list" class="pc-link">
              <span class="pc-micon">
                <i class="ph-duotone ph-globe"></i>
              </span>
              <span class="pc-mtext">Online Reservations</span>
            </router-link>
          </li>

          <!-- Students Dropdown -->
          <li class="dropdown pc-h-itemu pc-item">
            <a href="#" class="pc-link" @click.prevent="toggleDropdown('students')" data-bs-toggle="dropdown" role="button"
              aria-haspopup="false" aria-expanded="false">
              <span class="pc-micon">
                <i class="ph-duotone ph-books"></i>
              </span>
              <span class="pc-mtext">Students</span>
              <span class="pc-arrow"><i data-feather="chevron-right"></i></span>
            </a>
            <ul v-if="dropdowns.students" class="pc-submenu">
              <li v-for="(item, index) in students" :key="index" class="pc-item d-flex justify-content-between align-items-center">
                <router-link class="pc-link" :to="item.link">
                  <span>{{ item.name }}</span>
                </router-link>
                
              </li>
            </ul>
          </li>
          <!-- End Students Dropdown -->

          <!-- Team Dropdown -->
          <li class="dropdown pc-h-itemu pc-item">
            <a href="#" class="pc-link" @click.prevent="toggleDropdown('team')" data-bs-toggle="dropdown" role="button"
              aria-haspopup="false" aria-expanded="false">
              <span class="pc-micon">
                <i class="ph-duotone ph-user"></i>
              </span>
              <span class="pc-mtext">Team</span>
              <span class="pc-arrow"><i data-feather="chevron-right"></i></span>
            </a>
            <ul v-if="dropdowns.team" class="pc-submenu">
              <li v-for="(item, index) in team" :key="index" class="pc-item d-flex justify-content-between align-items-center">
                <router-link class="pc-link" :to="item.link">
                  <span>{{ item.name }}</span>
                </router-link>
                
              </li>
            </ul>
          </li>
          <!-- End Team Dropdown -->

          <!-- Testimonial Dropdown -->
          <li class="dropdown pc-h-itemu pc-item">
            <a href="#" class="pc-link" @click.prevent="toggleDropdown('review')" data-bs-toggle="dropdown" role="button"
              aria-haspopup="false" aria-expanded="false">
              <span class="pc-micon">
                <i class="ph-duotone ph-user"></i>
              </span>
              <span class="pc-mtext">Reviews</span>
              <span class="pc-arrow"><i data-feather="chevron-right"></i></span>
            </a>
            <ul v-if="dropdowns.review" class="pc-submenu">
              <li v-for="(item, index) in review" :key="index" class="pc-item d-flex justify-content-between align-items-center">
                <router-link class="pc-link" :to="item.link">
                  <span>{{ item.name }}</span>
                </router-link>
                
              </li>
            </ul>
          </li>
          <!-- End Testimonial Dropdown -->

          <li class="pc-item">
            <router-link to="/admin/setting/edit-setting" class="pc-link">
              <span class="pc-micon">
                <i class="ph-duotone ph-globe"></i>
              </span>
              <span class="pc-mtext">Site Settings</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- [ Sidebar Menu ] end -->
</template>

<script>
export default {
  name:'Sidebar',
  data() {
    return {
      setting: [],
      dropdowns: {
        courses: false,
        students: false,
        projects: false,
        team: false,
        review: false,
      },
      courses: [
        { name: 'Courses List', link: '/admin/courses/list' },
        { name: 'Add Course', link: '/admin/courses/add-course' },
      ],
      students: [
        { name: 'Students List', link: '/admin/students/list' },
        { name: 'Add Student', link: '/admin/students/add-student' },
      ],
      projects: [
        { name: 'Projects List', link: '/admin/projects/list' },
        { name: 'Add Project', link: '/admin/projects/add-project' },
      ],
      team: [
        { name: 'Member List', link: '/admin/team/list' },
        { name: 'Add Member', link: '/admin/team/add-member' },
      ],
      review: [
        { name: 'Reviews List', link: '/admin/reviews/list' },
        { name: 'Add Review', link: '/admin/reviews/add-review' },
      ],
    };
  },
  created() {
    this.fetchHeaderDetails()},
  methods: {
    toggleDropdown(menu) {
      this.dropdowns[menu] = !this.dropdowns[menu];
    },
    async fetchHeaderDetails() {
      try {
        const response = await fetch(`/api/get_setting/1`);
        const result = await response.json();
        
        if (result.status === 200) {
          this.setting = result.data;
          console.log("Teacher Photo URL:", this.setting.setting_logo_url);
        } else {
          console.error(result.message);
          // Handle the error accordingly
        }
      } catch (error) {
        console.error('Error fetching setting details:', error);
        // Handle the error accordingly
      }
    },
  },
};
</script>
