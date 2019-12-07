<template>
  <div class="choose" :class="{isHeight: !height()}">
        <p class="live"></p>
        <p class="title">投票环节</p>
        <p class="side-title">(每天最多投三张票)</p>
        <div id="main" style="width: 100%;height: 80%"  v-if="status === 'show'"></div>
        <div class="content" v-if="status === 'choose'">
            <div v-for="(item,index) in indexs" :key="index">
                <label class='lab' >
                    <input type='checkbox' class='inputStatus' name="v1" @click="chooseThis(index)" >
                    <span class='inputStyle2' :class="{isChecked: chooseStatus[index]}" ></span>
                    <span class="number">{{number[index]}}号选手</span>
                </label>
            </div>
        </div>
        <div class="footer" v-if="status === 'choose'">
            <div class="btn" @click="vote()"></div>
            <span style="display:none">{{checkList}}</span>
        </div>
        <div v-if="tip" :class="{tipLoading: isLoading,tipSuccess: !isLoading}"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import { setTimeout } from 'timers'
import {API} from "../../config"
import Qs from 'qs'

export default {
    name: 'choose',
    data() {
        return {
            number: [1,2,3,4,5,6,7,8,9,10,11,12],
            checkList: [],
            chooseStatus: [0,0,0,0,0,0,0,0,0,0,0,0],
            voteAbled: 3,
            getDone: false,
            status: "choose",
            tip: false,
            isLoading: true,
            rank:'',
            rankId:[],
            rankNum:[],
            rankRank:[],
        }
    },
    props: [
        'indexs'
    ],
    mounted() {
        this.getVoteAbled()
    },
    methods: {
        //获取已投票数 如果已投票数为3则直接显示投票结果图表
        getVoteAbled() {
             
            this.$http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
            this.$http.get(API +'/vote/done',
                {   
                    headers: {
                        'Token': localStorage.getItem('token')
                    }
                }
            ).then(res => {        
            this.getDone = true         
            this.voteAbled =  3 - res.data.Done
            if(this.voteAbled < 3) {
                this.status = 'show'    
                this.showchart()
      
            }
            }).catch(err => {   
                err               
            })
        },
        //处理选中该选手
        chooseThis(index) {
            for(let i = 0; i <= this.checkList.length + 1; i++) {
                if(this.checkList[i] == index + 1) {
                    this.checkList.splice(i,1)
                    this.chooseStatus[index] = 0
                    return
                }
            }
            if(this.checkList.length < 3) {
                this.checkList.push(index + 1)
                this.chooseStatus[index] === 0 ? this.chooseStatus[index] = 1 : this.chooseStatus[index] = 0
            }
        },
        //投票
        async vote() {
            if(this.checkList.length === 0) {
                alert("尚未选票")
                return
            }
            if(!this.getDone) {
                return
            }

            this.status = 'show'
            document.body.style.overflow = 'hidden'
            this.tip = true
            let checkListStr = this.checkList.join(";")
            var data = {
                "id": checkListStr
            }

            await this.$http.post(API + '/vote/put',
                    Qs.stringify(data),
                {   
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded',
                        'Token': localStorage.getItem('token')
                    }
                }
            ).then(res => {     
                    res
                    this.showchart('voteDone')
                
            }).catch(err => {   
                alert(err) 
                this.status = 'choose'   
                document.body.style.overflow = 'auto'
                this.tip = false         //请求失败后的处理函数   
            })
            
           
        },
        //显示投票结果
        async showchart(type){
            await this.$http.get(API + '/player/rank',{
            }).then(res => {                 
            this.rank =  res.data.Message; 
            for(let i = 0; i<= this.rank.length; i++ ) {
                this.rankId.push(this.rank[i].Id)
                this.rankNum.push(this.rank[i].Num)
                this.rankRank.push(this.rank[i.Rank])
                this.isLoading = false
                if(type == 'voteDone') {
                    setTimeout(() => {
                        document.body.style.overflow = 'auto'
                        this.tip = false
                    },2000)
                }
                
            }
            }).catch(err => {   
                err               
            })

            var number = this.rankId.map((item) => {
                return item + '号'
            })

            var myChart = echarts.init(document.getElementById('main'));
            var option = {
                title : {
                    text: '',
                    subtext: ''
                },
                tooltip : {
                    trigger: 'item'  //悬浮提示框不显示
                },
                grid:{   //绘图区调整
                    x:65,  //左留白
                    x2:80, 
                    y:20, //上留白
                },
                xAxis : [
                    {
                        show:false,
                        type : 'value',
                        boundaryGap : [0, 0],
                        position: 'top'
                    }
                ],
                yAxis : [
                    {
                        type : 'category',
                        data : number.reverse(),
                        axisLine:{show:false},     //坐标轴
                        axisTick:[{    //坐标轴小标记
                            show:false
                        }],
                        axisLabel:{
                            textStyle:{
                                fontSize:'calc(100vw / 750 * 26)',
                                color:'#bf4c49',

                            }
                        }
                    }
                ],
                series : [
                    {
                        name:'',
                        type:'bar',
                        tooltip:{show:false},
                        barGap:'-50%',
                         //最小柱高
                        barWidth: 10,  //柱宽度
                        barMaxWidth:80,
                        barMaxHeight:50,  //最大柱宽度
                        data: this.rankNum.reverse(),
                        itemStyle:{
                            normal:{    //柱状图颜色
                                color:'#B1C8FE',
                                barBorderRadius:[10, 10, 10, 10],
                                label:{
                                    formatter: "{c}"+"票",
                                    show: true,   //显示文本
                                    position: 'right',  //数据值位置
                                    textStyle:{
                                        color:'#e69693',
                                        fontSize:'calc(100vw / 750 * 20)',
                                        fontFamily: 'pingfang',
                                    }
                                }
                            }
                        }
                    }
                ]
            };
            myChart.setOption(option);
        },
        height() {
            if(window.screen.height / window.screen.width > 1.85 ) {
                return true
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.choose {
    width: 85.2vw;
    height: 99.28vh;
    margin: 0 auto;
    background-image: url("../../assets/images/vote/chooseBg.png");
    background-size: 100% 98%;
    background-repeat: no-repeat;
    .live {
        width: 10.8vw;
        height: 1.74vh;
        background-size: 100% 100%;
        background-image: url("../../assets/images/vote/live.png");
        position: relative;
        top: 8vh;
        left: 7vw;
    }
    .title {
        text-align: center;
        margin-top: 6.5vh;
        color: #eb7774;
        font-size: calc(100vw / 750 * 34);
    }
    .side-title {
        text-align: center;
        font-family: 'pingfang';
        color: #e37c79;
        font-size: calc(100vw / 750 * 26);
    }
    .content {
            display: flex;
            flex-direction: column;
            justify-content:space-around;
        .lab {  
            display: flex;
            margin-top: 2vh;
            position: relative;
            left: 3.2vw;
        }
        .inputStatus{
            opacity: 0;
        }
        .number {
            margin-left: 8vw;
            position: relative;
            top: 1.2vh;
            font-family: "pingfang";
            font-size: calc(100vw / 750 * 26);
            color: #bf4c49;
        }
        .inputStyle2{
            position: relative;
            display: block;
            left: 2vw;
            bottom: -0.7vh;
            width: 6vw;
            height: 3.731vh;
            background-image: url("../../assets/images/vote/label.png");
            background-size: 100% ;
            background-repeat: no-repeat
        }  
        .isChecked {
            background: url("../../assets/images/vote/labelCilck.png");
            background-size: 100% ;
            background-repeat: no-repeat       
        }
    }
    .btn {
        position: relative;
        top: 6.2334vh;
        width: 22.933333vw;
        height: 9.28689vh;
        background-image: url("../../assets/images/vote/vote.png");
        background-size: 100% ;
        background-repeat: no-repeat;
        margin: 0 auto;
    }
}
#main {
    font-family: 'pingfang';
    font-size: calc(100vw / 750 * 20);
}
.tipLoading {
    width: 40.4vw;
    height: 10.53vh;
    background-image: url("../../assets/images/vote/loading.png");
    background-size: 100% 100%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-20.2vw,-5.265vh)
}
.tipSuccess {
    width: 40.4vw;
    height: 10.53vh;
    background-image: url("../../assets/images/vote/success.png");
    background-size: 100% 100%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-20.2vw,-5.265vh)
}
.isHeight {
    height: 102vh;
}
</style>