<template lang="pug">

<!-- SECCIÓN INTRODUCTORIA-->

div.box.home
  img#laptop1(alt="Laptop screen naranja" src="../assets/laptop-orange.png")
  h1#optimiza Optimiza tu Colegio
  p Maneja tu establecimiento educacional de la mejor forma.   
  
  div.two-buttons
    button.btn-sabermas Saber más
    a(href="#form-prueba")
      button.btn-gratis#second Pedir Prueba GRATIS



<!-- SECCIÓN CONTÁCTANOS-->
div.form-contactanos
  h1#plataforma Plataforma integral de Gestión Escolar
  p Descubre un sistema que tiene todo lo que tu colegio necesita en la misma plataforma
  div.ingreso
    input#deja-correo2(placeholder="Deja tu correo y te contactaremos")
    button.btn-gratis.ingresar Ingresar
  div.small-msjs
    div.msj1  
      img.check(src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAANJJREFUSEvt1MENAiEQheF/K9ASLMESLMEOjBVYg51Ygh24JViCLdiBmYRNCLLOALPuBS4cIHzMy8DASmNYyaXDf0u+R92jbkngBoyAzF9jqeYS7BS0cw5fAo7RN3AAnmnJ3rAJlUt4wmbUEy5CLfAWuADXH+1djGqwoA9gH7pSujMdVagGCyjvcBM0QWK8GtVgWZ/Dm1ALnMNfwC6kMPtOtS/P+pzSyuXcatRa8XT5GG9CS+Ep9jtwzH2DWrzxujXqkjNNeztsisljU4/aI0XTGR8E1S8fISP2WQAAAABJRU5ErkJggg==" height=20)
      small.msj Optimiza tus recursos
    div.msj2
      img.check(src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAANJJREFUSEvt1MENAiEQheF/K9ASLMESLMEOjBVYg51Ygh24JViCLdiBmYRNCLLOALPuBS4cIHzMy8DASmNYyaXDf0u+R92jbkngBoyAzF9jqeYS7BS0cw5fAo7RN3AAnmnJ3rAJlUt4wmbUEy5CLfAWuADXH+1djGqwoA9gH7pSujMdVagGCyjvcBM0QWK8GtVgWZ/Dm1ALnMNfwC6kMPtOtS/P+pzSyuXcatRa8XT5GG9CS+Ep9jtwzH2DWrzxujXqkjNNeztsisljU4/aI0XTGR8E1S8fISP2WQAAAABJRU5ErkJggg==" height=20)
      small.msj Contrata solo lo que necesitas
    div.msj3
      img.check(src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAANJJREFUSEvt1MENAiEQheF/K9ASLMESLMEOjBVYg51Ygh24JViCLdiBmYRNCLLOALPuBS4cIHzMy8DASmNYyaXDf0u+R92jbkngBoyAzF9jqeYS7BS0cw5fAo7RN3AAnmnJ3rAJlUt4wmbUEy5CLfAWuADXH+1djGqwoA9gH7pSujMdVagGCyjvcBM0QWK8GtVgWZ/Dm1ALnMNfwC6kMPtOtS/P+pzSyuXcatRa8XT5GG9CS+Ep9jtwzH2DWrzxujXqkjNNeztsisljU4/aI0XTGR8E1S8fISP2WQAAAABJRU5ErkJggg==" height=20)
      small.msj Todo en un lugar


br
hr


<!--SECCIÓN MÓDULOS-->
div.titulo-modulos
  h2 Módulos

div.modulos#modulos
  div.modulo 
    a(href="#gestion")
      img.md-1(src="../assets/icono-gestion.png" height=80)

  div.modulo
    a(href="#asistencia")
      img.md-2(src="../assets/icono-asistencia.png" height=80) 

  div.modulo
    a(href="#contabilidad") 
      img.md-3(src="../assets/icono-contabilidad.png" height=80)

  div.modulo 
    a(href="#rrhh")
      img.md-4(src="../assets/icono-rrhh.png" height=80)

  div.modulo
    a(href="#comunicacion")
      img.md-5(src="../assets/icono-comunicacion.png" height=80) 

  div.modulo
    a(href="#desempeno")
      img.md-6(src="../assets/icono-desempeno.png" height=80) 


br
hr



<!--Módulo de Gestión Pedagógica de PRUEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA -->
section.modulos-detalles-imagen-izquierda#gestion
  h2 Módulo de 
  h2
    b Gestión Pedagógica
  div.box-container
    div.box-imagen
      img(alt="latop-gestion" src="../assets/gestion.png")
      
    div.box-texto
      ul
        li Registro de Matrículas digitalizadas.
        li Ingreso de notas por nivel y asignatura.
        li Planificación de clases.
        li Elaboración de informes personalizados por estudiantes.
        li Función de libro digital, cumpliendo con la nueva normativa impulsada por MINEDUC.



<!--Módulo de Asistencia-->
section.modulos-detalles-imagen-derecha#asistencia
  h2 Módulo de 
  h2
    b Asistencia
  div.box-container
  
    div.box-texto
      ul
        li Registro de asistencia en tiempo real.
        li Visualización de Asistencia, Cursos y Estudiantes de forma personalizada.
        li Sistema de interoperabilidad con SIGE, lo que permite que, una vez confirmada la asistencia del colegio esta puede ser enviada de manera directa.

    div.box-imagen
      img(alt="latop-gestion" src="../assets/asistencia.png")




<!--Módulo de Contabilidad-->
section.modulos-detalles-imagen-izquierda#contabilidad
  h2 Módulo de 
  h2
    b Contabilidad
  div.box-container
    div.box-imagen
      img(alt="latop-gestion" src="../assets/contabilidad.png")
      
    div.box-texto
      ul
        li Registro y control de Facturas.
        li Administración de cuentas bancarias, emisión de cartolas y control de gastos.
        li Conciliación bancaria, asientos contables, balances y relacionados.



<!--Módulo de Recursos Humanos-->
section.modulos-detalles-imagen-derecha#rrhh
  h2 Módulo de 
  h2
    b Recursos Humanos
  div.box-container
  
    div.box-texto
      ul
        li Registro de funcionarios y colaboradores.
        li Administración de contratos, finiquitos, liquidaciones, entre otros.
        li Sistema que permite emitir certificados para PreviRed, Bancos y SII de forma online.

    div.box-imagen
      img(alt="latop-gestion" src="../assets/rrhh.png")



<!--Módulo de Comunicación-->
section.modulos-detalles-imagen-izquierda#comunicacion
  h2 Módulo de 
  h2
    b Comunicación
  div.box-container
    div.box-imagen
      img(alt="latop-gestion" src="../assets/comunicacion.png")
      
    div.box-texto
      ul
        li Sistema de mensajería directa a teléfonos móviles entre escuela y apoderados.
        li Seguimiento de asistencias e información inmediata.
        li Facilita el aumento de asistencias, retención escolar, compromiso parental y posibilita el fortalecimiento de vínculos escuela-familia.



<!--Módulo de Evaluación de desempeño-->
section.modulos-detalles-imagen-derecha#desempeno
  h2 Módulo de 
  h2
    b Evaluación de Desempeño
  div.box-container
  
    div.box-texto
      ul
        li Sistema para realizar evaluación de desempeño de funcionarios y colaboradores por áreas, equipos y jefaturas.
        li Generación de informes de evaluación.
        li Resultados concluyentes para retroalimentar la gestión de los trabajadores.

    div.box-imagen
      img(alt="latop-gestion" src="../assets/desempeno.png")


<!--SECCIÓN DE MODOS DIURNO Y NOCTURNO-->
section.modos
  h2 Una plataforma que se adapta a tus requerimientos con sus Modo Diurno y Modo Nocturno
  div.box-modos
    img#diurno(alt="Imagen de modo diurno" src="../assets/modo-diurno.png")
    img#nocturno(alt="Imagen de modo nocturno" src="../assets/modo-nocturno.png")
  img#like(alt="Icono like" src="../assets/icono-like.png")



<!-- SECCIÓN DE CLIENTES-->

section.clientes#clientes
  h2 Nuestros clientes
  p Conoce algunos de nuestros clientes que ya utilizan la plataforma
  div.clientes-logos
    div.dos-clientes
      img(alt="Edutecnia logo" src="../assets/Eductecnia.png" width=200)
      img(alt="Brandman logo" src="../assets/BRANDMAN.png" width=200)
      img(alt="Edutecnia logo" src="../assets/Eductecnia.png" width=200)
      img(alt="Brandman logo" src="../assets/BRANDMAN.png" width=200)




<!-- SECCIÓN DE PREGUNTAS FRECUENTES -->

div.preguntas#preguntas
  h3 Preguntas Frecuentes
  p Conoce las preguntas y respuestas más frecuentes de nuestra plataforma
  div.preguntasfr
    div.pregunta-respuesta
      div.pregunta
        img.logo-mas(alt="logo de signo más" src = "../assets/icono-mas.png")
        p ¿Pregunta Frecuente número 1?
      div.respuesta
        p Pregunta Frecuente número 1

    div.pregunta-respuesta
      div.pregunta
        img.logo-mas(alt="logo de signo más" src = "../assets/icono-mas.png")
        p ¿Pregunta Frecuente número 2?
      div.respuesta
        p Pregunta Frecuente número 2
        
    div.pregunta-respuesta
      div.pregunta
        img.logo-mas(alt="logo de signo más" src = "../assets/icono-mas.png")
        p ¿Pregunta Frecuente número 3?
      div.respuesta
        p Pregunta Frecuente número 3
        
    div.pregunta-respuesta
      div.pregunta
        img.logo-mas(alt="logo de signo más" src = "../assets/icono-mas.png")
        p ¿Pregunta Frecuente número 4?
      div.respuesta
        p Pregunta Frecuente número 4
        

    div.pregunta-respuesta.oc
      img.logo-mas(alt="logo de signo más" src = "../assets/icono-mas.png")
      p.pregunta ¿Pregunta Frecuente número 5?
      p.respuesta Pregunta Frecuente número 5 
    div.pregunta-respuesta.oc
      img.logo-mas(alt="logo de signo más" src = "../assets/icono-mas.png")
      p.pregunta ¿Pregunta Frecuente número 6?
      p.respuesta Pregunta Frecuente número 6
    div.pregunta-respuesta.oc
      img.logo-mas(alt="logo de signo más" src = "../assets/icono-mas.png")
      p.pregunta ¿Pregunta Frecuente número 7?
      p.respuesta Pregunta Frecuente número 7 
    div.pregunta-respuesta.oc
      img.logo-mas(alt="logo de signo más" src = "../assets/icono-mas.png")
      p.pregunta ¿Pregunta Frecuente número 8?
      p.respuesta Pregunta Frecuente número 8



<!--SECCIÓN PARA SOLICITAR PRUEBA GRATIS-->

div#form-prueba
  h1#solicita Solicita tu Prueba GRATIS
  div.ingreso
    input#deja-correo(placeholder="Deja tu correo y te contactaremos")
    button.btn-gratis.enviar Enviar
  div.small-msjs
    div.msj1  
      img.check(src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAANJJREFUSEvt1MENAiEQheF/K9ASLMESLMEOjBVYg51Ygh24JViCLdiBmYRNCLLOALPuBS4cIHzMy8DASmNYyaXDf0u+R92jbkngBoyAzF9jqeYS7BS0cw5fAo7RN3AAnmnJ3rAJlUt4wmbUEy5CLfAWuADXH+1djGqwoA9gH7pSujMdVagGCyjvcBM0QWK8GtVgWZ/Dm1ALnMNfwC6kMPtOtS/P+pzSyuXcatRa8XT5GG9CS+Ep9jtwzH2DWrzxujXqkjNNeztsisljU4/aI0XTGR8E1S8fISP2WQAAAABJRU5ErkJggg==" height=20)
      small.msj Optimiza tus recursos
    div.msj2
      img.check(src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAANJJREFUSEvt1MENAiEQheF/K9ASLMESLMEOjBVYg51Ygh24JViCLdiBmYRNCLLOALPuBS4cIHzMy8DASmNYyaXDf0u+R92jbkngBoyAzF9jqeYS7BS0cw5fAo7RN3AAnmnJ3rAJlUt4wmbUEy5CLfAWuADXH+1djGqwoA9gH7pSujMdVagGCyjvcBM0QWK8GtVgWZ/Dm1ALnMNfwC6kMPtOtS/P+pzSyuXcatRa8XT5GG9CS+Ep9jtwzH2DWrzxujXqkjNNeztsisljU4/aI0XTGR8E1S8fISP2WQAAAABJRU5ErkJggg==" height=20)
      small.msj Contrata solo lo que necesitas
    div.msj3
      img.check(src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAANJJREFUSEvt1MENAiEQheF/K9ASLMESLMEOjBVYg51Ygh24JViCLdiBmYRNCLLOALPuBS4cIHzMy8DASmNYyaXDf0u+R92jbkngBoyAzF9jqeYS7BS0cw5fAo7RN3AAnmnJ3rAJlUt4wmbUEy5CLfAWuADXH+1djGqwoA9gH7pSujMdVagGCyjvcBM0QWK8GtVgWZ/Dm1ALnMNfwC6kMPtOtS/P+pzSyuXcatRa8XT5GG9CS+Ep9jtwzH2DWrzxujXqkjNNeztsisljU4/aI0XTGR8E1S8fISP2WQAAAABJRU5ErkJggg==" height=20)
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

  .home {
    background: #FFFFFF;
    width: 100%;
    height: 100%;
    padding-top: 5vw;
    padding-bottom: 20vw;
    padding-left: 11vw;
    padding-right: 11vw;

  }
  #laptop1 {
    float: left;
    width: 65%;
  }

  h1 {
  padding-bottom: 0;
  font-weight: 700;
  letter-spacing: 2px;
  }

  h2 {
    font-size: 2.5vw;
  }

  p {
    font-size: 15px;
    letter-spacing: 0.5px;
  }

  #optimiza {
    padding-top: 50px;
  }


  .btn-sabermas {
    border: 2px solid black;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 10px;
    width: auto;
    max-width: 200px;
    font-size: 16px;
    border-radius: 25px;
    cursor: pointer;
    color: black;
    background-size: 300%;
    background: white;
    letter-spacing: 0.5px;
  }

  .btn-sabermas:hover {
    background: #FF0000;
    transition: 0.5s;
  }
  
  #second {
    padding: 10px;
    font-size: 16px;
    letter-spacing: 0.5px;
  }

  /*Estilos sección contáctanos*/
  .form-contactanos {
    margin-top: 0px;
    margin-bottom: 0px;
    background: #FFFFFF;
    height: 100%;
    width: 100%;
    padding: 60px 10px 80px 10px;
    align-items: center;
  }

  .form-contactanos h1 {
    text-align: center;
    color: #000000;
    font-size: 30px;
    padding-bottom: 10px;
    letter-spacing: 1px;
  }

  .form-contactanos p {
    margin-left: 20px;
    margin-right: 20px;
    text-align: center;
    font-size: 18px;
    letter-spacing: 1px;
  }

  #deja-correo2 {
    border: 1px solid black;
  }

  .ingresar {
    
    padding: 13px;
    width: 10vw;
  }


  .form-contactanos .small-msjs .msj {
    color: #000000;
    font-size: 0.8rem;
  }


  /*Estilos sección módulos*/
  
  .titulo-modulos {
    text-align: center;
    font-size: 30px;
    margin-top: 40px;
    display: none;
  }

  .modulos {
    width: 100%;
    height: 22vh;
    background: #FFFFFF;    
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    align-items: top;
    text-align: center;
    padding: 0 200px;
  }
  .modulo {
    padding-top: 2vw;
  }

  .modulo:hover {
    background: #FFADAD;
  }
  /*Estilos sección Gestión Pedagógica*/

  .modulos-detalles-imagen-izquierda {
    background: #FFFFFF;
  }

  .modulos-detalles-imagen-derecha {
    background: #F4F4F4;
  }

  .modulos-detalles-imagen-izquierda h2 {
    text-align: left;
    margin-left: 700px;
    line-height: 30px;
  }

  .modulos-detalles-imagen-derecha h2 {
    text-align: left;
    margin-left: 200px;
    line-height: 30px;
  }


  .modulos-detalles-imagen-izquierda .box-container, .modulos-detalles-imagen-derecha .box-container {
    display: flex;
    gap: 0;
    padding: 0 10rem;
  }

  .modulos-detalles-imagen-izquierda .box-container .box-imagen{
    padding: 0;
    text-align: left;
    background: #FFFFFF;
  }
  .modulos-detalles-imagen-derecha .box-container .box-imagen{
    padding: 0;
    text-align: left;
    background: #F4F4F4;
  }

  .modulos-detalles-imagen-izquierda .box-container .box-texto{
    margin-top: 30px;
    padding: 2rem 0;
    text-align: left;
    background: #FFFFFF;
  }
  .modulos-detalles-imagen-derecha .box-container .box-texto{
    margin-top: 30px;
    padding: 2rem 0;
    text-align: left;
    background: #F4F4F4;
  }



  .modulos-detalles-imagen-izquierda .box-container .box-imagen img, .modulos-detalles-imagen-derecha .box-container .box-imagen img{
    width: 100%;
  }

  .modulos-detalles-imagen-izquierda .box-container .box-texto ul li, .modulos-detalles-imagen-derecha .box-container .box-texto ul li{
    letter-spacing: 0.5px;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
  

  /*Estilos sección modos diurno y nocturno*/
  .modos {
    height: 100%;
    width: 100%;
    background-image: linear-gradient(to right, #F4F4F4, #FFFFFF);
    text-align: center;
  }

  .modos h2 {
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 2px;
    text-align: center;
    margin: 40px 80px 80px 80px;

  }

  .modos .box-modos img {
    width: 45%;
  }


  /*Estilos sección Clientes*/

  .clientes {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to right, #FFFFFF, #F4F4F4);
    text-align: center;
  }

  .clientes h2 {
    font-size: 2rem;
    letter-spacing: 1.5px;
    font-weight: bold;
  }

  .clientes p {
    font-size: 1.2rem;
  }

  .clientes .clientes-logos {
    margin-left: 40px;
    margin-right: 40px;
  }
  .clientes .clientes-logos .dos-clientes img {
    padding: 10px;
    margin: 40px 20px 0 20px;
    width: 20%;
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
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 60px;
    padding: 100px 0px 35px 0px;
    text-align: left;
  }

  .pregunta-respuesta .pregunta {
    justify-content: left;  
  }

  .pregunta-respuesta .respuesta{
    margin-left: 60px;
  }

  .logo-mas {
    margin-left: 60px;
    margin-right: 0px;
    float: left;
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
    padding: 11px;
    width: 10vw;
  }

  #deja-correo, #deja-correo2 {
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

  /*-------------------Media queries-------------------*/

  @media screen and (max-width: 952px){
        .home {
          height: 140vw;
          max-height: 800px;
          margin-left: 30px;
          margin-right: 30px;
          padding-left: 15px;
          padding-right: 15px;
        }
    }

  @media screen and (max-width: 858px){

      /*MÓDULOS DETALLES*/

      .modulos-detalles-imagen-izquierda .box-container, .modulos-detalles-imagen-derecha .box-container {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 0.5rem;
        padding: 0;
      }

      .modulos-detalles-imagen-izquierda .box-container .box-imagen{
        padding-bottom: 0;
        margin-bottom: 0;
      }

      .modulos-detalles-imagen-derecha .box-container .box-imagen{
        padding-bottom: 0;
        margin-bottom: 0;
        order: 1;
      }

      .modulos-detalles-imagen-derecha .box-container .box-texto{
        margin-top: 0;
        order: 2;
      }

      .modulos-detalles-imagen-izquierda h2, .modulos-detalles-imagen-derecha h2 {
        text-align: center;
        font-size: 6vw;
        line-height: 1px;
        letter-spacing: 1px;
        margin-top: 30px;
        margin-bottom: 30px;
        margin-left: 0;
      }

      .modulos-detalles-imagen-izquierda .box-container .box-texto, .modulos-detalles-imagen-derecha .box-container .box-texto{
        padding: 1rem 0.5rem;
        text-align: left;
      }

      
      .modulos-detalles-imagen-izquierda .box-container .box-texto ul li, .modulos-detalles-imagen-derecha .box-container .box-texto ul li{
        letter-spacing: 0.5px;
        font-size: 0.9rem;
      }


      .home {
        margin: auto;
        width: 100%;
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


        /*CONTÁCTANOS*/
        .form-contactanos {
          background: #FFFFFF;
          margin-top: 80px;
          margin-bottom: 0px;
          padding: 60px 10px 0px 10px;
      }

        .form-contactanos h1 {
          font-size: 30px;
          padding-bottom: 30px;
      }

        .form-contactanos p {
          margin-left: 40px;
          margin-right: 40px;
          margin-bottom: 40px;
          font-size: 22px;
          letter-spacing: 1px;
          line-height: 25px;
      }


        .ingresar { 
          padding: 10px;
          width: 10vw;
          font-size: 20px;
          box-shadow: none;
          border: none;
        }


        .form-contactanos .small-msjs .msj {
          color: #000000;
          font-size: 1rem;
        }

        /*MÓDULOS*/

        .titulo-modulos {
          margin: 0;
          margin-top: 60px;
          margin-bottom: 20px;
          background: #FFFFFF;
          display: block;
          
        }
        .titulo-modulos h2 {
          font-size: 2rem;
          font-weight: bold;
        }


        .modulos {
            width: 100%;
            height: 100%;
            background: #FFFFFF;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 0;
            margin-top: 0px;
            padding: 20px 40px;
            align-items: center;
            text-align: center;
        }
  
        .modulo {
          height: 100px;
          padding-bottom: 5px;
        }

        .modulo img {
          height: 75px;
        }


        



        /*MODOS DIURNO Y NOCTURNO*/


        .modos h2 {
          font-size: 1.8rem;
          font-weight: bold;
          letter-spacing: 1.5px;
          text-align: center;
          margin: 40px 5px;
        }

        .modos .box-modos {
          text-align: right;
        }

        .modos .box-modos img {
          width: 95%;
        }

        #like {
          height: 50px;
          margin-bottom: 20px;
        }



        /*CLIENTES*/


        .clientes {
          padding: 40px 0;
        }
        .clientes h2 {
          font-size: 1.5rem;
          letter-spacing: 1px;
          font-weight: bold;
        }

        .clientes p {
          font-size: 1rem;
        }

        .clientes .clientes-logos {
          margin-left: 10px;
          margin-right: 10px;
        }
        .clientes .clientes-logos .dos-clientes img {
          padding: 5px;
          margin: 20px 10px 0 10px;
          width: 30%;
        }

        /*PREGUNTAS FRECUENTES*/

        .preguntas {
          width: 100%;
          height: 550px;
          background: #FFFFFF;
          padding-top: 60px;
          padding-left: 0px;
          padding-right: 0;
          
        }
        .preguntas h3 {
          font-size: 30px;
          font-weight: bold;
          text-align: center;
        }
        .preguntas p {
          margin-right: 10px;
          margin-left: 10px;
          font-size : 15px;
        }

        .preguntasfr {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          grid-gap: 5px;
          padding: 35px 0px;
          text-align: left;
          background: #FFFFFF;
        }
        .preguntasfr .pregunta {
          text-align: center;
        }

        .logo-mas {
          float: left;
          height: 20px;
        }

        .oc{
          display: none;
        }


        #form-prueba {
          height: 700px;
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
        #deja-correo, #deja-correo2 {
          text-align: center;
          border-radius: 35px;
          padding: 10px;
          width: 90%;
          height: 60px;
          margin-bottom: 10px;
          font-size: 13px;
        }
        .msj {
          font-size: 18px;
        }
        .enviar , .ingresar{
          width: 180px;
          height: 60px;
          margin-bottom: 20px;
        }


    }

</style>
