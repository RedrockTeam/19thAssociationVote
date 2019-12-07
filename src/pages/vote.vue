<template>
  <div class="vote">
        <myHeader><span class="xingyannum">参赛作品(11份)</span></myHeader>
        <book>以下为每位同学的参赛信息与作品，请为他们投出宝贵一票吧！</book>
        <div class="content">
            <div v-for="(item,index) in info" :key = index>
                <info class="info" :infos="info" :indexs="index"></info>
            </div>
            <choose class="choose" :indexs="info.length"></choose>
        </div>
        <footer>
            <p>-END-</p>
            <p>COPYRIGHT@红岩网校工作站</p>
        </footer>
  </div>
</template>

<script>
import myHeader from '../components/header.vue'
import book from '../components/vote/book.vue'
import info from '../components/vote/info.vue'
import choose from '../components/vote/choose.vue'
/* import {API} from "../config" */



export default {
    name: 'home',
    components: {
        myHeader,
        book,
        info,
        choose,
    },
    data() {
        return {
            info: [
                {
                    type: '社团',
                    StuName: '⽐特乐队',
                    sayType: '宣言',
                    Stuinfo: '本世纪最好笑的笑话:弹吉他可以撩妹',
                    workName: '《晚安》',
                    Detail: '晚安是个奇怪的词。它只⽤在睡意朦胧的夜⾥。 对⼀个⼈道晚安，等待回应;对⼀座城道晚安，期待明天。',
                    personUrl: require('../assets/images/vote/info/person/1.jpg'),
                    workUrl: require('../assets/images/vote/info/work/1.jpg')
                },
                {
                    type: '社团',
                    StuName: 'DS街舞社',
                    sayType: '宣言',
                    Stuinfo: 'DS Family出品 必为精品（以kiki和chuchu保证）',
                    workName: '《The Joker》',
                    Detail: '世上根本没有小丑，亦或者人人都是小丑',
                    personUrl: require('../assets/images/vote/info/person/ds舞社.jpg'),
                    workUrl: require('../assets/images/vote/info/work/ds舞社.jpg')
                },
                {
                    type: '社团',
                    StuName: '爱⼼社',
                    sayType: '宣言',
                    Stuinfo: '点滴汇爱心',
                    workName: '《微光》',
                    Detail: '从福利中⼼到福泽园，⼀篇⽇记，记录了两颗⼼内⼼深处的灰暗被⼀名志愿者的光芒所照亮的故事。彰显了当代⼤学⽣志愿者助⼈为乐、⽢愿奉献的时代⻛貌和精神⻛貌。',
                    workUrl: require('../assets/images/vote/info/work/love.jpg'),
                    personUrl: require('../assets/images/vote/info/person/love.jpg'),
                },
                {
                    type: '社团',
                    StuName: '镝鹤汉服协会',
                    sayType: '宣言',
                    Stuinfo: '以服为礼，以礼相伴',
                    workName: '《清平乐》',
                    Detail: '以服为礼，以礼相伴。我们将乘着《清平乐》之词向您展现传统汉服之美。',
                    personUrl: require('../assets/images/vote/info/person/汉服.jpg'),
                    workUrl: require('../assets/images/vote/info/work/汉服.jpg')
                },
                {
                    type: '社团',
                    StuName: 'B-Box协会',
                    sayType: '宣言',
                    Stuinfo: '一切为了热爱 ，we young foever.',
                    workName: '《⻜太远》',
                    Detail: '如果你真的喜欢HipHop，你喜欢说唱，请为我们打call，⼀切为了热爱！peace yo！',
                    personUrl: require('../assets/images/vote/info/person/bbox.jpg'),
                    workUrl: require('../assets/images/vote/info/work/bbox.jpg')
                },
                {
                    type: '学生',
                    StuName: '王慧慧',
                    sayType: '学号',
                    Stuinfo: '2019213334',
                    workName: '《如果有来生＋胡桃夹子》',
                    Detail: '光明和黑暗，天使与魔鬼，看似荒诞与迷幻的两歌之间，带你体验完全不一样的世界',
                    personUrl: require('../assets/images/vote/info/person/王慧慧.jpg'),
                    workUrl: require('../assets/images/vote/info/work/王慧慧.jpg')
                },
                {
                    type: '学生',
                    StuName: '冯⽴威',
                    sayType: '学号',
                    Stuinfo: '2016211802',
                    workName: '《明年今⽇&⼗年》',
                    Detail: '直到和你做了多年朋友才明⽩我的眼泪不是为你⽽流也为别⼈⽽流" 其实，明年今⽇就是⼗年"',
                    personUrl: require('../assets/images/vote/info/person/冯立威.jpg'),
                    workUrl: require('../assets/images/vote/info/work/冯立威.jpg')
                },
                {
                    type: '社团',
                    StuName: '魔术协会',
                    sayType: '宣言',
                    Stuinfo: '用热情与努力来创造奇迹！',
                    workName: '《魔术维度》',
                    Detail: '魔术是以不断变化让⼈捉摸不透并带给观众惊奇体验为核⼼的⼀种表演艺术，是制造奇迹的艺术，也是⼈们最喜欢观看的晚会类节⽬，我们会带你们进⼊不⼀样的世界!',
                    workUrl: require('../assets/images/vote/info/work/张文友.jpg'),
                    personUrl: require('../assets/images/vote/info/person/张文友.jpg'),
                },
                {
                    type: '社团',
                    StuName: '⺠乐团',
                    sayType: '宣言',
                    Stuinfo: '山不厌高，水不厌深，权御天下，天下归心',
                    workName: '《权御天下》',
                    Detail: '权御天下，荡气回肠；民乐悠扬，享誉四方。下面请欣赏由民乐团的小哥哥小姐姐为我们带来的《权御天下》',
                    workUrl: require('../assets/images/vote/info/work/民乐.jpg'),
                    personUrl: require('../assets/images/vote/info/person/民乐.jpg'),
                },
                {
                    type: '社团',
                    StuName: '体育舞蹈协会',
                    sayType: '宣言',
                    Stuinfo: '热爱舞台，颠覆生活，我们就是新风暴!',
                    workName: '《交融》',
                    Detail: '　⻩沙、驼铃、丝路花⾬；经卷、梵⾳、⽯窟壁画……敦煌舞⽤它独特的表达⽅式与流畅的曲线表现出⼀种炽热的情感。古典与拉丁交融，柔美与热烈交融，⼀切尽在每次的摆⼿、出胯中感受得淋漓尽致...',
                    workUrl: require('../assets/images/vote/info/work/体育舞蹈.jpg'),
                    personUrl: require('../assets/images/vote/info/person/体育舞蹈.jpg'),
                },
                {
                    type: '社团',
                    StuName: '动漫协会',
                    sayType: '宣言',
                    Stuinfo: '坚持才是胜利！加油！奥力给!',
                    workName: '《笑傲江湖》',
                    Detail: '⼏位⼥⼦本可享尽荣华，舞于华灯千盏间的，却愿拯救苍⽣，笑傲江河湖海内。要问先天下之忧⽽忧者，⾮此番⼱帼英雄莫属。',
                    workUrl: require('../assets/images/vote/info/work/动漫.jpg'),
                    personUrl: require('../assets/images/vote/info/person/动漫.jpg'),
                },
                
            ],
            num:[1,2,3,1,2,3,1,2,3,1,2,3]
        }
    },
    created() {
        /* this.getInfo() */
    },
    methods: {
/*         getInfo() {
            this.$http.get(API + '/player/detail',{
            }).then(res => {                 //请求成功后的处理函数     
            this.info =  res.data.Message; 
            }).catch(err => {   
                err              //请求失败后的处理函数   
            })
        } */
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.vote {
    width: 100vw;
    background-image: url("../assets/images/vote/bg.png");
    background-size: 100% 100%;
    .xingyannum {
        position: relative;
        top: 0.1vh;
    }
    .content {
        position: relative;
        top: 8vh;
        .info {
            margin-top: 1.8vh;
        }
        .choose {
            margin-top: 1.8vh;
        }
    }
    footer {
        color: #5a9ab2;
        font-size: calc(100vw / 750 * 20);
        text-align: center;
        font-family: 'pingfang';
        position: relative;
        margin-top: 11vh;
    }
}

/* @media only screen and (min-device-width: 320px) and (max-device-height: 568px) and (-webkit-device-pixel-ratio: 2) {
    .vote {
        height: calc(100vh / 390 * 3270);
    }
    footer {
        top: 6vh;
    }
}
@media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (-webkit-device-pixel-ratio: 3) {
    .vote {
        height: calc(100vh / 390 * 3210);
    }
    footer {
        top: 6vh;
    }
}
@media only screen and (min-device-width: 375px) and (max-device-height: 667px) and (-webkit-device-pixel-ratio: 2) {
    .vote {
        height: calc(100vh / 390 * 3230);
    }
    footer {
        top: 6vh;
    }
}

@media only screen and  (min-device-width : 375px)  and (max-device-height : 812px) and (-webkit-min-device-pixel-ratio : 3){
    .vote {
        height: calc(100vh / 390 * 2780);
    }
    footer {
        top: 4vh;
    }
} 
@media only screen and (min-device-width : 414px)   and (max-device-height : 896px) and (-webkit-min-device-pixel-ratio : 2){
    .vote {
        height: calc(100vh / 390 * 2755);
    }
    footer {
        top: 4vh;
    }
} 
@media only screen and (min-device-width : 414px)   and (max-device-height : 736px) and (-webkit-min-device-pixel-ratio : 3){
    .vote {
        height: calc(100vh / 390 * 3200);
    }
    footer {
        top: 4vh;
    }
}  */


</style>
