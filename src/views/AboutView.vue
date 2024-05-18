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
          <!-- <div class="popup-box" v-for="(item, index) in popup.slice(0, 4)" :key="index" @click="openPopup(index)" v-if="item.productTitle !== 'Prijzen' && item.productTitle !== 'Vragen' && item.productTitle !== 'Formulieren'"> -->
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
    <div class="popup-container">
      <div class="popup-afhalen-content" v-if=" popup[selectedItemIndex].productTitle === 'Afhalen'">
        <h1>Openingsuren {{ popup[selectedItemIndex].productTitle }}</h1>
        <div class="popup-afhalen-list">
          <ul>
            <li>Zondag: Gesloten</li>
            <li>Maandag: 9u30 tot 16u30</li>
            <li>Dinsdag: Gesloten</li>
            <li>Woensdag: 9u30 tot 16u30</li>
          </ul>   
          <ul>
            <li>Donderdag: 9u30 tot 16u30</li>
            <li>Vrijdag: 9u30 tot 16u30</li>
            <li>Zaterdag: 9u30 tot 16u30</li>
          </ul>
      </div>
      </div>
      <div class="popup-schade-content"  v-else-if=" popup[selectedItemIndex].productTitle === 'Schade'">
        <h1>Gelieve volgende zaken toe te voegen</h1>
        <p>Indien aangekochte goederen schade vertonen dient u een mail te versturen naar
info@comfortmeubel.be</p>
          <ul>
            <li>Bestelbonnummer</li>
            <li>Naam en voornaam</li>
            <li>Adres vermeld op uw bestelbon</li>
            <li>Telefoonnummer</li>
            <li>Omschrijving van de schade met een duidelijke vermelding van welk onderdeel er precies is beschadigd</li>
            <li>2 of 3 foto’s:</li>
          </ul>
          <h2>Een foto van het geheel en een foto van dichtbij die de schade duidelijk aantoont</h2>
      </div>
      <div class="popup-montage-content"  v-else-if=" popup[selectedItemIndex].productTitle === 'Montage'">
        <h1>{{ popup[selectedItemIndex].productTitle }}</h1>
        <p>Comfortmeubel biedt u de extra service montage aan. Wij werken met een team van ervaren monteurs die pragmatisch en efficiënt te werk gaan. Indien u een montage wenst dient u dit duidelijk te melden in de winkel. Bij online aankopen bieden we geen montage opties, we bieden dan enkel levering. </p>
        <h2>De montagekost is afhankelijk van het te monteren product en wordt duidelijk en
