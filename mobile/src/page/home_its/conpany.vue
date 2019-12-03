<template>
	<div class="conpany">
		<header>
			<div class="head_top">
				<span>公司</span>
				<i class="iconfont icon-xianxingdiqiu"></i>
			</div>
			<div class="head_tab">
				<ul>
					<li @click= 'tabchange(index)' v-for= "(tab,index) in head_tab">
						<span>{{ tab }}</span>
						<i class="iconfont icon-xia"></i>
					</li>
				</ul>
				<jobTab :financing= 'content0' :tabjobs= 'tab_jobs0' v-if= "change === 0" @tab_job= "tabjobs0" @tab_jobs= 'tab_axios' key= "financing"></jobTab> <!--key值阻止复用-->
				<jobTab :financing= 'content1' :tabjobs= 'tab_jobs1' v-if= "change === 1" @tab_job= "tabjobs1" @tab_jobs= 'tab_axios' key= "finan"></jobTab>
				<jobTab :financing= 'content2' :tabjobs= 'tab_jobs2' v-if= "change === 2" @tab_job= "tabjobs2" @tab_jobs= 'tab_axios' key= "fin"></jobTab>
				<masks v-if= "change !== ''" @handle= 'mask'></masks>
			</div>
		</header>
	</div>
</template>

<script>
import jobTab from '../../../src/components/job_tab'
import masks from '../../../src/components/mask'

export default{
	name: 'conpany',
	components:{
		jobTab,
		masks
	},
	data(){
		return{
			head_tab: ['融资','规模','行业'],
			content0: ['全部','未融资','天使轮','A轮','B轮','C轮','D轮及以上','已上市','不需要融资'],
			content1: ['全部','0-20人','20-99人','100-499人','500-999人','1000-9999人','10000人以上'],
			content2: ['全部','非互联网企业','健康医疗','生活服务','旅游','金融','信息安全','广告营销	','数据服务','智能硬件','文化娱乐','网络招聘','分类信息','电子商务','企业服务','移动互联网','社交网络','教育培训','游戏','O2O','互联网','媒体','IT软件'],
			change: '',			//导航点开哪个tab
			tab_jobs0: ['全部'],
			tab_jobs1: ['全部'],
			tab_jobs2: ['全部']
		}
	},
	methods:{
		tabchange(index){
			if(index !== this.change){
				this.change = index
			}else{
				this.change = ''
			}
		},
		tabjobs0(total){
			this.tab_jobs0 = total
			console.log(total)
		},
		tabjobs1(total){
			this.tab_jobs1 = total
			console.log(total)
		},
		tabjobs2(total){
			this.tab_jobs2 = total
			console.log(total)
		},
		mask(ite){
			this.change = ite
		},
		tab_axios(bole){
			if(bole){
				this.change = ''
				console.log(this.tab_jobs0,this.tab_jobs1,this.tab_jobs2)
				//发起axios请求
			}
		}
	}
}
</script>

<style scoped>
header{position: fixed;width: 100%;}
.head_top{position: relative;text-align: center;font-size: .481481rem;padding: .37037rem 0;background: #53cac3;color: #fff;}
.head_top i{position: absolute;right: .37037rem;top: .27037rem;font-size: .7rem}
.head_tab ul{display: flex;text-align: center}
.head_tab{background: #fff;color: #8d8d8d;}
.head_tab ul li{flex: 1;position: relative;padding: .37037rem 0}
.head_tab ul li:after{content: '';position: absolute;width: 1px;height: .45rem;background: #e5e5e5;right: 0;top: 50%;transform: translateY(-50%);}
.head_tab ul li:last-child:after{display: none}
.head_tab ul li i{vertical-align:middle;font-size: 25px;position: relative}
</style>