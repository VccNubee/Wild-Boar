<template>
  
    <div class="lop">
    	<div class="divone">
			<div class="divtwo">
				<span class="spanf spone"  @click="$router.back(-1)">←</span>
				<span class="spanf sptwo">{{listName}}</span>
				<span class="spanf spthree">···</span>
			</div>
			<div class="divthree">
				<ul class="aaa">
					<li class="li-class peiqi" @click="renqi()">人气</li>
					<li class="li-class" @click="zhekou()">折扣</li>
					<li class="li-class" @click="jiage()">价格</li>
					<li class="li-class" @click="shaixuan()">筛选</li>
				</ul>
			</div>
		</div>

	<div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="200" class='wai'>
    	<div class="lopChild" v-for="products in looplist" @click="hadnleClick(products)">
    		<img :src="products.imageUrl">
    		<!-- <span>{{products.tagListDto.tag}}</span> -->
    		<h3 class="hbm">{{products.brandName}}</h3>
    		<span class="spanpm">{{products.productName}}</span>
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
				myId:null,
				listName:''
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
				this.listName = res.data.eventName;
			}else{
				return
			}
			})
			
			},
			
			zhekou(){
				this.c=1;
				axios({
					url:`http://www.mei.com/appapi/event/product/v3?pageIndex=${this.c}&categoryId=${this.myId}&key=1&sort=ASC&timestamp=1550231863111&summary=bff679b42a1670469f372cf0e3af7695&platform_code=H5`
				}).then(res=>{
					this.looplist = res.data.products
				})
				this.busy = false;
			},
			renqi(){
				this.c=1;
				axios({
					url:`http://www.mei.com/appapi/event/product/v3?pageIndex=${this.c}&categoryId=${this.myId}&key=&sort=&timestamp=1550125192415&summary=43259576322a75c7a16d0e7edb6d9b4d&platform_code=H5`
				}).then(res=>{
					this.looplist = res.data.products
				})
				this.busy = false;
			},
			jiage(){
				this.c=1;
				this.isRise = !this.isRise
				if(this.isRise == true) {
					axios({
					url:`http://www.mei.com/appapi/event/product/v3?pageIndex=${this.c}&categoryId=${this.myId}&key=&sort=ASC&timestamp=1550285124667&summary=debe425cf0238be6ba5df11d90125831&platform_code=H5`
					}).then(res=>{
						this.looplist = res.data.products
					})
					this.busy = false;
				} else {
					this.c=1;
					axios({
					url:`http://www.mei.com/appapi/event/product/v3?pageIndex=${this.c}&categoryId=${this.myId}&key=&sort=DESC&timestamp=1550285093091&summary=57247a554b959e90eee81e5d876951b0&platform_code=H5`
					}).then(res=>{
						this.looplist = res.data.products
					})
					this.busy = false;
				}
				
			}

		}

	}

</script>

<style scoped lang="scss">
	
	.lop {
		
		display: flex;
      	flex-direction: row;
      	flex-wrap: wrap;
		.wai{
			padding: 10px;
		    .lopChild{
	      	margin: 10px 2.5%;
		    	width: 45%;
		    	display: inline-block;
		    	img {
					width: 100%;
		    	}

		    	.hbm {
	    		    white-space: nowrap;
				    text-overflow: ellipsis;
				    overflow: hidden;

		    	}
		    	.spanpm {
		    		display: block;
					 white-space: nowrap;
				    text-overflow: ellipsis;
				    overflow: hidden;
		    		// font-weight: 100px;
		    	}
		    }
		}
	    .tan{
	    	display: flex;
	      	flex-direction: row;
	      	flex-wrap: wrap;

	    	.sp1{
		    	color: red;
				width: 33%;
		    }
		    .sp2{
				width: 34%;
				color: #ccc;
				text-decoration:line-through
		    }
		    .sp3{
		    	color: #666;
		    	width: 33%;
		    }
	    }
	    
	}

	.divone{
		width: 100%;
		height: 80px;
		// position: fixed;
	}
	.divtwo{
		height: 50px;
		line-height: 50px;
		display: flex;
      	flex-direction: row;
      	flex-wrap: wrap;
      	justify-content: space-between;
      	.spone{
			font-size: 25px;
			padding-left: 20px;
			font-weight: 600;

      	}
      	.sptwo{
			font-size: 16px;
			width: 200px;
			text-align: center;
			white-space: nowrap;
		    text-overflow: ellipsis;
		    overflow: hidden;
      	}
      	.spthree{
			// font-weight: 600;
			font-size: 35px;
			padding-right: 20px;
			line-height: 50px;

      	}
      	
	}
	.divthree{
		height: 30px;
		
      	width:100%;
      	ul{
      		display: flex;
      	flex-direction: row;
      	flex-wrap: wrap;
      		height: 30px;
      		width: 100%;
      	}
      	.li-class{
      		height: 30px;
			line-height: 30px;
      		list-style: none;
      		width: 25%;
      		float: left;
      		text-align: center;
      		color: #999;
      		// margin-right: 14px; 
			
      	}
      	// .peiqi {
      	// 	color: #111;
      	// }
      	
		li:hover {
			color: #000;
		}	



		
	}
	
</style>