ondubbelzinnig meegedeeld.</h2>
      </div>
      <div class="popup-verhuur-content" v-else-if=" popup[selectedItemIndex].productTitle === 'Verhuur'">
        <h1>Ladderlift</h1>
        <p>Comfortmeubel biedt u de extra service ladderlift aan. 
          Wanneer u hiervoor kiest, organiseren wij de ladderliftdienst.
           Tijdens de verkoop in de winkel moet u dit expliciet vermelden. 
           Bij online aankopen bieden we geen extra service ladderlift aan. 
           Bij online aankopen kunt u contact opnemen met een ladderliftdienst in uw regio.
            Bv een ladderlift tot en met de 5de verdieping in Antwerpen en deelgemeentes komt op €85, tot 9e verdiep € 125, andere op aanvraag.
            Buiten rand tot 6e verdiep € 150.</p>
        <p>Heel belangrijk is dat er zeker 10 meter opening beschikbaar is voor de deur.
           Hiervoor moet u bij uw gemeente of stad op tijd parkeerborden aanvragen.
            Indien er geen voldoende plaats beschikbaar is en wij de levering niet kunnen uitvoeren gaat de leverdienst verder.
             Een tweede ladderlift komt dan met een extra kost van €85 bovenop de nieuwe ladderliftkosten.</p>
        <p>De links van enkele regio’s waarop u parkeerborden kunt aanvragen, kunt u hieronder vinden:</p>
        <p><a href="https://www.antwerpen.be/nl/info/5655c30fb2a8a79f428b45e8/aanvraag-tijdelijk-parkeerverbod">Antwerpen</a></p>    
        <p><a href="https://www.mechelen.be/inname-openbaar-domein">Mechelen</a></p>
      </div>
      <div class="popup-leveringen-content" v-else-if=" popup[selectedItemIndex].productTitle === 'Levering'">
        <h1>Levering</h1>
        <p>Een levering is enorm gemakkelijk als iedereen zich goed heeft voorbereid. U kunt hieronder een checklist vinden die een vlotte levering garandeert!</p>
        <ul>
          <li>We informeren je via e-mail en bellen wanneer jouw bestelling binnen is. Indien we u niet kunnen bereiken,
             laten we u een bericht om een leveringsafspraak te maken via 03 235 78 74.</li>
          <li>Standaardlevering is een levering tot aan de gelijkvloers, tenzij anders vermeld op de bestelbon. Bij een standaardlevering worden de pakjes afgezet op de gelijkvloers zonder uitpakken of monteren. 
            Vanaf 1000 EUR leveren we gratis in de stad Antwerpen. Buiten Antwerpen leveren ook maar daar rekenen we extra voor aan.</li>
          <li>
            Indien er gemonteerd moet worden, wordt dit tijdens het bestellen besproken en genoteerd op de bestelbon. De prijs is afhankelijk van de gekochte items, we monteren niet per uur.
          </li>  
          <li>
            Is er nood aan een ladderlift? Ook dit moet vermeld staan op uw bestelbon. Indien u een ladderlift via Comfortmeubel vraagt, dan moet u op voorhand een vergunning aanvragen bij de gemeente. Deze vergunning zorgt voor een parkeerverbod voor uw woning, zodat de ladderlift met gemak geïnstalleerd kan worden voor uw woning. Opgelet! Indien er geen parkeerplaats voorzien is,
             kunnen we niet leveren. Dat betekent dat er een bijkomende kost zal komen, deze kost vertaald zich in de werktijd voor het laden en lossen.
          </li>
          <li>
            De betaling gebeurt steeds bij levering of tijdig vooraf.  U kan bij de levering betalen met een bankcheque of cash. 
            Indien u voor de levering betaalt per overschrijving, dan vragen we u om dat minstens 5 werkdagen voor de levering te doen. Vermeld bij uw betaling de gestructureerde mededeling rechts onderaan op uw verkoopovereenkomst. Print uw betalingsbewijs af om te tonen aan de monteur. Als je de dag voor levering in onze winkel komt betalen, gelieve dan uw betalingsbewijs van onze receptie bij te houden en te tonen aan de monteur.
          </li>
          <li>
            Afval ten gevolge van de montage is op onze rekening! We nemen al het afval mee, dan kunt u meteen genieten van uw aankopen. Maar we nemen niet uw oud meubilair mee, dat is dan weer uw verantwoordelijkheid.
          </li>
          <li>
            Een trap naar boven? Voor een bijslag van 40 euro, dragen we kleine meubels via de trap. Vergeet niet dat onze monteurs veiligheidsschoenen aanhebben.
          </li>
          <li>
            Een leveringsafspraak kan geannuleerd of verplaatst worden ten minste 5 werkdagen voor de afgesproken leveringsdatum. Indien er toch later afgebeld wordt, of bij afwezigheid op de dag zelf, zijn we genoodzaakt annulatie kosten aan te rekenen bij een volgende afspraak.
          </li>
          <li>
            Uur van levering: we kunnen nooit een exact levering uur afspreken gedurende de dag. De levering zal steeds plaatsvinden tussen 08u00 en 16u00. Onze chauffeur zal altijd een half uur voor aankomst telefonisch contact opnemen. We verwachten wel dat je thuis bent wanneer onze chauffeur zich aanmeldt.
          </li>
        </ul>
        <p>Geniet van uw aankopen!</p>
      </div>
      <div class="popup-prijzen-content" v-else-if=" popup[selectedItemIndex].productTitle === 'Prijzen'">
        <h1>{{ popup[selectedItemIndex].productTitle }}</h1>
        <div class="social-icons">
          <a href="#"><i class="fa-brands fa-instagram"></i></a>
          <a href="#"><i class="fa-brands fa-facebook"></i></a>
          <a href="#"><i class="fa-brands fa-tiktok"></i></a>
          <a href="#" ><i class="fa-brands fa-pinterest"></i></a>
        </div>
        
      </div>
      <div class="popup-vragen-content" v-else-if=" popup[selectedItemIndex].productTitle === 'Vragen'">
        <h1>{{ popup[selectedItemIndex].productTitle }}</h1>
        <input type="text" id="search" name="search" placeholder="Zoeken">
      </div>
      <div class="popup-formulieren-content" v-else-if=" popup[selectedItemIndex].productTitle === 'Formulieren'">
        <h1>{{ popup[selectedItemIndex].productTitle }}</h1>
        <p>Algemene formulier:</p>
        <p><router-link to="/form">hier.</router-link></p>
        
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
  padding: 3rem 3rem 3rem  5rem ;
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

.popup-box {
    transition: transform 0.3s ease;
}

