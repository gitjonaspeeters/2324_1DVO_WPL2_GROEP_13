<template>
  <div id="navigation-container">
    <nav>
      <div id="navigation-left">
        <router-link to="/"><img src="@/assets/Comfortmeubel wit.svg"></router-link>
      </div>
      <div id="navigation-main" :style="{ 'margin-top': navbarMarginTop }">
        <div class="navigation-main-section">
          <router-link @click="scrollToTop" to="/categorie">
            <i class="fa-solid fa-book"></i>
            <p>Categorieën</p>
          </router-link>
        </div>
        <div class="navigation-main-section">
          <router-link @click="scrollToTop" to="/ruimtes">
            <i class="fa-solid fa-house"></i>
            <p>Ruimtes</p>

          </router-link>

        </div>
        <div class="navigation-main-section">

          <router-link @click="scrollToTop" to="/products">

            <i class="fa-solid fa-layer-group"></i>
            <p>Alle items</p>
          </router-link>
        </div>
        <div class="navigation-main-section">
          <router-link @click="scrollToTop" to="/about">
            <i class="fa-solid fa-users"></i>
            <p>Over Ons</p>
          </router-link>
        </div>
        <div class="navigation-main-search">
          <a @click="toggleSearch">
            <i class="fa-solid fa-magnifying-glass"></i>
          </a>
        </div>
      </div>
      <div id="navigation-right">
        <div class="navigation-right-sextion">
          <router-link v-if="!isLoggedIn" to="/login">
            <button class="login">Login</button>
          </router-link>
        </div>


        <div v-if="isLoggedIn" class="navigation-right-sextion">
          <router-link to="/account">
            <i class="fa-solid fa-user"></i>
          </router-link>
        </div>
        <div class="navigation-right-sextion">
          <router-link to="/wishlist">
            <i class="fa-solid fa-heart"></i>
          </router-link>
        </div>
        <div id="navigation-right-sextion">
          <a @click="toggleCartPopup">
            <i class="fa-solid fa-cart-shopping"></i>
            <p class="shopping-counter">({{ cartItems.length }})</p>
          </a>
        </div>
      </div>
    </nav>
  </div>
  <!-- searchbar -->
  <div id="search-container" v-if="searchVisible">
    <div id="search">
      <div id="search-inhoud">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Search...">
        <i class="fa-solid fa-chevron-up" @click="toggleSearch"></i>
      </div>
    </div>
  </div>
  <!-- Cart Popup -->
  <div id="cart-popup-container">
    <div id="cart-popup" v-if="cartPopupVisible">
    <div class="cart-content">
      <h4>Winkelwagen</h4>
      <div class="container">
        <div class="row" v-for="(item, index) in cartItems" :key="index">
          <div class="col-4">
            <img :src="item.Images.Image1" alt="product">
          </div>
          <div class="product-text col-7">
            <p>{{ item.Name }}</p>
            <p class="price"><strong>{{ item.Price.Low }}</strong></p>
            <div class="quantity">
              <div class="quantitydelete-container">
                <div class="quantity">
                  <button @click="decrement(index)">-</button>
                  <p class="quantity-number">{{ item.quantity }}</p>
                  <button @click="increment(index)">+</button>
                </div>
                <i class="trash fa-solid fa-trash" @click="removeItem(item.Id)"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p><strong>Totaal: € {{ totalPrice }}</strong></p>
      <router-link @click="scrollToTop" to="/cart">
        <button @click="hideCartPopup" type="button" class="cart-button btn btn-warning">Bekijk winkelwagen</button>
      </router-link>
    </div>
  </div>
  </div>
  <!-- navigation media screen -->
  <div id="media-navigation-container">
    <div id="media-navigation-main">
      <div class="media-navigation-main-section">
        <router-link @click="scrollToTop" to="/categorie">
          <i class="fa-solid fa-book"></i>
          <p>Categorieen</p>
        </router-link>
      </div>
      <div class="media-navigation-main-section">
        <router-link @click="scrollToTop" to="/ruimtes">
          <i class="fa-solid fa-house"></i>
          <p>Ruimtes</p>
        </router-link>
      </div>
      <div class="media-navigation-main-section">
        <router-link @click="scrollToTop" to="/products">
          <i class="fa-solid fa-layer-group"></i>
          <p>Alle items</p>
        </router-link>
      </div>
      <div class="media-navigation-main-section">
        <router-link to="/about">
          <i class="fa-solid fa-users"></i>
          <p>Over Ons</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import router from '@/router';
import {useLoginStore} from '@/stores/LoginStore.js';
import axios from 'axios';

