<template>
    <div class="wishlist">
        <h1>Verlanglijstje</h1>
        <div class="container" v-if="wishlistItems.length !== 0">
            <div class="row">
                <div class="col-7 ">
                    <div class="item row" v-for="(item, index) in wishlistItems" :key="index">
                        <div class="col-4 ">
                            <img :src="item.imageUrl" :alt="item.productTitle">
                        </div>
                        <div class="product-text col-7">
                            <p class="product-title">{{ item.productTitle }}</p>
                            <p class="price"><strong>{{ item.productPrice }}</strong> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <h3>Je verlanglijstje is leeg</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WishlistView',
    data() {
        return {
            wishlistItems: JSON.parse(localStorage.getItem('wishlistItems')) || [],
        };
    },
};
</script>

<style scoped>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* verlanglijstje */
.wishlist {
    padding-top: 10rem;
    padding-left: 6rem;
    padding-bottom: 4rem;
    color: #485059;
    font-family: Georgia, sans-serif;
    background-color: #D9CAC5;
}

.wishlist h1 {
    font-size: 3rem;
    margin-bottom: 2rem;
}

.item {
    padding-bottom: 6px;
    background-color: #E8DFDC !important;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 1rem;
}

.wishlist .product-title {
    font-size: 2rem;
}

.price {
    margin-top: 3px;
    margin-bottom: 3px;
    font-size: 1.5rem;
}

.col-4 {
    width: 40% !important;
}

.afrekenen {
    display: none; /* Verwijder de afrekensectie */
}

/* Als er geen items in het verlanglijstje zijn */
.wishlist > div:not(.container) {
    text-align: center;
    margin-top: 2rem;
}

/* likely products */
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


</style>