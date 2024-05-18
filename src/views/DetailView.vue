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
          <div v-for="(color, index) in product.Color" :key="index" :style="{ 'background-color': color }"></div>
        </div>
        <div id="flex">
          <p id="price">{{ product.Price.low }}</p>
          <input type="number" min="0" max="10" v-model="quantity">
          <button id="order" @click="addToCart">Bestellen</button>
          <button id="AR">AR</button>
        </div>
        <i class="fa-regular fa-heart" style="color: #ffffff;"></i>
        <p class="describtion">Beschrijving: </p>
        <p class="meusurements">Afmetingen: <span>{{ product.Measurement }}</span></p>
        <p>{{ product.Description }}</p>
      </div>
    </div>
    <div id="mid-container">
      <Carousel :wrap-around="true" :items-to-show="3" :autoplay="3000" :transition="500">
        <template v-for="(item, index) in items" :key="index">
          <Slide>
            <div class="slide">
              <img :src="item" alt="Slide image">
            </div>
          </Slide>
        </template>
        <template #addons>
          <Navigation>
            <template #prev>
              <div class="prev-btn">
                <img src="/src/assets/leftbtn.png" alt="arrow-left" id="prevbtn">
              </div>
            </template>
            <template #next>
              <div class="next-btn">
                <img src="/src/assets/rightbtn.png" alt="arrow-right" id="nextbtn">
              </div>
            </template>
          </Navigation>
        </template>
      </Carousel>
    </div>
    <div id="container-bottem">
      <div id="container-bottem-left">
        <div id="reviews">
          <h2>Reviews</h2>
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
  </div>
</template>
<script>
import reviewsData from '@/data/reviews.json';
import productsData from '@/product.json';
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
    return {
      productsData: productsData,
      currentProductIndex: this.$route.params.currentProductIndex,
      quantity: 1,
      items: [
        "src/assets/Banner1.png",
        "src/assets/Banner1.png",
        "src/assets/Banner1.png",
        "src/assets/Banner1.png",
        "src/assets/Banner1.png",
        "src/assets/Banner1.png",
      ],
      reviewsData: reviewsData,
      averageStars: 0, // Gemiddeld aantal sterren
      totalReviews: 0, // Totaal aantal beoordelingen
      averageRatings: {}, // Gemiddelde beoordelingen per aspect
    }
  },
  mounted() {


  },
  computed: {
    product() {
      console.log("id", this.currentProductIndex)
      return this.productsData[this.currentProductIndex];
    },
    filteredReviews() {
      return this.reviewsData.filter(review => review.id === this.currentProductIndex);
    },
    calculateAverageStars() {
      const totalStars = this.filteredReviews.reduce((acc, review) => acc + review.stars, 0);
      return totalStars / this.filteredReviews.length;
    },
    // Totaal aantal beoordelingen
    calculateTotalReviews() {
      return this.filteredReviews.length;
    },
    // Bereken gemiddelde beoordelingen per aspect
    calculateAverageRatings() {
      const aspects = ['zitgemak', 'liggemak', 'kwaliteit', 'montage', 'trendy'];
      const averageRatings = {};
      aspects.forEach(aspect => {
        const aspectTotal = this.filteredReviews.reduce((acc, filteredReviews) => acc + (filteredReviews.ratings_per_aspect[aspect] || 0), 0);
        averageRatings[aspect] = aspectTotal / this.totalReviews;
      });
      return averageRatings;
    },
    fiveStarReviews() {
      return this.filteredReviews.filter(review => review.stars === 5);
    },
    fourStarReviews() {
      return this.filteredReviews.filter(review => review.stars === 4);
    },
    threeStarReviews() {
      return this.filteredReviews.filter(review => review.stars === 3);
    },
    twoStarReviews() {
      return this.filteredReviews.filter(review => review.stars === 2);
    },
    oneStarReviews() {
      return this.filteredReviews.filter(review => review.stars === 1);
    },
    averageStars() {
      const totalStars = this.filteredReviews.reduce((acc, review) => acc + review.stars, 0);
      return totalStars / this.filteredReviews.length;
    },
    averageStars4() {
      const totalStars4 = this.fourStarReviews.reduce((acc, review) => acc + review.stars, 0);
      return totalStars4 / this.fourStarReviews.length;
    },
    averageStars3() {
      const totalStars3 = this.threeStarReviews.reduce((acc, review) => acc + review.stars, 0);
      return totalStars3 / this.threeStarReviews.length;
    },
    averageStars2() {
      const totalStars2 = this.twoStarReviews.reduce((acc, review) => acc + review.stars, 0);
      return totalStars2 / this.twoStarReviews.length;
    },
    averageStars1() {
      const totalStars1 = this.oneStarReviews.reduce((acc, review) => acc + review.stars, 0);
      return totalStars1 / this.oneStarReviews.length;
    },
  },
  methods: {
    addToCart() {
      // Implement add to cart functionality
    },
  },
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

  #container-right-upper {
    width: 40vw;
    margin: 10rem 5rem 0rem 0rem;

    h1 {
      margin-bottom: 1rem;
    }

    #text-kleur {
      margin-bottom: 1rem;
    }

    #kleuren {
      display: flex;
      width: 2rem;
      height: 2rem;
      border-radius: 50px;
      margin: 1rem 0.5rem;
    }

    #flex {
      display: flex;
      width: 100%;

      margin: {
        bottom: 1rem;
      }

      #price {
        margin-right: 1rem;

        font: {
          weight: 600;
          size: 1.5rem;
        }
      }

      input {
        width: $with-buttons;
        margin-right: 1rem;
        border-radius: 15px;
        background-color: #FFFFFF;
        outline: none;
      }

      button {
        width: $with-buttons;
        margin-right: 1rem;
      }

      #order {
        background-color: #F2B66D;
        color: white;
        border-radius: 15px;
        outline: none;
      }

      #AR {
        background-color: #485059;
        color: white;
        border-radius: 15px;
        outline: none;
      }
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

    .custom-nav-button {
      .next-btn {
        @include carousel-button();
      }

      .prev-btn {
        @include carousel-button();
      }
    }
  }
}

#mid-container {
  width: 80%;
  margin: 10rem auto;

  .carousel-container {
    width: 80%;
    margin: 0 auto;
  }

  .slide {
    width: 100%;
    height: 200px;
    border: 1px solid #ccc;
  }

  .prev-btn,
  .next-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2rem;
    color: #333;
    cursor: pointer;
  }

  .prev-btn {
    left: -5rem;
  }

  .next-btn {
    right: -5rem;
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
}</style>