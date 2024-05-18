<template>
    <div class="wishlist">
        <h1>Verlanglijstje</h1>
        <div class="container-left" v-if="wishlistItems.length !== 0">
            <div class="row">
                <div class="col-7">
                    <div class="item row" v-for="(item, index) in wishlistItems" :key="index">
                        <div class="col-4">
                            <img class="product-image1" :src="item.imageUrl" :alt="item.productTitle">
                        </div>
                        <div class="product-text col-7">
                            <p class="product-title">{{ item.productTitle }}</p>
                            <p class="price"><strong>€ {{ item.productPrice }},00</strong></p>
                            <div class="quantity">
                                <div class="quantitydelete-container">
                                    <i class="trash fa-solid fa-trash" @click="removeItem(index)"></i>
                                </div>
                            </div>
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
    methods: {
        removeItem(index) {
            const removedItem = this.wishlistItems.splice(index, 1)[0];
            localStorage.setItem('wishlistItems', JSON.stringify(this.wishlistItems));
            
            // Update the liked status of the removed item in localStorage
            localStorage.setItem(`product_${removedItem.id}_liked`, false);

            // Emit an event to notify the ProductView component
            this.$emit('item-removed', removedItem.id);
        },
    },
};
</script>

<style scoped>
/* Wishlist Styles */
.wishlist {
    min-height: 100vh; /* Volledige hoogte van het scherm */
    padding: 10rem 6rem 4rem 6rem;
    color: #485059;
    font-family: Georgia, sans-serif;
    background-color: #D9CAC5;
}

.wishlist h1 {
    font-size: 3rem;
    margin-bottom: 2rem;
}

.item {
    padding: 1rem;
    background-color: #E8DFDC !important;
    margin-bottom: 1rem;
    border-radius: 1rem;
}

.product-image1 {
    max-width: 90%;
}

.wishlist .product-title {
    font-size: 2rem;
}

.price {
    margin-top: 3px;
    margin-bottom: 3px;
    font-size: 1.5rem;
}

.quantity {
    display: flex;
    align-items: center;
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

.col-4 {
    width: 40% !important;
}

/* Als er geen items in het verlanglijstje zijn */
.wishlist > div:not(.container) {
    margin-top: 2rem;
}

.container-left {
    margin-left: 0;
    padding-left: 0;
}

@media screen and (max-width: 768px) {
    .wishlist {
        padding: 8rem 2rem 2rem 2rem;
    }

    .col-4, .col-7 {
        width: 100% !important;
    }

    .product-image1 {
        max-width: 100%;
    }
}

@media screen and (max-width: 480px) {
    .product-title {
        font-size: 1.5rem;
    }

    .price {
        font-size: 1.2rem;
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
