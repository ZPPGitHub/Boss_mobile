<template>
	<div class="same_mask">
		<div class="slide_sametab">
			<div class="same_list">
				<p>最低学历</p>
				<ul>
					<li @click= "ancing(ite,index,1)" :class="{'actived': finan.indexOf(ite) !== -1}" v-for= '(ite,index) in financing' :key= "index">{{ ite }}</li>
				</ul>
			</div>
			<div class="same_list">
				<p>经验</p>
				<ul>
					<li @click= "ancing(ite,index,2)" :class="{'actived': scel.indexOf(ite) !== -1}" v-for= '(ite,index) in scale' :key= "index">{{ ite }}</li>
				</ul>
			</div>
			<div class="same_list">
				<p>薪资(单选)</p>
				<ul>
					<li @click= "ancing(ite,index,3)" :class="{'actived': busin == ite}" v-for= '(ite,index) in business' :key= "index">{{ ite }}</li>
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
	name: 'request',
	data(){
		return{
			financing: ['全部','中专及以下','高中','大专','本科','硕士','博士'],
			finan: ['全部'],
			scale: ['全部','应届生','1年以内','1-3年','3-5年','5-10年','10年以上'],
			scel: ['全部'],
			business: ['全部','3k以下','3k-5k','5k-10k','10k-20k','20k-50k','50k以上'],
			busin: '全部'
		}
	},
	methods:{
		ancing(ite,indx,num){
			var ites1 = this.finan.indexOf(ite)
			var iteds1 = this.finan.indexOf(this.financing[0])
			var ites2 = this.scel.indexOf(ite)
			var iteds2 = this.scel.indexOf(this.scale[0])
			if(indx == 0){
				switch(num){
					case 1:
						this.finan = []
						this.finan.push(ite)
					case 2:
						this.scel = []
						this.scel.push(ite)
						break;
				}
			}else if(indx !== 0&&ites1 === -1&&num === 1 || indx !== 0&&ites2 === -1&&num === 2){
				if(iteds1 !== -1&&num ===1 || iteds2 !== -1&&num ===2){
					switch(num){
						case 1:
							this.finan = []
							break;
						case 2:
							this.scel = []
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
				}
			}else if(indx !== 0 &&ites1 !== -1 || indx !== 0 &&ites2 !== -1){
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
				}
			}
			if(num == 3){
				this.busin = ite
			}
		},
		confirm(){
			var request = {finan: '',scel: '',busin: ''}
			request.finan = this.finan
			request.scel = this.scel
			request.busin = this.busin
			this.$emit('quest',request)
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