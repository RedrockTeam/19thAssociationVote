<template>
  <div class="home" :class="{homeIsNormal: !height(),homeIsHeight: height() }">
    <div id="root" style="overflow: hidden">
      <div v-if="!height()" class="swiper-container">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(item,key) in info"
            :key="key"
          >
            <div class="info">
              <p class="title"></p>
              <div class="person">
                <!-- <img style="width:10vw;height:10vh;background-color:red" :src="infos[indexs].StuImg"> -->
                <img class="person-img" src="../assets/images/vote/下载.png" />
                <!-- <img style="width:12.4vw;height:7.711442786069651741293532vh;background-color:red;border-radius:6.2vw" > -->
                <div class="person-info">
                  <p>
                    <span>姓名</span>
                    <span class="container"></span>
                  </p>
                  <p>
                    <span>学号</span>
                    <span class="container"></span>
                  </p>
                </div>
              </div>
              <div class="work" :class="{workIsHeight: !height()}">
                <div class="person-work">
                  <p>
                    <span>作品</span>
                    <span class="container">《作品》</span>
                  </p>
                  <p class="worktitle">
                    <span class="person-work-info">内容简介</span>
                    <span class="person-work-container"></span>
                  </p>
                </div>
                <div class="workImg">
                  <div class="workimgson">
                    <!-- <img :src="infos[indexs].Work" class="work-img"> -->
                    <img src="../assets/images/vote/download.png" class="work-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="height()" class="swiper-container-h">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(item,key) in info"
            :key="key"
          >
            <div class="info">
              <p class="title"></p>
              <div class="person">
                <!-- <img style="width:10vw;height:10vh;background-color:red" :src="infos[indexs].StuImg"> -->
                <img class="person-img" src="../assets/images/vote/下载.png" />
                <!-- <img style="width:12.4vw;height:7.711442786069651741293532vh;background-color:red;border-radius:6.2vw" > -->
                <div class="person-info">
                  <p>
                    <span>姓名</span>
                    <span class="container"></span>
                  </p>
                  <p>
                    <span>学号</span>
                    <span class="container"></span>
                  </p>
                </div>
              </div>
              <div class="work" :class="{workIsHeight: !height()}">
                <div class="person-work">
                  <p>
                    <span>作品</span>
                    <span class="container">《作品》</span>
                  </p>
                  <p class="worktitle">
                    <span class="person-work-info">内容简介</span>
                    <span class="person-work-container"></span>
                  </p>
                </div>
                <div class="workImg">
                  <div class="workimgson">
                    <!-- <img :src="infos[indexs].Work" class="work-img"> -->
                    <img src="../assets/images/vote/download.png" class="work-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="btn"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  components: {},
  data() {
    return {
      info: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    };
  },
  methods: {
    space() {
        if(this.height()) {
            return (window.screen.width / 100) * 2.4154;
        }
        return (window.screen.width / 100) * 2.933333;
    },
    height() {
      if (window.screen.height / window.screen.width > 1.85) {
        return true;
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      new Swiper(".swiper-container", {
        loop: false, // 循环模式选项
        centeredSlides: true,
        spaceBetween: this.space(),
        centeredSlidesBounds: true,
        initialSlide: 6,
        slidesPerView: "auto"
        // 如果需要分页器
        // pagination: {
        //   el: '.swiper-pagination',
        // },
      });
      new Swiper(".swiper-container-h", {
        loop: false, // 循环模式选项
        centeredSlides: true,
        spaceBetween: this.space(),
        centeredSlidesBounds: true,
        initialSlide: 6,
        slidesPerView: "auto"
        // 如果需要分页器
        // pagination: {
        //   el: '.swiper-pagination',
        // },
      });
    });
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;
  background-size: 100% 100%;
}
.homeIsNormal {
  background-image: url(../assets/images/final/bg.png);
}
.homeIsHeight {
  background-image: url(../assets/images/final/bgXR.png);
}
#root {
  position: relative;
  top: 23vh;
}
.swiper-container {
  overflow: visible !important;
  width: 30vw;
  height: 50vh;
  .workImg {
      position: relative;
      top: 3.92325vh;
      left: -1.333334vw;
  }
  .person-work {
      top: 3.92325vh;
  }
  .title {
       margin-top: 6.5vh;
  }
  
}
.swiper-container-h {
  overflow: visible !important;
  width: 30vw;
  height: 50vh;
  position: relative;
  left: 35vw;
  .workImg {
      position: relative;
      bottom: 4vh;
      left: -7.333334vw;
  }
  .person-work {
      top: -4.07675vh;
  }
  .title {
        margin-top: 3.5vh;
  }
}

