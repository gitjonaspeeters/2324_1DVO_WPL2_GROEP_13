<template>
    <div class="cart">
        <h1>Winkelwagen</h1>
        <div class="container" v-if="cartItems.length !== 0">
            <div class="row">
                <div class="col-7 ">

                    <div class="item row" v-for="(item, index) in cartItems" :key="index">
                        <div class="col-4 ">
                            <img class="product-image1" :src="item.Images.Image1" :alt="item.productTitle">
                        </div>
                        <div class="product-text col-7">
                            <p class="product-title">{{ item.Name }}</p>
                            <p class="price"><strong>{{ item.Price.Low }}</strong> </p>
                            <div class="quantity">
                                <div class="quantitydelete-container">
                                    <i class="trash fa-solid fa-trash" @click="removeItem(item.Id)"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="afrekenen col-3">
                    <div class="afrekenen-content">
                        <p class="total">Totaalprijs: <strong>€ {{ totalPrice }}</strong></p>
                        <!-- Voeg hier de verzendkosten en BTW toe als dat nodig is -->
                        <input type="text" placeholder="Kortingscode" v-model="discountCode" class="discount-code">
                        <button @click="applyDiscount" class="apply-discount">Toepassen</button>
                        <button @click="checkout" class="checkout">Afrekenen</button>
                        <div class="betaal-mogelijkheden">
                            <i class="fa-brands fa-cc-visa"></i>
                            <i class="fa-brands fa-cc-paypal"></i>
                            <i class="fa-brands fa-cc-mastercard"></i>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div v-else>
            <h3>Je winkelwagen is leeg</h3>
        </div>

    </div>

    <div id="best-container">
        <div id="best-content">
            <div id="best-text">
                <p>Misschien ben je ook geintresseerd in dit?</p>
            </div>
            <div id="best-products">
                <div class="best-product" v-for="(product, index) in products" :key="index">
                    <div class="product-image" :style="{ backgroundImage: 'url(' + product.imageUrl + ')' }">

                    </div>
                    <div class="product-content">
                        <div class="product-content-left">
                            <p>{{ product.productCategorie }}</p>
                            <h1>{{ product.productTitle }}</h1>
                            <h2>{{ product.productPrice }}</h2>
                        </div>
                        <div class="product-content-right">
                            <a @click="toggleCart(index)">
                                <i class="fa-solid fa-cart-shopping"></i>
                                <i class="fa-solid"
                                    :class="{ 'fa-solid fa-plus': !product.addedToCart, 'fa-check': product.addedToCart }"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';


export default {
    name: 'CartView',
    components: {

    },
    data() {
        return {
            discountCode: '',
            cartItems: [],
            products: [
                { imageUrl: "/assets/TiffanySlaapkamer.png", productTitle: "Tiffany", productCategorie: "Slaapkamer", productPrice: "€879,00" },
                { imageUrl: "/assets/AndiceKaiWoonkamer.png", productTitle: "Andice Kai", productCategorie: "Woonkamer", productPrice: "€1.189,00" },
                { imageUrl: "/assets/LuncieBoucleStoel.png", productTitle: "Lucie Bouclé", productCategorie: "Stoelen", productPrice: "€99,00" },

            ]
        };

    }
    , computed: {
        totalPrice() {
            //item price low looks like this "€ 1.000,00" so we need to remove the € and the , and . and remove 00 from the back convert it to a number
            return this.cartItems.reduce((acc, item) => acc + Number(item.Price.Low.replace(/€|\.|,|00/g, '')), 0);
            

        },
        removeFromCart(index) {
            this.cartItems.splice(index, 1);
            this.saveToLocalStorage();
        }},


        methods: {
            fetchProducts() {
                axios.get('/src/product.json')
                    .then(response => {
                        //if the id of the cartItem is in allProducts then add it to cartItems
                        const cartItemsLocal = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
                        const allProducts = response.data;
                        for (let i = 0; i < cartItemsLocal.length; i++) {
                            for (let j = 0; j < allProducts.length; j++) {
                                if (cartItemsLocal[i] === allProducts[j].Id) {
                                    console.log('Juist: ', cartItemsLocal[i], " = ", allProducts[i]);
                                    this.cartItems.push(allProducts[j]);
                                }
                            }
                        }

                    })
                    .catch(error => {
                        console.error('Error fetching products:', error);
                    });
            },
            removeItem(id) {
                // Haal items uit localStorage
                const cartItemsLocal = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
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
            
        
        toggleLike(index) {
            event.preventDefault();
            this.products[index].liked = !this.products[index].liked;
        },
        handleIconClass(product) {
            return product.liked ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
        },
    },
    mounted() {
        this.fetchProducts();
        console.log("this.cartItems", this.cartItems)
    }
}
</script>

<style scoped>
/* Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.betaal-mogelijkheden {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
}

.betaal-mogelijkheden i {
    font-size: 3rem;
    color: #485059;
}

/* Cart */
.cart {
    padding: 10rem 6rem 4rem 6rem;
    color: #485059;
    font-family: Georgia, sans-serif;
    background-color: #D9CAC5;
}

.cart h1 {
    font-size: 3rem;
    margin-bottom: 2rem;
}

.cart-content {
    position: relative;
}

.item {
    padding: 1rem;
    background-color: #E8DFDC;
    margin-bottom: 1rem;
    border-radius: 1rem;
}

.product-image1 {
    max-width: 90%;
}

.cart .product-title {
    font-size: 2rem;
}

.quantity {
    display: flex;
    align-items: center;
}

.quantity input {
    width: 40px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 0 2px;
}

.quantity button {
    padding: 5px;
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
    font-size: 1.7rem;
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
    margin: 3px 0;
    font-size: 1.5rem;
}

.col-4 {
    width: 40% !important;
}

.afrekenen {
    background-color: #F2B66D;
    padding: 1rem;
    margin-left: 3rem;
    border-radius: 1rem;
    color: #485059;
    font-family: Georgia, sans-serif;
    font-size: 1.5rem;
    cursor: pointer;
    max-height: 30rem;
    display: flex;
}

.afrekenen-content {
    width: 100%;
    justify-content: space-between;
}

.total,
.shipping,
.vat {
    display: flex;
    justify-content: space-between;
}

.discount-code {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
}

.apply-discount,
.checkout {
    background-color: #485059;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 1rem;
    margin-right: 1rem;
}

.apply-discount:hover,
.checkout:hover {
    background-color: #333;
}

/* Likely products */
#best-container {
    background-color: #E8DFDC;
    padding: 5rem 0;
}

