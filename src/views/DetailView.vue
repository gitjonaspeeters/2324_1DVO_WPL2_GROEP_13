<template>
  <div id="container">
    <div id="container-upper">
      <div id="container-left-upper">

        <p>Home/Categorieen/zetels/</p>

        <div class="fotorama">
          <div v-for="(image, index) in product.Images" :key="index">
            <img :src="image" alt="Product image">
          </div>
        </div>

      </div>
      <div id="container-right-upper">
        <h1>{{ product.name }}</h1>
        <p>ID: {{ currentProductIndex }}</p>

        <p id="text-kleur">kleuren:</p>
        <div id="kleuren">
          <div class="kleur" v-for="color in colors" :key="color" :style="{ backgroundColor: color }"></div>
        </div>
        <div id="flex">
          <p id="price">{{ product.Price.Low }}</p>
          <input type="number" min="0" max="10" v-model="quantity">
          <button id="order" @click="addToCart">Bestellen</button>
          <button id="AR" @click="showQr">AR</button>
        </div>
        <i class="fa-regular fa-heart" style="color: #ffffff;"></i>
        <p class="describtion">Beschrijving: </p>
        <p class="meusurements">Afmetingen: <span>{{ product.Measurement }}</span></p>
        <p id="describtion">{{ product.Description }}</p>
      </div>
    </div>
    <div id="mid-container">
      <h3>Misschien ben je ook geintresseerd in dit?</h3>
      <CarouselComponent :items-to-show="3"/>
    </div>
    <div id="container-bottem">
      <div id="container-bottem-left">
        <h2>Reviews</h2>
        <div id="reviews">
          <div class="icons">
            <i v-for="star in 5" :key="star" class="fa-regular fa-star fa-rotate-180" style="color: #F2B66D;"></i>
          </div>
          <p>{{ averageStars.toFixed(1) }} ({{ totalReviews }} reviews)</p>
        </div>
        <div id="review">
          <h2>Beoordeling</h2>
          <div class="rating">
            <div>5 <span>sterren</span></div>
            <div>
              <div :style="{ width: (averageStars / 5) * 100 + '%' }"></div>
            </div>
            <p>{{ fiveStarReviews.length }}<span>reviews</span></p>
          </div>
          <div class="rating">
            <div>4 <span>sterren</span></div>
            <div>
              <div :style="{ width: (averageStars4 / 5) * 100 + '%' }"></div>
            </div>
            <p>{{ fourStarReviews.length }}<span>reviews</span></p>
          </div>
          <div class="rating">
            <div>3 <span>sterren</span></div>
            <div>
              <div :style="{ width: (averageStars3 / 5) * 100 + '%' }"></div>
            </div>
            <p>{{ threeStarReviews.length }}<span>reviews</span></p>
          </div>
          <div class="rating">
            <div>2 <span>sterren</span></div>
            <div>
              <div :style="{ width: (averageStars2 / 5) * 100 + '%' }"></div>
            </div>
            <p>{{ twoStarReviews.length }}<span>reviews</span></p>
          </div>
          <div class="rating">
            <div>1 <span>sterren</span></div>
            <div>
              <div :style="{ width: (averageStars1 / 5) * 100 + '%' }"></div>
            </div>
            <p>{{ oneStarReviews.length }}<span>reviews</span></p>
          </div>
        </div>
        <div id="review-per-part">
          <h2>Beoordeling per onderdeel</h2>
          <div class="part">
            <p>Zitgemak</p>
            <div>
              <template v-for="star in 5">
                <i v-if="star <= averageRatings.zitgemak" class="fa-regular fa-star fa-rotate-180"
                  style="color: #F2B66D;"></i>
                <i v-else class="fa-regular fa-star fa-rotate-180" style="color: #FFFFFF;"></i>
              </template>
            </div>
            <p>{{ averageRatings.zitgemak.toFixed(1) }}</p>
          </div>
          <div class="part">
            <p>Liggemak</p>
            <div>
              <template v-for="star in 5">
                <i v-if="star <= averageRatings.liggemak" class="fa-regular fa-star fa-rotate-180"
                  style="color: #F2B66D;"></i>
                <i v-else class="fa-regular fa-star fa-rotate-180" style="color: #FFFFFF;"></i>
              </template>
            </div>
            <p>{{ averageRatings.liggemak.toFixed(1) }}</p>
          </div>
          <div class="part">
            <p>Kwaliteit</p>
            <div>
              <template v-for="star in 5">
                <i v-if="star <= averageRatings.kwaliteit" class="fa-regular fa-star fa-rotate-180"
                  style="color: #F2B66D;"></i>
                <i v-else class="fa-regular fa-star fa-rotate-180" style="color: #FFFFFF;"></i>
              </template>
            </div>
            <p>{{ averageRatings.kwaliteit.toFixed(1) }}</p>
          </div>
          <div class="part">
            <p>Montage</p>
            <div>
              <template v-for="star in 5">
                <i v-if="star <= averageRatings.montage" class="fa-regular fa-star fa-rotate-180"
                  style="color: #F2B66D;"></i>
                <i v-else class="fa-regular fa-star fa-rotate-180" style="color: #FFFFFF;"></i>
              </template>
            </div>
            <p>{{ averageRatings.montage.toFixed(1) }}</p>
          </div>
          
          <div class="part">
            <p>Trendy</p>
            <div>
              <template v-for="star in 5">
                <i v-if="star <= averageRatings.trendy" class="fa-regular fa-star fa-rotate-180"
                  style="color: #F2B66D;"></i>
                <i v-else class="fa-regular fa-star fa-rotate-180" style="color: #FFFFFF;"></i>
              </template>
            </div>
            <p>{{ averageRatings.trendy.toFixed(1) }}</p>
          </div>
        </div>
      </div>
      <div id="container-bottem-right">
        <div v-for="(review, index) in filteredReviews" :key="index" class="review">
          <div class="icons">
            <i v-for="star in review.stars" :key="star" class="fa-solid fa-star fa-rotate-180"
              style="color: #F2B66D;"></i>
          </div>
          <h2>{{ review.title }}</h2>
          <p>{{ review.review_text }}</p>
        </div>
      </div>
    </div>
    <div id="qr-popup" v-if="qrCodePopup">
      <div id="popup-container">
        <img src="@/assets/qrcode.png" alt="foto van qr code">
        <div id="icons">
          <i class="fa-brands fa-google-play"></i>
          <i class="fa-brands fa-app-store"></i>
        </div>
      </div>
      <div id="close">
        <i @click="showQr" class="fa-solid fa-circle-xmark"></i>
      </div>
    </div>
  </div>
