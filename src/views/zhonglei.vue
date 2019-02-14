<template>
  <div class="zhonglei">
  <Nav></Nav>
    <h1>This is an 种类 page</h1>
    <router-link tag='a' to='/productlist'>详情</router-link>
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