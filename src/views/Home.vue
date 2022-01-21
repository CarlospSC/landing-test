<template lang="pug">


<!-- Sección introductoria-->

div.box.home
  img#laptop1(alt="Laptop screen naranja" src="../assets/laptop-orange.png")
  h1#optimiza Optimiza tu Colegio
  p Maneja tu establecimiento educacional de la mejor forma.   
  
  div.two-buttons
    button.btn-sabermas Saber más
    button.btn-gratis.second Pedir Prueba GRATIS

<!--Sección módulos-->

div.modulos
  div.modulo 
    img.md-1(src="../assets/modulo-1-logo.png" height=80)
    small 
      p Módulo de Gestión pedagógica
  div.modulo
    img.md-2(src="../assets/modulo-2-logo.png" height=80) 
    small 
      p Módulo de Asistencia
  div.modulo 
    img.md-3(src="../assets/modulo-3-logo.png" height=80)
    small 
      p Módulo de Contabilidad
  div.modulo 
    img.md-4(src="../assets/modulo-4-logo.png" height=80)
    small 
      p Módulo de Recursos Humanos
  div.modulo
    img.md-5(src="../assets/modulo-5-logo.png" height=80) 
    small 
      p Módulo de Comunicación
  div.modulo
    img.md-6(src="../assets/modulo-6-logo.png" height=80) 
    small 
      p Módulo de Evaluación de desempeño


<!-- Sección preguntas frecuentes -->

div.preguntas
  h3 Preguntas Frecuentes
  p Conoce las preguntas y respuestas más frecuentes de nuestra plataforma
  div.preguntasfr
    div.pregunta-respuesta
      img.logo-mas(alt="logo de signo más" src = "../assets/logo-mas.png")
      p.pregunta ¿Pregunta Frecuente número 1?
      p.respuesta Pregunta Frecuente número 1
    div.pregunta-respuesta
      img.logo-mas(alt="logo de signo más" src = "../assets/logo-mas.png")
      p.pregunta ¿Pregunta Frecuente número 2?
      p.respuesta Pregunta Frecuente número 2
    div.pregunta-respuesta
      img.logo-mas(alt="logo de signo más" src = "../assets/logo-mas.png")
      p.pregunta ¿Pregunta Frecuente número 3?
      p.respuesta Pregunta Frecuente número 3 
    div.pregunta-respuesta
      img.logo-mas(alt="logo de signo más" src = "../assets/logo-mas.png")
      p.pregunta ¿Pregunta Frecuente número 4?
      p.respuesta Pregunta Frecuente número 4

    div.pregunta-respuesta
      img.logo-mas(alt="logo de signo más" src = "../assets/logo-mas.png")
      p.pregunta ¿Pregunta Frecuente número 5?
      p.respuesta Pregunta Frecuente número 5 
    div.pregunta-respuesta
      img.logo-mas(alt="logo de signo más" src = "../assets/logo-mas.png")
      p.pregunta ¿Pregunta Frecuente número 6?
      p.respuesta Pregunta Frecuente número 6
    div.pregunta-respuesta
      img.logo-mas(alt="logo de signo más" src = "../assets/logo-mas.png")
      p.pregunta ¿Pregunta Frecuente número 7?
      p.respuesta Pregunta Frecuente número 7 
    div.pregunta-respuesta
      img.logo-mas(alt="logo de signo más" src = "../assets/logo-mas.png")
      p.pregunta ¿Pregunta Frecuente número 8?
      p.respuesta Pregunta Frecuente número 8



<!-- Sección solicitar prueba gratis-->

