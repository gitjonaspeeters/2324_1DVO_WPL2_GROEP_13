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
})
</script>

<style scoped>
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

@media screen and (max-width: 1000px) {
  carousel {
    width: 100%;
  }
  .carousel__item {
    min-height: 15rem;
    width: 15rem;
  }
}

@media screen and (max-width: 480px) {
  carousel {
    width: 100%;
  }
  .prev-btn {
    display: none;
  }
  .next-btn {
    display: none;
  }
  .carousel__slide {
    background-color: #485059;
    height: 9rem;
  }
  .carousel__item {
    min-height: 8rem;
    width: 8rem;
  }
}

</style>