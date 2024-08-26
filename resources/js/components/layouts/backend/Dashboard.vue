<template>
    <BackendLayouts>
  <!-- [ Main Content ] start -->
  <div class="pc-container">
    <div class="pc-content">
      <!-- [ breadcrumb ] start -->
      <div class="page-header">
        <div class="page-block">
          <div class="row align-items-center">
            <div class="col-md-12">
              <ul class="breadcrumb">
                <li class="breadcrumb-item"><router-link to="/admin/dashboard">Home</router-link></li>
                <li class="breadcrumb-item" aria-current="page">Dashboard</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- [ breadcrumb ] end -->

      <!-- [ Main Content ] start -->
      <div class="row">
        <div class="col-lg-3 col-md-6">
          <div class="card">
            <div class="card-body">
              <div class="d-flex align-items-center">
                <div class="flex-shrink-0">
                  <div class="avtar bg-light-primary">
                    <i class="ti ti-users f-24"></i>
                  </div>
                </div>
                <div class="flex-grow-1 ms-3">
                  <p class="mb-1">New Students</p>
                  <div class="d-flex align-items-center justify-content-between">
                    <h4 class="mb-0">400+</h4>
                    <span class="text-success fw-medium">30.6%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="card">
            <div class="card-body">
              <div class="d-flex align-items-center">
                <div class="flex-shrink-0">
                  <div class="avtar bg-light-warning">
                    <i class="ti ti-notebook f-24"></i>
                  </div>
                </div>
                <div class="flex-grow-1 ms-3">
                  <p class="mb-1">Total Course</p>
                  <div class="d-flex align-items-center justify-content-between">
                    <h4 class="mb-0">520+</h4>
                    <span class="text-warning fw-medium">30.6%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12">
          <div class="card table-card">
            <div class="card-header">
              <div class="d-flex align-items-center justify-content-between">
                <h5 class="mb-0">Course States</h5>
                <button class="btn btn-sm btn-link-primary">View All</button>
              </div>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Teacher</th>
                      <th>Rating</th>
                      <th>Earring</th>
                      <th>Sale</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Web Designing Course</td>
                      <td>Airi Satou</td>
                      <td class="f-w-600">
                        <i class="fas fa-star text-warning"></i> 4.8
                      </td>
                      <td>$200</td>
                      <td><span class="donut">5/7</span></td>
                      <td>
                        <a href="#" class="avtar avtar-xs btn-link-secondary">
                          <i class="ti ti-eye f-20"></i>
                        </a>
                        <a href="#" class="avtar avtar-xs btn-link-secondary">
                          <i class="ti ti-edit f-20"></i>
                        </a>
                        <a href="#" class="avtar avtar-xs btn-link-secondary">
                          <i class="ti ti-trash f-20"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>UI/UX Training Course</td>
                      <td>Ashton Cox</td>
                      <td class="f-w-600">
                        <i class="fas fa-star text-warning"></i> 5.0
                      </td>
                      <td>$100</td>
                      <td><span class="donut">4/7</span></td>
                      <td>
                        <a href="#" class="avtar avtar-xs btn-link-secondary">
                          <i class="ti ti-eye f-20"></i>
                        </a>
                        <a href="#" class="avtar avtar-xs btn-link-secondary">
                          <i class="ti ti-edit f-20"></i>
                        </a>
                        <a href="#" class="avtar avtar-xs btn-link-secondary">
                          <i class="ti ti-trash f-20"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>PHP Training Course</td>
                      <td>Bradley Greer</td>
                      <td class="f-w-600">
                        <i class="fas fa-star text-warning"></i> 4.9
                      </td>
                      <td>$80</td>
                      <td><span class="donut">2/7</span></td>
                      <td>
                        <a href="#" class="avtar avtar-xs btn-link-secondary">
                          <i class="ti ti-eye f-20"></i>
                        </a>
                        <a href="#" class="avtar avtar-xs btn-link-secondary">
                          <i class="ti ti-edit f-20"></i>
                        </a>
                        <a href="#" class="avtar avtar-xs btn-link-secondary">
                          <i class="ti ti-trash f-20"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Bootstrap 5 Course</td>
                      <td>Brielle Williamson</td>
                      <td class="f-w-600">
                        <i class="fas fa-star text-warning"></i> 4.4
                      </td>
                      <td>$150</td>
                      <td><span class="donut">6/7</span></td>
                      <td>
                        <a href="#" class="avtar avtar-xs btn-link-secondary">
                          <i class="ti ti-eye f-20"></i>
                        </a>
                        <a href="#" class="avtar avtar-xs btn-link-secondary">
                          <i class="ti ti-edit f-20"></i>
                        </a>
                        <a href="#" class="avtar avtar-xs btn-link-secondary">
                          <i class="ti ti-trash f-20"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>C Training Course</td>
                      <td>Cedric Kelly</td>
                      <td class="f-w-600">
                        <i class="fas fa-star text-warning"></i> 4.3
                      </td>
                      <td>$50</td>
                      <td><span class="donut">3/7</span></td>
                      <td>
                        <a href="#" class="avtar avtar-xs btn-link-secondary">
                          <i class="ti ti-eye f-20"></i>
                        </a>
                        <a href="#" class="avtar avtar-xs btn-link-secondary">
                          <i class="ti ti-edit f-20"></i>
                        </a>
                        <a href="#" class="avtar avtar-xs btn-link-secondary">
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
      <!-- [ Main Content ] end -->
    </div>
  </div>
  <!-- [ Main Content ] end -->
    </BackendLayouts>
</template>

<script setup>

import BackendLayouts from '../backend/BackendLayouts.vue';

</script>