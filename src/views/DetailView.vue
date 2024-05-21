<template>
  <div id="container">
    <div id="container-upper">
      <div id="container-left-upper">
        <p>Home/Categorieen/zetels/</p>
        <div class="fotorama">
          <img v-for="item in product.Images" :src="item" alt="een foto">
        </div>
      </div>
      <div id="container-right-upper">
        <h1>{{ product.Name }}</h1>
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
      <BestProducts/>
    </div>
    <div id="container-bottem">
      <div id="container-bottem-left">
        <h2>Reviews</h2>
        <div id="reviews">
          <div class="icons">
            <span v-for="index in 5" :key="index" class="star">
              <i class="fa-regular fa-star"></i>
            </span>
          </div>
          <p>{{ averageStars.toFixed(1) }} ({{ totalReviews }} reviews)</p>
        </div>
        <!-- Rest of your component -->
      </div>
      <div id="container-bottem-right">
        <div v-for="(review, index) in filteredReviews" :key="index" class="review">
          <div class="icons">
            <span v-for="star in review.stars" :key="star" class="star">
              <i class="fa-regular fa-star fa-rotate-180"></i>
            </span>
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
import BestProducts from "@/components/Best-products.vue";
import reviewsData from '@/data/reviews.json';
import productsData from '@/data/product.json';
import { ref } from 'vue';
import 'fotorama/fotorama.css';

export default {
  name: 'DetailView',
  components: {
    BestProducts,
  },
  props: {
    currentProductIndex: {
      type: [Number, String],
      required: true,
    },
  },
  data() {
    const colors = [
      '#FFFFFF',
      '#121212',
      '#000000',
      '#343434',
    ];
    return {
      colors,
      reviewsData: reviewsData,
      productsData: productsData,
      currentProductIndex: this.$route.params.currentProductIndex - 1,
      quantity: 1,
      averageStars: 0,
      totalReviews: 0,
      averageRatings: {},
      qrCodePopup: false,
    };
  },
  computed: {
    product() {
      return this.productsData[this.currentProductIndex];
    },
    filteredReviews() {
      return this.reviewsData.filter(review => review.id === this.currentProductIndex);
    },
    calculateAverageStars() {
      const totalStars = this.filteredReviews.reduce((acc, review) => acc + review.stars, 0);
      return totalStars / this.filteredReviews.length;
    },
    calculateTotalReviews() {
      return this.filteredReviews.length;
    },
    calculateAverageRatings() {
      const aspects = ['zitgemak', 'liggemak', 'kwaliteit', 'montage', 'trendy'];
      const averageRatings = {};
      aspects.forEach(aspect => {
        const aspectTotal = this.filteredReviews.reduce((acc, review) => acc + (review.ratings_per_aspect[aspect] || 0), 0);
        averageRatings[aspect] = aspectTotal / this.totalReviews;
      });
      return averageRatings;
    },
  },
  methods: {
    addToCart() {
      // Implement add to cart functionality
    },
    showQr() {
      this.qrCodePopup = !this.qrCodePopup;
    },
    loadFotorama() {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.js';
      document.body.appendChild(script);
    },
    loadJquery() {
      const script = document.createElement('script');
      script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js';
      document.body.appendChild(script);
      script.onload = this.loadFotorama;
    },
  },
  created() {
    this.averageStars = this.calculateAverageStars;
    this.totalReviews = this.calculateTotalReviews;
    this.averageRatings = this.calculateAverageRatings;
    this.loadJquery();
  },
  watch: {
    '$route.params.currentProductIndex'(newIndex) {
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
@import url('fotorama/fotorama.css');

.fotorama {
  width: 80%;
  height: 80%;
}

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
      font-weight: bold;
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
        width: 3rem;
        height: 3rem;
        border-radius: 50px;
        margin: 1rem 1.5rem;
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
    margin: 10rem -7rem 15rem 4rem;

    .horizontal-carousel {
      img {
        width: 30rem;
        height: 30rem;
      }
    }
  }
}

#mid-container {
  width: 100vw;
  margin: 5rem 0;
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

  .star {
    width: 40px;
    height: 40px;
    background-color: #374048;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    i {
      background-color: transparent;
      color: #F2B66D;
    }
  }

  #container-bottem-left {
    display: flex;
    flex-direction: column;
    width: 50vw;

    margin: {
      left: 2rem;
    }

    h2 {
      color: #485059;
      font-weight: 600;
    }

    #reviews {
      display: flex;

      .icons {
        display: flex;
        font-size: 1.5rem;
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
        font-size: 1.5rem;
      }
      div {
        display: flex;
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

  .icons {
    display: flex;
  }

  h2 {
    color: #4C4C4C;
    font: {
      weight: bold;
      size: 1.5rem;
    }
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

