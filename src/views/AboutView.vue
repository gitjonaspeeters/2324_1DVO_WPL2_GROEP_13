<template>
  <!-- header -->
  <div id="head-container">
    <div id="head-content">
      <h1>Over Ons</h1>
    </div>
  </div>
  <!-- info content -->
  <div id="info-container">
    <div id="info-content">
      <div class="info-left-image">
        <img src="@/assets/OverOnsImage.png" alt="info image">
      </div>
      <div class="info-content-right">
        <div class="info-text-right">
          <h1>Uw Betrouwbare Partner</h1>
          <p>Comfortmeubel is sinds 1995 gevestigd in Antwerpen. 
          Sindsdien werden meer dan 100.000 klanten succesvol geholpen. 
          Onze klanten vinden gegarandeerd hun keuze uit ons rijk assortiment aan hedendaagse meubelen, interieur artikelen. 
          Door onze rechtstreekse aankoop bij de fabrikanten in binnen- en buitenland, zonder tussenpersonen, wordt een excellente prijs/kwaliteit verhouding gegarandeerd.</p>
          <button>Contact</button>
        </div>
      </div> 
    </div>
  </div>
  <!-- services -->
  <div id="service-container">
      <div id="service-content">
        <!-- service box 1 -->
        <div class="service-box">
          <i class="fa-solid fa-tape"></i>
          <div class="service-box-text">
              <h1>Toonzaal</h1>
              <p>3500 m2</p>
          </div>
        </div>
          <!-- service box 2 -->
          <div class="service-box">
            <i class="fa-solid fa-building-columns"></i>
          <div class="service-box-text">
              <h1>Krediet</h1>
              <p>0%</p>
          </div>
        </div>
          <!-- service box 3 -->
          <div class="service-box">
            <i class="fa-solid fa-square-parking"></i>
          <div class="service-box-text">
              <h1>Gratis</h1>
              <p>Parking</p>
          </div>
        </div>
          <!-- service box 4 -->
          <div class="service-box">
            <i class="fa-solid fa-truck"></i>
          <div class="service-box-text">
              <h1>Gratis</h1>
              <p>Levering</p>
          </div>
        </div>
      </div>
  </div>
  <!-- trust page -->
  <div id="trust-container">
    <div id="trust-content">
      <div class="trust-content-left">
        <div class="trust-text-left">
          <h1>Comfort, Betaalbaar en Betrouwbaar</h1>
          <p>Comfortmeubel is het prominente  establishment in de Belgische meubelwereld.
             Comfortmeubel, hiervoor De  Prijzenkoning, staat al sinds 1995 tot uw dienst. Het inrichten van uw  woonruimte,
              slaapkamer of kantoor? We staan met een team van  interieurspecialisten altijd klaar om ons cliënteel advies op maat te  geven.</p>
        </div>
      </div>
      <div class="trust-image-right">
          <img src="@/assets/Betaalbaar.png" alt="trust image">
      </div>
    </div>
  </div>
  <!-- popup container -->
  <div id="popup-container">
    <div id="popup-content">
      <div class="popup-row">
        <!-- Eerste rij -->
        <div class="popup-box" v-for="(item, index) in popup.slice(0, 4)" :key="index" @click="openPopup(index)">
          <img :src="item.imageUrl" alt="Product Image" class="popup-image">
          <h1 class="popup-title">{{ item.productTitle }}</h1>
        </div>
      </div>
      <div class="popup-row">
        <!-- Tweede rij -->
        <div class="popup-box" v-for="(item, index) in popup.slice(4)" :key="index + 4" @click="openPopup(index + 4)">
          <img :src="item.imageUrl" alt="Product Image" class="popup-image">
          <h1 class="popup-title">{{ item.productTitle }}</h1>
        </div>
      </div>
    </div>
  </div>

  <!-- Popup -->
  <div class="popup-background" v-if="selectedItemIndex !== null" @click.self="closePopup">
    <div class="popup">
      <div v-if=" popup[selectedItemIndex].productTitle === 'Afhalen'">
        <h2>{{ popup[selectedItemIndex].productTitle }}</h2>
        <p>Hier kan je jouw gewenste tekst plaatsen.</p>
      </div>
      <div v-else-if=" popup[selectedItemIndex].productTitle === 'Schade'">
        <h2>{{ popup[selectedItemIndex].productTitle }}</h2>
        <p>SChaaaatss</p>
      </div>
      <div v-else-if=" popup[selectedItemIndex].productTitle === 'Montage'">
        <h2>{{ popup[selectedItemIndex].productTitle }}</h2>
        <p>SChaaaatss</p>
      </div>
      <div v-else-if=" popup[selectedItemIndex].productTitle === 'Verhuur'">
        <h2>{{ popup[selectedItemIndex].productTitle }}</h2>
        <p>SChaaaatss</p>
      </div>
      <div v-else-if=" popup[selectedItemIndex].productTitle === 'Vragen'">
        <h2>{{ popup[selectedItemIndex].productTitle }}</h2>
        <p>SChaaaatss</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      popup: [
        { imageUrl: "/assets/levering.png", productTitle: "Levering"},
        { imageUrl: "/assets/Afhalen.png", productTitle: "Afhalen"},
        { imageUrl: "/assets/Schade.png", productTitle: "Schade"},
        { imageUrl: "/assets/Verhuur.png", productTitle: "Verhuur"},
        { imageUrl: "/assets/Montage.png", productTitle: "Montage"},
        { imageUrl: "/assets/Prijzen.png", productTitle: "Prijzen"},
        { imageUrl: "/assets/Vragen.png", productTitle: "Vragen"},
        { imageUrl: "/assets/Formulieren.png", productTitle: "Formulieren"}
      ],
      selectedItemIndex: null
    };
  },
  methods: {
    openPopup(index) {
      this.selectedItemIndex = index;
    },
    closePopup() {
      this.selectedItemIndex = null;
    }
  }
}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* header */
#head-container{
  width: 100%;
  padding: 15rem 0 0 0;
  background-color: #D9CAC5;
}

