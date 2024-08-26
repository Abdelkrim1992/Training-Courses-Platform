<template>
    <BackendLayouts>
        <div class="pc-container">
    <div class="pc-content">
      <!-- [ breadcrumb ] start -->
      <div class="page-header">
        <div class="page-block">
          <div class="row align-items-center">
            <div class="col-md-12">
              <ul class="breadcrumb">
                <li class="breadcrumb-item"><router-link to="/admin/dashboard">Home</router-link></li>
                <li class="breadcrumb-item" aria-current="page">Add Testimonial</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- [ breadcrumb ] end -->

      <!-- [ Main Content ] start -->
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h5 class="mb-0">Testimonial Information</h5>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">First Name</label>
                    <input type="text" class="form-control" placeholder="Enter first name">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">Last Name</label>
                    <input type="text" class="form-control" placeholder="Enter last name">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input type="email" class="form-control" placeholder="Enter email">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">Joining Date</label>
                    <input type="date" class="form-control">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">Password</label>
                    <input type="password" class="form-control" placeholder="Enter Password">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">Confirm Password</label>
                    <input type="password" class="form-control" placeholder="Enter confirm password">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">Mobile Number</label>
                    <input type="number" class="form-control" placeholder="Enter Mobile number">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">Gender</label>
                    <select class="form-select">
                      <option>Female</option>
                      <option>Male</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">Designation</label>
                    <input type="text" class="form-control" placeholder="Designation">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">Department</label>
                    <select class="form-select">
                      <option>Department</option>
                      <option>Department 1</option>
                      <option>Department 2</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">Date of Birth</label>
                    <input type="date" class="form-control">
                  </div>
                </div> 
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">Education</label>
                    <input type="text" class="form-control" placeholder="Education">
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="mb-3">
                    <input class="form-control" type="file">
                  </div>
                </div>
                <div class="col-md-12 text-end">
                  <button class="btn btn-primary">Submit</button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- [ Main Content ] end -->
    </div>
  </div>
    </BackendLayouts>
</template>


<script setup>

import BackendLayouts from '../../BackendLayouts.vue';

</script>