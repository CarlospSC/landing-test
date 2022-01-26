<template lang="pug">
footer.pie-pagina
    div.grupo-1
        div.box
            figure
                a(href="#")
                    img#logo-rombo(alt="Logo de edutecnia forma de rombo" src="../assets/edutecnia-logo-rombo.png")
        div.box
            h4 
                b Contacto
            p +569 721 349 59
            p edutecniaspa@gmail.com
            p www.edutecnia.cl
        div.box
            h4 
                b Módulos
            p 
                a(href="#gestion") Gestión pedagógica
            p 
                a(href="#asistencia") Asistencia
            p 
                a(href="#rrhh") Recursos Humanos
            p 
                a(href="#contabilidad") Contabilidad
            p 
                a(href="#desempeno") Evualuación de desempeño
            p 
                a(href="#comunicacion") Comunicación
        div.box
            h4 
                b Mapa del sitio
            p 
                a(href="#") Inicio
            p 
                a(href="#modulos") Módulos
            p 
                a(href="#modos") Modo Diurno y Nocturno
            p 
                a(href="#clientes") Clientes
            p 
                a(href="#preguntas") Preguntas Frecuentes
            p 
                a(href="#form-prueba")
                    b Prueba GRATIS

    div.grupo-2
        hr
        small Todos los derechos reservados - Edutecnia &copy; 2021
        div.brand
            img(alt="brandman" src="../assets/BRANDMAN.png" height=20)
</template>

<script>
export default {

}
</script>

<style>

    a {
        text-decoration: none;
        color:black;
    }
    a:hover {
        color: #FF0000;
    }

    .pie-pagina{
        width: 100%;
        background-color: #e6e6e6;
    }
    .pie-pagina .grupo-1{
        width: 100%;
        max-width: 1200px;
        margin: auto;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 50px;
        padding: 35px 0px;
    }
    .pie-pagina .grupo-1 .box figure{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
    .pie-pagina .grupo-1 .box figure img{
        width: 250px;
    }
    .pie-pagina .grupo-1 .box h4{
        margin-bottom: 25px;
        font-size: 18px;
    }
    .pie-pagina .grupo-1 .box p{
        margin-bottom: 5px;
        font-size: 12px;
    }
    .pie-pagina .grupo-2{
        padding: 15px 10px;
        text-align: center;
        letter-spacing: 0px;
    }

    .brand {
        margin: 10px;
    }

    @media screen and (max-width:800px) {
        .pie-pagina .grupo-1 {
            width: 100%;
            grid-template-columns: repeat(1, 1fr);
            grid-gap: 30px;
            padding: 40px 60px;
            align-items: center;
            text-align: left;
        }
        .pie-pagina .grupo-1 .box h4{
        margin-bottom: 25px;
        font-size: 30px;
        }
        .pie-pagina .grupo-1 .box p{
        margin-bottom: 5px;
        font-size: 18px;
        }
    }
</style>