.swiper-container .swiper-wrapper .swiper-slide {
  width: 77.6vw;
  height: 0;
  padding-bottom: 263%;
  background-size: 100%;
  background-repeat: no-repeat;
  background-image: url(../assets/images/final/contentXR.png);
}
.swiper-container-h .swiper-wrapper .swiper-slide {
  width: 70.289vw;
  height: 0;
  padding-bottom: 263%;
  background-size: 100%;
  background-repeat: no-repeat;
  background-image: url(../assets/images/final/contentXR.png);
}

.swiper-container .swiper-wrapper .swiper-slide-prev {
  margin-top: 18px;
  height: 46.936vh !important;
  position: relative;
  background-size: 100% 48%;
  bottom: 1vh;
}


.swiper-container-h .swiper-wrapper .swiper-slide-prev {
  margin-top: 18px;
  height: 46.936vh !important;
  position: relative;
  background-size: 100% 39%;
  bottom: 1vh;
  .workImg {
      position: relative;
      top: -6.07675vh;
      left: -6.333334vw;
  }
}

.swiper-container .swiper-wrapper .swiper-slide-next {
  margin-top: 18px;
  height: 46.936vh !important;
  position: relative;
  background-size: 100% 48%;
  bottom: 1vh;
}
.swiper-container-h .swiper-wrapper .swiper-slide-next {
  margin-top: 18px;
  height: 46.936vh !important;
  position: relative;
  background-size: 100% 39%;
  bottom: 1vh;
  .workImg {
      position: relative;
      top: -6.07675vh;
      left: -6.333334vw;
  }
}

.swiper-container .swiper-wrapper .swiper-slide-active {
  width: 77.6vw;
  margin: 0 auto;
}
.swiper-container-h .swiper-wrapper .swiper-slide-active {
  width: 70.289vw;
  margin: 0 auto;
}

.info {
  width: 85.2vw;
  height: 0;
  /* height: 52.3vh; */
  padding-bottom: 88%;
  margin: 0 auto;
  background-size: 100% 100%;
  color: #d0625f;
  font-size: calc(100vw / 750 * 26);
  .container {
    font-family: "pingfang";
    margin-left: 2.36vw;
    color: #bf4c49;
    font-size: calc(100vw / 750 * 24);
  }
  .person-work-container {
    font-family: "pingfang";
    margin-left: 3vw;
    color: #e69693;
    font-size: calc(100vw / 750 * 20);
  }
  .person-work-info {
    color: #d0625f;
    margin-top: 1vh;
  }
  .title {
    text-align: center;
    height: 2vh;
    
    color: #eb7774;
    font-size: calc(100vw / 750 * 34);
    position: relative;
    bottom: -0.3218vh;
  }
  .person {
    width: 50.2vw;
    height: 5vh;
    position: relative;
    left: 12vw;
    margin-top: 3vh;
    .person-img {
      width: 12.4vw;
      height: auto;
      float: left;
      position: relative;
      left: -5vw;
      border-radius: 50%;
    }
    .person-info {
      float: left;
      position: relative;
      top: -0.5vh;
      p {
        margin-top: 0.714vh;
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
      width: 40vw;
      float: left;
      margin-left: 5vw;
      position: relative;
      
      .worktitle {
        margin-top: 1vh;
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
      
      
      .work-img {
        width: 100%;
      }
    }
  }
}
.workIsHeight {
  position: relative;
  bottom: 3.942vh;
}
.btn {
  position: relative;
  top: 16.693311vh;
  width: 32.9333vw;
  margin: 0 auto;
  height: 0;
  padding-bottom: 30%;
  background-image: url(../assets/images/final/vote.png);
  background-size: 100%;
  background-repeat: no-repeat;
}
.workIsHeight {
    position: relative;
    bottom: 3.942vh;
}
</style>
