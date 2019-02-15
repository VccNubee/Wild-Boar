<template>
  <!-- <div class="productlist">
  	<div  class="topMenuBar">
  		<div  class="topbar" id="topBar" style="background: rgb(255, 255, 255);">
  			<div class="left">
  				<a class="back">
  					<span class="iconfont mei-arrow">
  						
  					</span>
  				</a>
  			</div> 
  			<div class="title">
  				<span >服饰配饰专场</span> 
  			</div> 
  			<div class="right">
  				<div class="switch-menu">
  					<a class="show-menu">
  						<span class="iconfont mei-dot">
  							
  						</span>
  					</a> 
  				</div> 
  				</div>
  			</div> 
  			<div class="menu">
  				<div  class="box">
  					<ul>
  						<li class="current">人气</li> 
  						<li class="">折扣</li> 
  						<li class="price up">
  							<span>价格</span>
  						</li> 
  						<li class="filter">筛选</li>
  					</ul>
  				</div>
  			</div>
  		</div>
 -->


    <div>
    	<div v-for="products in looplist" @click="hadnleClick(products)">
    		<img :src="products.imageUrl">
    		<!-- <h3>{{products.productName}}</h3> -->
    	</div>
    	<!-- <li>
    		<img src="https://cdn14.mei.com/product/YEX-113-00094/b87316eec89efc31d8c2875c90d75642.jpg@300w_400h_2e_75q">

    	</li> -->
    </div>
  </div>
</template>

<script>
	import Vue from 'vue'
	import axios from "axios"
	export default {
		data(){
			return {
				looplist:[]
			}
		},
		created(){

		},

		mounted(){
			console.log(this.$route.params.myid)
			axios({
				url:`http://www.mei.com/appapi/event/product/v3?pageIndex=1&categoryId=2121005100000001991&key=&sort=&timestamp=1550125192415&summary=43259576322a75c7a16d0e7edb6d9b4d&platform_code=H5`,

			}).then(res=>{
				console.log(res.data.products);
				this.looplist = res.data.products
			})
		},
		methods:{
			handleClick(index){
				this.$router.push(`/productlist/${index}`)
			}
		}
	}
</script>

<style scoped lang="scss">
	// .topMenuBar[data-v-739eeef1] {
	//     position: relative;
// 	    z-index: 13500;
// 	}
// 	.topbar[data-v-aa36b710] {
//     z-index: 9999;
//     width: 100%;
//     height: 1.173333rem;
//     position: relative;
//     display: -ms-flexbox;
//     display: -webkit-box;
//     display: flex;
//     -ms-flex-direction: row;
//     -webkit-box-orient: horizontal;
//     -webkit-box-direction: normal;
//     flex-direction: row;
//     -ms-flex-wrap: nowrap;
//     flex-wrap: nowrap;
//     -ms-flex-pack: justify;
//     -webkit-box-pack: justify;
//     justify-content: space-between;
//     background-color: hsla(0,0%,100%,.95);
// }
	div {
		 display: flex;
      	flex-direction: row;
      	flex-wrap: wrap;
      // flex-wrap: no-wrap;
		// width: 640px;
	    div{
	    	width: 50%;
	    	img {
				width: 100%;
	    	}
	    	
	    }
	}
</style>
