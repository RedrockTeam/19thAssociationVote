import Vue from 'vue'
import App from './App.vue'
import routers from './router.js'
import Axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'



Vue.use(routers)
Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.prototype.$http=Axios


Vue.config.productionTip = false

new Vue({
    router:routers,
    render: h => h(App),
}).$mount('#app')
