<template>
    <div id="navigation-container">
        <nav>
            <div id="navigation-left">
                <img src="@/assets/Comfortmeubel wit.svg">
            </div>
            <div id="navigation-main">
                <div class="navigation-main-section">
                    <a href="/categorie">
                        <i class="fa-solid fa-book"></i>
                        <p>Categorieen</p></a>
                </div>
                <div class="navigation-main-section">
                    <a href="/ruimtes">
                        <i class="fa-solid fa-house"></i>
                        <p>Ruimtes</p></a>
                </div>
                <div class="navigation-main-section">
                    <a href="#">
                        <i class="fa-solid fa-layer-group"></i>
                        <p>Alle items</p></a>
                </div>
                <div class="navigation-main-section">
                    <a href="#">
                        <i class="fa-solid fa-users"></i>
                        <p>Over Ons</p>
                    </a>
                </div>
                <div class="navigation-main-search">
                    <a href="#" @click="toggleSearch"><i class="fa-solid fa-magnifying-glass"></i></a>
                </div>
            </div>
            <div id="navigation-right">
                <div class="navigation-right-sextion">
                    <a href="/login">
                        <i class="fa-solid fa-user"></i>
                    </a>
                </div>
                <div class="navigation-right-sextion">
                    <a href="#">
                        <i class="fa-solid fa-heart"></i>
                    </a>
                </div>
                <div id="navigation-right-sextion">
                    <a href="#">
                        <i class="fa-solid fa-cart-shopping"></i>
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
</template>
<script>
export default {
    name: "NavigationBar",
    data(){
        return {
            searchVisible: false
        }
    },
    methods: {
        toggleSearch(){
            console.log("er word geklikt");
            this.searchVisible = !this.searchVisible;
            event.preventDefault();
        }
    }
}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
    /* border: 1px solid red; */
}
#navigation-container {
    position: fixed;
    top: 2.5rem;
    z-index: 2;
    width: 95%; 
    left: 0;
    right: 0;
    margin: 0 auto;
}

nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
#navigation-left {
    display: flex;
    align-items: center;
}
#navigation-left img{
    width: 10rem;
    color: #ffffff;
}
#navigation-main{
    height: 0.1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    background-color: #ffffff;
    border-radius: 10rem;
    gap: 1rem;
}
.navigation-main-section{
    padding-right: 1rem;
    display: flex;
    justify-content: center;
    border-right: 1px solid #B8B8B8;
}
.navigation-main-section a{
    display: flex;
    color: #4C4C4C;
    align-items: center;
    text-decoration: none;
    gap: 1rem;
}
.navigation-main-search{
    display: flex;
    align-items: center;
}
.navigation-main-search a{
    color: #4C4C4C;
    display: flex;
    align-items: center;
    text-decoration: none;
}
nav i{
    font-size: 1.3rem;
}
nav p{
    font-size: 1.2rem;
}
/* recherkant navigatie */
#navigation-right{
    height: 0.1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    background-color: #ffffff;
    border-radius: 10rem;
    gap: 1rem;
}
.navigation-right-sextion{
    padding-right: 1rem;
    display: flex;
    justify-content: center;
    border-right: 1px solid #B8B8B8;
}

.navigation-right-sextion a, #navigation-right-sextion a{
    display: flex;
    color: #4C4C4C;
    align-items: center;
    text-decoration: none;
}
/* searchbar */
#search-container {
    position: fixed;
    top: 7rem;
    left: 0;
    z-index: 3;
    width: 100%;
}
#search{
    display: flex;
    justify-content: center;
}
#search-inhoud{
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
#search-inhoud i:hover{
    cursor: pointer;
}
#search-inhoud input {
    background-color: #ffffff;
    border: none;
    font-size: 1.2rem;
}

</style>