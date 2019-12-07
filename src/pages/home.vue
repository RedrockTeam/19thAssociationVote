<template>
  <div class="home" :class="{isHeight: height(), normal: !height() && !isIphone6(), iphone6: isIphone6()}">
    <div class="content">
      <btnMove>开始投票</btnMove>
      <btn>活动规则</btn>
    </div>
  </div>
</template>

<script>
import btn from "../components/home/button.vue";
import btnMove from "../components/home/buttonMove.vue";
import {API} from "../config"

export default {
    name: "home",
    data() {
        return {};
    },
    components: {
        btn,
        btnMove
    },
    beforeCreate() {
        var token = document.location.href.split('/?token=')[1];
        if (token && token.length) {
            token = token.split('#/')[0];
            document.location.hash = '#/';
            token = token.replace(/%2F/g, '/');
            token = token.replace(/%3D/g, '=');
            token = token.replace(/%20/g, '+');

            localStorage.setItem('token', token);
        }
        if (!localStorage.getItem('token') && !token) {
            window.location.href =
            'https://wx.redrock.team/magicloop/rushb?b=' + encodeURI(API + '/login')+ '&scope=student';
            
        }
    },
    methods: {
        height() {
            if(window.screen.height / window.screen.width > 1.85 ) {
                return true
            }
        },
        isIphone6() {
            if(window.screen.height / window.screen.width < 1.77867  ) {
                return true
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  width: 100vw;
  height: 100vh;
  background-size: 100% 100%;
}
.content {
  width: 100vw;
  text-align: center;
  position: absolute;
  bottom: 11.7vh;
}

.normal {
    background-image: url(../assets/images/home/homeBg.png);
}
.isHeight {
    background-image: url(../assets/images/home/homeBgXr.png);
}
.iphone6 {
    background-image: url(../assets/images/home/homeBg6.png);
}
</style>
