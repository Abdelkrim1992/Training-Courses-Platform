import { defineStore } from 'pinia';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const useAuthStore = defineStore("authStore", {
  
  actions: {
    async register(formData) {
      try {
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
    // Signed up 
        const user = userCredential.user;
        console.log(user)
        })
        .catch((error) => {
        console.error('failed register', error)
    // ..
        });
      } catch (error) {
        console.error('Failed to register:', error);
        throw error;
      }
    },

    async login(formData) {
      try {
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        })
        .catch((error) => {
          console.error('failed login', error)
        });
      } catch (error) {
        console.error('Failed to login:', error);
        throw error;
      }
    }
  }
  
});
