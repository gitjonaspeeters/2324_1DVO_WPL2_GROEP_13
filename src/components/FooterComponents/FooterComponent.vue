<script>

export default {
  name: 'footer',
};
</script>
<template>
  <div id="footer-container">
        <footer>
            <div id="footer-left">
                <a href="#"><i class="fa-solid fa-circle-chevron-up"></i></a>
            </div>
            <div id="footer-main">
                <a href="#"><p>Copyright 2024 ©</p></a>
                <p><a href="#">Algemene voorwaarden</a> / <a href="#">Cookies</a> / <a href="#">Privacybeleid</a></p>
            </div>
            <div id="footer-right">
                <div class="footer-icons">
                    <i class="fa-brands fa-cc-visa"></i>
                    <i class="fa-brands fa-cc-mastercard"></i>
                </div>
                <div class="footer-icons">
                    <i class="fa-brands fa-cc-paypal"></i>
                    <i class="fa-solid fa-credit-card"></i>
                </div>
            </div>
        </footer>
    </div>
</template>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
#footer-container{
    background-color: #485059;
}
footer{
    width: 95%; 
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
}
#footer-left a{
    text-decoration: none;
    color: #ffffff;
    font-size: 2.5rem;
}
#footer-left a:hover{
    color: #F2B66D;
}
#footer-main{
    text-align: center;
    
}
#footer-main a{
    color: #ffffff;
    text-decoration: none;
}
#footer-main p{
    font-size: 1.2rem;
    color: #ffffff;
    font-family: "Century Gothic", sans-serif;
}
#footer-main p a{
    text-decoration: underline;
    
}
#footer-right{
    gap: 1rem;
}
#footer-right i{
    font-size: 2rem;
    color: #ffffff;
    margin-left: 0.4rem;
}

/* media querys */
@media screen and (max-width: 1382px){
    #footer-container{
        margin-bottom: 5rem;
    }
}
</style>