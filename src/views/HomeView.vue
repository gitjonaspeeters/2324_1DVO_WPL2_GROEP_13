<template>
  <div class="main-banner" id="main-banner">
    <div class="imgban" id="imgban4"></div>
    <div class="imgban" id="imgban3"></div>
    <div class="imgban" id="imgban2"></div>
    <div class="imgban" id="imgban1"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerStatus: 0, // Start from first image (index 0)
      bannerTimer: 4000,
      images: [
        { id: "imgban1",},
        { id: "imgban2", imageUrl: "../assets/Untitled-2.png" },
        { id: "imgban3", imageUrl: "../assets/Untitled-3.png" },
        { id: "imgban4", imageUrl: "../assets/Untitled-4.png" },
      ],
    };
  },
  computed: {
    currentImage() {
      return this.images[this.bannerStatus];
    },
  },
  mounted() {
    this.intervalId = setInterval(this.advanceBanner, this.bannerTimer);
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  },
  methods: {
    advanceBanner() {
      this.bannerStatus = (this.bannerStatus + 1) % this.images.length; // Loop through images
    },
  },
};
</script>

<style scoped>
*{
  margin: 0px;
  padding: 0px;
}
body{
  background-color: lightgoldenrodyellow;
}
.main-banner{
  margin: 0 auto;
  width: 100%;
  height: 508px;
  background-color: white;
  overflow: hidden;
  position: relative;
}
.main-banner .imgban{
  width: 100%;
  position: absolute;
  transition: all ease-in-out 500ms;
  -webkit-transition: all ease-in-out 500ms;
  -moz-transition: all ease-in-out 500ms;
  -o-transition: all ease-in-out 500ms;
}
#main-banner{
  display: flex;
  height: 508px;
  background-color: gray;
}
.main-banner #imgban1{
  background-image: url(../assets/Untitled-1.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.main-banner #imgban2{
  background-image: url(../assets/Untitled-2.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.main-banner #imgban3{
  background-image: url(./../assets/Untitled-3.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.main-banner #imgban4{
  background-image: url(./../assets/Untitled-4.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
