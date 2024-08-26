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
                <li class="breadcrumb-item" aria-current="page">Team List</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- [ breadcrumb ] end -->

      <!-- [ Main Content ] start -->
      <div class="row">
        <div class="col-12">
          <div class="card table-card">
            <div class="card-header">
              <div class="d-sm-flex align-items-center justify-content-between">
                <h5 class="mb-3 mb-sm-0">Team Member list</h5>
                <div>
                  <a href="../admins/course-teacher-apply.html" class="btn btn-outline-secondary">Apply Teacher List</a>
                  <a href="../admins/course-teacher-add.html" class="btn btn-primary">Add Teacher</a>
                </div>
              </div>
            </div>
            <div class="card-body pt-3">
              <div class="table-responsive">
                <table class="table table-hover" id="pc-dt-simple">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Departments</th>
                      <th>Qualification</th>
                      <th>Mobile</th>
                      <th>Joining Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <img src="/backend/images/user/avatar-1.jpg" alt="user image" class="img-radius wid-40">
                          </div>
                          <div class="flex-grow-1 ms-3">
                            <h6 class="mb-0">Airi Satou</h6>
                          </div>
                        </div>
                      </td>
                      <td>Developer</td>
                      <td>B.COM., M.COM.</td>
                      <td>(123) 4567 890</td>
                      <td>2023/09/12</td>
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
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <img src="/backend/images/user/avatar-2.jpg" alt="user image" class="img-radius wid-40">
                          </div>
                          <div class="flex-grow-1 ms-3">
                            <h6 class="mb-0">Ashton Cox</h6>
                          </div>
                        </div>
                      </td>
                      <td>Junior Technical</td>
                      <td>B.COM., M.COM.</td>
                      <td>(123) 4567 890</td>
                      <td>2023/12/24</td>
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
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <img src="/backend/images/user/avatar-3.jpg" alt="user image" class="img-radius wid-40">
                          </div>
                          <div class="flex-grow-1 ms-3">
                            <h6 class="mb-0">Bradley Greer</h6>
                          </div>
                        </div>
                      </td>
                      <td>Sales Assistant</td>
                      <td>B.A, B.C.A</td>
                      <td>(123) 4567 890</td>
                      <td>2022/09/19</td>
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
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <img src="/backend/images/user/avatar-4.jpg" alt="user image" class="img-radius wid-40">
                          </div>
                          <div class="flex-grow-1 ms-3">
                            <h6 class="mb-0">Brielle Williamson</h6>
                          </div>
                        </div>
                      </td>
                      <td>JavaScript Developer</td>
                      <td>B.A, B.C.A</td>
                      <td>(123) 4567 890</td>
                      <td>2022/08/22</td>
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
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <img src="/backend/images/user/avatar-5.jpg" alt="user image" class="img-radius wid-40">
                          </div>
                          <div class="flex-grow-1 ms-3">
                            <h6 class="mb-0">Airi Satou</h6>
                          </div>
                        </div>
                      </td>
                      <td>Developer</td>
                      <td>B.COM., M.COM.</td>
                      <td>(123) 4567 890</td>
                      <td>2023/09/12</td>
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
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <img src="/backend/images/user/avatar-6.jpg" alt="user image" class="img-radius wid-40">
                          </div>
                          <div class="flex-grow-1 ms-3">
                            <h6 class="mb-0">Ashton Cox</h6>
                          </div>
                        </div>
                      </td>
                      <td>Junior Technical</td>
                      <td>B.COM., M.COM.</td>
                      <td>(123) 4567 890</td>
                      <td>2023/12/24</td>
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
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <img src="/backend/images/user/avatar-7.jpg" alt="user image" class="img-radius wid-40">
                          </div>
                          <div class="flex-grow-1 ms-3">
                            <h6 class="mb-0">Bradley Greer</h6>
                          </div>
                        </div>
                      </td>
                      <td>Sales Assistant</td>
                      <td>B.A, B.C.A</td>
                      <td>(123) 4567 890</td>
                      <td>2022/09/19</td>
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
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <img src="/backend/images/user/avatar-8.jpg" alt="user image" class="img-radius wid-40">
                          </div>
                          <div class="flex-grow-1 ms-3">
                            <h6 class="mb-0">Brielle Williamson</h6>
                          </div>
                        </div>
                      </td>
                      <td>JavaScript Developer</td>
                      <td>B.A, B.C.A</td>
                      <td>(123) 4567 890</td>
                      <td>2022/08/22</td>
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
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <img src="/backend/images/user/avatar-9.jpg" alt="user image" class="img-radius wid-40">
                          </div>
                          <div class="flex-grow-1 ms-3">
                            <h6 class="mb-0">Brielle Williamson</h6>
                          </div>
                        </div>
                      </td>
                      <td>JavaScript Developer</td>
                      <td>B.A, B.C.A</td>
                      <td>(123) 4567 890</td>
                      <td>2022/08/22</td>
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
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <img src="/backend/images/user/avatar-10.jpg" alt="user image" class="img-radius wid-40">
                          </div>
                          <div class="flex-grow-1 ms-3">
                            <h6 class="mb-0">Airi Satou</h6>
                          </div>
                        </div>
                      </td>
                      <td>Developer</td>
                      <td>B.COM., M.COM.</td>
                      <td>(123) 4567 890</td>
                      <td>2023/09/12</td>
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
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <img src="/backend/images/user/avatar-2.jpg" alt="user image" class="img-radius wid-40">
                          </div>
                          <div class="flex-grow-1 ms-3">
                            <h6 class="mb-0">Ashton Cox</h6>
                          </div>
                        </div>
                      </td>
                      <td>Junior Technical</td>
                      <td>B.COM., M.COM.</td>
                      <td>(123) 4567 890</td>
                      <td>2023/12/24</td>
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
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <img src="/backend/images/user/avatar-3.jpg" alt="user image" class="img-radius wid-40">
                          </div>
                          <div class="flex-grow-1 ms-3">
                            <h6 class="mb-0">Bradley Greer</h6>
                          </div>
                        </div>
                      </td>
                      <td>Sales Assistant</td>
                      <td>B.A, B.C.A</td>
                      <td>(123) 4567 890</td>
                      <td>2022/09/19</td>
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
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <img src="/backend/images/user/avatar-4.jpg" alt="user image" class="img-radius wid-40">
                          </div>
                          <div class="flex-grow-1 ms-3">
                            <h6 class="mb-0">Brielle Williamson</h6>
                          </div>
                        </div>
                      </td>
                      <td>JavaScript Developer</td>
                      <td>B.A, B.C.A</td>
                      <td>(123) 4567 890</td>
                      <td>2022/08/22</td>
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
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <img src="/backend/images/user/avatar-5.jpg" alt="user image" class="img-radius wid-40">
                          </div>
                          <div class="flex-grow-1 ms-3">
                            <h6 class="mb-0">Airi Satou</h6>
                          </div>
                        </div>
                      </td>
                      <td>Developer</td>
                      <td>B.COM., M.COM.</td>
                      <td>(123) 4567 890</td>
                      <td>2023/09/12</td>
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
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <img src="/backend/images/user/avatar-6.jpg" alt="user image" class="img-radius wid-40">
                          </div>
                          <div class="flex-grow-1 ms-3">
                            <h6 class="mb-0">Ashton Cox</h6>
                          </div>
                        </div>
                      </td>
                      <td>Junior Technical</td>
                      <td>B.COM., M.COM.</td>
                      <td>(123) 4567 890</td>
                      <td>2023/12/24</td>
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
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <img src="/backend/images/user/avatar-7.jpg" alt="user image" class="img-radius wid-40">
                          </div>
                          <div class="flex-grow-1 ms-3">
                            <h6 class="mb-0">Bradley Greer</h6>
                          </div>
                        </div>
                      </td>
                      <td>Sales Assistant</td>
                      <td>B.A, B.C.A</td>
                      <td>(123) 4567 890</td>
                      <td>2022/09/19</td>
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
    </BackendLayouts>
</template>


<script setup>

import BackendLayouts from '../../BackendLayouts.vue';

</script>