export default {
  name: "NavigationBar",
  data() {
    const loginStore = useLoginStore();
    return {
      currentPage: window.location.pathname,
      isLoggedIn: false,
      searchVisible: false,
      prevScrollpos: 0,
      navbarTop: '2.5rem',
      searchVisible: false,
      quantity1: 0,
      quantity2: 0,
      quantity3: 0,
      navbarOpacity: 1,
      navbarMarginTop: '0',
      cartPopupVisible: false,
      cartItems: [],

    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({top: 0, behavior: 'smooth'});
    },
    increment1() {
      this.quantity1++;
      console.log(this.quantity1);
    },
    decrement1() {
      if (this.quantity1 > 0) {
        this.quantity1--;
      }
    },
    increment2() {
      this.quantity2++;
      console.log(this.quantity2);
    },
    decrement2() {
      if (this.quantity2 > 0) {
        this.quantity2--;
      }
    },
    increment3() {
      this.quantity3++;
      console.log(this.quantity3);
    },
    decrement3() {
      if (this.quantity3 > 0) {
        this.quantity3--;
      }
    },
    checkLoggedIn() {
      console.log(localStorage.getItem('id') !== null);
      return localStorage.getItem('id') !== null;
    },
    fetchProducts() {
      axios.get('/src/product.json')
          .then(response => {
            //if the id of the cartItem is in allProducts then add it to cartItems
            const cartItemsLocal = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
            const allProducts = response.data;
            for (let i = 0; i < cartItemsLocal.length; i++) {
              console.log("cartItemsLocal", cartItemsLocal[i]);
              for (let j = 0; j < allProducts.length; j++) {
                if (cartItemsLocal[i] === allProducts[j].Id) {
                  console.log('Juist: ', cartItemsLocal[i], " = ", allProducts[i]);
                  this.cartItems.push(allProducts[j]);
                }
              }
            }
            console.log("cartItems", this.cartItems);
          })
          .catch(error => {
            console.error('Error fetching products:', error);
          });
    },
    removeItem(id) {
      // Haal items uit localStorage
      const cartItemsLocal = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
      console.log("cartItemsLocal", cartItemsLocal);
      // Zoek en verwijder het item met de gegeven id
      for (let i = 0; i < cartItemsLocal.length; i++) {
        if (cartItemsLocal[i] === id) {
          cartItemsLocal.splice(i, 1);
          break;
        }
      }
      // Update localStorage met de nieuwe lijst
      localStorage.setItem('cartItems', JSON.stringify(cartItemsLocal));
      // Werk de cartItems in de state bij
      this.cartItems = this.cartItems.filter(item => item.Id !== id);
      // Bereken opnieuw de totale prijs
    },
    toggleSearch() {
      this.searchVisible = !this.searchVisible;
      event.preventDefault();
    },
    toggleCartPopup() {
      this.cartPopupVisible = !this.cartPopupVisible;
    },
    hideCartPopup() {
      this.cartPopupVisible = false;
    },
    handleScroll() {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > this.prevScrollpos) {
        this.navbarMarginTop = '-12rem';
        if (this.searchVisible === true) {
          this.toggleSearch();
        }
      } else {
        this.navbarMarginTop = '0';
      }
      this.prevScrollpos = currentScrollPos;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.isLoggedIn = this.checkLoggedIn();
    this.fetchProducts();
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  computed: {
    loginStore() {
      return useLoginStore();
    },
    isNavItemActive() {
      return (navItemURL) => {
        return navItemURL === this.currentPage;
      };
    }
  },
  isNavItemActive() {
    return (navItemURL) => {
      return navItemURL === this.currentPage;
    };
  },
  totalPrice() {
    //item price low looks like this "€ 1.000,00" so we need to remove the € and the , and . and remove 00 from the back convert it to a number
    return this.cartItems.reduce((acc, item) => acc + Number(item.Price.Low.replace(/€|\.|,|00/g, '')), 0);


  },
  components: {router}
}
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  /* border: 1px solid red; */
}

.login {
  color: #485059;
  border: none;
  background-color: transparent !important;
  font-weight: bolder;
  border-radius: 10px;
  cursor: pointer;
}

.login:hover {
  color: #F2B66D;
}

.login a.router-link-active {
  color: #F2B66D;
}

.cart-content {

  position: relative;
}

#cart-popup-container {
  width: 80%;
  margin: 0 auto;
  position: relative; 
}

#cart-popup {
  position: fixed;
  top: 15%;
  /* Plaats het onder de winkelwagenknop */
  left: 86%;
  width: 350px;
  margin-right: 5px;
  transform: translateX(-50%);
  z-index: 999;
  /* Zorg ervoor dat het bovenop andere elementen staat */
  background-color: #ffffff;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: margin-top 1s ease-in-out;
  padding-bottom: -6rem;

}

#cart-popup img {
  width: 100%;
  height: auto;
  padding: 0.3rem;
}

#cart-popup h4 {
  color: #485059;
  padding: 0.5rem;
  width: 90%;
}

.product-text {
  padding: 0.5rem;
}

.row {
  padding-bottom: 6px;
}

