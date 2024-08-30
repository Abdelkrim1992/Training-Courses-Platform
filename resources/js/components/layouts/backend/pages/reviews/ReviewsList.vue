<template>
  <BackendLayouts>
    <div class="pc-container">
      <div class="pc-content">
        <!-- Breadcrumb start -->
        <div class="page-header">
          <div class="page-block">
            <div class="row align-items-center">
              <div class="col-md-12">
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <router-link to="/admin/dashboard">Home</router-link>
                  </li>
                  <li class="breadcrumb-item" aria-current="page">Reviews List</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- Breadcrumb end -->

        <!-- Main Content start -->
        <div class="row">
          <div class="col-12">
            <div class="card table-card">
              <div class="card-header">
                <div class="d-sm-flex align-items-center justify-content-between">
                  <h5 class="mb-3 mb-sm-0">Reviews List</h5>
                  <div>
                    <router-link to="/admin/reviews/add-review" class="btn btn-primary">
                      Add Review
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="card-body pt-3">
                <div class="table-responsive">
                  <table class="table table-hover" id="pc-dt-simple">
                    <thead>
                      <tr>
                        <th>Student Name</th>
                        <th>Course Name</th>
                        <th>Review Text</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(items, index) in ReviewsList" :key="index">
                        <td>{{ items.student_name }}</td>
                        <td>{{ items.course_title }}</td>
                        <td>{{ items.review_text }}</td>
                        <td>
                          <router-link :to="{path:'/admin/reviews/edit-review/'+ items.id}" class="avtar avtar-xs btn-link-secondary">
                            <i class="ti ti-edit f-20"></i>
                          </router-link>
                          <a @click="deleteReview(items.id)" class="avtar avtar-xs btn-link-secondary">
                            <i class="ti ti-trash f-20"></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Main Content end -->
      </div>
    </div>
  </BackendLayouts>
</template>

<script setup>
import axios from 'axios';
import BackendLayouts from '../../BackendLayouts.vue';
</script>

<script>
export default {
  data() {
    return {
      ReviewsList: [],
    };
  },
  mounted() {
    console.log('Component mounted');
    this.getReviews();
  },
  methods: {
    getReviews() {
      console.log('getReviews method called');
      axios.get('/api/get_reviews')
        .then((response) => {
          console.log('API response:', response);
          const status = response.data.status;

          if (status === 200) {
            this.ReviewsList = response.data.data;
            console.log('ReviewsList updated:', this.ReviewsList);
          } else {
            console.warn('Unexpected status:', status);
          }
        })
        .catch((error) => {
          console.error('API request error:', error);
        });
    },
    deleteReview(id) {
      if (confirm('Are you sure you want to delete this review?')) {
        axios.delete(`/api/delete_review/${id}`)
          .then((response) => {
            const status = response.data.status;

            if (status === 200) {
              this.getReviews(); // Refresh the student list after deletion
              alert('Student deleted successfully.');
            } else {
              alert('Failed to delete the review.');
            }
          })
          .catch((error) => {
            console.error('API request error:', error);
          });
      }
    },
  },
};
</script>
