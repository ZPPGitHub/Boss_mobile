<template>
	<div class="slide_tab">
		<ul class="recom">
			<li @click= "mend('推荐')" :class="{'selected': item == '推荐'}">
				<span>推荐</span>
				<i class="iconfont icon-iconfontcheck"></i>
			</li>
			<li @click= "mend('最新')" :class="{'selected': item == '最新'}">
				<span>最新</span>
				<i class="iconfont icon-iconfontcheck"></i>
			</li>
		</ul>
	</div>
</template>

<script>
export default{
	name: 'recom',
  	props:{
  		recomes: String
  	},
	data(){
		return{
			item: this.recomes
		}
	},
	methods:{
		mend(ite){
			this.item = ite
		}
	},
	watch: {
		item(){
			this.$emit('mends',this.item)
		}
	}
}
</script>

<style scoped>
.recom{background: #e9efef;padding: .4rem .6rem}
.recom li{overflow: hidden;zoom: 1;}
.recom .selected{color: #53cac3}
.recom .selected i{display: block;}
.recom li span,.recom li i{float: left;line-height: 1.2rem}
.recom li i{display: none;margin-left: .15rem;font-size: 24px}
</style>