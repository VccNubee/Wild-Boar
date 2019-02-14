<template>
  <div class="productlist">
    一级详情
    <ul>
    	<!-- <li v-for="products in datalist" @click="hadnleClick(products)">
    		<img :src="products.imageUrl">
    		<h3>{{products.productName}}</h3>
    	</li> -->
    	<li>
    		<img src="https://cdn14.mei.com/product/YEX-113-00094/b87316eec89efc31d8c2875c90d75642.jpg@300w_400h_2e_75q">

    	</li>
    </ul>
  </div>
</template>

<script>
	import Vue from 'vue'
	import axios from "axios"
	export default {
		// data(){
		// 	return {
		// 		looplist:[]
		// 	}
		// },
		created(){

		},

		mounted(){
			console.log(this.$route.params.myid)
			axios({
				url:`http://www.mei.com/appapi/event/product/v3?pageIndex=1&categoryId=2121005100000001991&key=&sort=&timestamp=1550125192415&summary=43259576322a75c7a16d0e7edb6d9b4d&platform_code=H5`,

			}).then(res=>{
				console.log(res.data.products);
				this.looplist = res.data.imageUrl
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

</style>
