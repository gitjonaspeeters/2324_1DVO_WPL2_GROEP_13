<template>
  <Carousel class="horizontal-carousel">
    <template #slides>
      <Slide v-for="item in items" :key="item">
        <div>
          <img class="carousel__item" :src="item" alt="een foto">
        </div>
      </Slide>
    </template>
    <template #addons>
      <Navigation button-type="button" class="custom-nav-button">
        <template #prev>
          <div class="prev-btn">
            <img src="@/assets/leftbtn.png" alt="arrow-left" id="backbtn">
          </div>
        </template>
        <template #next>
          <div class="next-btn">
            <img src="@/assets/rightbtn.png" alt="arrow-right" id="nextbtn">
          </div>
        </template>
      </Navigation>
    </template>
  </Carousel>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import productsData from '@/product.json';

import 'vue3-carousel/dist/carousel.css'
import reviewsData from "@/data/reviews.json";

export default defineComponent({
  name: 'Basic',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  setup() {
    const items = ref([
      "src/assets/Banner1.png",
      "src/assets/Banner1.png",
      "src/assets/Banner1.png",
      "src/assets/Banner1.png",
      "src/assets/Banner1.png",
      "src/assets/Banner1.png",
      // Add more image URLs as needed
    ]);

    return {
      items,
      productsData: productsData,
      reviewsData: reviewsData,
    };
  },
  mounted() {
    if (window.innerWidth <= 1000) {
      const prevBtn = document.querySelector('.prev-btn');
      const nextBtn = document.querySelector('.next-btn');
      prevBtn.disabled = true;
      nextBtn.disabled = true;
    }
  },
})
</script>

<style>
carousel {
  width: 95%;
}
.carousel__item {
  min-height: 500px;
  width: 500px;
  border-radius: 8px;
}

.carousel__slide {
  padding: 50px;
}

</style>