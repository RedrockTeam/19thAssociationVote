<template>
	<div class="btn" @click="toRules()" :class="{move: moveActive}">
		<span></span>
	</div>
</template>

<script>
	export default {
        data() {
            return {
                moveActive: false
            }
        },
		methods: {
			toRules() {
				if(!localStorage.getItem('token')) {
                    return false
                }
                this.moveActive = true 
                setTimeout(() => {
                    this.moveActive = false
                    this.$router.push({path: 'rule'})
                },500)
			}
		},
	}
</script>

<style lang="scss" scoped>
.btn {
    width: 42.13333vw;
    height: 10vh;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #FFFFFF;
	background-image: url("../../assets/images/home/btnfont2.png");
	background-size: 100% 100%;
    max-height:69px;
    margin-top: 2vh;
}
span {
    position: relative;
    top: 1.2vh;
    font-size: calc(100vw / 750 * 40);
}
.move {
	-webkit-animation: move 0.3s linear;
}
@-webkit-keyframes move{
	0%{
		-webkit-transform: translateY()
	}
	50%{
		-webkit-transform: translateY(-1vh)
	}
	100%{
		-webkit-transform: translateY()
	}
}
</style>

