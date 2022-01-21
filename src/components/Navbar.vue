<template lang="pug">

nav.menu

    label.logo
        img#logo-edutecnia(alt="Logo edutecnia" src="https://i.imgur.com/yGK9smK.png")
    
    ul.menu-items
        li
            router-link(to="/")  Inicio
        li
            router-link(to="/registro")  Módulos
        li
            router-link(to="/login")  Clientes
        li
            router-link(to="/preguntas")  Preguntas frecuentes
        
    button.btn-gratis#first Prueba GRATIS
    
    span.btn-menu
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAG9JREFUSEvtlckNwCAQA01nlEY6g8qC9rEfjigPKyBiF+CRRoYNWJSwiAuBPzMv1a46AbiJ3q+2a6aaCTVmx9kOTLQ8rtKq3Uskr7po1bNxmWpm8lvVTOiwS8/Jtfzvr7azyEzXp3Ex9T52SfX5qisn1AwfJnWg+AAAAABJRU5ErkJggg=="/>

</template>

<script>
export default {

}
</script>

<style>
    .menu {
        background-color: white;
        height: 120px;
        width: 100vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        /*
        padding: 10vh 10vh 10vh 10vh; 
        */
        text-align: right;
    }

    #logo-edutecnia {
        height: 12vh;
        float: left;
        padding: 0 70px;
    }

    .menu-items {
        display: flex;
        list-style: none;
        margin-right: 100px;
        
    }

    .menu-items li {
        
        border-radius: 3px;
        margin: 0 2px;
    }

    .menu-items li a {
        
        padding: 12px 13px;
        display: block;
        font-size: 15px;
        color:black;
        text-decoration: none;
    }

    .menu a.router-link-exact-active {
        color: #FF0000;
    }

    .menu-items li a:hover {
        background-color: rgba(255, 165, 0, 1);
        transition: 0.5s;
    }
    

    .btn-gratis {
        border: 2px solid #FFFFFF;
        margin: 0 auto;
        padding: 10px;
        width: auto;
        font-size: 16px;
        border-radius: 25px;
        cursor: pointer;
        color: #FFF;
        background-size: 300%;
        transition: 0.5s;
        background-image: linear-gradient(to left, #FFA500, #FF0000);
        box-shadow: 8px 8px 8px 0 gray;
        
    }

    .btn-gratis:hover {
    background-position: right;
    }
    
    .btn-menu {
        margin-right: 30px;
        font-size: 25px;
        color: #FFFFFF;
        cursor: pointer;
        display: none;
    }

    ul.show {
        top: 85px;
    }

    @media screen and (max-width: 952px){
        #logo-edutecnia {
            height: 50px;
            padding-left: 35px;
        }
        .menu-items li a {
            font-size: 12px;
        }
    }
    @media screen and (max-width: 858px){
        .menu {
            justify-content: none;
            height: 85px;
        }
        #logo-edutecnia {
            height: 55px;
            padding-left: 15px;
            
        }
        #first {
            width: 100%;
            height: 50px;
            margin-right: 10px;
            font-size: 13px;
        }
        .btn-menu {
            display: inline-flex;

        }
        .menu-items {
            position: fixed;
            width: 100%;
            height: calc(100% - 85px);
            background: #FFA500;
            top: -100vh;
            text-align: center;
            transition: all 0.5s;
            flex-direction: column;
        }
        .menu-items li {
            margin: 50px 0 0 0;
            line-height: 30px;
        }
        .menu-items li:hover{
            background: none;
        }
        .menu-items li a {
            font-size: 20px;
            color: #FFFFFF;
            font-weight: bold;
        }
        .menu-items li a:hover {
            color: #FF0000;
        }
        

    }
</style>