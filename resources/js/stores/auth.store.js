import { defineStore } from 'pinia';
import { getAuth, signOut, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import router from '../routes/Router';  // Import the router

export const useAuthStore = defineStore("authStore", {

  actions: {

    async login(formData) {
      try {
        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
        this.auth = userCredential.user;
        localStorage.setItem('auth', this.auth)
        router.push({ name: 'Dashboard' });
      } catch (error) {
        console.error('Failed to login:', error);
      }
    },

    async logout() {
      try {
        const auth = getAuth();
        signOut(auth).then(() => {
          localStorage.removeItem('auth');
          router.push({ name : 'Login'})
          console.log('sign out sucess')
        }).catch((error) => {
          console.error('Logout failed:', error);
        });
      } catch (error) {
        console.error('Logout failed:', error.message);
      }
    },
    fetchUser() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        this.user = user ? user : null;
      });
    },
  }
});
