import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/system/index'
import dynamicInfo from '@/components/system/dynamicInfo'
import produceInfo from '@/components/system/produceInfo'
import wowjsTest from '@/components/system/wowjsTest'

Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta:{
        keepAlive: true,
      }
    },{
      path: '/dynamicInfo',
      name: 'dynamicInfo',
      component: dynamicInfo,
      meta:{
        keepAlive: false,
      }
    },{
      path: '/produceInfo',
      name: 'produceInfo',
      component: produceInfo,
      meta:{
        keepAlive: false,
      }
    },
    {
      path: '/wowTest',
      name: 'wowTest',
      component: wowjsTest
    }
  ]
})

