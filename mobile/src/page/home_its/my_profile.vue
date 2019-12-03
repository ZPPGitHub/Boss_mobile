<template>
	<div class="profile">
		<div class="profiles">
			<div class="setting">
				<span>赵盼盼</span>
				<div class="file_setting">
					<i class="iconfont icon-saomiao"></i>
					<i class="iconfont icon-xianxingtubiao_huabanfuben"></i>
				</div>
			</div>
			<div class="profile_top">
				<div class="profile_name">
					<p>赵盼盼</p>
					<p>
						<i class="iconfont icon-shuaxin"></i> 建议更新在线简历
					</p>
				</div>
				<img src="../../../src/assets/u=2018939532,1617516463&fm=26&gp=0.jpg" alt="头像" />
			</div>
			<div class="profile_list">
				<ul>
					<li>
						<i>880</i><br/>
						<span>沟通过</span>
					</li>
					<li>
						<i>0</i><br/>
						<span>面试</span>
					</li>
					<li>
						<i>183</i><br/>
						<span>已投简历</span>
					</li>
					<li>
						<i>10</i><br/>
						<span>收藏</span>
					</li>
				</ul>
			</div>
		</div>
		<div class="profile_min">
			<ul>
				<li>
					<i class="iconfont icon-xiaomishu"></i>
					<span>我的客服</span>
				</li>
				<li>
					<i class="iconfont icon-resume-line"></i>
					<span>上传简历</span>
				</li>
				<li>
					<i class="iconfont icon-2fengongsi"></i>
					<span>关注公司</span>
				</li>
				<li>
					<i class="iconfont icon-jia1"></i>
					<span>求职意向管理</span>
				</li>
				<li>
					<i class="iconfont icon-liwu"></i>
					<span>我的道具</span>
				</li>
				<li>
					<i class="iconfont icon-shangdian"></i>
					<span>道具商城</span>
				</li>
				<li>
					<i class="iconfont icon-ganxingquzhiwei"></i>
					<span>感兴趣职位</span>
				</li>
				<li>
					<i class="iconfont icon-qianbao"></i>
					<span>我的钱包</span>
				</li>
			</ul>
		</div>
		<div class="profile_bottom">
			<ul>
				<li>
					<a href="" class="iconfont">
						<i class="iconfont icon-xianxingdiqiu"></i>个人主页
					</a>
				</li>
				<li>
					<a href="" class="iconfont">
						<i class="iconfont icon-xianxingdiqiu"></i>牛人问答
					</a>
				</li>
				<li>
					<a href="" class="iconfont">
						<i class="iconfont icon-xianxingdiqiu"></i>牛人问答
					</a>
				</li>
				<li>
					<a href="" class="iconfont">
						<i class="iconfont icon-xianxingdiqiu"></i>牛人问答
					</a>
				</li>
				<li>
					<a href="" class="iconfont">
						<i class="iconfont icon-xianxingdiqiu"></i>牛人问答
					</a>
				</li>
				<li>
					<a href="" class="iconfont">
						<i class="iconfont icon-xianxingdiqiu"></i>牛人问答
					</a>
				</li>
				<li>
					<a href="" class="iconfont">
						<i class="iconfont icon-xianxingdiqiu"></i>牛人问答
					</a>
				</li>
				<li>
					<a href="" class="iconfont">
						<i class="iconfont icon-xianxingdiqiu"></i>牛人问答
					</a>
				</li>
				<li>
					<a href="" class="iconfont">
						<i class="iconfont icon-xianxingdiqiu"></i>牛人问答
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default{
	name: 'profile',
	data(){
		return{

		}
	}
}
</script>

<style scoped>
.profile{position: relative;width: 100%}
.profiles{background: #53cac3;}
.setting{padding: .8rem .4rem .32rem;overflow: hidden;zoom: 1;}
.setting span{float: left;color: #fff;font-size: 30px;display: none;}
.file_setting{float: right;}
.file_setting i{font-size: 35px;color:#fff;}
.file_setting i:first-child{padding: 0 .2rem}
.profile_top{padding: .3rem .4rem;color: #fff}
.profile_name p:first-child{font-size: 40px;}
.profile_name p:last-child{padding: .15rem 0}
.profile_name p:last-child i{font-size: 30px}
.profile_top img{float: right;width: 1.43rem;height: 1.43rem;border-radius: 50%;margin-top: -1.45rem}
.profile_list ul{display: flex;text-align: center;color: #fff}
.profile_list ul li{flex: 1;padding: .2rem 0}
.profile_list ul li i{font-style: normal;font-size: .45rem}
.profile_list ul li span{font-size: .25rem;color:#e0e0e0;}
.profile_min{color: #333;background: #fff;}
.profile_min ul{overflow: hidden;zoom:1;}
.profile_min ul li:nth-child(4n){border-right: none}
.profile_min ul li{width: 25%;float: left;text-align: center;border-right: 1px #e5e5e5 solid;border-bottom: 1px #e5e5e5 solid;padding: .61333rem 0 .50666rem}
.profile_min ul li i{display: block;margin-bottom: .266666rem;font-size: .7rem}
.profile_min ul li span{display: block;}
.profile_bottom{margin-top: .24rem;background: #fff}
.profile_bottom ul li{padding: .35rem .25rem;border-bottom: 1px #f4f4f4 solid;}
.profile_bottom ul li a{position: relative;display: block;color: #333;font-size: .35rem}
.profile_bottom ul li a:after{content: "\e689";position: absolute;right: 0;top: 0;font-size: .5rem;transform: rotateZ(-90deg);}
.profile_bottom ul li i{font-size: .5rem;padding: .4rem .25rem .4rem .4rem}
.profile::-webkit-scrollbar {display: none;}
</style>