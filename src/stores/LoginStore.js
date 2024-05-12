import { defineStore } from 'pinia';
import axios from 'axios';
import { useRouter } from 'vue-router';

export const useLoginStore = defineStore({
    id: 'login',
    state: () => ({
        email: '',
        password: '',
        isLoggedIn: false,
        router: useRouter(),
    }),
    actions: {
        async login() {
            try {
                const response = await axios.get('../login.json');
                const userData = response.data;
                const user = userData.find((user) => user.email === this.email && user.password === this.password);
                if (user) {
                    this.isLoggedIn = true;
                    localStorage.setItem('id', user);
                    this.router.push({ name: 'home' });
                } else if (localStorage.getItem('id') === true) {
                    this.isLoggedIn = true;
                } else {
                    alert('Invalid email or password');
                }
            } catch (error) {
                console.error(error);
            }
        },
        logout() {
            this.isLoggedIn = false;
            localStorage.removeItem('id');
        },
    },
});