<template lang="pug">

<!-- SECCIÓN INTRODUCTORIA-->
div.triangulos-inicio
  div.poligono.gris#n1
  div.poligono.gris#n2



section.home
  div.box-container
    div.box-laptop
      img#laptop1(alt="Laptop screen naranja" src="../assets/laptop-orange.png")
    div.box-titulo
      h1#optimiza Optimiza tu Colegio
    div.box-textomaneja
      p Maneja tu establecimiento educacional de la mejor forma.   
    
  div.two-buttons
    a(href="#quienes-somos")
      button.btn-sabermas Saber más
    a(href="#form-prueba")
      button.btn-gratis#second Pedir Prueba GRATIS



div.triangulos-antes-c
  div.poligono.naranja#n3
  div.poligono.rojo#n4


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


hr

div.triangulo-modulos
  div.poligono.naranja#n5

<!--SECCIÓN MÓDULOS-->
div.titulo-modulos
  h2 Módulos



<!--Triángulo-->



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


div.poligono-naranja#n6


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

div.poligono-naranja#n7

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


div.poligono-naranja#n8



div.poligono-rojo#n9
<!--SECCIÓN DE MODOS DIURNO Y NOCTURNO-->
section.modos#modos
  h2 Una plataforma que se adapta a tus requerimientos con sus Modo Diurno y Modo Nocturno
  div.box-modos
    img#diurno(alt="Imagen de modo diurno" src="../assets/modo-diurno.png")
    img#nocturno(alt="Imagen de modo nocturno" src="../assets/modo-nocturno.png")
  img#like(alt="Icono like" src="../assets/icono-like.png")




div.poligono-rojo#n10
div.poligono-naranjo#n11
<!-- SECCIÓN DE CLIENTES-->

section.clientes#clientes
  h2 Nuestros clientes
  p Conoce algunos de nuestros clientes que ya utilizan la plataforma:
  Clientcarousel

div.poligono-naranjo#n12

<!-- SECCIÓN CAROUSEL -->



<!-- SECCIÓN DE PREGUNTAS FRECUENTES -->

div.poligono-naranjo#n13

div.preguntas#preguntas
  h3 Preguntas Frecuentes
  h4 Conoce las preguntas y respuestas más frecuentes de nuestra plataforma
  div.preguntasfr
    div.pregunta-respuesta
      div.pregunta
        <p> <img class="logo-mas" alt="logo de signo más" src = "../assets/icono-mas.png"> ¿Pregunta Frecuente número 1? </p>
      div.respuesta
        p Pregunta Frecuente número 1

    div.pregunta-respuesta
      div.pregunta
        <p> <img class="logo-mas" alt="logo de signo más" src = "../assets/icono-mas.png"> ¿Pregunta Frecuente número 2? </p>
      div.respuesta
        p Pregunta Frecuente número 2
        
    div.pregunta-respuesta
      div.pregunta
        <p> <img class="logo-mas" alt="logo de signo más" src = "../assets/icono-mas.png"> ¿Pregunta Frecuente número 3? </p>
      div.respuesta
        p Pregunta Frecuente número 3
        
    div.pregunta-respuesta
      div.pregunta
        <p> <img class="logo-mas" alt="logo de signo más" src = "../assets/icono-mas.png"> ¿Pregunta Frecuente número 4? </p>
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



<!--Sección quiénes somos-->
section.quienes-somos#quienes-somos
  div.quienes
    h2 Quiénes somos
    div.historia
      h3 Historia 
        <span class="iconify" data-icon="el:book" style="color: red;"></span>
      p Frente a las diversas demandas que genera a las intituciones educativas la política educativa que tenemos en la actualidad, nos reunimos un grupo de <span>profesionales muy cercanos al mundo de la educación</span> con la intención de presentar una <span>propuesta seria, innovadora</span> y con un profundo interés de ser un <span>aporte real para los colegios</span> que decidan contar con nuestros servicios de capacitación.
    div.vision
      h3 Visión 
        <span class="iconify" data-icon="emojione-monotone:eye" style="color:#FF7816;"></span> 
      p Impulsar un proyecto que nos permita ser identificados como una organización <span>líder, innovadora y creativa</span> en el área de la <span>capacitación y el perfeccionamiento para instituciones educativas</span>.
    div.mision
      h3 Misión 
        //-
          <span class="iconify" data-icon="bi:list-check" style="color: red;"></span>
        <span class="iconify" data-icon="noto:man-superhero-light-skin-tone" style="color: red;"></span>
      p Entregar las herramientas necesarias a <span>docentes, asistentes de la educación y directivos</span> de las instituciones educativas en las <span>diversas áreas de gestión</span>, con el objetivo de que permitan la instalación de <span>mejoras en las prácticas y procesos</span> de las organizaciones.


