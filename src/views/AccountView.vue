

<template>
  <div id="account-container">
    <h1>Account information</h1>
    <hr>
    <div id="accountinfo-image">
      <div id="account-left">
        <form id="form" action="">
          <div class="input">
            <input type="text" id="name" name="name" placeholder="Name">
            <i class="fa-solid fa-pencil icon"></i>
          </div>
          <div class="input">
            <input type="text" id="first-name" name="first-name" placeholder="Voornaam">
            <i class="fa-solid fa-pencil icon"></i>
          </div>
          <div class="input">
            <input type="email" id="email" name="email" placeholder="Email">
            <i class="fa-solid fa-pencil icon"></i>
          </div>
          <div class="input">
            <input type="text" id="password" name="password" placeholder="Wachtwoord">
            <i class="fa-solid fa-pencil icon"></i>
          </div>
                    <button class='btn btn-danger' @click="logOut">Logout</button>
 
        </form>
        
      </div>
      <div id="account-right">
        <div id="image">
        </div>
      </div>
    </div>
  </div>
</template>

<script >

import { useLoginStore } from '@/stores/LoginStore.js';

export default {
  name: "AccountView",
  methods: {
    logOut() {
      useLoginStore().logout();
      this.$router.push("/");
    },
  },
};

</script>

<style scoped>


#account-container {
  padding-top: 9rem !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10rem;
  height: 100%;
  background-color: #D9CAC5;
  margin: 0;

  box-sizing: border-box;
  font-family: "Century Gothic", sans-serif;
}

#account-right {
  display: flex;
  width: 60vw;
  margin-right: 10rem;
  height: 65rem;
}

#account-left {
  display: flex;
  width: 40vw;
  justify-content: center;
}


h1 {
  color: #485059;
  background-color: transparent;
  margin-bottom: 1rem;
  margin-left: 10vw;
  align-self: flex-start;
}
hr {
  width: 80vw;
  align-self: center;
  margin-bottom: 2rem;
}

#image {
  width: 100%;
  height: 100%;
  background-image: url("src/assets/undraw_access_account_re_8spm.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

#accountinfo-image {
  display: flex;
  justify-content: center;
  margin-left: 12rem;
}

.input {
  display: flex;
  position: relative;
  width: 413px;
  height: 53px;
  background-color: #F1EEEE;
  color: #ffffff;
  border-radius: 10px;
  border: none;
  margin-bottom: 40px;
}

.input input {
  width: 100%;
  height: 100%;
  padding-left: 20px;
  background-color: transparent;
  border: none;
}

.icon {
  align-self: center;
  right: 15px;
  background-color: transparent;
}

#form input::placeholder {
  color: #7B7B7B;
  background-color: transparent;
}

#form input:focus {
  outline: none;
}

.icon {
  position: absolute;
}


@media screen and (max-width: 1050px) {
  #account-left {
    margin-left: 2.5rem;
  }

  #account-right {
    margin: 0 auto;
    display: flex;
    height: 100%;
  }
}

@media screen and (max-width: 850px) {
  #account-right {
    display: none;
    margin: 0;
  }

  #account-left {
    width: 100vw;
  }

  #account-container {
    justify-content: center;
  }
}
</style>