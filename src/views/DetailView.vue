<template>
  <div id="container">
    <div id="container-upper">
      <div id="container-left-upper">
        <p>Home/Categorieen/zetels/</p>
        <vue-horizontal :buttons="true" class="horizontal">
          <div v-for="item in items" :key="item">
            <img :src="item" alt="een foto">
          </div>
        </vue-horizontal>
      </div>
      <div id="container-right-upper">
        <h1>Hoekzetel Lima</h1>
        <p>kleuren:</p>
        <div id="kleuren">
          <div id="kleur1"></div>
          <div id="kleur2"></div>
          <div id="kleur3"></div>
          <div id="kleur4"></div>
        </div>
        <p id="price">€1.769,00</p>
        <input type="number" min="0" max="10">
        <div>Bestellen</div>
        <div>AR</div>
        <i></i>
        <p class="describtion">Beschrijving:</p>
        <p class="meusures">Afmetingen: <span>1OOTL110+3BB+H+OTTR Stof 670 KS671</span></p>
        <p>Ontdek deze LIMA hoekzetel die veel zitplaatsen biedt. Bovendien biedt LIMA een
          ongekend zitcomfort en zachtheid dankzij zijn zachte stoffen bekleding. Verkrijgbaar in verschillende
          samenstellingen.</p>
      </div>
    </div>
    <div id="mid-container">
      <vue-horizontal :buttons="true" class="container-mid-hor">
        <div v-for="item in items" :key="item">
          <img :src="item" alt="een foto">
        </div>
      </vue-horizontal>
    </div>
    <div id="container-bottem">
      <div id="container-bottem-left">onder left</div>
      <div id="container-bottem-right">onder rechts</div>
    </div>
  </div>
</template>
<script>
import VueHorizontal from 'vue-horizontal';
import {FontAwesomeIcon} from 'fontawesome';

export default {
  components:
      {VueHorizontal, FontAwesomeIcon},
  data() {
    return {
      items: [
        "src/assets/Banner1.png",
        "src/assets/Banner1.png",
        "src/assets/Banner1.png",
        "src/assets/Banner1.png",
        "src/assets/Banner1.png",
        "src/assets/Banner1.png",
      ]
    }
  },
}
</script>

<style scoped>

* {
  background-color: #D9CAC5;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Century Gothic", sans-serif;
}

#container {
  display: flex;
  flex-direction: column;
}

#container-upper {
  display: flex;
  flex-direction: row;
}


#container-right-upper {
  width: 50vw;
  margin: 10rem 0rem 0rem 0rem;
}

#container-left-upper {
  width: 50vw;
  margin: 10rem 10rem 15rem 4rem;
}

#container-bottem {
  display: flex;
  flex-direction: row;
}


.horizontal img {
  object-fit: contain;
  border-radius: 15px;
}

#kleuren {
  display: flex;
}

#kleur1 {
  width: 2rem;
  height: 2rem;
  border-radius: 50px;
  background-color: red;
  margin: 0 0.5rem;
}

#kleur2 {
  width: 2rem;
  height: 2rem;
  border-radius: 50px;
  background-color: blue;
  margin: 0 0.5rem 0 0.5rem;
}

#kleur3 {
  width: 2rem;
  height: 2rem;
  border-radius: 50px;
  background-color: yellow;
  margin: 0 0.5rem 0 0.5rem;
}

#kleur4 {
  width: 2rem;
  height: 2rem;
  border-radius: 50px;
  background-color: purple;
  margin: 0 0.5rem;
}

.container-mid-hor img{
  width: 100%;
}
.container-mid-hor {
  margin: 0 1rem 10rem 1rem;
  width: calc(100% / 3);
}
</style>