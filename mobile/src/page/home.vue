<template>
	<div class="home">
		<router-view></router-view>
		<nav>
			<router-link exact :to= "{name: 'jobs'}" tag= "a">
				<i class="iconfont icon-xianxingdiqiu"></i>
				<span>职位</span>
			</router-link>
			<router-link :to= "{name: 'conpany'}" tag= "a">
				<i class="iconfont icon-2fengongsi"></i>
				<span>公司</span>
			</router-link>
			<router-link :to= "{name: 'message'}" tag= "a">
				<i class="iconfont icon-xiaoxi"></i>
				<span>消息</span>
			</router-link>
			<router-link :to= "{name: 'my_profile'}" tag= "a">
				<i class="iconfont icon-wode"></i>
				<span>我的</span>
			</router-link>
		</nav>
	</div>
</template>

<script>
export default{
	name: 'home',
	data(){
		return{
		}
	},
	mounted(){
	},
	methods:{
	}
}
</script>

<style scoped>
.home{position: relative;}
/*nav{width: 100%;position: fixed;bottom: 0;left: 0;display: flex;z-index: 10;background: #fff}
nav{width: 100%;position: fixed;bottom: 0;left: 0;z-index: 99;background: #fff;}*/
nav{width: 100%;position: fixed;bottom: 0;left: 0;z-index: 99;background: #fff;}
nav .active{color: #53cac3}
nav:before{content: '';width: 100%;height: 1px;position: absolute;left: 0;background: gray;transform:scaleY(.3);transform-origin:0 0;}
/*nav a{display: block;flex: 1;text-align: center;padding: .18rem 0;transition: all .5s;color: gray}*/
nav a{display: block;width: 25%;float: left;text-align: center;padding: .18rem 0;transition: all .5s;color: gray}
nav a i{font-size: .6rem}
nav a i,nav a span{display: block}
</style>