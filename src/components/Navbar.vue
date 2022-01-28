<template lang="pug">
section.header
        
    img#logo-edutecnia(alt="Logo edutecnia" src="https://i.imgur.com/yGK9smK.png")

    nav.navbar
        a(href="#")  Inicio
        a(href="#modulos")  Módulos
        a(href="#clientes")  Clientes
        a(href="#preguntas")  Preguntas Frecuentes
        
    a(href="https://portal.edutecnia.cl/login" target="_blank")
        button.btn-gratis#first Prueba GRATIS
    
    div#btn-menu
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAH9JREFUWEft1UsKgDAMANH05npypTsXtYOGQAvTbaikLx9bLHbaYvmECVFFFFKIBCi+VQ9d9JpkfIgxEzKhLr5VDyVb5N91hchtJnREROWknaPkHPuHyufF2EtWeYbfd8qIXKGMUOUOev2Puocye4jKXRJ3yohVIYVIgOL2EAndFg4LJcntgd8AAAAASUVORK5CYII="/>
        
</template>

_____________________________________________________________

<script>



export default {
    components: {
        
    }

}
</script>

_____________________________________________________________

<style>

section {
    background: black;
    padding: 5rem 6%;
}

.header {
    position: sticky;
    top:0; left:0; right:0;
    z-index: 1000;
    background-color: #FFFFFF;
    display: flex;    
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    align-items: center;
    justify-content: space-between;
    box-shadow: lightslategray;
}

#logo-edutecnia {
    max-height: 140px;
    width: 25%;
}

.header .navbar a {
    color: #000000;
    text-decoration: none;
    font-size: 1.2rem;
    margin-left: 2rem;
}

/*
.header .navbar a.router-link-exact-active {
    color: #FF0000;
}
*/

.header .navbar a:hover {
    color: #FFA500;
    transition: 0.2s;
}

.btn-gratis {
    border: 2px solid #FFFFFF;
    padding: 0.5rem;
    width: auto;
    font-size: 0.8rem;
    border-radius: 30px;
    cursor: pointer;
    color: #FFFFFF;
    background-image: linear-gradient(135deg, #FF0000, #FFA500);
    box-shadow: 8px 8px 8px 0 gray;     
}

#first {
    margin-left: 0rem;
    font-size: 1.3rem;
}

.btn-gratis:hover {
    background-image: linear-gradient(135deg, #FFA500, #FF0000);
}


#btn-menu {
    cursor: pointer;
    color: #000000;
    display: none;        
}


/*--------------------------------------Media queries---------------------------------------------*/

@media screen and (max-width: 1200px){
    section{
        padding:3rem 5%;
    }
    .header .navbar a {
        font-size: 1.1rem;
        margin-left: 1.5rem;
    }
    #first {
        font-size: 1.2rem; 
    }
}

@media screen and (max-width: 991px){
    section{
        padding:3rem 2rem;
    }
    .header .navbar a {
        font-size: 1rem;
        margin-left: 1rem;
    }
    #first {
        font-size: 1.1rem; 
        margin-left: 2rem;
    }
}

@media screen and (max-width: 768px){
    section{
        padding:1rem;
    }

    #logo-edutecnia {
        width: 40%;
    }

    .btn-gratis {
        border: 1.5px solid #FFFFFF;
        box-shadow: 0px 8px 8px 0 rgb(221, 221, 221);     
    }

    #first {
        margin-left: 0;
    }

    #btn-menu {
        display: inline-block;
        transition: 0.2s linear;
    }

    #btn-menu.vertical {
        transform: rotate(90deg);
    }

    .header .navbar {
        position: absolute;
        top: 99%; left:0; right:0;
        background-image: linear-gradient(to bottom, #FFA500, #FF0000);
        padding: 2rem;
        text-align: center;
        flex-direction: column;
        transition: 0.2s linear;
        height: 110vw;
        clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
        
    }

    .header .navbar.active {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }

    .header .navbar a {
        display: block;
        margin: 2rem;
        font-size: 1.8rem;

    }
}

@media screen and (max-width: 450px){

    #logo-edutecnia {
        width: 50%;
    }

    #first {
        border: 1.5px solid #FFFFFF;
        padding: 0.4rem;
        font-size: 0.5rem;
        box-shadow: 0px 8px 8px 0 rgb(221, 221, 221);     
    }

    .header .navbar a {
        display: block;
        margin: 2rem;
        font-size: 0.7rem;
    }
}

</style>