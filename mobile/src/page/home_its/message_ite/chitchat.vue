<template>
	<div class="chitchat">
		<div class="search_name">
			<div class="search">
				<i class="iconfont icon-sousuo"></i>
				<span>通过姓名或公司名搜索联系人</span>
			</div>
			<div class="message_seach">
				<span>联系人</span>
				<span>极速处理</span>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	name: 'chitchat',
	data(){
		return{}
	}
}
</script>

<style scoped>
.search_name{position: relative;}
.search_name .search{margin: .3rem .4rem;background: #f3f3f3;color: gray;line-height: .7rem;border-radius: .1rem}
.search_name .search i{vertical-align:middle;font-size: 20px;margin: 0 .2rem 0 .3rem}
.message_seach{padding: .1rem .4rem .3rem;border-bottom: 1px #e5e5e5 solid}
.message_seach span:last-child{position: absolute;right: .4rem;border:1px #b6b6b6 solid;border-radius: .1rem;font-size: .2rem;padding: .1rem .2rem;color: #000;letter-spacing:.04rem;}
</style>