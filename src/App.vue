<template>
  <div id="app" >
    <wx v-if="isWx"></wx>
    <div v-if="!isWx">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import {isWx} from './wx.js' 
import wx from './components/wx.vue'
export default {
    name: "app",
    data(){
        return {
            isWx
        }
    },
    components: {
        wx
    }
};
</script>

<style>
* {
  margin: 0;
}
body {
  font-family: "xingyan";
}
@font-face {
  font-family: "xingyan";
  src: url("./assets/font/xingyan1.eot");
  src: url("./assets/font/xingyan1.eot?#iefix") format("embedded-opentype"),
    url("./assets/font/xingyan1.woff") format("woff"),
    url("./assets/font/xingyan1.ttf") format("truetype"),
    url("./assets/font/xingyan1.svg#svgFontName") format("svg");
}
@font-face {
  font-family: "pingfang";
  src: url("./assets/font/苹方字体.eot");
  src: url("./assets/font/苹方字体.eot?#iefix") format("embedded-opentype"),
    url("./assets/font/苹方字体.woff") format("woff"),
    url("./assets/font/苹方字体.ttf") format("truetype"),
    url("./assets/font/苹方字体.svg#svgFontName") format("svg");
}
</style>
