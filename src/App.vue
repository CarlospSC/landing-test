<template>
  <Topline/>
  <Navbar/>
  <router-view/>
  
  <Footer/>
</template>

<script>
import Topline  from './components/Topline.vue'
import Navbar  from './components/Navbar.vue'
import Footer  from './components/Footer.vue'

export default ({
  components: {
    Topline,
    Navbar,
    Footer
  }
})
</script>


<style>

*, *:before, *:after {
  margin: 0; padding: 0;
  outline: none; border:none;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  /*
  letter-spacing: 1px;
  */
}

html {
  overflow-x: hidden;
}

html::-webkit-scrollbar{
  width: 0.7rem;
}

html::-webkit-scrollbar-track{
  background-color: #FFCC95;   
}

html::-webkit-scrollbar-thumb{
  background-color: #FFA500;   
}

</style>
