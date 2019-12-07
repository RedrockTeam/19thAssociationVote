<template>
	<div class="btn-move" :class="{move: moveActive}" @click="toVote()">
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
			toVote() {
                if(!localStorage.getItem('token')) {
                    return false
                }
                this.moveActive = true 
                setTimeout(() => {
                    this.moveActive = false
                    this.$router.push({path: 'vote'})
                },500)
            },
		},
	}
</script>

<style lang="scss" scoped>
	.btn-move {
        width: 42.8vw;
        height: 10vh;
		margin: 0 auto;
        margin-bottom: 0.7vh;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #FFFFFF;
		background-image: url("../../assets/images/home/btnfont1.png");
		background-size: 100% 100%;
		background-position: 0 0;
        max-height:69px;

	}
	.move {
		-webkit-animation: move 0.3s linear;
	}
    span {
        position: relative;
        top: 1.5vh;
        font-size: calc(100vw / 750 * 40);
        color: #fbf6dd
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