</template>
<script>
import reviewsData from '@/data/reviews.json';
import productsData from '@/product.json';
import { ref } from 'vue';

import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'fotorama/fotorama.css';
import 'jquery'



export default {
  name: 'DetailView',
  components:

  {
    Carousel,
    Slide,
    Navigation,
  },
  props: {
    currentProductIndex: {
      type: [Number,String],
      required: true,
    },
  },

  data() {
    const colors = [
        '#FFFFFF',
        '#121212',
        '#000000',
        '#343434',
    ]
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
      colors,
      reviewsData: reviewsData,
      productsData: productsData,

      currentProductIndex: this.$route.params.currentProductIndex,
      quantity: 1,
      averageStars: 0, // Gemiddeld aantal sterren
      totalReviews: 0, // Totaal aantal beoordelingen
      averageRatings: {}, // Gemiddelde beoordelingen per aspect
      qrCodePopup: false,
    };

  }
  ,
  
  mounted() {


  },
  computed: {
    product() {
      console.log("id", this.currentProductIndex)
      return this.productsData[this.currentProductIndex];
    }
    ,
    filteredReviews() {
      return this.reviewsData.filter(review => review.id === this.currentProductIndex);
    }
    ,
    calculateAverageStars() {
      const totalStars = this.filteredReviews.reduce((acc, review) => acc + review.stars, 0);
      return totalStars / this.filteredReviews.length;
    }
    ,
    // Totaal aantal beoordelingen
    calculateTotalReviews() {
      return this.filteredReviews.length;
    }
    ,
    // Bereken gemiddelde beoordelingen per aspect
    calculateAverageRatings() {
      const aspects = ['zitgemak', 'liggemak', 'kwaliteit', 'montage', 'trendy'];
      const averageRatings = {};
      aspects.forEach(aspect => {
        const aspectTotal = this.filteredReviews.reduce((acc, filteredReviews) => acc + (filteredReviews.ratings_per_aspect[aspect] || 0), 0);
        averageRatings[aspect] = aspectTotal / this.totalReviews;
      });
      return averageRatings;
    }
    ,
    fiveStarReviews() {
      return this.filteredReviews.filter(review => review.stars === 5);
    }
    ,
    fourStarReviews() {
      return this.filteredReviews.filter(review => review.stars === 4);
    }
    ,
    threeStarReviews() {
      return this.filteredReviews.filter(review => review.stars === 3);
    }
    ,
    twoStarReviews() {
      return this.filteredReviews.filter(review => review.stars === 2);
    }
    ,
    oneStarReviews() {
      return this.filteredReviews.filter(review => review.stars === 1);
    }
    ,
    averageStars() {
      const totalStars = this.filteredReviews.reduce((acc, review) => acc + review.stars, 0);
      return totalStars / this.filteredReviews.length;
    }
    ,
    averageStars4() {
      const totalStars4 = this.fourStarReviews.reduce((acc, review) => acc + review.stars, 0);
      return totalStars4 / this.fourStarReviews.length;
    }
    ,
    averageStars3() {
      const totalStars3 = this.threeStarReviews.reduce((acc, review) => acc + review.stars, 0);
      return totalStars3 / this.threeStarReviews.length;
    }
    ,
    averageStars2() {
      const totalStars2 = this.twoStarReviews.reduce((acc, review) => acc + review.stars, 0);
      return totalStars2 / this.twoStarReviews.length;
    }
    ,
    averageStars1() {
      const totalStars1 = this.oneStarReviews.reduce((acc, review) => acc + review.stars, 0);
      return totalStars1 / this.oneStarReviews.length;
    }
    ,
  }
  ,
  methods: {
    addToCart() {
      // Implement add to cart functionality
    },
    showQr() {
      this.qrCodePopup = !this.qrCodePopup;
    },
  }
  ,
  created() {
    console.log("currentProductIndex:", this.currentProductIndex);
    // Haal de currentProductIndex op uit de route parameters
    this.averageStars = this.calculateAverageStars;
    this.totalReviews = this.calculateTotalReviews;
    this.averageRatings = this.calculateAverageRatings;

  },
  watch: {
  '$route.params.currentProductIndex'(newIndex) {
    console.log("Route param changed:", newIndex);
    this.currentProductIndex = newIndex;
    this.averageStars = this.calculateAverageStars;
    this.totalReviews = this.calculateTotalReviews;
    this.averageRatings = this.calculateAverageRatings;
  },
},
  
};

