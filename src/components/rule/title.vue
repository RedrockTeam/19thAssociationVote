<template>
	<div class="title">
		<span><slot></slot></span>
	</div>
</template>

<script>
	export default {
		methods: {
			toRules() {
				this.$router.push({path: 'rule'})
			}
		},
	}
</script>

<style lang="scss" scoped>
.title {
    width: 36.26vw;
    height: 10.28vh;
    background-image: url("../../assets/images/rule/title.png");
    background-size: 100% 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #c35855
}
span {
	position: relative;
	top: 1vh;
    
}
</style>
