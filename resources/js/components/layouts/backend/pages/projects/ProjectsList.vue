

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
                <li class="breadcrumb-item" aria-current="page">Project List</li>
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
              <div class="d-flex align-items-center justify-content-between">
                <h5 class="mb-0">Project List</h5>
                <div>
                  <a href="../admins/course-course-add.html" class="btn btn-primary">Add Project</a>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-sm-6 col-lg-4 col-xxl-3">
                  <div class="card border">
                    <div class="card-body p-2">
                      <div class="position-relative">
                        <img src="/backend/images/admin/img-course-1.png" alt="img" class="img-fluid w-100">
                        <div class="position-absolute top-0 end-0 p-2">
                          <span class="badge text-bg-light text-uppercase">Free</span>
                        </div>
                      </div>
                      <ul class="list-group list-group-flush my-2">
                        <li class="list-group-item px-0 py-2">
                          <div class="d-flex align-items-center">
                            <div class="flex-grow-1 me-2">
                              <h6 class="mb-1">Bootstrap 5 Beginner Course</h6>
                              <p class="mb-0 f-w-600"><i class="fas fa-star text-warning"></i> 4.8</p>
                            </div>
                            <div class="flex-shrink-0">
                              <a href="#" class="avtar avtar-xs btn-link-secondary">
                                <i class="ti ti-edit f-20"></i>
                              </a>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item px-0 py-2">
                          <div class="d-flex align-items-center">
                            <div class="flex-grow-1 me-2">
                              <p class="mb-0">Duration</p>
                            </div>
                            <div class="flex-shrink-0">
                              <p class="text-muted mb-0">10 Months</p>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item px-0 py-2">
                          <div class="d-flex align-items-center">
                            <div class="flex-grow-1 me-2">
                              <p class="mb-0">Teacher</p>
                            </div>
                            <div class="flex-shrink-0">
                              <p class="text-muted mb-0">Jimmy Morris</p>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item px-0 py-2">
                          <div class="d-flex align-items-center">
                            <div class="flex-grow-1 me-2">
                              <p class="mb-0">Students</p>
                            </div>
                            <div class="flex-shrink-0">
                              <p class="text-muted mb-0">+120</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <button class="btn btn-sm btn-outline-primary mb-2">Read More</button>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-lg-4 col-xxl-3">
                  <div class="card border">
                    <div class="card-body p-2">
                      <div class="position-relative">
                        <img src="/backend/images/admin/img-course-2.png" alt="img" class="img-fluid w-100">
                      </div>
                      <ul class="list-group list-group-flush my-2">
                        <li class="list-group-item px-0 py-2">
                          <div class="d-flex align-items-center">
                            <div class="flex-grow-1 me-2">
                              <h6 class="mb-1">PHP Training Course</h6>
                              <p class="mb-0 f-w-600"><i class="fas fa-star text-warning"></i> 4.5</p>
                            </div>
                            <div class="flex-shrink-0">
                              <a href="#" class="avtar avtar-xs btn-link-secondary">
                                <i class="ti ti-edit f-20"></i>
                              </a>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item px-0 py-2">
                          <div class="d-flex align-items-center">
                            <div class="flex-grow-1 me-2">
                              <p class="mb-0">Duration</p>
                            </div>
                            <div class="flex-shrink-0">
                              <p class="text-muted mb-0">10 Months</p>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item px-0 py-2">
                          <div class="d-flex align-items-center">
                            <div class="flex-grow-1 me-2">
                              <p class="mb-0">Teacher</p>
                            </div>
                            <div class="flex-shrink-0">
                              <p class="text-muted mb-0">Nashid Martines</p>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item px-0 py-2">
                          <div class="d-flex align-items-center">
                            <div class="flex-grow-1 me-2">
                              <p class="mb-0">Students</p>
                            </div>
                            <div class="flex-shrink-0">
                              <p class="text-muted mb-0">+50</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <button class="btn btn-sm btn-outline-primary mb-2">Read More</button>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-lg-4 col-xxl-3">
                  <div class="card border">
                    <div class="card-body p-2">
                      <div class="position-relative">
                        <img src="/backend/images/admin/img-course-3.png" alt="img" class="img-fluid w-100">
                        <div class="position-absolute top-0 end-0 p-2">
                          <span class="badge text-bg-light text-uppercase">Free</span>
                        </div>
                      </div>
                      <ul class="list-group list-group-flush my-2">
                        <li class="list-group-item px-0 py-2">
                          <div class="d-flex align-items-center">
                            <div class="flex-grow-1 me-2">
                              <h6 class="mb-1">MERN Stack Training Course</h6>
                              <p class="mb-0 f-w-600"><i class="fas fa-star text-warning"></i> 3.9</p>
                            </div>
                            <div class="flex-shrink-0">
                              <a href="#" class="avtar avtar-xs btn-link-secondary">
                                <i class="ti ti-edit f-20"></i>
                              </a>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item px-0 py-2">
                          <div class="d-flex align-items-center">
                            <div class="flex-grow-1 me-2">
                              <p class="mb-0">Duration</p>
                            </div>
                            <div class="flex-shrink-0">
                              <p class="text-muted mb-0">10 Months</p>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item px-0 py-2">
                          <div class="d-flex align-items-center">
                            <div class="flex-grow-1 me-2">
                              <p class="mb-0">Teacher</p>
                            </div>
                            <div class="flex-shrink-0">
                              <p class="text-muted mb-0">Jack Ronan</p>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item px-0 py-2">
                          <div class="d-flex align-items-center">
                            <div class="flex-grow-1 me-2">
                              <p class="mb-0">Students</p>
                            </div>
                            <div class="flex-shrink-0">
                              <p class="text-muted mb-0">+100</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <button class="btn btn-sm btn-outline-primary mb-2">Read More</button>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-lg-4 col-xxl-3">
                  <div class="card border">
                    <div class="card-body p-2">
                      <div class="position-relative">
                        <img src="/backend/images/admin/img-course-4.png" alt="img" class="img-fluid w-100">
                      </div>
                      <ul class="list-group list-group-flush my-2">
                        <li class="list-group-item px-0 py-2">
                          <div class="d-flex align-items-center">
                            <div class="flex-grow-1 me-2">
                              <h6 class="mb-1">Python Training Course</h6>
                              <p class="mb-0 f-w-600"><i class="fas fa-star text-warning"></i> 4.5</p>
                            </div>
                            <div class="flex-shrink-0">
                              <a href="#" class="avtar avtar-xs btn-link-secondary">
                                <i class="ti ti-edit f-20"></i>
                              </a>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item px-0 py-2">
                          <div class="d-flex align-items-center">
                            <div class="flex-grow-1 me-2">
                              <p class="mb-0">Duration</p>
                            </div>
                            <div class="flex-shrink-0">
                              <p class="text-muted mb-0">10 Months</p>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item px-0 py-2">
                          <div class="d-flex align-items-center">
                            <div class="flex-grow-1 me-2">
                              <p class="mb-0">Teacher</p>
                            </div>
                            <div class="flex-shrink-0">
                              <p class="text-muted mb-0">Garrett Winters</p>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item px-0 py-2">
                          <div class="d-flex align-items-center">
                            <div class="flex-grow-1 me-2">
                              <p class="mb-0">Students</p>
                            </div>
                            <div class="flex-shrink-0">
                              <p class="text-muted mb-0">+110</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <button class="btn btn-sm btn-outline-primary mb-2">Read More</button>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-lg-4 col-xxl-3">
                  <div class="card border">
                    <div class="card-body p-2">
                      <div class="position-relative">
                        <img src="/backend/images/admin/img-course-5.png" alt="img" class="img-fluid w-100">
                      </div>
                      <ul class="list-group list-group-flush my-2">
                        <li class="list-group-item px-0 py-2">
                          <div class="d-flex align-items-center">
                            <div class="flex-grow-1 me-2">
                              <h6 class="mb-1">Web Designing Course</h6>
                              <p class="mb-0 f-w-600"><i class="fas fa-star text-warning"></i> 4.2</p>
                            </div>
                            <div class="flex-shrink-0">
                              <a href="#" class="avtar avtar-xs btn-link-secondary">
                                <i class="ti ti-edit f-20"></i>
                              </a>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item px-0 py-2">
                          <div class="d-flex align-items-center">
                            <div class="flex-grow-1 me-2">
                              <p class="mb-0">Duration</p>
                            </div>
                            <div class="flex-shrink-0">
                              <p class="text-muted mb-0">10 Months</p>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item px-0 py-2">
                          <div class="d-flex align-items-center">
                            <div class="flex-grow-1 me-2">
                              <p class="mb-0">Teacher</p>
                            </div>
                            <div class="flex-shrink-0">
                              <p class="text-muted mb-0">Tiger Nixon</p>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item px-0 py-2">
                          <div class="d-flex align-items-center">
                            <div class="flex-grow-1 me-2">
                              <p class="mb-0">Students</p>
                            </div>
                            <div class="flex-shrink-0">
                              <p class="text-muted mb-0">+110</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <button class="btn btn-sm btn-outline-primary mb-2">Read More</button>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-lg-4 col-xxl-3">
                  <div class="card border">
                    <div class="card-body p-2">
                      <div class="position-relative">
                        <img src="/backend/images/admin/img-course-6.png" alt="img" class="img-fluid w-100">
                        <div class="position-absolute top-0 end-0 p-2">
                          <span class="badge text-bg-light text-uppercase">Free</span>
                        </div>
                      </div>
                      <ul class="list-group list-group-flush my-2">
                        <li class="list-group-item px-0 py-2">
                          <div class="d-flex align-items-center">
                            <div class="flex-grow-1 me-2">
                              <h6 class="mb-1">C Training Course</h6>
                              <p class="mb-0 f-w-600"><i class="fas fa-star text-warning"></i> 4.6</p>
                            </div>
                            <div class="flex-shrink-0">
                              <a href="#" class="avtar avtar-xs btn-link-secondary">
                                <i class="ti ti-edit f-20"></i>
                              </a>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item px-0 py-2">
                          <div class="d-flex align-items-center">
                            <div class="flex-grow-1 me-2">
                              <p class="mb-0">Duration</p>
                            </div>
                            <div class="flex-shrink-0">
                              <p class="text-muted mb-0">10 Months</p>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item px-0 py-2">
                          <div class="d-flex align-items-center">
                            <div class="flex-grow-1 me-2">
                              <p class="mb-0">Teacher</p>
                            </div>
                            <div class="flex-shrink-0">
                              <p class="text-muted mb-0">Airi Satou</p>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item px-0 py-2">
                          <div class="d-flex align-items-center">
                            <div class="flex-grow-1 me-2">
                              <p class="mb-0">Students</p>
                            </div>
                            <div class="flex-shrink-0">
                              <p class="text-muted mb-0">+70</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <button class="btn btn-sm btn-outline-primary mb-2">Read More</button>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-lg-4 col-xxl-3">
                  <div class="card border">
                    <div class="card-body p-2">
                      <div class="position-relative">
                        <img src="/backend/images/admin/img-course-7.png" alt="img" class="img-fluid w-100">
                      </div>
                      <ul class="list-group list-group-flush my-2">
                        <li class="list-group-item px-0 py-2">
                          <div class="d-flex align-items-center">
                            <div class="flex-grow-1 me-2">
                              <h6 class="mb-1">UI/UX Designing Course</h6>
                              <p class="mb-0 f-w-600"><i class="fas fa-star text-warning"></i> 4.6</p>
                            </div>
                            <div class="flex-shrink-0">
                              <a href="#" class="avtar avtar-xs btn-link-secondary">
                                <i class="ti ti-edit f-20"></i>
                              </a>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item px-0 py-2">
                          <div class="d-flex align-items-center">
                            <div class="flex-grow-1 me-2">
                              <p class="mb-0">Duration</p>
                            </div>
                            <div class="flex-shrink-0">
                              <p class="text-muted mb-0">10 Months</p>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item px-0 py-2">
                          <div class="d-flex align-items-center">
                            <div class="flex-grow-1 me-2">
                              <p class="mb-0">Teacher</p>
                            </div>
                            <div class="flex-shrink-0">
                              <p class="text-muted mb-0">Sonya Frost</p>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item px-0 py-2">
                          <div class="d-flex align-items-center">
                            <div class="flex-grow-1 me-2">
                              <p class="mb-0">Students</p>
                            </div>
                            <div class="flex-shrink-0">
                              <p class="text-muted mb-0">+150</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <button class="btn btn-sm btn-outline-primary mb-2">Read More</button>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-lg-4 col-xxl-3">
                  <div class="card border">
                    <div class="card-body p-2">
                      <div class="position-relative">
                        <img src="/backend/images/admin/img-course-8.png" alt="img" class="img-fluid w-100">
                      </div>
                      <ul class="list-group list-group-flush my-2">
                        <li class="list-group-item px-0 py-2">
                          <div class="d-flex align-items-center">
                            <div class="flex-grow-1 me-2">
                              <h6 class="mb-1">SEO Training Course</h6>
                              <p class="mb-0 f-w-600"><i class="fas fa-star text-warning"></i> 4.3</p>
                            </div>
                            <div class="flex-shrink-0">
                              <a href="#" class="avtar avtar-xs btn-link-secondary">
                                <i class="ti ti-edit f-20"></i>
                              </a>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item px-0 py-2">
                          <div class="d-flex align-items-center">
                            <div class="flex-grow-1 me-2">
                              <p class="mb-0">Duration</p>
                            </div>
                            <div class="flex-shrink-0">
                              <p class="text-muted mb-0">10 Months</p>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item px-0 py-2">
                          <div class="d-flex align-items-center">
                            <div class="flex-grow-1 me-2">
                              <p class="mb-0">Teacher</p>
                            </div>
                            <div class="flex-shrink-0">
                              <p class="text-muted mb-0">Cedric Kelly</p>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item px-0 py-2">
                          <div class="d-flex align-items-center">
                            <div class="flex-grow-1 me-2">
                              <p class="mb-0">Students</p>
                            </div>
                            <div class="flex-shrink-0">
                              <p class="text-muted mb-0">+60</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <button class="btn btn-sm btn-outline-primary mb-2">Read More</button>
                    </div>
                  </div>
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