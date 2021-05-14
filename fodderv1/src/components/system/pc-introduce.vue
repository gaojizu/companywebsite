<template>
    <div>
      <div class="z-fixed-c" style="padding: 200px 0">
        <div class="wow bounceInLeft"  data-wow-duration="2s">
          <div class="in01">极品城</div>
          <div class="in02">淘好物 更省钱</div>
          <div class="in03">
            <img :src="'https://jipincheng.cn/downApp.jpg?timeSp='+timeStamp" style="width: 100%;"/>
          </div>
          <div class="in04">扫一扫下载APP</div>
          <div class="z-fixed" style="margin-top: 65px;">
            <div class="z-fixed in06" @click="iosDownClick()">
              <div>ios下载</div>
              <div class="in07">
                <img src="../../../static/img/1.png" style="width: 100%;"/>
              </div>
            </div>
            <div class="z-fixed in06" style="margin-left: 30px;" @click="anDownClick()">
              <div>Android下载</div>
              <div class="in07">
                <img src="../../../static/img/1.png" style="width: 100%;"/>
              </div>
            </div>
          </div>
        </div>
        <div class="in05 wow bounceInRight"  data-wow-duration="2s">
          <img style="width: 100%" src="https://jipincheng.cn/pcv210.png">
        </div>
      </div>


      <div class="in08 z-fixed-c">
        <div class="wow bounceInRight " data-wow-duration="2s">
          <div
            v-for="(item,index) in list" :key="index" class="in09 z-fixed"
          :style="{background:indexVal===index ? '#FFFFFF' : '',color:indexVal===index ? '#E25838' : '#FFFFFF'}"
            @mouseover="mouseOver(index)"
          >
            <div class="in10">{{item.id}}</div>
            <div style="margin-left: 18px;max-width: 229px;">
              <div class="in11">{{item.title1}}</div>
              <div class="in12">{{item.title2}}</div>
            </div>
          </div>
        </div>
        <div class="z-fixed wow bounceInLeft" data-wow-duration="2s" style="margin-left: 108px;">
          <div class="in13">
            <img style="width: 100%;transition: all 0.5s;" :src="list[indexVal].img1">
          </div>
          <div class="in13" style="margin-left: 80px;">
            <img style="width: 100%;transition: all 0.5s;" :src="list[indexVal].img2">
          </div>
        </div>
      </div>
      <div style="margin-top: 100px;margin-bottom: 100px;">
        <div class="z-fixed-c" >
          <div class="in14 wow bounceIn class1" data-wow-duration="2s">
            <img style="width: 100%" src="https://jipincheng.cn/pcv219.png">
          </div>
          <div class="in14 wow bounceIn class2" style="margin-left: 50px;" data-wow-duration="2s">
            <img style="width: 100%" src="https://jipincheng.cn/pcv220.png">
          </div>
        </div>
        <div class="z-fixed-c" style="margin-top: 50px;">
          <div class="in14 wow bounceIn class3" ata-wow-duration="2s">
            <img style="width: 100%" src="https://jipincheng.cn/pcv221.png">
          </div>
          <div class="in14 wow bounceIn class4" style="margin-left: 50px;" data-wow-duration="2s">
            <img style="width: 100%" src="https://jipincheng.cn/pcv222.png">
          </div>
        </div>
      </div>

    </div>
</template>

<script>
  import {request} from '../common/request'
  import {api} from '../common/Config'
    export default {
      data(){
        return{
          indexVal:0,
          list:[{
            id:"01",
            title1:"新人专享0元免单",
            title2:"海量商品每天抢不停",
            img1:"https://jipincheng.cn/pcv211.png",
            img2:"https://jipincheng.cn/pcv212.png"
          },{
            id:"02",
            title1:"再享108元补贴大礼包",
            title2:"官方百万补贴 购物立减当钱花",
            img1:"https://jipincheng.cn/pcv213.png",
            img2:"https://jipincheng.cn/pcv214.png"
          },{
            id:"03",
            title1:"极品会员尊享8大权益",
            title2:"自购返佣100% 分享赚佣100%",
            img1:"https://jipincheng.cn/pcv215.png",
            img2:"https://jipincheng.cn/pcv216.png"
          },{
            id:"04",
            title1:"尊享300+特权",
            title2:"吃喝玩乐都有券 衣食住行享返现",
            img1:"https://jipincheng.cn/pcv217.png",
            img2:"https://jipincheng.cn/pcv218.png"
          }],
          timeStamp:new Date()
        }
      },
      mounted(){
        new  this.$wow.WOW().init()
      },
      methods:{
        iosDownClick () {
          this.dataList(0)
        },
        anDownClick () {
          this.dataList(1)
        },
        dataList (flg) {
          let that = this
          request({
            method: 'GET',
            url: api.getDownloadUrl,
            params: {
              type: flg
            }
          }).then(res => {
            if (res.code + '' === '0') {
              // 安卓
              if (flg) {
                if (res && res.url) {
                  that.appUrl = res.url;
                  window.location.href = res.url
                } else {
                  window.location.href="https://a.app.qq.com/o/simple.jsp?pkgname=com.example.administrator.jipinshop"
                }
              } else {
                // ios
                if (res && res.url) {
                  that.appUrl = res.url
                } else {
                  that.appUrl = 'https://itunes.apple.com/cn/app//id1450707933?mt=8'
                }
                window.location.href = that.appUrl// 打开app下载地址，有app同事提供
              }
            }else{
              if(flg){
                window.location.href="https://a.app.qq.com/o/simple.jsp?pkgname=com.example.administrator.jipinshop"
              }else{
                window.location.href="https://itunes.apple.com/cn/app//id1450707933?mt=8"
              }
            }
          })
        },
        mouseOver(i){
          this.indexVal = i
        }
      }
    }
</script>

<style scoped>
  .in14:hover{
    transform: scale(1.1);
  }
  .in14{
    width: 710px;
    height: 454px;
  }
  .in13{
    width: 333px;
    height: 682px;
    transition: all 1s;
  }
  .in12{
    font-size: 16px;
  }
  .in11{
    font-size: 20px;
    font-weight: bold;
  }
  .in10{
    font-size: 70px;
    font-family: wryhBold;
  }
  .in09{
   /* width: 374px;
    height: 140px;*/
    cursor:pointer;
    transition: all 0.5s;
    padding: 10px 20px;
  }
  .in08{
   /* height: 1000px;*/
    width: 100%;
    background: #E25838;
    padding: 159px 0;
  }
  .in07{
    width: 26px;
    height: 26px;
    margin-left: 20px;
  }
  .in06{
    padding: 11px 11px 7px 32px;
    background: #000000;
    font-size: 14px;
    color: #FFFFFF;
    border-radius: 4px;
    cursor:pointer;
  }
  .in05{
    width: 930px;
    height: 338px;
    margin-left: 50px;

  }
  .in04{
    font-size: 14px;
    color: #333333;
    margin-top: 8px;
    width: 180px;
    text-align: center;
  }
 .in01{
   font-size: 36px;
   font-weight: bold;
   color: #333333;
 }
  .in02{
    font-size: 36px;
    color: #333333;
    margin-top: 16px;
  }
  .in03{
    width: 180px;
    height: 180px;
    margin-top: 55px;
  }

</style>
