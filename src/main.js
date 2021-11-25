import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(ElementUI)

import globalJs from '@/assets/global.js' //项目公共js
Vue.prototype.globalJs = globalJs;

// 图片预览组件-安装依赖：npm install v-viewer --save
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
Vue.use(Viewer)
Viewer.setDefaults({
  zIndexInline: 9999, //预览弹窗的层级
  //下面的参数不写，默认都为true
  Options: {
    'inline': true, //启用inline模式
    'button': true, //显示右上角关闭按钮
    'navbar': true, //显示缩略图导航
    'title': true, //显示当前图片的标题
    'toolbar': true, //显示工具栏
    'tooltip': true, //显示缩放百分比
    'movable': true, //图片是否可移动
    'zoomable': true, //图片是否可缩放
    'rotatable': true, //图片是否可旋转
    'scalable': true, //图片是否可翻转
    'transition': true, //使用css3过渡
    'fullscreen': true, //播放时是否全屏
    'keyboard': true, //是否支持键盘
    'url': 'data-source' //设置大图片的url
  }
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')