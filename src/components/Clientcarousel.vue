<template lang="pug">
<div class="swiper">
  <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
    <!-- Slides -->
        <div class="swiper-slide">
            h3 Colegio edutecnia
            hr
            span Comentario:
            p Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tempore, animi corporis harum repellat ex rem suscipit consequatur eligendi dolorem!
            img(src="../assets/Eductecnia.png" alt="logo1")
        </div>        
        <div class="swiper-slide">
            h3 Liceo Brandman
            hr
            span Comentario:
            p Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            img(src="../assets/BRANDMAN.png" alt="logo2")
        </div>
        <div class="swiper-slide">
            h3 Liceo Edubrand
            hr
            span Comentario:
            p Soloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            img#icono-l(src="../assets/icono-like.png" alt="logo3")
        </div>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

</div>  
</template>

<script>
export default {

}
</script>

<style>

    .swiper {
        box-sizing: border-box;
        width: 600px;
        height: 500px;
        background: mediumaquamarine;
        }

    .swiper .swiper-wrapper .swiper-slide {
        padding: 2rem;
        border: 1px solid red;
        background-image: linear-gradient(to bottom, orange, red);
        text-align: center;
        box-shadow: black;
        user-select: none;
        height: 100%;
        align-items: center;
    }    

    .swiper .swiper-wrapper .swiper-slide h3 {
        font-weight: bold;
        letter-spacing: 1px;
    }

    .swiper .swiper-wrapper .swiper-slide p {
        font-size: 1.2rem;
        font-weight: normal;
        color: black;
        line-height: 2;
        padding: 1rem 1rem;
        text-align: left;
    }

    .swiper .swiper-wrapper .swiper-slide span{
        text-align: left;
        font-weight: bold;
    }

    .swiper .swiper-wrapper .swiper-slide p span{
        font-weight: bold;
    }

    .swiper .swiper-wrapper .swiper-slide img {
        padding: 2rem; 
        width: 100%;
        max-width: 300px;
    }

    #icono-l {
        max-width: 200px;
    }


    .swiper .swiper-button-next, .swiper .swiper-button-prev, .swiper .swiper-pagination{
        color: #F4F4F4;
    }

    @media screen and (max-width: 858px){
        
        .swiper {
            width: 90%;
            height: 500px;
            background: mediumaquamarine;
        }
        
        .swiper .swiper-wrapper .swiper-slide p {
            font-size: 0.9rem;
            font-weight: normal;
            color: black;
            line-height: 2;
            padding: 1rem 1rem;
            text-align: left;
        }

    }


</style>