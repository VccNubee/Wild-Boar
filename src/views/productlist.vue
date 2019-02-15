<template>
  <div class="productlist">
  	<div data-v-739eeef1="" class="topMenuBar">
  		<div data-v-aa36b710="" data-v-739eeef1="" class="topbar" id="topBar" style="background: rgb(255, 255, 255);">
  			<div data-v-aa36b710="" data-spm="NavbarBack" class="left">
  				<a data-v-aa36b710="" class="back">
  					<span data-v-aa36b710="" class="iconfont mei-arrow">
  						
  					</span>
  				</a>
  			</div> 
  			<div data-v-aa36b710="" class="title">
  				<span data-v-aa36b710="">服饰配饰专场</span> <!---->
  			</div> 
  			<div data-v-aa36b710="" class="right">
  				<div data-v-aa36b710="" data-spm="NavbarSwitch" class="switch-menu">
  					<a data-v-aa36b710="" class="show-menu">
  						<span data-v-aa36b710="" class="iconfont mei-dot">
  							
  						</span>
  					</a> <!---->
  				</div> 
  				<!----></div>
  			</div> 
  			<div data-v-7a0672c3="" data-v-739eeef1="" class="menu">
  				<div data-v-7a0672c3="" class="box">
  					<ul data-v-7a0672c3="">
  						<li data-v-7a0672c3="" class="current">人气</li> 
  						<li data-v-7a0672c3="" class="">折扣</li> 
  						<li data-v-7a0672c3="" class="price up">
  							<span data-v-7a0672c3="">价格</span>
  						</li> 
  						<li data-v-7a0672c3="" class="filter">筛选</li>
  					</ul>
  				</div>
  			</div>
  		</div>

    <div>
    	<div v-for="products in looplist" @click="hadnleClick(products)">
    		<img :src="products.imageUrl">
    		<h3>{{products.productName}}</h3>
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
	.topMenuBar[data-v-739eeef1] {
	    position: relative;
	    z-index: 13500;
	}
	.topbar[data-v-aa36b710] {
    z-index: 9999;
    width: 100%;
    height: 1.173333rem;
    position: relative;
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    -ms-flex-direction: row;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -ms-flex-pack: justify;
    -webkit-box-pack: justify;
    justify-content: space-between;
    background-color: hsla(0,0%,100%,.95);
}
	// div {
	//     width: 4.4rem;
	//     height: 8.053333rem;
	//     margin-bottom: .266667rem;
	//     display: inline-block;
	// }
</style>
