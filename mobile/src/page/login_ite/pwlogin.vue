<template>
	<article>
		<form>
			<h3>BOSS直聘</h3>
			<ul>
				<li class="input_name inpt">
					<span class="phone_number">
						+86
						<i class="iconfont icon-sanjiaoxing"></i>
					</span>
					<input :class="{'error': isactive}" type="text" v-model= "user_info" @blur= "verification" name="" placeholder="请输入用户名">
				</li>
				<span v-if="isactive" class="user_error">{{ error_item }}</span>
				<li class="input_password inpt">
					<i class="iconfont icon-shouji"></i>
					<input type="password" v-model= "password_info" name="" placeholder="请输入密码">
					<b>获取验证码</b>
				</li>
				<li class="btn">
					<input @click= "submit" type="button" value="登录">
				</li>
			</ul>
		</form>
	</article>
</template>

<script>
//import QS from 'qs'

export default{
	name: 'psword',
	data(){
		return{
			user_info: '',
			password_info: '',
			isactive: false,
			error_item: ''
		}
	},
	methods: {
		submit(){
			var _this = this
			if(this.user_info && this.password_info){
				this.$axios.post("http://localhost:3000/user_name",QS.stringify({
					user_info: this.user_info,
					password_info: this.password_info
				})).then(res => {
					console.log(res.data[0])
					_this.$store.commit('SAVE_TOKEN',res.data[0])
				})
				.catch(error => {
					console.log(error)
				})
			}
		},
		verification(){
			const re = /^1\d{10}$/
			if(this.user_info === ''){
				this.error_item = '手机号不能为空'
				this.isactive = true
			}else if(!re.test(this.user_info)){
				this.error_item = '手机号格式错误'
				this.isactive = true
			}else{
				this.isactive = false
				/*this.isactive = false
				this.$axios.post("http://localhost:3000/user_name",QS.stringify({
					user_info: this.user_info,
					password_info: this.password_info
				})).then(res => {
					console.log(res)
					var num = res.data[0]
					if(num == this.user_info){
						setTimeout(function(){
							_this.error_item = '当前手机号已被注册'
							_this.isactive = true
						},2000)
					}
				})
				.catch(error => {
					console.log(error)
				})
				/*if(this.$route.query.redirect){		跳转回前面的页面
					//  let redirect = decodeURIComponent(this.$route.query.redirect);
  					let redirect = this.$route.query.redirect;
  					this.$router.push(redirect);
				}else{
  					this.$router.push('/');
 				}*/
 			}
		}
	}
}
</script>

<style scoped>
article{width: 90%;position: absolute;left: 50%;top: 10%;transform: translateX(-50%);box-sizing: border-box;}
article h3{text-align: center;margin-bottom: 1.2rem;font-size: 1.2rem;color: #fff}
article .inpt{margin: .6rem 0 .1rem 0}
article .btn{margin-top: 1.5rem}
article li{position:relative;height: 1.2rem;line-height: 1.2rem}
article .inpt:before{content: '';position: absolute;width: 1px;height: 100%;top: 50%;left: 1.6rem;background: #fff;transform: scaleY(.3) translateY(-50%);transform-origin: 0 0;}
article ul .inpt input{width: 100%;line-height: 1.2rem;padding-left: 2rem;border-radius: .8rem}
article li input{font-size: .4rem;color: #fff;transition:all .3s;background: rgba(154,165,181,.3)}
article li input::-webkit-input-placeholder{color: #fff}
.user_error{margin-left:2.8rem;font-size: 27px;color: red}
.input_name .phone_number,.input_password i,.input_password b{display: block;height: .6rem;line-height: .6rem;position: absolute;top: 50%;transform: translateY(-50%);color: #fff;left: .4rem;font-weight: 100}
.input_name .error{border: 1px red solid}
.input_password i{font-size: 45px;left: .6rem}
.input_name i{position: absolute;top: -3px;left: 50px;font-size: 18px}
article .input_password b{padding: 0 .3rem;border: 1px #fff solid;border-radius: .3rem;left: 6.4rem;font-size: .3rem}
article .btn input{width: 100%;height: 100%;cursor: pointer;background: #53cac3;border: 1px #53cac3 solid;border-radius: .8rem;white-space: normal;}
</style>