</template>

<script>

import Clientcarousel from '../components/Clientcarousel.vue'

export default {
  name: 'Home',
  components: {
    Clientcarousel
  }
}
</script>

<style scoped>

/*Estilos sección introductoria*/
  
  html {
  overflow-x: hidden;
  }

  #n1{
    float: left;
    height: 200px;
    width: 100px;
    background: linear-gradient(to left, #E6E6E6, #F4F4F4);
    clip-path: polygon(0 0, 98% 45%, 100% 50%, 98% 55%, 0 100%);
    border-radius: 10% 0 0;

  }
  #n2{
    float: right;
    height: 150px;
    width: 75px;
    background: linear-gradient(to right, #E6E6E6, #F4F4F4);
    clip-path: polygon(0 48%, 100% 0, 100% 100%, 0 52%);
    border-radius: 5% 0 0;
  }




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
    border: 2px solid red;
    color: red;
    transition: 0.5s;
  }
  
  #second {
    padding: 10px;
    font-size: 16px;
    letter-spacing: 0.5px;
  }

  /*Triángulo naranja n3*/
  #n3{
    position: relative;
    bottom: 300px;
    float: right;
    height: 350px;
    width: 175px;
    background: #FFA500;
    clip-path: polygon(0 48%, 100% 0, 100% 100%, 0 52%);
    border-radius: 5% 0 0;
  }

  /*Triángulo rojo n4*/
  #n4{
    position: relative;
    bottom: 100px;
    float: left;
    height: 350px;
    width: 175px;
    background: #FF0000;
    clip-path: polygon(0 0, 100% 48%, 100% 52%, 0% 100%);
    border-radius: 0 0 5%;
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


  /*Triángulo naranjo n5*/

  #n5{
    position: relative;
    top: 70px;
    float: right;
    height: 100px;
    width: 50px;
    background: #FFA500;
    clip-path: polygon(0 48%, 100% 0, 100% 100%, 0 52%);
    border-radius: 5% 0 0;
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
    padding-top: 0.5vw;
  }

  .modulo:hover {
    border: 3px solid red;
  }
  /*Estilos sección Gestión Pedagógica*/


  #n6{
    position: relative;
    bottom: 70px;
    float: left;
    height: 130px;
    width: 65px;
    background: #FFA500;
    clip-path: polygon(0 0, 100% 48%, 100% 52%, 0% 100%);
    border-radius: 0 0 5%;
  }

   #n7{
    position: relative;
    bottom: 60px;
    float: left;
    height: 110px;
    width: 55px;
    background: #FF0000;
    clip-path: polygon(0 0, 100% 48%, 100% 52%, 0% 100%);
    border-radius: 0 0 5%;
  }

   #n8{
    position: relative;
    bottom: 70px;
    float: left;
    height: 130px;
    width: 65px;
    background: #FFA500;
    clip-path: polygon(0 0, 100% 48%, 100% 52%, 0% 100%);
    border-radius: 0 0 5%;
  }

  .modulos-detalles-imagen-izquierda {
    clip-path: polygon(0 10%, 100% 0%, 100% 90%, 0% 100%);
    background: #FFFFFF;
  }

  .modulos-detalles-imagen-derecha {
    clip-path: polygon(0 10%, 100% 0%, 100% 90%, 0% 100%);
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
    width: 50%;
    padding: 0;
    text-align: left;
    background: #FFFFFF;

  }
  .modulos-detalles-imagen-derecha .box-container .box-imagen{
    width: 50%;
    padding: 0;
    text-align: left;
    background: #F4F4F4;
  }

  .modulos-detalles-imagen-izquierda .box-container .box-texto{
    width: 50%;
    margin-top: 30px;
    padding: 2rem 0;
    text-align: left;
    background: #FFFFFF;
  }
  .modulos-detalles-imagen-derecha .box-container .box-texto{
    width: 50%;
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

  #n9{
    position: relative;
    top: 0px;
    float: right;
    height: 150px;
    width: 75px;
    background: #FF0000;
    clip-path: polygon(0 48%, 100% 0, 100% 100%, 0 52%);
    border-radius: 5% 0 0;
  }



  .modos {
    height: 100%;
    width: 100%;
    background: #FFFFFF;
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
    margin-left: 45px;
  }


  /*Estilos sección Clientes*/

  #n10{
    position: relative;
    bottom: 75px;
    float: right;
    height: 150px;
    width: 75px;
    background: #FF0000;
    clip-path: polygon(0 48%, 100% 0, 100% 100%, 0 52%);
    border-radius: 5% 0 0;
  }
  #n11{
    position: relative;
    top: 0px;
    left: 80px;
    float: left;
    height: 150px;
    width: 150px;
    background: #FA5000;
    clip-path: polygon(0 0, 100% 0, 52% 50%, 47% 50%);
    border-radius: 5% 0 0;
  }
  #n12{
    position: relative;
    bottom: 150px;
    right: 80px;
    float: right;
    height: 150px;
    width: 150px;
    background: #FA5000;
    clip-path: polygon(0 100%, 100% 100%, 52% 50%, 48% 50%);
    border-radius: 5% 0 0;
  }

  .clientes {
    width: 100%;
    height: 100%;
    background: #F4F4F4;
    text-align: center;
  }

  .clientes h2 {

    text-align: center;
    padding: 0.5rem;
    font-size: 2.2rem;
    letter-spacing: 1.5px;
    font-weight: bold;
    
  }

  .clientes p {
    padding: 1rem;
    font-size: 1.2rem;
  }


  /*Estilos sección preguntas frecuentes*/

  #n13{
    position: relative;
    top: 60px;
    left: 120px;
    float: left;
    height: 130px;
    width: 130px;
    background: #FA5000;
    clip-path: polygon(0 50%, 50% 100%, 100% 50%, 50% 0);
    border-radius: 50%;
  }


  .preguntas {
    padding-bottom: 40px;
    width: 100%;
    height: 100%;
    background: #FFFFFF;
    padding-top: 80px;
    
  }
  .preguntas h3 {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    letter-spacing: 1.5px;
  }
  .preguntas h4 {
    font-size : 1.2rem;
    text-align: center;
  }

  .preguntas p {
    font-size: 20px;
  }

  .preguntasfr {
    box-sizing: border-box;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
    padding: 100px 0px 35px 0px;
    align-items: center;
  }

  .pregunta-respuesta {
    text-align: center;
  }


  .pregunta-respuesta .respuesta{
    margin-left: 40px;
  }

  .logo-mas {
    margin-left: 120px;
    margin-right: 0px;
    float: left;
    height: 30px;
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


  /*Estilos sección quiénes somos*/
    .quienes-somos {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    background: #F4F4F4;
    padding: 6rem 2rem 4rem 2rem;
    display: flex;
  }

  .quienes-somos h2 {
    text-align: center;
    font-size: 2.2rem;
    font-weight: bold;
    margin-bottom: 3rem;
    letter-spacing: 2px;
  }

  .quienes-somos .quienes .historia, .quienes-somos .quienes .vision, .quienes-somos .quienes .mision{
    box-sizing: border-box;
    padding: 3rem;
    align-items: center;
    height: 100%;
    width: 33.3%;
    display: block;
    float: left;
  }


  .quienes-somos .quienes .historia h3, .quienes-somos .quienes .vision h3, .quienes-somos .quienes .mision h3{
    color: red;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 3rem;
    letter-spacing: 1.5px;
    font-weight: bold;
  }

  .quienes-somos .quienes .vision h3 {
    color:#FF7816;
  }

  .quienes-somos .quienes .historia p, .quienes-somos .quienes .vision p, .quienes-somos .quienes .mision p{
    font-size: 1.2rem;
    text-align: left;
    letter-spacing: 1px;
  }  

  .quienes-somos .quienes .historia p span, .quienes-somos .quienes .mision p span {
    font-weight: bold;
    color:#FF7816;
  }

  .quienes-somos .quienes .vision p span {
    color: red;
    font-weight: bold;
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

      .home {
        margin: 0 auto;
        height: 100%;
        width: 100%;
        align-items: center;
        background: #FFFFFF;
      }

      .home .box-container {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 0.5rem;
        padding: 0;
      }

      .home .box-container .box-titulo {
        order: 1;
        width: 100%;
        height: 100%;
      }

      .home .box-container .box-titulo h1{
        text-align: center;
        font-size: 3.5rem;
      }

      .home .box-container .box-textomaneja {
        order: 2;
      }

      .home .box-container .box-textomaneja p{
        text-align: center;
        font-size: 1rem;
      }

      .home .box-container .box-laptop {
        order: 3;
        text-align: center;
        align-items: center;
      }

      #laptop1 {
        width: 100%;
      }

      .home .two-buttons {
        text-align: center;
        margin-top: 40px;
        margin-bottom: 0;
      }
      
      #n1, #n2, #n3, #n4, #n5, #n6, #n7, #n8, #n9, #n10, #n11, #n12, #n13 {
        display:none;
      }
      


        /*CONTÁCTANOS*/
        .form-contactanos {
          background: #FFFFFF;
          margin-top: 0px;
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


        
      /*MÓDULOS DETALLES*/
        .modulos-detalles-imagen-izquierda {
        clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
      }

      .modulos-detalles-imagen-derecha {
        clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
      }


      .modulos-detalles-imagen-izquierda .box-container, .modulos-detalles-imagen-derecha .box-container {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 0.5rem;
        padding: 0;
        background: #FFFFFF;
      }

      .modulos-detalles-imagen-izquierda .box-container .box-imagen{
        width:100%;
        padding-bottom: 0;
        margin-bottom: 0;
      }

      .modulos-detalles-imagen-izquierda .box-container .box-texto{
        width: 100%;
      }

      .modulos-detalles-imagen-derecha .box-container .box-imagen{
        width: 100%;
        padding-bottom: 0;
        margin-bottom: 0;
        order: 1;
      }

      .modulos-detalles-imagen-derecha .box-container .box-texto{
        width:100%;
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
        margin-right: 0;
      }

      #desempeno h2 {
        font-size: 5vw;
      }

      .modulos-detalles-imagen-izquierda .box-container .box-texto, .modulos-detalles-imagen-derecha .box-container .box-texto{
        padding: 1rem 0.5rem;
        text-align: left;
      }

      
      .modulos-detalles-imagen-izquierda .box-container .box-texto ul li, .modulos-detalles-imagen-derecha .box-container .box-texto ul li{
        letter-spacing: 0.5px;
        font-size: 0.9rem;
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
          margin-left: 25px;
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
          height: 100%;
          padding-top: 80px;
          padding-left: 10px;
          padding-right: 10px;
        }
        .preguntas h3 {
          font-size: 1.5rem;
          letter-spacing: 1px;
        }

        .preguntas h4 {
          margin-right: 10px;
          margin-left: 10px;
          font-size : 1rem;
          letter-spacing: 1px;
        }
        .preguntas p {
          margin-right: 10px;
          margin-left: 10px;
          font-size : 15px;
        }

        .preguntasfr {
          box-sizing: border-box;
          text-align: left;
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          grid-gap: 5px;
          padding: 35px 0px;
        }

        .pregunta-respuesta .respuesta {
          margin-left: 0;
        }


        .logo-mas {
          margin-left: 25px;
          margin-right: 0px;
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

        /*Sección quiénes somos*/
        .quienes-somos {
          box-sizing: border-box;
          padding: 4rem 0 8rem 0;
        }
        
        .quienes-somos h2 {
          box-sizing: border-box;
        }

        .quienes-somos .quienes .historia{
          padding: 0 2rem 0 2rem;
          width: 100%;
          height: 40%;
        }

        .quienes-somos .quienes .vision {
          padding: 0 2rem 0 2rem;
          width: 100%;
          height: 30%;
        }

        .quienes-somos .quienes .mision {
          padding: 0 2rem 0 2rem;
          width: 100%;
          height: 30%;
        }

        .quienes-somos .quienes .historia p, .quienes-somos .quienes .vision p, .quienes-somos .quienes .mision p{
          font-size: 0.9rem;
          text-align: left;
          letter-spacing: 1px;
        }  
        
    }

</style>
