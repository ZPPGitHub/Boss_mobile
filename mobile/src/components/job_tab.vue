<template>
	<div class="jon_tab">
		<div class="tab_content">
			<ul>
				<li @click= 'tab_cont(tab,index)' :class="{'active':tab_ite.indexOf(tab)!==-1}" v-for= "(tab,index) in financing" :key= 'index'>{{ tab }}</li>
			</ul>
		</div>
		<ul class="reset_city">
			<li @click= "reset">重置</li>
			<li @click= "confirm">确定</li>
		</ul>
	</div>	
</template>

<script>


export default{
	name: 'job_tab',
	props:{
		financing:Array,
		tabjobs:Array
	},
	data(){
		return{
			tab_ite: this.tabjobs
		}
	},
	methods:{
		tab_cont(ite,idx){
			if(idx == 0){
				this.tab_ite = []
				this.tab_ite.push(ite)
			}else if(idx !== 0&&this.tab_ite.indexOf(ite) === -1){
				if(this.tab_ite.indexOf(this.financing[0]) !== -1){
					this.tab_ite = []
				}
				this.tab_ite.push(ite)
			}else if(idx !== 0 && this.tab_ite.indexOf(ite) !== -1){
				var num = this.tab_ite.indexOf(ite)
				this.tab_ite.splice(num,1)
				if(this.tab_ite.length == 0){
					this.tab_ite.push(this.financing[0])
				}
			}
		},
		reset(){
			this.tab_ite = []
			this.tab_ite.push(this.financing[0])
		},
		confirm(){
			this.$emit('tab_jobs',true)
		}
	},
	watch:{
		tab_ite(){
			this.$emit('tab_job',this.tab_ite)
		}
	}
}
</script>

<style scoped>
.jon_tab{position: relative;z-index: 100;background: #f8f8f8}
.jon_tab .tab_content{padding: .506666rem .48rem 1.093333rem}
.tab_content ul{margin-left:.346666rem;}
.tab_content li{display: inline-block;min-width: 1.7rem;padding: .213333rem .133333rem;margin-bottom: .32rem;text-align: center;border: 1px #cecece solid;border-radius: 10px;margin-right: .346666rem}
.tab_content li.active,.reset_city li:last-child{background: #53cac3;color: #fff}
.reset_city{display: flex;text-align: center;position: relative;background: #fff}
.reset_city li{flex: 1;height: 1rem;line-height: 1rem;color: #999;position: relative;}
.reset_city li:first-child{background: #fff;border-top: 1px #dcdcdc solid}
</style>