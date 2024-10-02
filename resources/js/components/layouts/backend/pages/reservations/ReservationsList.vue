<template>
  <div>
    <!-- Reservation Table -->
    <table>
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Course Title</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="reservation in reservations" :key="reservation.id">
          <td>{{ reservation.client_name }}</td>
          <td>{{ reservation.client_email }}</td>
          <td>{{ reservation.client_phone }}</td>
          <td>{{ reservation.course_choosed }}</td>
          <td>
            <!-- Accept Button -->
            <button @click="acceptReservation(reservation.id)">Accept</button>

            <!-- Delete Button -->
            <button @click="confirmDelete(reservation.id)">Remove</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Delete Confirmation Modal -->
    <div v-if="showDeleteModal" class="modal">
      <p>Are you sure you want to delete this reservation?</p>
      <button @click="deleteReservation(deleteId)">Yes</button>
      <button @click="cancelDelete">No</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      reservations: [], // Stores the list of reservations
      showDeleteModal: false, // Controls the visibility of the delete modal
      deleteId: null, // Stores the ID of the reservation to be deleted
    };
  },
  methods: {
    fetchReservations() {
      axios.get('/api/reservations/pending')
        .then(response => {
          this.reservations = response.data.data;
        })
        .catch(error => {
          console.error('Error fetching reservations:', error);
        });
    },
    acceptReservation(id) {
      console.log("Accept button clicked:", id); // Debugging log
      axios.put(`/api/reservations/${id}/accept`)
        .then(response => {
          console.log(response.data.message); // Log success message
          this.fetchReservations(); // Refresh the list after accepting
        })
        .catch(error => {
          console.error('Error accepting reservation:', error);
        });
    },
    confirmDelete(id) {
      this.showDeleteModal = true; // Show the confirmation modal
      this.deleteId = id; // Store the ID of the reservation to delete
    },
    cancelDelete() {
      this.showDeleteModal = false; // Hide the modal
      this.deleteId = null; // Reset the ID
    },
    deleteReservation(id) {
      console.log("Delete button clicked:", id); // Debugging log
      axios.delete(`/api/reservations/${id}`)
        .then(response => {
          console.log(response.data.message); // Log success message
          this.showDeleteModal = false; // Hide the modal
          this.fetchReservations(); // Refresh the list after deletion
        })
        .catch(error => {
          console.error('Error deleting reservation:', error);
        });
    },
  },
  mounted() {
    this.fetchReservations(); // Fetch reservations on component mount
  }
};
</script>

<style scoped>
/* Basic styles for the modal */
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border: 1px solid #ccc;
}
</style>
