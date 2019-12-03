<template>
	<div class="inform">
		<div id="myChartBar" style="width: 600px;height:400px;"></div>
		<div id="myChartLine" style="width: 600px;height:400px;"></div>
		<div id="myChartPie" style="width: 600px;height:400px;"></div>
		<div id="myChartScatter" style="width: 600px;height:400px;"></div>
	</div>
</template>

<script>
import MyECharts from '../../src/echarts'

export default{
	name: 'inform',
	data(){
		return{
			data1:[
				{ group: 'Beijing', name: '1月', value: 10 },
				{ group: 'Beijing', name: '2月', value: 15 },
				{ group: 'Beijing', name: '3月', value: 12 },
				{ group: 'Beijing', name: '4月', value: 14 },
				{ group: 'Tokyo', name: '1月', value: 12 },
				{ group: 'Tokyo', name: '2月', value: 15 },
				{ group: 'Tokyo', name: '3月', value: 2 },
				{ group: 'Tokyo', name: '4月', value: 14 }
			],
			data2: [
				{ name: 'Firefox', value: 45.0 },
    			{ name: 'IE', value: 26.8 },
    			{ name: 'Safari', value: 8.5 },
    			{ name: 'Opera', value: 6.2 },
    			{ name: '其他', value: 0.7 }
			],
			data3: [
				[
            		[10.0, 8.04],
            		[8.0, 6.95],
		            [13.0, 7.58],
		            [9.0, 8.81],
		            [11.0, 8.33],
		            [14.0, 9.96],
		            [6.0, 7.24],
		            [4.0, 4.26],
		            [12.0, 10.84],
		            [7.0, 4.82],
		            [5.0, 5.68]
        		],
		        [
		            [10.0, 9.14],
		            [8.0, 8.14],
		            [13.0, 8.74],
		            [9.0, 8.77],
		            [11.0, 9.26],
		            [14.0, 8.10],
		            [6.0, 6.13],
		            [4.0, 3.10],
		            [12.0, 9.13],
		            [7.0, 7.26],
		            [5.0, 4.74]
		        ],
		        [
		            [10.0, 7.46],
		            [8.0, 6.77],
		            [13.0, 12.74],
		            [9.0, 7.11],
		            [11.0, 7.81],
		            [14.0, 8.84],
		            [6.0, 6.08],
		            [4.0, 5.39],
		            [12.0, 8.15],
		            [7.0, 6.42],
		            [5.0, 5.73]
		        ],
		        [
		            [8.0, 6.58],
		            [8.0, 5.76],
		            [8.0, 7.71],
		            [8.0, 8.84],
		            [8.0, 8.47],
		            [8.0, 7.04],
		            [8.0, 5.25],
		            [19.0, 12.50],
		            [8.0, 5.56],
		            [8.0, 7.91],
		            [8.0, 6.89]
		        ]
			]
		}
	},
	mounted(){
		this.drawColumn()
		console.log(MyECharts)
		this.line()
		this.Pie()
		this.Scatter()
	},
	methods:{
		drawColumn(){
			let opt1 = MyECharts.ChartOptionTemplates.Bar('各个城市气温趋势','°C',this.data1);
			let myChartBar = this.echarts.init(document.getElementById('myChartBar'))
			myChartBar.setOption(opt1)
		},
		line(){
			let opt1 = MyECharts.ChartOptionTemplates.Line('各个城市气温趋势','°C',this.data1);
			let myChartLine = this.echarts.init(document.getElementById('myChartLine'))
			myChartLine.setOption(opt1)
		},
		Pie(){
			let opt1 = MyECharts.ChartOptionTemplates.Pie('各个城市气温趋势','°C',this.data2);
			let myChartPie = this.echarts.init(document.getElementById('myChartPie'))
			myChartPie.setOption(opt1)
		},
		Scatter(){
			let opt1 = MyECharts.ChartOptionTemplates.Scatter('各个城市气温趋势','°C',this.data3);
			let myChartScatter = this.echarts.init(document.getElementById('myChartScatter'))
			myChartScatter.setOption(opt1)
		}
	}
}
</script>

<style scoped>

</style>