</script>

<style lang="scss" scoped>
@import url('@fortawesome/fontawesome-free/css/all.css');

@mixin carousel-button() {
  position: absolute;
  font-size: 5rem;

  div {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-color: #FFFFFF;
  }
}

$with-buttons: calc(100% / 4);

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
  color: #515151;
  #container-right-upper {
    width: 40vw;
    margin: 10rem 5rem 0rem 0rem;
    h1 {
      margin-bottom: 1rem;
      color: #485059;
    }
    #text-kleur {
      color: #515151;
      margin-bottom: 1rem;
    }

    #kleuren {
      display: flex;
      .kleur {
        display: flex;
        width: 2rem;
        height: 2rem;
        border-radius: 50px;
        margin: 1rem 1rem;
      }
    }

    #flex {
      display: flex;
      width: 100%;

      margin: {
        bottom: 1rem;
      }

      #price {
        color: #485059;
        margin-right: 1rem;

        font: {
          weight: 600;
          size: 1.5rem;
        }
      }

      input {
        width: 5rem;
        margin-right: 1rem;
        padding-left: 3rem;
        border-radius: 15px;
        background-color: #FFFFFF;
        border: none;
      }

      button {
        width: $with-buttons;
        margin-right: 1rem;
        color: white;
        border-radius: 15px;
        border: none;
      }

      #order {
        background-color: #F2B66D;
      }

      #AR {
        background-color: #485059;
      }
    }

    i {
      font-size: 1.5rem;
    }

    .describtion {
      margin-bottom: 1rem;
      font-weight: bold;
    }

    .meusurements {
      margin-bottom: 1rem;
      font-weight: bold;

      span {
        font-size: 0.75rem;
        font-weight: normal;
      }
    }
  }

  #container-left-upper {
    width: 60vw;
    margin: 10rem 10rem 15rem 4rem;

    .horizontal-carousel {
      img {
        width: 30rem;
        height: 30rem;
      }
    }
  }
}

#mid-container {
  width: 95%;
  margin: 0 auto 5rem;
  h3 {
    color: #485059;
    font-size: 2rem;
    margin-left: 2.5%;
  }
}

