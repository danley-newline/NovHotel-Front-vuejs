<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './views/Header.vue'
import Footer from './views/Footer.vue'

export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
body{
  box-sizing: border-box;
  overflow-x: hidden;
}
.bord-btm-ccc{
    border-bottom: 1px solid #ccc;
}
.bord-ccc{
    border: 1px solid #ccc;
}
.font-weight-bold{
    font-weight: bold;
}

.btn-violet{
    background: #3d3074;;
    color: #fff;
}
.color-violet{
    color: #3d3074;
}

.color-bl-dark{
            color: #0e4d8a ;

}
.bg-violet{
    background: #3d3074;
    color: #fff;
}
.btn-blue{
    background: #0e4d8a;
    color: #fff;
}
.bor-rad-10{
  border-radius: 10px;
}
</style>
