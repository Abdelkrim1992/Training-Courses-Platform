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
                  <li class="breadcrumb-item" aria-current="page">Reservations List</li>
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
                  <h5 class="mb-3 mb-sm-0">Reservations List</h5>
                </div>
              </div>
              <div class="card-body pt-3">
                <div class="table-responsive">
                  <table class="table table-hover" id="pc-dt-simple">
                    <thead>
                      <tr>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Course Title</th>
                        <th>Message</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(items, index) in ReservationsList" :key="index.id">
                        <td>{{ items.client_name }}</td>
                        <td>{{ items.client_email }}</td>
                        <td>{{ items.client_phone }}</td>
                        <td>{{ items.course_choosed }}</td>
                        <td>{{ items.message }}</td>
                        <td>
                          <a @click="updateReservationStatus(items.id, 'refused')" class="avtar avtar-xs btn-link-secondary">
                            <i class="ti ti-trash f-20"></i>
                          </a>
                          <a @click="updateReservationStatus(items.id, 'accepted')" class="avtar avtar-xs btn-link-secondary">
                            <i class="ti ti-check f-20"></i>
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
import axios from 'axios';

export default {
  data() {
    return {
      ReservationsList: [],
    };
  },
  mounted() {
    this.getPendingReservations();
  },
  methods: {
    getPendingReservations() {
      axios.get('/api/reservations/pending').then((response) => {
        this.ReservationsList = response.data.data;
      });
    },
    updateReservationStatus(id, status) {
      axios
        .put(`/api/reservations/${id}`, { status })
        .then(() => {
          this.getPendingReservations(); // Refresh list after updating status
        })
        .catch((error) => {
          console.error('Error updating reservation status:', error);
        });
    },
  },
};
</script>