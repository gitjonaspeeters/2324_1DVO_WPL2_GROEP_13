<script>
import FormulierView from './FormulierView.vue'

export default {
  name: 'FormulierView',
  data() {
    return {
      FormulierView,
    }
  }
}
</script>

<template>
  <div id="form-container">
    <div id="container-iframe">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2499.0009818272597!2d4.430644613360687!3d51.21905757163135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3f709ae8ec267%3A0x17b51aaeb8fcefde!2sComfortmeubel!5e0!3m2!1snl!2sbe!4v1716124219131!5m2!1snl!2sbe"  style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div id="form-kader">
      <h1>Hulp nodig?</h1>
      <p>Wij antwoorden zo snel mogelijk op jouw <br> bericht</p>
      <form id="form">
        <div class="form-row">
          <label for="name"></label>
          <input type="text" id="name" name="name" placeholder="Naam" required>
          <label for="firstname"></label>
          <input type="text" id="firstname" name="firstname" placeholder="Voornaam" required>
        </div>
        <div class="form-row">
          <label for="email"></label>
          <input type="email" id="email" name="email" placeholder="Email" required>
        </div>
        <div class="form-row">
          <label for="product"></label>
          <input type="text" id="product" name="product" placeholder="Product naam" required>
          <label for="subject"></label>
          <input type="text" id="subject" name="subject" placeholder="Onderwerp" required>
        </div>
        <div class="form-row">
          <label for="message"></label>
          <textarea id="message" name="message" required placeholder="Uw bericht"></textarea>
        </div>
        <div class="form-row">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #D9CAC5;
}

#form-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  height: 100vh;
}

#container-iframe iframe {
  width: 40vw;
  height: 40vh;
  border-radius: 12px;
  border: none;
}


#form-kader {
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  width: 35vw;
  height: 80%;
  border-radius: 40px;
  padding: 20px 40px 41px 43px;
  margin-top: 5rem;
}

#form-container h1 {
  color: #485059;
  margin-bottom: 2rem;
  background-color: transparent;
}

#form-container p {
  color: #485059;
  margin-bottom: 2rem;
  font-size: 1rem;
  background-color: transparent;
}

#form {
  display: flex;
  align-self: center;
  flex-direction: column;
  background-color: #D2D2D2;
  width: 100%;
  height: 80%;
  border-radius: 40px;
  padding: 20px;
}

.form-row {
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
  background-color: transparent;
}

.form-row input,
.form-row textarea {
  flex-grow: 1;
  height: 36px;
  background-color: #485059;
  border-radius: 12px;
  padding-left: 20px;
  border: 1px solid #ccc;
}

.form-row textarea {
  height: 20vh;
  margin-bottom: -1.5rem;
}

#name, #product {
  width: 20%;
  margin-right: 1rem;
}

#firstname, #subject {
  width: 20%;
  margin-left: 1rem;
}

.form-row button[type="submit"] {
  align-self: center;
  border-radius: 20px;
  padding: 5px;
  width: 100%;
  background-color: #BF9A84;
  font-weight: bold;
  font-size: 1.5rem;
  color: #ffffff;
  border: none;
  cursor: pointer;
}

.form-row button[type="submit"]:hover {
  background-color: #485059;
}

input::placeholder, textarea::placeholder {
  color: #FFFFFF;
}

@media screen and (max-width: 1024px) {

}

/* Media query voor tablets */
@media screen and (max-width: 1000px) {
  #form-container {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-around;
    align-items: center;
    height: 160vh;
    padding-bottom: 5rem;
  }
  #container-iframe {
    margin: 2rem auto 0;
  }
  #form-kader {
    width: 60vw;
    height: 90vh;
  }
}

/* Media query voor mobiel */
@media screen and (max-width: 480px) {
  #form-container {
    height: 150vh;
  }
  #container-iframe iframe {
    width: 100%;
  }
  #form-kader {
    width: 90vw;
    height: 80vh;
    padding: 0 0.5rem 1rem;
    margin: 10rem auto 0;
  }
  #form {
    background-color: transparent;
    margin-top: 1.5rem;
  }

  h1 {
    margin: 1.5rem 0 1.5rem 1rem;
  }

  p {
    display: none;
  }
}

</style>