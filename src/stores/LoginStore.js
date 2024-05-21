import { defineStore } from 'pinia';
import axios from 'axios';
import { useRouter } from 'vue-router';
import fs from 'fs';

export const useLoginStore = defineStore({
    id: 'login',
    state: () => ({
        email: '',
        password: '',
        isLoggedIn: false,
        router: useRouter(),
        succes: false,
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
        async register(email, password) {
            try {
                console.log(this)
                const response = await axios.get('../login.json');
                const userData = response.data;

                // Controleer of de gebruiker al bestaat
                const userExists = userData.find(user => user.email === email);

                if (userExists) {
                    alert('User already exists');
                    return;
                }

                // Voeg de nieuwe gebruiker toe
                const newUser = { id: Date.now(), email, password }; // Unieke ID genereren met timestamp
                userData.push(newUser);

                // Schrijf de bijgewerkte gebruikersdata terug naar het JSON-bestand
                fs.writeFile('~/login.json', JSON.stringify(userData, null, 2), (err) => {
                    if (err) {
                        console.error('Error writing file:', err);
                        alert('Registration failed');
                        return;
                    }
                    alert('Registration successful');
                });
            } catch (error) {
                console.error('Error fetching login data:', error);
            }
            this.isloggedIn = true;
            this.router.push({ name: 'home' });
        },
        logout() {
            this.isLoggedIn = false;
            localStorage.removeItem('id');
        },
    },
});