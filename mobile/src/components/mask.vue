<template>
	<div @click= "handleClick" class="mask"></div>
</template>

<script>
export default{
	name: 'masks',
	methods:{
		handleClick(){
			this.$emit('handle','')
		}
	}
}
</script>

<style scoped>
.mask{position: fixed;width: 100%;height: 100%;background: rgba(0,0,0,.5);z-index: 99}
</style>