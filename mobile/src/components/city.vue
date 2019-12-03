<template>
	<div class="city_tab">
		<div class="city_top">
			<ul>
				<li :class="{'selected': ite == 0}">商圈</li>
				<li :class="{'selected': ite == 1}">地铁</li>
			</ul>
			<ul>
				<li @click= "cit_tab(item,index)" :class="{'selected': indx == index,'animations': run == index && run !== ''}" v-for= "(item,index) in cites">
					{{ item }}
				</li>
			</ul>
			<ul>
				<li :class="{'selected': itx == 0}" class="selected">
					全部
					<i class="iconfont icon-iconfontcheck"></i>
				</li>
			</ul>
		</div>
		<ul class="reset_city">
			<li>重置</li>
			<li @click= "confirm">确定</li>
		</ul>
	</div>
</template>

<script>
export default{
	name: 'city',
	props:{
		cites: [Array,String]
	},
	data(){
		return{
			ite: '0',
			indx: '0',
			run: '',
			items: '',
			itx: '0'
		}
	},
	methods:{
		cit_tab(iten,num){
			this.items = iten
			this.indx = num
			this.run = num
		},
		confirm(){
			this.$emit('cies',this.items)
		}
	}
}
</script>

<style scoped>
.city_top{width: 100%;display: flex;position: relative;top: 0;left: 0;height: 8rem;background: #fff;}
.city_top ul:first-child{flex: 1;background: #9e9e9e;text-align: center;line-height: .8rem;padding-top: .2rem}
.city_top ul:first-child li{}
.city_top ul:nth-child(2){flex: 2;position: relative;}
.city_top ul:last-child{flex: 2;}
.city_top ul:last-child i{float: right;font-size: .5rem;}
.city_top ul:nth-child(2),.city_top ul:last-child{line-height: .8rem;text-indent: .5rem;overflow-y:scroll}
.city_top ul:nth-child(2) li{}
.city_top ul:nth-child(2) .animations{animation: cgcolor .5s linear}
.city_top ul:nth-child(2):after{content: '';display: block;position: absolute;top: 0;right: 0;border-right: 1px #e5e5e5 solid;height: 100%}
@keyframes cgcolor {
	0% { background: #fff; }
	50% { background: #000; }
	100% { background: #fff;  }
}
.city_top ul::-webkit-scrollbar {display: none;}		/*隐藏滚动条  可以在移动端使用  但是不兼容 火狐 和 IE*/
.selected{color: #53cac3}

.reset_city{display: flex;text-align: center;position: relative;background: #fff}
.reset_city li{flex: 1;height: 1rem;line-height: 1rem;color: #999;position: relative;}
.reset_city li:first-child:after{content: '';display: block;height: 60%;border-right: 1px #e5e5e5 solid;position: absolute;right: 0;top: 50%;transform: translateY(-50%);}
.reset_city li:last-child{color: #53cac3}
</style>