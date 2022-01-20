<template lang="pug">
div.box.home

  
  img#laptop1(alt="Laptop screen naranja" src="../assets/laptop-orange.png")
  h1#optimiza Optimiza tu Colegio
  p Maneja tu establecimiento educacional de la mejor forma.   
  
  button.btn-sabermas Saber más
  button.btn-gratis.second Pedir Prueba GRATIS

</template>

<script>

export default {
  name: 'Home',
  components: {
    
  }
}
</script>

<style scoped>
  .box {
    background: #FFFFFF;
    height: 500px;
    margin-left: 120px;
    margin-right: 120px;
    padding-left: 60px;
    padding-right: 60px;

  }
  #laptop1 {
    float: left;
    width: 65%;
  }

  h1 {
  padding-bottom: 0;
  font-weight: 700;
  }

  p {
    font-size: 15px;
    
  }

  #optimiza {
    padding-top: 50px;
  }


  .btn-sabermas {
    border: 2px solid black;
    margin-right: 10px;
    /*
    margin-bottom: 30px;
    padding: 10px;
    */
    padding: 10px;
    width: auto;
    font-size: 16px;
    border-radius: 25px;
    cursor: pointer;
    color: black;
    background-size: 300%;
    background: white;
  }




  @media screen and (max-width: 952px){
        .box {
          height: 600px;
          margin-left: 30px;
          margin-right: 30px;
          padding-left: 15px;
          padding-right: 15px;
        }

    }

  @media screen and (max-width: 858px){
      .box {
          margin-left: 15px;
          margin-right: 15px;
          padding-left: 7.5px;
          padding-right: 7.5px;
        }

        #laptop1 {
          float: left;
          width: 100%;
        }

        h1 {
        padding-bottom: 0;
        font-size: 60px;
        }

        p {
          font-size: 19px;
        }

    }



</style>
