<template>
  <div class="rule">
        <myHeader><p class="rulefont">活动规则</p></myHeader>
        <div class="content">
            <div class="header">
                <span :class="{active: nowRule === 'activity' , normal: !nowRule === 'activity'}" @click="changeInfo('activity')">活动介绍</span>
                <span :class="{active: nowRule === 'vote' , normal: !nowRule === 'vote'}" @click="changeInfo('vote')">投票规则</span>
            </div>
            <div v-show="nowRule === 'vote'" class="info">
                <p>
                    1.本投票由投放开始到12月1号零点结束。此投票共十一名选手，将于投票结束后选出获票最多的一名选手，获得本次社团达人秀的“最具人气奖”。此投票每天每人限投三票，可选择投票数量，三票不得投同一名选手。投票结束后暂不可见票数，当天投票结束后统一统计每名选手投票数和排名。（人气）
                </p>
            </div>
            <div v-if="nowRule === 'activity'" class="info">
                <p>
                    本活动为社团达人秀的投票活动。此活动共十一名选手，将于投票结束后选出获票最多的一名选手，获得本次社团达人秀的“最具人气奖”。在此次活动中展示选手们的才艺与风采，让参与者与观众的人感受到快乐与激情。
                </p>
            </div>
        </div>
  </div>
</template>

<script>
import myHeader from '../components/header.vue'

export default {
    name: 'home',
    data() {
        return {
            nowRule : 'vote'
        }
    },
    methods: {
        changeInfo(name) {
            this.nowRule = name
        }
    },
    components: {
        myHeader,
    },
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.rule {
    width: 100vw;
    height: 100vh;
    background-color: #b2cae4;
    .rulefont {
        font-size: calc(100vw / 750 * 36);
        position: relative;
        top: 0.3vh;
    }
}
.content {
    width: 82.9vw;
    height: 65.3vh;
    margin: 0 auto;
    background-image: url("../assets/images/rule/content.png");
    line-height: calc(100vw / 750 * 33);
    background-size: 100% ;
    background-repeat: no-repeat;
    position: relative;
    top: 6.74vh;
    .header {
        margin: 0 auto;
        width: 45vw;
        display: flex;
        justify-content: space-between;
        position: relative;
        top: 7.13vh;
        .active {
            color: #f56e7d;
        }
        span {
            font-size: calc(100vw / 750 * 30);
            color: #d0625f;
        
        }
        .vote {
            color: #d0625f;
        }
    }
    .info {
        margin: 0 auto;
        width: 65vw;
        font-size: calc(100vw / 750 * 24);
        position: relative;
        top: 10vh;
        font-family: 'pingfang';
        color: #d0625f;
    }
}

</style>