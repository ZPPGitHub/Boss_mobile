<template>
	<div class="jobs">
		<header>
			<div class="job_head">
				<div class="job_head_left">
					<span v-for= "(job,index) in jobs" :key= 'index' to= "">{{ job }}</span>
				</div>
				<div class="inforight job_head_right">
					<i class="iconfont icon-jia1"></i>
					<span></span>
					<i class="iconfont icon-sousuo"></i>
				</div>
			</div>
			<div class="job_nav">
				<ul class="flex_parent">
					<li @click = "flex_index('1')" class="flex_child" data-index= "1">
						<span>{{ recommen }}</span>
						<i class="iconfont icon-xia"></i>
					</li>
					<li @click = "flex_index('2')" class="flex_child" data-index= "2">
						<span>{{ citys }}</span>
						<i class="iconfont icon-xia"></i>
					</li>
					<li @click = "flex_index('3')" class="flex_child" data-index= "3">
						<span>公司</span>
						<i class="iconfont icon-xia"></i>
					</li>
					<li @click = "flex_index('4')" class="flex_child" data-index= "4">
						<span>要求</span>
						<i class="iconfont icon-xia"></i>
					</li>
				</ul>
				<recom :recomes= "recommen" @mends= "recoms" v-if= "side_tab == 1"></recom>
				<city :cites= "cityes" @cies= "city_name" v-if= "side_tab == 2"></city>
				<corporation @cotion= "cation" v-if= "side_tab == 3"></corporation>
				<request @quest= "quested" v-if= "side_tab == 4"></request>
				<masks @handle= 'outside' v-if= "side_tab !== ''"></masks>
			</div>
		</header>
		<main></main>
	</div>
</template>

<script>
import recom from '../../../src/components/recommend'
import city from '../../../src/components/city'
import corporation from '../../../src/components/corporation'
import request from '../../../src/components/request'
import masks from '../../../src/components/mask'

export default{
	name: 'jobs',
	components: {
    	recom,
    	city,
    	corporation,
    	request,
    	masks
  	},
	data(){
		return{
			jobs: ['web前端','HTML5'],
			recommen: '推荐',
			citys: '杭州',
			side_tab: '',		//nav导航点开哪个选项
			cityes: '',			//axios拿到的城市名
			coration: '',		//传过来的公司选项
			quests: '',			//传过来的要求选项
			handleClick: true
		}
	},
	mounted(){
	},
	methods:{
		flex_index(num){
			var _this = this
			if(this.side_tab !== ''&&this.side_tab === num){
				this.side_tab = ''
			}else{
				this.side_tab = num
			}
			if(num == 2){
				this.$axios.get('http://localhost:3000/city',{
					params: {
						name: this.citys
					}
				}).then((res) =>{
					console.log(res.data[10].city[0].county)
					_this.cityes = res.data[10].city[0].county
				})
			}
		},
		recoms(total){
			this.recommen = total
		},
		city_name(tota){
			this.citys = tota
		},
		cation(tatol){
			this.coration = tatol
		},
		quested(total){
			this.quests = total
		},
		outside(i){
			this.side_tab = i
		}
	},
	watch:{
		recommen(){
			this.side_tab = ''
			//发起axios请求
		},
		citys(){
			this.side_tab = ''
			//发起axios请求
		},
		coration(){
			this.side_tab = ''
			//发起axios请求
		},
		quests(){
			this.side_tab = ''
		}
	}
}
</script>

<style scoped>
header{position: fixed;width: 100%;top: 0;left: 0;z-index: 100}
.job_head{padding:.37037rem 0;background: #53cac3;overflow: hidden;zoom:1;}
.job_head .job_head_left{float: left;padding-left: .4rem;font-size: .4rem;color: #fff}
.job_head_left span+span{margin-left: .3rem}
.job_head .inforight{margin-right: .3rem;position: relative;}
.job_head .job_head_right{float: right}
.job_head_right i:first-child,.job_head_right i:last-child{float: left;font-size: .48rem;margin-left: .6rem;color: #fff}
.job_head_right span{display: block;position: absolute;width: 1px;height: .48rem;background: #fff;margin: 0 .15rem;top: 50%;transform: translateY(-50%);left: 1.2rem}
.job_nav{background: #fff;position: relative;}
.job_nav .flex_parent{height: 1rem;line-height: 1rem;display: flex}
.flex_parent li{position: relative;flex: 1;text-align: center;color: #8d8d8d}
.flex_parent li:after{content: '';display: table;height: 60%;border-right: 1px #e5e5e5 solid;position: absolute;right: 0;top: 50%;transform: translateY(-50%);}
.flex_parent li:last-child:after{display: none}
.flex_parent li i{font-size: 25px}
</style>