#head-content{
  background: #485059;
  padding: 2rem;
  text-align: center;
}

#head-content h1{
  font-size: 2rem;
  color: #ffffff;
  font-family: "Century Gothic", sans-serif;
}
/* info content */
#info-container{
  max-width: 100%;
  background-color: #D9CAC5;
  padding: 6rem 0 4rem 0;
}

#info-content{
  width: 80%;
  margin: 0 auto;
  display: flex;
}

.info-left-image{
  width: 50%;
}

.info-left-image img{
  width: 100%;
}
.info-content-right{
  display: flex;
  flex-direction: column;
  width: 50%;
}

.info-text-right{
  background-color: #485059;
  color: #ffffff;
  padding: 3rem 5rem 3rem 3rem;
  border-radius: 0 3rem 3rem 0;


}

.info-text-right h1{
  font-family: Georgia, sans-serif;
  padding-bottom: 0.5rem;
  font-size: 2.8rem;
}

.info-text-right p{
  font-family: "Century Gothic", sans-serif;
  padding-bottom: 0.5rem;
  font-size: 1rem;
}

.info-text-right button{
  padding: 0.1rem 0.5rem 0.1rem 0.5rem;
  font-size: 1.2rem;
  border-radius: 1.8rem;
  color: #ffffff;
  background-color: #F2B66D;
  border: none;
  font-family: "Century Gothic", sans-serif;
}

/* service content */
#service-container{
  background-color: #BF9A84;
  max-width: 100%;
}

#service-content{
  width: 80%;
  margin: 0 auto;
  display: flex;
  padding: 3rem 0;
}

.service-box{
  display: flex;
  gap: 1rem;
  align-items: center;
  background-color: #F2B66D;
  width: calc(100% / 4 - 1rem);
  margin-right: 3rem;
  padding: 1rem;
  border-radius: 1.8rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
}

.service-box i{
  font-size: 3.5rem;
  color: #485059;
}

.service-box:last-child {
  margin-right: 0;
}

.service-box-text{
  background-color: #ffffff;
  color: #485059;
  padding: 1rem;
  border-radius: 1.8rem;
  width: 100%;
  text-align: center;
  font-family: "Century Gothic", sans-serif;
}
.service-box-text h1{
  font-size: 1.5rem;
  font-weight: bold;
}

.service-box-text p{
  font-size: 1rem;
}

/* trust content */
#trust-container{
  max-width: 100%;
  background-color: #D9CAC5;
  padding-top: 6rem;
}

#trust-content{
  width: 80%;
  margin: 0 auto;
  display: flex;
}

.trust-content-left{
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: end;
}

.trust-text-left{
  background-color: #485059;
  color: #ffffff;
  padding: 3rem 3rem 3rem 3rem  5rem ;
  border-radius: 3rem 0 0 3rem;
}

.trust-text-left h1{
  font-family: Georgia, sans-serif;
  padding-bottom: 0.5rem;
  font-size: 2.8rem;

}

.trust-text-left p{
  font-family: "Century Gothic", sans-serif;
  padding-bottom: 0.5rem;
  font-size: 1rem;
}


.trust-image-right{
  width: 50%;
}

.trust-image-right img{
  width: 100%;
}

/* popup-container */
#popup-container{
  max-width: 100%;
  background-color: #D9CAC5;
  padding: 6rem 0 4rem 0;
}

#popup-content{
  margin: 0 auto;
  width: 80%;
}

.popup-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.popup-box {
  width: 22%;
  text-align: center;
  background-color: #485059; 
  padding: 0  0 1rem 0;
  border-radius: 1rem;
  cursor: pointer;
}

.popup-image {
  width: 100%;
  max-height: 200px; 
  object-fit: cover;
  margin-bottom: 1rem;
  border-radius: 1rem 1rem 0 0;

}

.popup-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff; 
  font-family: "Century Gothic", sans-serif;
}

.popup-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup {
  background-color: #F2B66D;
  padding: 20px;
  border-radius: 10px;
}

.popup h2 {
  margin-top: 0;
}

.popup p {
  margin-bottom: 20px;
}
</style>