#best-products {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}

#best-text {
    width: 80%;
    margin: 0 auto 2rem auto;
}

#best-text h1 {
    color: #485059;
    font-family: Georgia, sans-serif;
    margin-bottom: -1px;
    font-size: 2.8rem;
}

#best-text p {
    color: #485059;
    font-family: Georgia, sans-serif;
    font-size: 1.8rem;
}

.best-product {
    width: calc(30% - 1rem);
    margin-right: 1rem;
}

.product-image {
    width: 100%;
    height: 0;
    padding-top: calc(100% / 1.1);
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 2rem;
    position: relative;
}

.product-like {
    position: absolute;
    top: 1rem;
    right: 4px;
    background-color: #485059;
    padding: 0.3rem 0.5rem;
    border-radius: 5px;
}

.product-like a {
    text-decoration: none;
    color: #ffffff;
    font-size: 2rem;
}

.product-content {
    display: flex;
    justify-content: space-between;
    font-family: "Century Gothic", sans-serif;
}

.product-content-left p {
    color: #888787;
    font-size: 1.2rem;
    margin-left: 0.5rem;
    margin-top: 0.5rem;
}

.product-content-left h1 {
    font-size: 1.5rem;
    margin-left: 0.5rem;
    font-weight: 500;
}

.product-content-left h2 {
    color: #000000;
    font-weight: bold;
    font-size: 1.2rem;
    margin-left: 0.5rem;
}

.product-content-right {
    display: flex;
    align-items: center;
}

.product-content-right a {
    background-color: #F2B66D;
    padding: 0.8rem 0 0.5rem 0;
    border-radius: 10px;
    cursor: pointer;
}

.product-content-right i {
    font-size: 1.5rem;
    padding: 0 0.30rem 0 0.5rem;
}

/* Media Queries */
@media screen and (max-width: 768px) {
    .cart {
        padding: 5rem 2rem 2rem 2rem;
    }

    .col-4, .col-7 {
        width: 100% !important;
    }

    .afrekenen {
        margin: 2rem 0 0 0;
    }

    .product-image1 {
        max-width: 100%;
    }
}

@media screen and (max-width: 480px) {
    .cart {
        padding: 3rem 1rem 1rem 1rem;
    }

    .afrekenen {
        margin: 2rem 0 0 0;
        padding: 1rem;
        max-height: none;
        width: 100% !important;
    }

    .product-title {
        font-size: 1.5rem;
    }

    .price {
        font-size: 1.2rem;
    }

    .total,
    .shipping,
    .vat {
        font-size: 1.2rem;
    }

    .apply-discount,
    .checkout {
        font-size: 1rem;
        padding: 0.4rem 0.8rem;
    }

    #best-products {
        flex-direction: column;
        align-items: center;
    }

    .best-product {
        width: 90%;
        margin-bottom: 1rem;
    }

    .product-content-left p,
    .product-content-left h1,
    .product-content-left h2 {
        margin-left: 0;
    }
}


</style>