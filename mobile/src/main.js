import Vue from 'vue'
import App from './App.vue'
import router from './route'
import 'amfe-flexible'
import echarts from 'echarts'
import MyECharts from './echarts'

Vue.config.productionTip = false
Vue.prototype.echarts = echarts

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
