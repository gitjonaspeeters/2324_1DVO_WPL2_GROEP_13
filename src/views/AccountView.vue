<script setup>

</script>

<template>
  <div id="inlog-container">
    <h1>Account information</h1>
    <hr>
    <div id="accountinfo-image" class="input-container">
      <div id="inlog-left">
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

#inlog-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10rem;
  height: 100%;
}

#inlog-right {
  display: flex;
  width: 60vw;
  margin-right: 10rem;
  height: 65rem;
}

#inlog-left {
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

.input-container {
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