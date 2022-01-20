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
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  * {
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 1px;
  }
</style>
