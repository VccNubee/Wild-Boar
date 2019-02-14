<template>
  <div class="zhonglei">
    <Nav></Nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from '../components/nav'
export default {
  components:{
    Nav
  }
}
</script>

<style scoped lang="scss">
    
</style>