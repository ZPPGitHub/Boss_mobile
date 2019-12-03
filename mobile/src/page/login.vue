<template>
	<div class="login">
		<router-view></router-view>
		<footer v-if= "hideshow">
			<router-link class= "agreement" to= "Agreement" tag= "a">
				<span>用户协议</span>
			</router-link>
			<router-link class= "PWlogin" to= "Pwlogin" tag= "a">
				<span>密码登录</span>
			</router-link>
		</footer>
	</div>
</template>

<script>
export default{
	name: 'login',
	data(){
		return{
			docmHeight: document.documentElement.clientHeight || document.body.clientHeight,
        	showHeight: document.documentElement.clientHeight || document.body.clientHeight,
        	hideshow:true  //显示或者隐藏footer
		}
	},
	mounted(){
		window.onresize = ()=>{
        	return(()=>{this.showHeight = document.documentElement.clientHeight || document.body.clientHeight})()
      	}
	},
	watch:{
		showHeight:function() {
	        if(this.docmHeight > this.showHeight){
	            //隐藏
	            this.hideshow=false
	        }else{
	            //显示
	            this.hideshow=true
	        }
      	}
	}
}
</script>

<style scoped>
.login{position: fixed;width: 100%;height: 100%;background: linear-gradient(180deg,#a46e92,#27455d)}
footer{width: 100%;position: absolute;left: 0;bottom: 0;display: flex;background: #27455d}
footer:before{content: '';position: absolute;top: 0;width: 100%;height: 1px;background: #42b983}
.agreement,.PWlogin{display: block;text-align: center;line-height: 1.8rem;font-size: .35rem;flex: 1;color: #fff}
</style>