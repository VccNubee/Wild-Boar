<template>
  <div class="haiwai">
   <div class='nav'>
    <ul>
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
        <p class='Top'>{{product.lists[0].launchTime}}</p>
        <p class = 'Top2'>{{product.tips}}</p>
        <div v-for='data in dataList' class='product' :style='{background: "url("+ data.imgUrl +") 0% 0% / 100% 100%"}'>
            <div>
              <p class='p2'>{{data.englishName}}</p>
              <p class='p2'>{{data.chineseName}}</p>
              <p class='p2'>{{data.discountText}}</p>
            </div>
        </div>
      <footer>
          <p>400 - 644 - 6698</p>
          <ul>
              <li>首页</li>
              <li>|</li>
              <li>客户端</li>
              <li>|</li>
              <li>登陆</li>
              <li>|</li>
              <li>注册</li>
          </ul>
          <p>浙ICP备16004860号-1</p>
      </footer>
  </div>
</template>

<script>

import axios from 'axios'
export default {
    data(){
        return {
            dataList:[],
            product:{},
            busy:false,
             isShow:false
        }
    },
    methods: {

    },
    mounted() {      
      axios({
          url:`http://www.mei.com/appapi/upcoming/index/v3?platform_code=H5&timestamp=1550223989052&summary=5d2dae0beec93bda62f1c9da9887f9c5`
      }).then(result=>{
            this.product = result.data;
            this.dataList = result.data.lists[0].events;
            console.log(this.dataList)
      })
    }
}
</script>

<style scoped lang="scss">
    .Top{
      height:50px;
      font-size: 21px;
      line-height: 50px;
      padding-left: 10px;
      margin-bottom: -10px;
      margin-top: 30px;
    }
    .Top2{
        padding-left: 10px;
    }
    .product{
        z-index: -1;
        height:180px;
        width: 300px;
        margin:0 auto;
        margin-top:10px;
        position: relative;
        div{
            width: 100%;
            position: absolute;
            bottom: 0;
            padding-left: 10px;
            padding-bottom: 5px;
            .p1{
                font-size: 12px;
                background: #ccc;
                display: inline-block;
            }
            .p2{
                height: 16px;
                line-height: 16px;
                font-size: 14px;
                color:#fff;
            }
        }
    }
    footer{
        p{
            font-size: 12px;
            text-align: center;
            margin: 10px 0;
            height: 20px;
            line-height: 20px;
            
        }
        ul{
            list-style: none;
            text-align: center;
            height: 20px;
                line-height: 20px;
            li{
                font-size: 12px;
                height: 20px;
                display: inline;
                margin: 0 10px;

            }
        }
    }
.nav{
  position: fixed;
  width:100%;
  top: 0;
ul{
  width: 100%;
  height:40px;
  white-space: nowrap;
  overflow-y:hidden;
  overflow-x:scroll;
  background: #FFF;
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

