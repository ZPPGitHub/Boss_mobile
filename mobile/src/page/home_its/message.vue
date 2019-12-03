<template>
	<div class="message">
		<div class="message_head">
			<div>
				<router-link :to= "{name: 'chitchat'}" class= "teract">聊天</router-link>
				<router-link :to= "{name: 'interact'}" class= "teract">互动</router-link>
			</div>
			<router-link class= "taret" :to= "{name: 'inform'}">
				<i class="iconfont icon-icon--"></i>
			</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
export default{
	name: 'message',
	data(){
		return{

		}
	}
}
</script>

<style scoped>
.message{position: relative;width: 100%;}
.message_head{position: relative;background: #53cac3;font-size: 25px;padding: .8rem 0 .3rem 0}
.message_head div{overflow: hidden;zoom:1;}
.message_head div a{float: left;margin: 0 .17rem;color: #F0F0F0}
.message_head .teract:first-child{padding-left: .22rem}
.message_head .taret{position: absolute;right: .3rem;bottom: .3rem}
.message_head .taret i{font-size: 40px}
.message .message_head .active{transform: scale(1.4);margin-right: .3rem;color: #fff}

</style>