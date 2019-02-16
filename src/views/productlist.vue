<template>
  
    <div class="lop">
    	<div class="divone">
			<div class="divtwo">
				<span class="spanf spone"  @click="houtui()">←</span>
				<span class="spanf sptwo">服饰配饰专场</span>
				<span class="spanf spthree">···</span>
			</div>
			<div class="divthree">
				<ul class="">
					<li class="li-class" @click="renqi()">人气</li>
					<li class="li-class" @click="zhekou()">折扣</li>
					<li class="li-class" @click="jiage()">价格</li>
					<li class="li-class" @click="shaixuan()">筛选</li>
				</ul>
			</div>
		</div>

	<div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="0">
    	<div class="lopChild" v-for="products in looplist" @click="hadnleClick(products)">
    		<img :src="products.imageUrl">
    		<h3>{{products.brandName}}</h3>
    		<h3>{{products.productName}}</h3>
    		<p class="tan">
	    		<span class="sp1">￥{{products.itemPriceDto.price}}</span>
	    		<span class="sp2">￥{{products.marketPrice}}</span>
	    		<span class="sp3">{{products.itemPriceDto.discount}}折</span>
    		</p>
    	</div>
	</div>
    	
    </div>
  </div>
</template>

<script>
	import Vue from 'vue'
	import axios from "axios"
	import infiniteScroll from 'vue-infinite-scroll'
	Vue.use(infiniteScroll)

	export default {
		data(){
			return {
				looplist:[],
				busy: false,
				c:0,
				isRise:true,
				myId:null
			}
		},
		created(){

		},


		mounted(){
			console.log(this.$route.params.myid)
			this.myId = this.$route.params.categoryId
		},
		methods:{
			loadMore(){
				this.c++
				this.busy=true;
				console.log(233)
				axios({
				url:`http://www.mei.com/appapi/event/product/v3?pageIndex=${this.c}&categoryId=${this.myId}&key=&sort=&timestamp=1550125192415&summary=43259576322a75c7a16d0e7edb6d9b4d&platform_code=H5`

			}).then(res=>{
				if(res.data.products.length){
				console.log(res.data.products);
				this.looplist = [...this.looplist,...res.data.products]
				this.busy = false;
			}else{
				return
			}
			})
			
			},
			huoutui(){
				this.$router.go(-1)
			},
			zhekou(){
				axios({
					url:`http://www.mei.com/appapi/event/product/v3?pageIndex=${this.c}&categoryId=${this.myId}&key=1&sort=ASC&timestamp=1550231863111&summary=bff679b42a1670469f372cf0e3af7695&platform_code=H5`
				}).then(res=>{
					this.looplist = res.data.products
				})
			},
			renqi(){
				axios({
					url:`http://www.mei.com/appapi/event/product/v3?pageIndex=${this.c}&categoryId=${this.myId}&key=&sort=&timestamp=1550125192415&summary=43259576322a75c7a16d0e7edb6d9b4d&platform_code=H5`
				}).then(res=>{
					this.looplist = res.data.products
				})
			},
			jiage(){
				this.isRise = !this.isRise
				if(this.isRise == true) {
					axios({
					url:`http://www.mei.com/appapi/event/product/v3?pageIndex=${this.c}&categoryId=${this.myId}&key=&sort=ASC&timestamp=1550285124667&summary=debe425cf0238be6ba5df11d90125831&platform_code=H5`
					}).then(res=>{
						this.looplist = res.data.products
					})
				} else {
					axios({
					url:`http://www.mei.com/appapi/event/product/v3?pageIndex=${this.c}&categoryId=${this.myId}&key=&sort=DESC&timestamp=1550285093091&summary=57247a554b959e90eee81e5d876951b0&platform_code=H5`
					}).then(res=>{
						this.looplist = res.data.products
					})
				}
					

				
			}

			

			// handleClick(index){
			// 	this.$router.push(`/productlist/${index}`)
			// }
		}

	}

</script>

<style scoped lang="scss">
	
	.lop {
		
		display: flex;
      	flex-direction: row;
      	flex-wrap: wrap;
      	margin: 20px;

	    .lopChild{
	    	width: 50%;
	    	display: inline-block;
	    	img {
				width: 100%;
	    	}

	    	h3 {
    		    white-space: nowrap;
			    text-overflow: ellipsis;
			    overflow: hidden;
	    	}
	    }
	    .tan{
	    	display: flex;
	      	flex-direction: row;
	      	flex-wrap: wrap;

	    	.sp1{
		    	color: red;
				width: 30%;
		    }
		    .sp2{
				width: 30%;
				color: #ccc;
				text-decoration:line-through
		    }
		    .sp3{
		    	color: #666;
		    	width: 30%;
		    }
	    }
	    
	}
	.divone{
		width: 100%;
		height: 1.5rem;
	}
	.divtwo{
		display: flex;
      	flex-direction: row;
      	flex-wrap: wrap;
      	justify-content: space-between;
      	.spone{
			font-size: 20px;
      	}
      	.sptwo{
			font-size: 0.575rem;
      	}
      	.spthree{
			font-size: 20px;
      	}
      	
	}
	.divthree{
		margin-top: 10px; 
		display: flex;
      	flex-direction: row;
      	flex-wrap: wrap;
      	ul{
      		width: 100%;
      	}
      	.li-class{
      		list-style: none;
      		width: 20%;
      		float: left;
      		margin-right: 14px; 

      	}
      	.li-m{
      		margin-left: 10px; 
      	}
      	
	}
	
</style>
