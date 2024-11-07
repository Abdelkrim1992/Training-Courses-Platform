<script setup>
import { useAuthStore } from '../../../stores/auth.store';

    const authStore = useAuthStore();
    const user = authStore.user;

    const logout = async () => {
      await authStore.logout();
    };

    
</script>



<template>
  <header class="pc-header">
    <div class="header-wrapper">
      <!-- [Mobile Media Block] start -->
      <div class="me-auto pc-mob-drp">
        <ul class="list-unstyled">
          <li class="pc-h-item pc-sidebar-collapse">
            <a href="#" class="pc-head-link ms-0" id="sidebar-hide">
              <i class="ti ti-menu-2"></i>
            </a>
          </li>
          <li class="pc-h-item pc-sidebar-popup">
            <a href="#" class="pc-head-link ms-0" id="mobile-collapse">
              <i class="ti ti-menu-2"></i>
            </a>
          </li>
        </ul>
      </div>
      <!-- [Mobile Media Block end] -->
      <div class="ms-auto">
        <ul class="list-unstyled">
          <li class="dropdown pc-h-item">
            <a class="pc-head-link dropdown-toggle arrow-none me-0" data-bs-toggle="dropdown" role="button"
              aria-haspopup="false" aria-expanded="false">
              <i class="ph-duotone ph-user"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-end pc-h-dropdown">
              <router-link to="/admin/setting/add-setting" class="dropdown-item">
                <i class="ph-duotone ph-gear"></i>
                <span>Settings</span>
              </router-link>
              <button @click="logout" class="dropdown-item">
                <i class="ph-duotone ph-power"></i>
                <span>Logout</span>
              </button>
            </div>
          </li>
        </ul>
      </div> 
    </div>
  </header>
</template>
