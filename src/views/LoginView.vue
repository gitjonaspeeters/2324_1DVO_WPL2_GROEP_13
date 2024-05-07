<script>
import { useLoginStore } from '../stores/LoginStore.js';

export default {
  data() {
    const loginStore = useLoginStore();
    return {
      loginStore,
    };
  },
};

</script>

<template>
  <body>
  <div id="inlog-container">
    <div id="inlog-left">

      <div id="form-kader">
        <h1>Login</h1>
        <form id="form" @submit.prevent="loginStore.login()">
          <label for="email"></label>
          <input type="email" id="email" v-model="loginStore.email" name="email" placeholder="Email">
          <label for="password"></label>
          <input type="password" id="password" v-model="loginStore.password" name="password" placeholder="Wachtwoord">
          <router-link to="#" @click.prevent="loginStore.login()"><p id="login">Inloggen</p></router-link>
          <router-link to="/register"><p id="register">Registreren</p></router-link>
          <div id="remember-button">
            <section></section>
            <p>Onthouden</p>
          </div>
        </form>

      </div>
    </div>
    <div id="inlog-right">
      <div id="image">
      </div>
    </div>
  </div>
  </body>


</template>

<style scoped>
* {
  background-color: #D9CAC5;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Century Gothic", sans-serif;
}

a {
  background-color: transparent;
  text-decoration: none;
}

#inlog-container {
  display: flex;
  flex-direction: row;
  height: 100vh;
}

#inlog-right {
  display: flex;
  width: 50vw;
  margin-right: 10rem;
}

#inlog-left {
  display: flex;
  width: 50vw;
  align-items: center;
  justify-content: center;
}

#form-kader {
  background-color: #ffffff;
  width: 416px;
  height: 480px;
  border-radius: 40px;
  padding: 20px 40px 41px 43px;
}

#form-kader h1 {
  color: #A67C63;
  background-color: transparent;
  margin-bottom: 2rem;
}

#form {
  display: flex;
  flex-direction: column;
  background-color: #D2D2D2;
  width: 333px;
  height: 335px;
  border-radius: 40px;
}

#remember-button {
  display: flex;
  background-color: transparent;
  justify-content: flex-start;
  margin-top: 0.25rem;
  margin-left: 5rem;
}

#remember-button section {
  width: 10px;
  height: 10px;
  border-radius: 1px;
  border: 0.5px solid darkblue;
  margin-right: 5px;
  align-self: center;
}

#remember-button p {
  background-color: transparent;
  font-size: 0.75rem;
}

#image {
  width: 100%;
  height: 100%;
  background-image: url("src/assets/henk.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

#form input {
  width: 250px;
  height: 36px;
  background-color: darkblue;
  border-radius: 12px;
  padding-left: 20px;
}

#form #email {
  margin: 5rem auto 0.25rem;
  background-color: #485059;
  color: #ffffff;
}

#form #password {
  margin: 22px auto;
  background-color: #485059;
  color: #ffffff;
}

#email::placeholder, #password::placeholder {
  color: #FFFFFF;
}

#login {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 175px;
  height: 37.23px;
  border-radius: 20px;
  background-color: #A67C63;;
  color: #ffffff;
  margin: 10px auto;
}

#register {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 175px;
  height: 37.23px;
  border-radius: 20px;
  background-color: transparent;
  border: 1px solid #000;
  color: #000;
  margin: 0.25rem auto;
}

#login:hover {
  background-color: #b08972;
}

#register:hover {
  border: none;
  background-color: #485059;
  color: #ffffff;
}

@media screen and (max-width: 1050px) {
  #inlog-left {
    margin-left: 2.5rem;
  }

  #inlog-right {
    margin: 0 auto;
    display: flex;
    height: 100%;
  }
}

@media screen and (max-width: 850px) {
  #inlog-right {
    display: none;
  }

  #inlog-left {
    width: 100vw;
    margin: 0;
  }

  #inlog-container {
    justify-content: center;
  }
}
</style>