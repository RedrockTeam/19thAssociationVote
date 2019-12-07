<template>
  <div class="info">
        <p class="live" :class="{liveIsHeight: !height()}"></p>
        <p class="title" :class="{titleIsHeight: !height()}">{{number[indexs]}}号选手</p>
        <div class="person">
            <img  class="person-img" :src="infos[indexs].personUrl">
            <div class="person-info">
                <p >
                    <span>{{infos[indexs].type}}</span>
                    <span class="container">{{infos[indexs].StuName}}</span>
                </p>
                <p style="width:65vw;">
                    <span>{{infos[indexs].sayType}}</span>
                    <span class="container xuehao" v-if="infos[indexs].sayType === '学号'">{{infos[indexs].Stuinfo}}</span>
                    <span class="container xuanyan" v-if="infos[indexs].sayType === '宣言'" >{{infos[indexs].Stuinfo}}</span>
                </p>
            </div>
        </div>
        <div class="work" :class="{workIsHeight: height()}">
            <div class="person-work">
                <p>
                    <span >作品</span>
                    <span class="container">{{infos[indexs].workName}}</span>
                </p>
                <p  class="worktitle">
                    <span class="person-work-info">内容简介</span>
                    <span class="person-work-container" > {{infos[indexs].Detail}}</span>
                </p>
            </div>
            <div class="workImg">
                <div class="workimgson">
                    <img :src="infos[indexs].workUrl" class="work-img">
                </div>
            </div>
        </div>
  </div>
</template>

<script>

export default {
    name: 'info',
    data() {
        return {
            number:["一","二","三","四","五","六","七","八","九",'十','十一','十二']
        }
    },
    components: {
    },
    methods: {
        height() {
            if(window.screen.height / window.screen.width > 1.85 ) {
                return true
            }
        }
    },
    props: [
        'infos',
        'indexs'
    ],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.info {
    width: 85.2vw;
    height: 0;
    /* height: 52.3vh; */
    padding-bottom: 88%;
    margin: 0 auto;
    background-image: url("../../assets/images/rule/content.png");
    background-size: 100% 100%;
    color: #d0625f;
    font-size: calc(100vw / 750 * 26);
    .container {
        font-family: 'pingfang';
        margin-left: 2.36vw;
    }
    .person-work-container {
        font-family: 'pingfang';
        margin-left: 2vw;
        color: #e69693;
        font-size: calc(100vw / 750 * 20);
    }
    .person-work-info {
        color: #d0625f;
        margin-top: 1vh;
    }
    .live {
        width: 10.8vw;
        height: 1.74vh;
        background-size: 100% 100%;
        background-image: url("../../assets/images/vote/live.png");
        position: relative;
        
        bottom: -7vh;
        left: 7vw;
    }
    .title {
        text-align: center;
        margin-top: 6.5vh;
        color: #eb7774;
        font-size: calc(100vw / 750 * 34);
        position: relative;
        bottom: 1.6782vh;
    }
    .person {
        width: 50.2vw;
        height: 5vh;
        position: relative;
        left: 12vw;
        margin-top: 3vh;
        .person-img {
            width: 12.4vw;
            border-radius: 50%;
            height: auto;
            float: left;
            position: relative;
            left: -5vw;
            bottom:1vh;
        }
        .person-info {
            position: relative;
            top: -0.5vh;
            p {
                margin-top: 0.714vh
            }
        }
    }
    .work {
        margin: 0 auto;
        height: 20vh;
        width: 80vw;
        margin-top: 8vh;
        /* position: relative;
        bottom: 3.942vh; */
        .person-work {
            width: 41vw;
            float: left;
            margin-left: 5vw;
            position: relative;
            top:0.92325vh;
            .worktitle {
                margin-top: 1vh;
                text-align: justify;
            }
        }
        .workImg {
            width: 23.066vw;
            height: 0;
            padding-bottom: 30vw;
            background-color: #e8f8ff;
            border-radius: 2vw;
            overflow: hidden;
            float: left;
            position: relative;
            left: 4.666666vw;
            top:0.92325vh;
            .work-img {
                width: 100%;
            }
        }
    }
}


.xuanyan {
    color: #e69693;
    font-size: calc(100vw / 750 * 20);
}
.xuehao {
    color: #bf4c49;
    font-size: calc(100vw / 750 * 24);
}
.workIsHeight {
    position: relative;
    bottom: 3.942vh;
}
.liveIsHeight {
    position: relative;
    top: 9vh;
}
.titleIsHeight {
    position: relative;
    top: 0vh;
}
</style>