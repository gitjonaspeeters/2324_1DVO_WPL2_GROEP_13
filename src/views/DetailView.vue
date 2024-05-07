<template>
  <div id="container">
    <div id="container-upper">
      <div id="container-left-upper">
        <p>Home/Categorieen/zetels/</p>
          <vue-horizontal responsive :buttons="true" class="horizontal">
            <template v-slot:btn-next>
              <div class="replaced-btn-next">
                <div>
                  <i class="fa-solid fa-circle-chevron-right"></i>
                </div>
              </div>
            </template>
            <template v-slot:btn-prev>
              <div class="replaced-btn-prev">
                <div>
                  <i class="fa-solid fa-circle-chevron-left"></i>
                </div>
              </div>
            </template>
            <section v-for="item in items" :key="item.title">
              <img :src="item.content" alt="Image description" />
            </section>
          </vue-horizontal>
      </div>
      <div id="container-right-upper">
        <h1>Hoekzetel Lima</h1>
        <p>kleuren:</p>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <p id="price">€1.769,00</p>
        <input type="number" min="0" max="10">
        <div>Bestellen</div>
        <div>AR</div>
        <i></i>
        <p class="describtion">Beschrijving:</p>
        <p class="meusures">Afmetingen: <span>1OOTL110+3BB+H+OTTR Stof 670 KS671</span></p>
        <p>Ontdek deze LIMA hoekzetel die veel zitplaatsen biedt. Bovendien biedt LIMA een ongekend zitcomfort en zachtheid dankzij zijn zachte stoffen bekleding. Verkrijgbaar in verschillende samenstellingen.</p>
      </div>
    </div>
    <div id="mid-container">
      <div v-for="(slide, index) in slides" :key="index" v-show="index === currentSlideIndex">
        <img :src="slide.imageUrl" style="width:100%">

        <div style="text-align:center">
          <div class="head-content">
            <h1>{{ slide.headTitle }}</h1>
            <h2>{{ slide.headText }}</h2>
            <button>{{ slide.headButton }}</button>
          </div>
          <span class="dot" v-for="(slide, index) in slides" :key="index" @click="currentSlide(index)"
                :class="{ 'active': index === currentSlideIndex }"></span>
        </div>
      </div>
    </div>
    <div id="container-bottem">
      <div id="container-bottem-left">onder left</div>
      <div id="container-bottem-right">onder rechts</div>
    </div>
  </div>
</template>
<script>
import VueHorizontal from 'vue-horizontal';
import { FontAwesomeIcon } from 'fontawesome';
export default {
  components:
      {VueHorizontal, FontAwesomeIcon},
  data() {
    return {
      items: [
        { content: 'src/assets/55-22.png' },
        { content: 'src/assets/55-22.png' },
        { content: 'src/assets/55-22.png' },
        { content: 'src/assets/55-22.png' },
        { content: 'src/assets/55-22.png' },
        { content: 'src/assets/55-22.png' },
        { content: 'src/assets/55-22.png' },
      ]}
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
#container-bottem {
  display: flex;
  flex-direction: row;
}

section {
  width: 80%;
  height: 100%;
}
.horizontal {
  height: calc(100% + 10px);
  overflow-y: auto;
  scrollbar-width: none;
}

</style>