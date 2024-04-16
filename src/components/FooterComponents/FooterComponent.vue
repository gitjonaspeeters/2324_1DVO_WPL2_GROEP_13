<script>

export default {
  name: 'footer',
};
</script>

<template>
  <div class="footer">
    <div class="iconContainer">
      <a href="#"><i class="fa-solid fa-circle-chevron-up" id="firstIcon"></i></a>
    </div>
    <div class="textBox">
      <p><a href="">Algemene voorwaarden</a> / <a href="">Cookies</a> / <a href="">Privacybeleid</a></p>
      <p>Copyright 2024 ©</p>
    </div>
    <div id="paymentIcons">
      <div class="upperIcons">
        <div class="iconContainer">
          <i class="fa-brands fa-cc-visa"></i>
        </div>
        <div class="iconContainer">
          <i class="fa-brands fa-cc-mastercard"></i>
        </div>
      </div>
      <div class="lowerIcons">
        <div class="iconContainer">
          <i class="fa-brands fa-cc-paypal"></i>
        </div>
        <div class="iconContainer">
          <i class="fa-solid fa-credit-card"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
template {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Century Gothic", sans-serif;
}

.footer {
  height: 120px;
  display: flex;
  background-color: #d9d9d9;
  color: #000;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  margin-top: calc(100% - 120px);
}
.textBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
}
#paymentIcons {
  display: flex;
  margin-right: 0.25rem;
}
.iconContainer {
  margin: 0.25rem;
}
#firstIcon{
  margin-left: 1rem;
}
.iconContainer i {
  font-size: 50px;
}
.textBox a {
  text-decoration: underline;
  color: #000;
}
a {
  color: #000;
}
</style>