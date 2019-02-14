<template>
  <div id="app">
    <ul>
      <router-link tag='li' to='/tuijian' activeClass='active'>推荐</router-link>
      <router-link tag='li' to='/' activeClass='active'>推荐</router-link>
      <router-link tag='li' to='/' activeClass='active'>推荐</router-link>
      <router-link tag='li' to='/' activeClass='active'>推荐</router-link>
      <router-link tag='li' to='/' activeClass='active'>推荐</router-link>
    </ul>
    <router-view/>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
*{
  padding:0;
  margin:0;
}
ul{
  list-style: none;
  li{
    float: left;
  }
}
</style>
