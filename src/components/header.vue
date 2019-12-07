<template>
  <div class="myheader">
        <div class="light"></div>
        <myTitle class="title"><span><slot></slot></span></myTitle>
  </div>
</template>

<script>
import myTitle from './rule/title.vue'

export default {
    name: 'myheader',
    components: {
        myTitle,
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.myheader {
    width: 100vw;
}
.title {
    position: relative;
    top: 3.7vh;
    width: 36.26vw;
    height: 10.28vh;
    background-image: url("../assets/images/rule/title.png");
    background-size: 100% 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #c35855;
    span {
        position: relative;
        top: -0.45vh;
    }
}
.light {
    width: 100vw;
    height: 22.63vh;
    background-image: url("../assets/images/rule/light.png");
    background-size: 100% 100%;
    position: absolute;
}
</style>