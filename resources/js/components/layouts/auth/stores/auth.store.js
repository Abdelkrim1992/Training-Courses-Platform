import { defineStore } from 'pinia';
import axios from 'axios';
import router from '../../../../routes/Router';

const baseURL = import.meta.env.VITE_API_URL;

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') ,
  }),

  actions: {
    async login(email, password) {
      try {
        const response = await axios.post(`${baseURL}/login`, { email, password });
        const token = response.data;
        this.token = token;
        localStorage.setItem('token', JSON.stringify(token));
        setTimeout(() => {
            window.location.href = '/admin/dashboard';
        }, 200); 
      } catch (error) {
        console.error('Login error:', error);
      }
    },

    logout() {
      this.token = null;
      localStorage.removeItem('token');
    },

  },
});