div#form-prueba
  h1#solicita Solicita tu Prueba GRATIS
  div.ingreso
    input#deja-correo(placeholder="Deja tu correo y te contactaremos")
    button.btn-gratis.enviar Enviar
  div.small-msjs
    div.msj1  
      img.check(src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAANJJREFUSEvt1MENAiEQheF/K9ASLMESLMEOjBVYg51Ygh24JViCLdiBmYRNCLLOALPuBS4cIHzMy8DASmNYyaXDf0u+R92jbkngBoyAzF9jqeYS7BS0cw5fAo7RN3AAnmnJ3rAJlUt4wmbUEy5CLfAWuADXH+1djGqwoA9gH7pSujMdVagGCyjvcBM0QWK8GtVgWZ/Dm1ALnMNfwC6kMPtOtS/P+pzSyuXcatRa8XT5GG9CS+Ep9jtwzH2DWrzxujXqkjNNeztsisljU4/aI0XTGR8E1S8fISP2WQAAAABJRU5ErkJggg==")
      small.msj Optimiza tus recursos
    div.msj2
      img.check(src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAANJJREFUSEvt1MENAiEQheF/K9ASLMESLMEOjBVYg51Ygh24JViCLdiBmYRNCLLOALPuBS4cIHzMy8DASmNYyaXDf0u+R92jbkngBoyAzF9jqeYS7BS0cw5fAo7RN3AAnmnJ3rAJlUt4wmbUEy5CLfAWuADXH+1djGqwoA9gH7pSujMdVagGCyjvcBM0QWK8GtVgWZ/Dm1ALnMNfwC6kMPtOtS/P+pzSyuXcatRa8XT5GG9CS+Ep9jtwzH2DWrzxujXqkjNNeztsisljU4/aI0XTGR8E1S8fISP2WQAAAABJRU5ErkJggg==")
      small.msj Contrata solo lo que necesitas
    div.msj3
      img.check(src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAANJJREFUSEvt1MENAiEQheF/K9ASLMESLMEOjBVYg51Ygh24JViCLdiBmYRNCLLOALPuBS4cIHzMy8DASmNYyaXDf0u+R92jbkngBoyAzF9jqeYS7BS0cw5fAo7RN3AAnmnJ3rAJlUt4wmbUEy5CLfAWuADXH+1djGqwoA9gH7pSujMdVagGCyjvcBM0QWK8GtVgWZ/Dm1ALnMNfwC6kMPtOtS/P+pzSyuXcatRa8XT5GG9CS+Ep9jtwzH2DWrzxujXqkjNNeztsisljU4/aI0XTGR8E1S8fISP2WQAAAABJRU5ErkJggg==")
      small.msj Todo en un lugar



</template>

<script>

export default {
  name: 'Home',
  components: {
    
  }
}
</script>

<style scoped>

/*Estilos sección introductoria*/

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
    padding: 10px;
    width: auto;
    font-size: 16px;
    border-radius: 25px;
    cursor: pointer;
    color: black;
    background-size: 300%;
    background: white;
  }
  
  
  /*Estilos sección módulos*/
  
  .modulos {
    width: 100%;
    height: 300px;
    background: #FFFFFF;    
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 20px;
    padding: 55px 90px;
  }
  .modulo {
    align-items: center;
    padding-top: 30px;
    padding-left: 50px;
    padding-right: 50px;
    font-size: 22px;
  }

  .modulo small p {
    font-weight: bold;
  }

  /*Estilos sección preguntas frecuentes*/

  .preguntas {
    width: 100%;
    height: 900px;
    background: #FFFFFF;
    text-align: center;
    padding-top: 80px;
    
  }
  .preguntas h3 {
    font-size: 40px;
    font-weight: bold;
  }
  .preguntas p {
    font-size : 20px;
  }
  .preguntasfr {
    width: 100%;
    max-width: 1200px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 50px;
    padding: 35px 0px;
  }
  .logo-mas {
    height: 20px;
  }
  .pregunta-respuesta .pregunta {
    font-weight: bold;
  }


  /*Estilos solicitar prueba gratis*/
  #form-prueba {
    
    background-image: linear-gradient(to left, #FFA500, #FF0000);
    height: 300px;
    width: 100%;
    padding: 0;
    padding-top: 60px;
  }

  #solicita {
    text-align: center;
    color: #FFFFFF;
    font-size: 50px;
    padding-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ingreso {
    text-align: center;
  }

  .enviar {
    background: #000000;
  }

  #deja-correo {
    text-align: left;
    border-radius: 35px;
    padding: 10px;
    width: 40%;
  }
  .small-msjs {
    
    width: 55%;
    max-width: 1200px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0px;
    padding-top: 20px;
    text-align: center;
  }

  .check {
    color: #FFFFFF;
  }

  .msj {
    color: #FFFFFF;
    font-size: 14px;
    margin-left: 5px;
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
        height: 650px;
          margin-left: 15px;
          margin-right: 15px;
          padding-left: 7.5px;
          padding-right: 7.5px;
        }

        #laptop1 {
          margin-top: 20px;
          float: left;
          width: 100%;
        }


        h1 {
        padding-bottom: 0;
        font-size: 60px;
        text-align:center;
        }

        p {
          font-size: 19px;
          text-align:center;
        }

        .two-buttons {
          margin-top: 30px;
          text-align: center;
        }

        .modulos {
            width: 100%;
            height: 800px;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 20px;
            padding: 0;
            padding-top: 20;
            align-items: top;
            text-align: center;
        }
        .modulo small p{
            font-size: 16px;
            font-weight: normal;
        }


        .preguntas {
          width: 100%;
          height: 1400px;
          background: #FFFFFF;
          text-align: center;
          padding-top: 80px;
          padding-left: 30px;
          padding-right: 30px;
          
        }
        .preguntas h3 {
          font-size: 40px;
          font-weight: bold;
        }
        .preguntas p {
          font-size : 20px;
        }
        .preguntasfr {
          width: 100%;
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 15px;
          padding: 35px 0px;
        }
        .logo-mas {
          height: 20px;
        }



        #form-prueba {
          height: 600px;
          padding-top: 70px;
          padding-left: 20px;
          padding-right: 20px;
        }
        .small-msjs {
            width: 90%;
            grid-template-columns: repeat(1, 1fr);
            grid-gap: 30px;
            padding: 30px 30px;
            align-items: center;
            text-align: center;
        }
        #deja-correo {
          text-align: center;
          border-radius: 35px;
          padding: 10px;
          width: 90%;
          height: 60px;
          margin-bottom: 10px;
        }
        .msj {
          font-size: 18px;
        }
        .enviar {
          width: 180px;
          height: 60px;
          margin-bottom: 20px;
        }


    }



</style>
