<template lang="pug">
div#top-line
</template>

<script>
export default {

}
</script>

<style>

    #top-line{
        height: 0.4vw;
        width: 100%;
        background: linear-gradient(to left, #FF0000,#FFA500);
    }
    
    @media screen and (max-width: 1200px){
        #top-line {
            height: 0.6vw;
        }
    }

    @media screen and (max-width: 991px){
        #top-line {
            height: 0.8vw;
        }
    }

    @media screen and (max-width: 768px){
        #top-line {
            height: 1vw;
        }
    }

    @media screen and (max-width: 450px){
        #top-line {
            height: 1.2vw;
        }
    }
    
</style>