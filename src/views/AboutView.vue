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
        <img src="@/assets/OverOnsImage.png" alt="afbeelding home pagina">
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
          
        </div>
      </div>
      <div class="trust-image-right">
          <img src="">
      </div>
    </div>
  </div>
</template>
<script>

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
  background-color: #ffffff;
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
  padding: 1rem 5rem 1rem 1rem;
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
  background-color: #A67C63;
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
</style>
