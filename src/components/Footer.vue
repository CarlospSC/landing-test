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
            p Gestión pedagógica
            p Asistencia
            p Recursos Humanos
            p Contabilidad
            p Evualuación de desempeño
            p Comunicación
        div.box
            h4 
                b Mapa del sitio
            p Inicio
            p Módulos
            p Modo Diurno y Nocturno
            p Clientes
            p Preguntas Frecuentes
            p 
                b Prueba GRATIS

    div.grupo-2
        hr
        small Todos los derechos reservados - Edutecnia &copy; 2021
</template>

<script>
export default {

}
</script>

<style>
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
    @media screen and (max-width:800px) {
        .pie-pagina .grupo-1 {
            width: 90%;
            grid-template-columns: repeat(1, 1fr);
            grid-gap: 30px;
            padding: 30px 80px;
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