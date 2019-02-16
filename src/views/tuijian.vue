<template>
  <div class="haiwai">
    <Nav></Nav>
      <img src="http://www.mei.com/static/img/mktbanner-default.cbf29f0.jpg" alt="">
      <a :href="link"><img :src="imgUrl" alt=""></a>
      
      <div class='newToday' v-for='list in dataList'>
        <p class='Top'>{{list.name}}</p>
        <div v-for='data in list.events' class='product' :style='{background: "url("+ data.imageUrl +") 0% 0% / 100% 100%"}' @click='toDetail(data.categoryId)'>
            <div>
              <p class='p2'>{{data.englishName}}</p>
              <p class='p2'>{{data.chineseName}}</p>
              <p class='p2'>{{data.discountText}}</p>
            </div>
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
import Nav from '../components/nav'

import axios from 'axios'
export default {
    data(){
        return {
            dataList:[],
            current:0,
            busy:false,
            imgUrl:"",
            link:''
        }
    },
    methods: {
        toDetail(id){
            console.log(id)
            this.$router.push(`/productlist/${id}`)
        }
    },
    mounted() {      
        axios({
            url:`http://www.mei.com/appapi/home/newZoneEntrance/v3?credential=`
        }).then(result=>{
          this.imgUrl = result.data.img;
          this.link = result.data.linkUrl;
        })
      axios({
          url:`http://www.mei.com/appapi/home/eventForH5?params=%7B%7D&timestamp=1550222398523&summary=7241e2d1f2fd9d04674774bd24a999c3&platform_code=H5`
      }).then(result=>{
            this.dataList = result.data.lists;
            console.log(result.data.lists)
      })

    },
    components:{
      Nav
  }
}
</script>

<style scoped lang="scss">
    img{
        width: 100%;
    }
    .Top{
      height:50px;
      font-size: 21px;
      line-height: 50px;
      padding-left: 10px;
      margin-bottom: -10px;
      margin-top: 15px;
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

