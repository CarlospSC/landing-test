<template lang="pug">
nav.menu 
    label.logo
        img#logo-edutecnia(alt="Logo edutecnia" src="https://i.imgur.com/yGK9smK.png")
    ul.menu-items
        li
            router-link(to="/").navbar-brand  Inicio
        li
            router-link(to="/registro").navbar-brand  Módulos
        li
            router-link(to="/login").navbar-brand  Clientes
        li
            router-link(to="/preguntas").navbar-brand  Preguntas frecuentes
    button.gratis Prueba GRATIS
    span.btn-menu
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAG9JREFUSEvtlckNwCAQA01nlEY6g8qC9rEfjigPKyBiF+CRRoYNWJSwiAuBPzMv1a46AbiJ3q+2a6aaCTVmx9kOTLQ8rtKq3Uskr7po1bNxmWpm8lvVTOiwS8/Jtfzvr7azyEzXp3Ex9T52SfX5qisn1AwfJnWg+AAAAABJRU5ErkJggg=="/>
</template>

<script>
export default {

}
</script>

<style>
    .menu {
        height: 75px;
        width: 100vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10vh 10vh 10vh 10vh; 
        background: blue;
        text-align: right;
    }

    .menu-items {
        display: flex;
        list-style: none;
        margin-right: 30px;
    }

    .menu-items li {
        border-radius: 3px;
        margin: 0 5px;
    }

    .menu-items li a {
        display: block;
        font-size: 15px;
        color:black;
    }

    .menu a.router-link-exact-active {
        color: #FFA500;
    }

    #logo-edutecnia {
        height: 12vh;
        float: left;
    }

    .gratis {
        border: 2px solid #FFFFFF;
        margin: 0 auto;
        padding: 10px;
        width: auto;
        font-size: 16px;
        border-radius: 25px;
        cursor: pointer;
        color: #FFF;
        background-size: 300%;
        transition: 0.8s;
        background-image: linear-gradient(to left, #FFA500, #FF0000);
        box-shadow: 8px 8px 8px 0 gray;
        
    }
    .gratis:hover {
    background-position: right;
    }
    
</style>