.popup-box:hover {
  background-color: #F2B66D;
  transform: translateY(-8px);
  transition: transform 0.3s ease, background-color 0.3s ease;
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

.popup h2 {
  margin-top: 0;
}

.popup p {
  margin-bottom: 20px;
}

/* pop ups */
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

.popup-container {
  background-color: #F2B66D;
  padding: 1.5rem 3rem;
  border-radius: 10px;
  width: 40rem;
}

.popup-container h1{
  color: #ffffff;
  font-family: "Century Gothic", sans-serif;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

/* Afhalen */
.popup-afhalen-list{
  display: flex;
  margin-left: 1.5rem;
  gap: 2rem;
  font-family: "Century Gothic", sans-serif;
}

.popup-afhalen-list ul li{
  color: #485059;
  font-size: 1rem;
}

/* schaden */
.popup-schade-content{
  color: #485059;
  font-family: "Century Gothic", sans-serif;
}

.popup-schade-content p{
  margin-bottom: 1.5rem;
  font-size: 1rem;
}

.popup-schade-content ul{
  margin-left: 1.5rem;
  font-size: 1rem;
}

.popup-schade-content h2{
  font-size: 1rem;
  margin-top: 0.5rem;
  font-weight: bold;
  margin-left: 1.5rem;
}

/* Montage */
.popup-montage-content{
  color: #485059;
  font-family: "Century Gothic", sans-serif;
}

.popup-montage-content p{
  font-size: 1rem;
}

.popup-montage-content h2{
  font-size: 1rem;
  margin-top: 1rem;
  font-weight: bold;
}

/* verhuur */
.popup-verhuur-content{
  color: #485059;
  font-family: "Century Gothic", sans-serif;
  overflow-y: scroll;
  height: 25rem;
}

.popup-verhuur-content p{
  margin-bottom: 1rem;
  font-size: 1rem;
}

.popup-verhuur-content p a{
  color: #000000;
  font-weight: bold;
}

/* levering content */
.popup-leveringen-content{
  color: #485059;
  font-family: "Century Gothic", sans-serif;
  overflow-y: scroll;
  height: 25rem;
}

.popup-leveringen-content ul{
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
}

/* prijzen content */
.popup-prijzen-content{
  text-align: center;
  color: #485059;
  font-family: "Century Gothic", sans-serif;
}

.social-icons{
  display: flex;
  justify-content: center;
  gap: 0.8rem;
}

.social-icons a{
  color: #485059;
  font-size: 1.5rem;
  transition: transform 0.3s ease;
}

.social-icons a:hover{
  transform: translateY(-5px);
  color: #ffffff;
}
/* vragen */

.popup-vragen-content{
  color: #485059;
  font-family: "Century Gothic", sans-serif;
}

#search{
  background-color: #D9CAC5;
  border-radius: 20px;
  height: 2rem;
  border: none;
  padding-left: 1rem;
}

/* formulieren */
.popup-formulieren-content{
  color: #485059;
  font-family: "Century Gothic", sans-serif;
}

.popup-formulieren-content p a{
  font-weight: bold;
  color: #485059;
  font-size: 1.2rem;
}

/* media querys */
@media screen and (max-width: 1584px) {
  .info-text-right h1, .trust-text-left h1{
    font-size: 2rem;
  }

  .info-text-right p, .trust-text-left p{
    font-size: 0.9rem;
  }

  .info-text-right button{
    font-size: 1rem;
  }

  .info-text-right{
    padding: 2rem 4rem 2rem 2rem;
  }

  .trust-text-left{
    padding: 2rem 2rem 2rem 4rem;
  }
}

@media screen and (max-width: 1382px){
  /* head */
  #head-container{
    padding: 8rem 0 0 0;
  }

  /* info content */
  #info-content{
    width: 80%;
    flex-direction: column;
  }

  .info-left-image{
  width: 100%;
}

.info-content-right{
  width: 100%;
}

.info-text-right{
  border-radius: 0%;
}

.info-text-right h1, .trust-text-left h1{
    font-size: 2.2rem;
  }

  .info-text-right p, .trust-text-left p{
    font-size: 1.2rem;
  }

  .info-text-right button{
    font-size: 1.2rem;
  }

/* service content */
#service-container{
  background-color: #D9CAC5;
}

#service-content{
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 6rem 0;
  border-radius: 3rem;
  background-color: #BF9A84;
}

.service-box{
 margin-bottom: 2rem;
  margin-right: 0;
}


.service-box:last-child {
  margin-right: 0;
  margin-bottom: 0;
}

  /* trust content */
  #trust-content{
    flex-direction: column;
 
  }

  .trust-content-left{
    width: 100%;
  }
  
  .trust-image-right{
    width: 100%;
  }

  .trust-text-left{
    border-radius: 0%;
  }

  .trust-text-left{
    padding: 2rem 4rem 2rem 2rem;
  }

  /* popup-container */
#popup-container{
  max-width: 100%;
}

#popup-content{
  margin: 0 auto;
  width: 80%;
}

.popup-row {
  flex-direction: column;
  margin-bottom: 0;
}

.popup-box {
  width: 85%;
  margin: 0 auto 4rem auto; 
}

.popup-image {
  width: 100%;
  max-height: 40rem; 
}



}

@media screen and (max-width: 1000px) {
  .service-box{
  width: 60%;
  }

  .popup-container{
    width: 20rem;
    padding: 1.5rem 1rem;
  }
}

@media screen and (max-width: 600px){

}
</style>