#cart-popup .row {
  margin-bottom: 1rem;
  border-bottom: 1px solid #ccc;
}

.cart-button {
  align-items: right;
  padding: 6px;
  background-color: #F2B66D;
  color: white;
  margin-top: 1rem;
}

.cart-button:hover {
  background-color: #ef9323;
}

.quantity {
  display: flex;
  align-items: center;
}

.quantity input {
  width: 0px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 0 2px;

}

.quantity button {
  padding-left: 5px;
  padding-right: 5px;
  padding-top: -2px;
  border: none;
  background-color: #F2B66D;
  color: #4C4C4C;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
}

.quantity button:hover {
  background-color: #ef9323;
}

.quantity-number {
  margin: 0 7px;
}

.quantitydelete-container {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.trash {
  color: #F2B66D;
  cursor: pointer;
  background-color: #485059;
  padding: 7px;
  border-radius: 5px;
}

.trash:hover {
  background-color: #ef9323;
}

.price {
  margin-top: 3px;
  margin-bottom: 3px;
}

.col-4 {
  width: 40% !important;
}

.btn-close {
  background-color: #485059;
  color: white;
  margin-top: 1rem;
  position: relative;
  left: 93%;
  top: -1.2rem;
  z-index: 999;
}

#navigation-container {
  position: fixed;
  top: 2.5rem;
  z-index: 3;
  width: 95%;
  left: 0;
  right: 0;
  margin: 0 auto;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#navigation-left {
  display: flex;
  align-items: center;
}

#navigation-left img {
  width: 10rem;
  color: #ffffff;
}

#navigation-main {
  height: 0.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background-color: #ffffff;
  border-radius: 10rem;
  gap: 1rem;
  transition: margin-top 1s ease-in-out;
}

.navigation-main-section {
  padding-right: 1rem;
  display: flex;
  justify-content: center;
  border-right: 1px solid #B8B8B8;
}

.navigation-main-section a {
  display: flex;
  color: #4C4C4C;
  align-items: center;
  text-decoration: none;
  gap: 1rem;
}

.navigation-main-section a:hover {
  color: #F2B66D;
}

.navigation-main-section a.router-link-active {
  color: #F2B66D;
}

.navigation-main-search {

  display: flex;
  align-items: center;
  color: #4C4C4C;
  cursor: pointer;
}

.navigation-main-search:hover {
  color: #F2B66D;

  display: flex;
  align-items: center;
}

.navigation-main-search a {
  color: #4C4C4C;
  display: flex;
  align-items: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  color: #4C4C4C;
  cursor: pointer;
}

nav i {
  font-size: 1.3rem;
}

nav p {
  font-size: 1.2rem;
}

/* recherkant navigatie */
#navigation-right {
  height: 0.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background-color: #ffffff;
  border-radius: 10rem;
  gap: 1rem;
}

.navigation-right-sextion {
  padding-right: 1rem;
  display: flex;
  justify-content: center;
  border-right: 1px solid #B8B8B8;
}

.navigation-right-sextion a,
#navigation-right-sextion a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #4C4C4C;
  cursor: pointer;
}

.navigation-right-sextion a:hover,
#navigation-right-sextion a:hover {
  color: #F2B66D;
}

.navigation-right-sextion a.router-link-active {
  color: #F2B66D;

  display: flex;
  color: #4C4C4C;
  align-items: center;
  text-decoration: none;

  color: #F2B66D;
}

/* searchbar */
#search-container {
  position: fixed;
  top: 7rem;
  left: 0;
  z-index: 3;
  width: 100%;
}

#search {
  display: flex;
  justify-content: center;
}

#search-inhoud {
  background-color: #ffffff;
  color: #4C4C4C;
  height: 0.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-radius: 10rem;
  gap: 1rem;
}

#search-inhoud i {
  font-size: 1.3rem;
}

#search-inhoud i:hover {
  cursor: pointer;
}

#search-inhoud input {
  background-color: #ffffff;
  border: none;
  font-size: 1.2rem;
}

#media-navigation-container {
  display: none;
}

.shopping-counter{
  margin-left: 0.2rem;
}

/* media querys */
@media screen and (max-width: 1382px) {
  #navigation-main {
    display: none;
  }

  #media-navigation-container {
    display: block;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 3;
  }

  #media-navigation-main {
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.5rem 1.5rem;
    background-color: #ffffff;
    gap: 1rem;
  }

  .media-navigation-main-section {
    text-align: center;
  }

  .media-navigation-main-section a.router-link-active {
    color: #F2B66D;
  }

  .media-navigation-main-section a {
    text-decoration: none;
    color: #4C4C4C;
  }


  .media-navigation-main-section i {
    font-size: 1.5rem;
  }
}

@media screen and (max-width: 1300px){
  #cart-popup{
    /* left: 50%; */
  }
}

@media screen and (max-width: 1063px){
  #cart-popup{
    /* left: 75%; */
  }
}

</style>