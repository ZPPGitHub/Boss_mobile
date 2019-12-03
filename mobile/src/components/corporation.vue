<template>
	<div class="same_mask">
		<div class="slide_sametab">
			<div class="same_list">
				<p>融资规模</p>
				<ul>
					<li @click= "ancing(ite,index,1)" :class="{'actived': finan.indexOf(ite) !== -1}" v-for= '(ite,index) in financing' :key= "index">{{ ite }}</li>
				</ul>
			</div>
			<div class="same_list">
				<p>团队规模</p>
				<ul>
					<li @click= "ancing(ite,index,2)" :class="{'actived': scel.indexOf(ite) !== -1}" v-for= '(ite,index) in scale' :key= "index">{{ ite }}</li>
				</ul>
			</div>
			<div class="same_list">
				<p>行业</p>
				<ul>
					<li @click= "ancing(ite,index,3)" :class="{'actived': busin.indexOf(ite) !== -1}" v-for= '(ite,index) in business' :key= "index">{{ ite }}</li>
				</ul>
			</div>
		</div>
		<ul class="reset_city">
			<li>重置</li>
			<li @click= "confirm">确定</li>
		</ul>
	</div>
</template>

<script>
export default{
	name: 'corporation',
	data(){
		return{
			financing:['全部','未融资','天使轮','A轮','B轮','C轮','D轮及以上','已上市','不需要融资'],
			finan:['全部'],
			scale:['全部','0-20人','20-99人','100-499人','500-999人','1000-9999人','10000人以上'],
			scel:['全部'],
			business:['全部','非互联网行业','健康医疗','生活服务','旅游','金融','信息安全','广告营销','数据服务','智能硬件','文化娱乐','网络招聘','分类信息','电子商务','移动互联网','企业服务','社交网络','培训教育','O2O','游戏','互联网','媒体','IT软件'],
			busin:['全部']
		}
	},
	methods:{
		ancing(ite,indx,num){
			var ites1 = this.finan.indexOf(ite)
			var iteds1 = this.finan.indexOf(this.financing[0])
			var ites2 = this.scel.indexOf(ite)
			var iteds2 = this.scel.indexOf(this.scale[0])
			var ites3 = this.busin.indexOf(ite)
			var iteds3 = this.busin.indexOf(this.business[0])
			if(indx === 0){
				switch(num){
					case 1:
						this.finan = []
						this.finan.push(ite)
						break;
					case 2:
						this.scel = []
						this.scel.push(ite)
						break;
					case 3:
						this.busin = []
						this.busin.push(ite)
						break;
				}
			}else if(indx !== 0&&ites1 === -1&&num === 1 || indx !== 0&&ites2 === -1&&num === 2 || indx !== 0&&ites3 === -1&&num === 3){
				if(iteds1 !== -1&&num ===1 || iteds2 !== -1&&num ===2 || iteds3 !== -1&&num ===3){
					switch(num){
						case 1:
							this.finan.splice(iteds1,1)
							break;
						case 2:
							this.scel.splice(iteds2,1)
							break;
						case 3:
							this.busin.splice(iteds3,1)
							break;
					}
				}
				switch(num){
					case 1:
						this.finan.push(ite)
						break;
					case 2:
						this.scel.push(ite)
						break;
					case 3:
						this.busin.push(ite)
						break;
				}
			}else if(indx !== 0 &&ites1 !== -1 || indx !== 0 &&ites2 !== -1 || indx !== 0 &&ites3 !== -1){
				switch(num){
					case 1:
						this.finan.splice(ites1,1)
						if(this.finan.length == 0){
							this.finan.push(this.financing[0])
						}
						break;
					case 2:
						this.scel.splice(ites2,1)
						if(this.scel.length == 0){
							this.scel.push(this.scale[0])
						}
						break;
					case 3:
						this.busin.splice(ites3,1)
						if(this.busin.length == 0){
							this.busin.push(this.business[0])
						}
						break;
				}
			}
		},
		confirm(){
			var cortion = {finan: '',scel: '',busin: ''}
			cortion.finan = this.finan
			cortion.scel = this.scel
			cortion.busin = this.busin
			this.$emit('cotion',cortion)
		}
	}
}
</script>

<style scoped>
.same_mask{background: #f8f8f8}
.slide_sametab{padding: 0 .35rem;padding-bottom: .3rem;height: 10rem;overflow: auto}
.same_list{color: gray;margin-top: .4rem}
.same_list p{line-height: .8rem}
.same_list ul{overflow: hidden;zoom:1;}
.same_list li{float: left;background: #fff;border: 1px #cecece solid;border-radius: .15rem;text-align: center;margin-right: .45rem;margin-bottom: .2rem;min-width: 1.8rem;height: .7rem;line-height: .7rem;padding: 0 .1rem}
.same_list li.actived{background: #53cac3;color: #fff;border-color: #53cac3}

.reset_city{display: flex;text-align: center;position: relative;background: #fff}
.reset_city li{flex: 1;height: 1rem;line-height: 1rem;color: #999;position: relative;}
.reset_city li:first-child:after{content: '';display: block;height: 60%;border-right: 1px #e5e5e5 solid;position: absolute;right: 0;top: 50%;transform: translateY(-50%);}
.reset_city li:last-child{color: #53cac3}
</style>