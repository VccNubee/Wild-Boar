<template>
  <div class='nav'>
    <ul :class="isShow?'show':'not'">
      <router-link tag='li' to='/tuijian' activeClass='active'>推荐</router-link>
      <router-link tag='li' to='/zhonglei/haiwai' activeClass='active'>海外</router-link>
      <router-link tag='li' to='/zhonglei/nvshi' activeClass='active'>女士</router-link>
      <router-link tag='li' to='/zhonglei/nanshi' activeClass='active'>男士</router-link>
      <router-link tag='li' to='/zhonglei/meizhuang' activeClass='active'>美妆</router-link>
      <router-link tag='li' to='/zhonglei/jiaju' activeClass='active'>家具</router-link>
      <router-link tag='li' to='/zhonglei/yingtong' activeClass='active'>婴童</router-link>
      <!-- <router-link v-for='list in dataListTag' tag='li' to='/zhonglei' activeClass='active'>{{list.name}}</router-link> -->
      <router-link tag='li' to='/jijiangtuichu' activeClass='active'>即将上架</router-link>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return {
      // dataListTag:[],
      // dataList:[]
      isShow:false
    }
  },
  mounted() {
    // axios({
    //     url:`http://www.mei.com/appapi/silo/navigationAll/v3?timestamp=1550120839786&summary=8471cd1db3b4f303506145fee4e2d9c9`,
    // }).then(result=>{
    //   this.dataListTag = result.data.lists
    // })
    window.onscroll = this.fix
  },
    beforeDestroy() {
      window.onscroll = null;
    },
  methods: {
    fix(){
      if(document.documentElement.scrollTop==0){
        this.isShow = false;
      }else{
        this.isShow = true
      }
    }
  }
}
</script>
<style scoped lang='scss'> 
.show{
  background: #fff;
}
.not{
  color:#fff;
}
.nav{
  position: fixed;
  width:100%;
  top: 0;
  z-index: 99;
ul{
  width: 100%;
  height:40px;
  white-space: nowrap;
  overflow-y:hidden;
  overflow-x:scroll;
  li{
    height:40px;
    display:inline-table;
    vertical-align: top;
    font-size: 12px;
    line-height: 40px;
    padding:0 10px;
  }
}
}
</style>

