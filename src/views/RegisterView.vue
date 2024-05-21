<script>
import {useLoginStore} from "@/stores/LoginStore.js";
export default {
  name: "RegisterView",
  data() {
    const loginstore = useLoginStore();
    return {
      loginstore,
    }
  }
}
</script>

<template>
  <body>
  <div id="registration-container">
    <div id="registration-leftside">

        <div id="form-kader">
          <h1>Registreren</h1>
          <form id="form" action="">
            <label for="name"></label>
            <input type="text" id="name" name="name" placeholder="Naam">
            <label for="first-name"></label>
            <input type="text" class="input" id="first-name" name="First-name" placeholder="Voornaam">
            <label for="email"></label>
            <input type="email"  v-model="this.loginstore.email" class="input" id="email" name="email" placeholder="Email">
            <label for="password"></label>
            <input type="password" v-model="this.loginstore.password" class="input" id="password" name="password" placeholder="Wachtwoord">
            <label for="password"></label>
            <input type="password" id="password2" name="password" placeholder="Herhaal Wachtwoord">
            <p @click="loginstore.register(this.email, this.password)" id="register">Registreren</p>
          </form>

      </div>
    </div>
    <div id="registration-rightside">
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

#registration-container {
  display: flex;
  flex-direction: row;
  height: 100vh;
}

#registration-rightside {
  display: flex;
  width: 35vw;
}

#registration-leftside {
  display: flex;
  width: 50vw;
  align-items: center;
  justify-content: center;
}


#form-kader {
  background-color: #ffffff;
  width: 416px;
  height: 600px;
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
  height: 450px;
  border-radius: 40px;
}

#image {
  width: 150rem;
  background-image: url("/assets/undraw_ideation_re_8i2h.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

#form #name {
  margin: 3rem auto 0.75rem;
  background-color: #485059;
  color: #ffffff;
  border-radius: 12px;
}

#form .input {
  margin: 0.75rem auto;
  background-color: #485059;
  color: #FFFFFF;
  border-radius: 12px;
}

#form #password2 {
  margin: 0.5rem auto 20px;
  background-color: #485059;
  color: #ffffff;
  border-radius: 12px;
}

input {
  height: 40px;
  width: 80%;
  padding-left: 20px;
}

input::placeholder {
  color: #FFFFFF;
}

#register {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 175px;
  height: 37.23px;
  border-radius: 20px;
  background-color: #A67C63;
  color: #ffffff;
  margin: 0.75rem auto;
}

#register:hover {
  border: none;
  background-color: #485059;
  color: #ffffff;
}

@media screen and (max-width: 1050px) {
  #registration-leftside {
    margin-left: 2.5rem;
  }

  #registration-rightside {
    margin: 0 auto;
    display: flex;
  }
}

@media screen and (max-width: 850px) {
  #registration-rightside {
    display: none;
  }

  #registration-leftside {
    width: 100vw;
    margin: 0;
  }

  #registration-container {
    justify-content: center;
  }
}
@media screen and (max-width: 480px) {
  #form-kader {
    width: 80vw;
  }
  #form {
    width: 60vw;
  }
  #register {
    width: 40vw;
  }
}
</style>
