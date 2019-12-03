<template>
	<div class="interact">
		<div class="inter_head">
			<ul>
				<li @click= "inten(0)" :class= "{'ishead': isact == 0}">对我感兴趣</li>
				<li @click= "inten(1)" :class= "{'ishead': isact == 1}">看过我</li>
				<li @click= "inten(2)" :class= "{'ishead': isact == 2}">新职位</li>
			</ul>
		</div>
		<div class="interact_list"></div>
	</div>
</template>

<script>
export default{
	name: 'interact',
	data(){
		return{
			isact: 0
		}
	},
	methods:{
		inten(n){
			this.isact = n
		}
	}
}
</script>

<style scoped>
.inter_head{height: 1rem;line-height: 1rem;border-bottom: .013rem #e9efef solid}
.inter_head ul{display: flex;width: 8rem;margin: 0 auto}
.inter_head ul li{flex: 1;text-align: center;color: #cbcbcb}
.inter_head .ishead{color: #979797;border-bottom: 2px #53cac3 solid}
</style>