#container-bottem {
  display: flex;
  flex-direction: row;

  margin: {
    bottom: 1rem;
    right: 2rem;
    left: 2rem;
  }

  #container-bottem-left {
    display: flex;
    flex-direction: column;
    width: 50vw;

    margin: {
      left: 2rem;
    }

    h2 {
      font-weight: 600;
    }

    #reviews {
      display: flex;
      .icons {
        font-size: 2rem;
        margin: {
          top: 1rem;
          right: 2rem;
        }
      }
      p {
        position: relative;
        top: 1.5rem;
      }
    }

    #review {
      display: flex;
      flex-direction: column;

      margin: {
        top: 2rem;
        bottom: 1rem;
      }

      .rating {
        display: flex;
        flex-direction: row;
        height: 2rem;
        align-items: center;

        margin: {
          bottom: 1rem;
        }

        div:nth-child(2) {
          width: 15rem;
          height: 1rem;
          background: #FFD43B;
          z-index: 1;
          border-radius: 15px;

          margin: {
            left: 1rem;
            right: 0.25rem;
          }

          div {
            height: 1rem;
            background: #485059;
            z-index: 2;
            border-radius: 15px;
          }
        }

        p {
          font-size: 1.25rem;

          span {
            margin-left: 5%;
          }
        }
      }
    }
  }

    #review-per-part {
      display: flex;
      flex-direction: column;

      .part {
        display: flex;

        margin: {
          left: 15%;
          top: 1rem;
        }

        i {
          font-size: 2.5rem;
        }

        p:nth-child(1) {
          font: {
            size: 26px;
          }

          margin: {
            right: 3rem;
          }
        }

        p {
          margin-left: 0.5rem;
          font-size: 17px;
        }
      }

      h2 {
        margin-bottom: 1rem;
      }
    }
  }

  #container-bottem-right {
    display: flex;
    flex-direction: column;
    width: 50vw;

    margin: {
      right: 2rem;
      bottom: 5rem;
    }

    h2 {
      font: {
        weight: bold;
        size: 1.5rem;
      }

      ;
    }

    .review {
      margin-bottom: 5rem;
    }

    i {
      font-size: 1.5rem;
    }
  }




#qr-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 25rem;
  width: 25rem;
  background-color: #F2B66D;
  border: {
    radius: 25px;
  };
  #close {
    position: absolute;
    top: 0.25rem;
    right: 1rem;
    font-size: 3rem;
    background-color: #F2B66D;
    i {
      background-color: #F2B66D;
    }
  }

  #popup-container {
    background-color: #F2B66D;
    img {
      background-color: #F2B66D;
      height: 15rem;
      width: 15rem;
    }
    i {
      background-color: #F2B66D;
      font-size: 2rem;
      margin-right: 1rem;
    }
    #icons {
      background-color: #F2B66D;
      margin: {
        top: 1rem;
        left: calc(100% - 6rem);
      }
    }
  }
}

@media screen and (max-width: 1000px) {
  #container-upper {
    width: 100%;
    flex-direction: column;
    align-items: center;
    #container-right-upper {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 90vw;
      margin-left: 10vw;
      margin-top: 0;
      i {
        font-size: 1.5rem;
      }
    }
    #container-left-upper {
      margin: 10rem auto 2rem;
      width: 90vw;

    }
    #describtion {
      display: none;
    }
  }

  #mid-container {
    width: 95%;
    margin-bottom: 2rem;
  }

  #container-bottem {
    display: none;
  }
}

@media screen and (max-width: 480px) {
  #container-upper {
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 5rem;
    #container-right-upper {
      width: 90%;
      margin: 2rem 0;
      text-align: center;

      h1 {
        font-size: 1.5rem;
      }

      #text-kleur {
        display: none;
      }

      #kleuren {
        justify-content: center;
        width: 100vw;
        .kleur {
          width: 3rem;
          height: 3rem;
          margin: 2rem;
        }
      }

      #flex {
        flex-direction: row-reverse;
        align-items: center;

        #price {
          display: none;
        }

        input {
          position: relative;
          right: 3rem;
          width: 20%;
          margin-bottom: 0.5rem;
        }
        button {
          position: relative;
          right: 3rem;
          width: 25vw;
          margin-bottom: 0.5rem;
          margin-left: 0;
          margin-right: 0.5rem;
        }
      }
      i {
        position: relative;
        left: 37vw;
        bottom: 3rem;
      }

      .meusurements {
        font-size: 0.875rem;
      }
    }

    #container-left-upper {
      width: 90%;
      margin: 0;
      margin-top: 2rem;

      .horizontal-carousel {
        navigation {
          button {
            display: none;
          }
        }
        img {
          width: 100%;
          height: auto;
          border-radius: 15px;
        }
      }
    }
  }

  #mid-container {
    width: 100%;
    h3 {
      display: none;
    }
  }

  #container-bottem {
    display: none;
  }

  #qr-popup {
    width: 90%;
    height: auto;
    padding: 1rem;
    #popup-container {
      img {
        margin: 4rem auto 0;
        width: 100%;
        height: auto;
      }

      #icons {
        justify-content: center;
        margin: {
          top: 1rem;
        }
      }
    }
  }
}
</style>

