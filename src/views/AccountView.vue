<script setup>

</script>

<template>
  <div id="inlog-container">
    <h1>Account information</h1>
    <hr>
    <div id="accountinfo-image">
    <div id="inlog-left">
      <form id="form" action="">
        <label for="name"></label>
        <input type="text" id="name" name="name" placeholder="Name">
        <label for="first-name"></label>
        <input type="text" id="first-name" name="first-name" placeholder="Voornaam">
        <label for="email"></label>
        <input type="email" id="email" name="email" placeholder="Email">
        <label for="password"></label>
        <input type="text" id="password" name="password" placeholder="Wachtwoord">
      </form>
    </div>
  <div id="inlog-right">
    <div id="image">
    </div>
  </div>
    </div>
  </div>



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
  flex-direction: column;
  align-items: center;
  padding-top: 10rem;
  height: 100vh;
}

#accountinfo-image {
  display: flex;
}

#inlog-right {
  display: flex;
  width: 60vw;
  margin-right: 10rem;
}

#inlog-left {
  display: flex;
  width: 50vw;
  align-items: center;
  justify-content: flex-start;
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

#form {
  display: flex;
  flex-direction: column;
}

#image {
  width: 100%;
  height: 100%;
  background-image: url("src/assets/undraw_access_account_re_8spm.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

#form input {
  width: 413px;
  height: 53px;
  background-color: #F1EEEE;
  color: #ffffff;
  border-radius: 10px;
  border: none;
  margin-bottom: 40px;
}


#form input::placeholder {
  color: #7B7B7B;
  padding-left: 1rem;
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
  }

  #inlog-container {
    justify-content: center;
  }
}
</style>