import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = () => import('../page/login')
const home = () => import('../page/home')
const inform = () => import('../page/inform')

//登录页切换
const agreement = () => import('../page/login_ite/agreement')
const pwlogin = () => import('../page/login_ite/pwlogin')

//主页切换
const jobs = () => import('../page/home_its/jobs')
const conpany = () => import('../page/home_its/conpany')
const message = () => import('../page/home_its/message')
const my_profile = () => import('../page/home_its/my_profile')

//message消息页
const chitchat = () => import('../page/home_its/message_ite/chitchat')
const interact = () => import('../page/home_its/message_ite/interact')


const routes = [
	{path: '/',name: 'home',component: home,meta: {title: '首页',requiresAuth: false},children:[		//meta里的 requiresAuth 用来判断是否要登录后才能进去
			{path: 'jobs',name: 'jobs',component: jobs,meta: {title: '职位页',requiresAuth: false}},
			{path: 'conpany',name: 'conpany',component: conpany,meta: {title: '公司页',requiresAuth: false}},
			{path: 'message',name: 'message',component: message,meta: {title: '消息页',requiresAuth: false},children: [
					{path:'chitchat',name: 'chitchat',component: chitchat,meta: {title: '聊天页',requiresAuth: false}},
					{path:'interact',name: 'interact',component: interact,meta: {title: '互动页',requiresAuth: false}}
				],redirect: '/message/chitchat'
			},
			{path: 'my_profile',name: 'my_profile',component: my_profile,meta: {title: '我的主页',requiresAuth: false}}
		],redirect: '/jobs'
	},
	{path: '/login',name: 'login',component: login,meta: {title: '登录页',requiresAuth: false},children:[
			{path: '/login/agreement',name: 'agreement',component: agreement,meta: {title: '协议页',requiresAuth: false}},
			{path: '/login/pwlogin',name: 'pwlogin',component: pwlogin,meta: {title: '账户密码登录页',requiresAuth: false}}
		],redirect: '/login/pwlogin'											//默认进入这个页面
	},
	{path: '/inform',name: 'inform',component: inform,meta: {title: '通知页',requiresAuth: false}},
	{path: '*',redirect: '/'}
]

export default new Router({
	linkActiveClass : 'active',
	routes,
	mode : 'history'
})