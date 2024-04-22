<template>
  <div>

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
</template>

<script>
export default {
  data() {
    return {
      currentSlideIndex: 0,
      slides: [
        { imageUrl: "../../assets/Untitled-1.png", headTitle: "Nieuwe collectie", headText: "Probeer nu onze nieuwe winter collectie!", headButton: "Bekijk"},
        { imageUrl: "../../assets/Untitled-2.png", headTitle: "Nieuwe collectie" , headText: "Probeer nu onze nieuwe winter collectie!", headButton: "Bekijk"},
        { imageUrl: "../../assets/Untitled-3.png", headTitle: "Nieuwe collectie", headText: "Probeer nu onze nieuwe winter collectie!", headButton: "Bekijk" },
      ]
    };
  },
  mounted() {
    this.showSlides();
  },
  methods: {
    showSlides() {
      setInterval(() => {
        this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
      }, 4000);
    },
    currentSlide(index) {
      this.currentSlideIndex = index;
    }
  }
};
</script>


<style scoped>


img {
  vertical-align: middle;
}

.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
}


.dot {
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
  position: relative;
  bottom: 14rem;
}

.active {
  background-color: #717171;
}
/* content head */
.head-content{
    position: relative;
    bottom: 17rem;
    left: 7rem;
    text-align: left;
    font-family: Georgia, sans-serif;
    max-width: 22rem;
}
.head-content h1{
    font-size: 3rem;
}
.head-content h2{
  font-size: 1.8rem;

  margin-bottom: 0.5rem;
  margin-top: -0.5rem;
}
.head-content button{
  padding: 0.3rem 1.3rem;
  font-size: 1.8rem;
  border-radius: 1.8rem;
}
</style>
