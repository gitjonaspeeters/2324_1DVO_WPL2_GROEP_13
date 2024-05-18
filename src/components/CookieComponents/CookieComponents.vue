<template>
    <div>
      <div class="overlay" v-if="!cookiesConfirmed"></div>
      <div class="privacy-banner" v-if="!cookiesConfirmed">
        <p>
          Deze website gebruikt cookies om uw surfervaring te verbeteren. Door verder te gaan, stemt u in met ons gebruik van cookies.  <br>
          <router-link to="/privacy" @click.stop>Algemene voorwaarden</router-link>
        </p>
        <button @click="confirmCookies">Akkoord</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cookiesConfirmed: false
      };
    },
    mounted() {
      this.checkCookiesStatus();
    },
    methods: {
      checkCookiesStatus() {
        const cookiesStatus = localStorage.getItem('cookiesConfirmed');
        if (cookiesStatus) {
          this.cookiesConfirmed = true;
        }
      },
      confirmCookies() {
        this.cookiesConfirmed = true;
        localStorage.setItem('cookiesConfirmed', true);
      }
    }
  }
  </script>
  
  <style scoped>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 3;
  }
  
  .privacy-banner {
    z-index: 4;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 25px;
    background-color: #353535;
    color: #fff;
    text-align: center;
    border-radius: 12px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  }
  
  .privacy-banner p {
    margin-bottom: 15px;
  }
  
  .privacy-banner p a {
    text-decoration: underline;
    cursor: pointer;
    color: #fff;
  }
  
  .privacy-banner p a:hover {
    color: #ee8a10;
    text-decoration: underline;
  }
  
  .privacy-banner button {
    padding: 10px 18px;
    background-color: #ee8a10;
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.1s;
  }
  
  .privacy-banner button:hover {
    background-color: #A67C63;
  }
  </style>
  