<template>
  <div class="haiwai"  v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="200">
      <img src="http://www.mei.com/static/img/mktbanner-default.cbf29f0.jpg" alt="">
      <div v-for='data in dataList' class='product' :style='{background: "url("+ data.imageUrl +")",backgroundSize: "100%"}' @click='toDetail(data.categoryId)'>
          <div>
            <p class='p1'>海外直发</p>
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
import Vue from 'vue'
import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)

import axios from 'axios'
export default {
    data(){
        return {
            dataList:[],
            current:0,
            busy:false
        }
    },
    methods: {
        loadMore(){
            this.current++
            this.busy = true;
            axios({
                 url:`http://www.mei.com/appapi/silo/eventForH5?categoryId=crossborder&pageIndex=${this.current}&timestamp=1550130910850&summary=ca836ad8699a672e5c37de7fd8140afd&platform_code=H5`
            }).then(result=>{
                if(result.data.eventList.length){
                    this.dataList = [...this.dataList,...result.data.eventList];
                    this.busy = false;
                }else{
                    return
                }
            })
        },
        toDetail(id){
            console.log(id)
            this.$router.push(`/productlist/${id}`)
        }
    },
    mounted() {      
        // axios({
        //     url:`http://www.mei.com/appapi/silo/eventForH5?categoryId=crossborder&pageIndex=1&timestamp=1550130910850&summary=ca836ad8699a672e5c37de7fd8140afd&platform_code=H5`
        // }).then(result=>{
        //   this.dataList = result.data.eventList;
        // })
    }
}
</script>

<style scoped lang="scss">
    img{
        width: 100%;
    }
    .product{
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
</style>

