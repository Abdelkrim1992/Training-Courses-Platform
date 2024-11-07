<template>
    <router-view></router-view>
</template>

<script>
import { useAuthStore } from '../stores/auth.store';

export default {
  setup() {
    const authStore = useAuthStore();
    authStore.fetchUser(); // Initialize auth state on app load
  },
};
</script>
