# 社团达人秀投票

##  运行

### Project setup
```
yarn install
```

#### Compiles and hot-reloads for development
```
yarn run serve
```

#### Compiles and minifies for production
```
yarn run build
```

#### Run your tests
```
yarn run test
```

#### Lints and fixes files
```
yarn run lint
```

#### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 说明

​	此项目为2019年社团达人秀的投票页面，运行于微信浏览器。于2019.11.28正式上线，总计上线时间为三天。

项目测试时部署于gitlab。

## 技术栈

- vue
- vue-router
- webpack
- axios
- echart
- spider

## 目录结构

```
├─public                //入口文件index.html和图标favicon.ico
├─README                  //说明文档
└─src                   //主要代码
    ├─assets                 //静态资源
    │  ├─font                      //字体，提取所需要的字压缩过的
    │  ├─images                       //图片，使用 https://tinypng.com 压缩
    │  │  ├─final                          //决赛页面所用图片
    │  │  ├─home                          //首页所用图片
    │  │  ├─rule                          //规则页所用图片
    │  │  └─vote                          //投票所用图片
    ├─app.vue           	//字体的导入写于此
    ├─config.js         	//保存api
    ├─router.js				//路由    
    └─pages    
    	├─finalvote //决赛页面
    	├─vote //投票页面
    	├─home //首页
    	└─rule //规则页面

```

## 接口文档

[接口文档](https://www.showdoc.cc/547823933751436?page_id=3266030516841234)

## 运行截图

![](https://s2.ax1x.com/2019/12/07/QtgbcQ.png)

![](https://s2.ax1x.com/2019/12/07/Qt2ShT.png)



![](https://s2.ax1x.com/2019/12/07/Qt2EH1.png)

![](https://s2.ax1x.com/2019/12/07/Qt2u9O.png)

## 其他

​	这个项目的需求改动较为频繁，做着做着社联那边最后又说决赛页面不需要了，所以决赛页面的开发半路夭折了。字体压缩使用的是font-min工具，图片由tinypng进行压缩。

