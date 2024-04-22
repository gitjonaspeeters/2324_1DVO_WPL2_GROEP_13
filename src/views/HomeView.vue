<template>
  <div>

    <div v-for="(slide, index) in slides" :key="index" v-show="index === currentSlideIndex">
      <img :src="slide.imageUrl" style="width:100%">
  
      <div style="text-align:center">
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
        { imageUrl: "/src/assets/Untitled-1.png", caption: "Caption Text" },
        { imageUrl: "/src/assets/Untitled-2.png", caption: "Caption Two" },
        { imageUrl: "/src/assets/Untitled-3.png", caption: "Caption Three" },
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
body {
  font-family: Verdana, sans-serif;
}

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
}

.active {
  background-color: #717171;
}

</style>
