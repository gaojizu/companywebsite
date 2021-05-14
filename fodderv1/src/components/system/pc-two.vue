<template>
    <div>
       <div class="t01 wow bounceInDown" data-wow-duration="2s"></div>
      <div class="z-fixed-c main04">
        <span class="main01 wow bounceInLeft" data-wow-duration="3s">l</span>
        <div style="margin-left: 10px" class="wow bounceInRight" data-wow-duration="3s">
          <div class="main02">公司简介</div>
          <div class="main03">ntroduction</div>
        </div>
      </div>

      <div class="z-fixed-c" style="margin-top: 100px;">
        <div class="t02  wow bounceInUp" data-wow-duration="2s"><div>
          集团创建于1991年，是一家集生物发酵原料药、化工合成原料药、兽用生物制品、兽用药物制剂、饲料及饲料添加剂的研发、生产、国内外贸易和技术服务为一体的多元化高新科技企业集团。我们有严格的质量控制体系，从原料入库、半成品及产成品的生产过程、成品出库等进行全程质量控制。
          集团始终以“全心全意为人民服务”为企业宗旨，以“创新求变谋发展，实事求是铸伟业”为大政方针，始终坚持“高起点、高科技、高品质”的发展战略。
        </div>
          <div class="z-fixed-c t04  wow bounceInUp" data-wow-duration="2s">
            <div class="t05">
              <div><span class="t06">800</span><span class="t07">亩</span></div>
              <div>生产研发基地</div>
            </div>
            <div class="t05">
              <div><span class="t06">50+</span></div>
              <div>研发专家教授</div>
            </div>
            <div class="t05">
              <div><span class="t06">32</span></div>
              <div>出口国家地区</div>
            </div>
          </div>
          </div>
        <div class="t03 wow bounceInUp" data-wow-duration="2s">
          <img src="../../assets/images/sl55.png" class="imgClass"/>
        </div>
      </div>

      <div class="z-fixed-c main04" style="margin-top: 100px">
        <span class="main01 wow bounceInLeft" data-wow-duration="3s">C</span>
        <div style="margin-left: 10px" class="wow bounceInRight" data-wow-duration="3s">
          <div class="main02">资质荣誉</div>
          <div class="main03">ertificate</div>
        </div>
      </div>
      <div style="margin-top: 50px;margin-bottom: 50px;" class="wow bounceInUp" data-wow-duration="2s">
        <com-img-move :dataList="dataList"></com-img-move>
      </div>

    </div>
</template>

<script>
   const sl51 = require('../../assets/images/sl51.jpg');
   const sl52 = require('../../assets/images/sl52.jpg')
   const sl53 = require('../../assets/images/sl53.jpg')
   const sl54 = require('../../assets/images/sl54.jpg')

    import ImgMove from '@/components/common/com-img-move'
    export default {
      name: "pc-two",
      components:{
          "com-img-move":ImgMove
      },
      mounted(){
        new  this.$wow.WOW().init()
        window.scroll(0, 0);
      },
      data(){
        return{
          dataList:[{id:0,img:sl51},{id:0,img:sl52},{id:0,img:sl53},{id:0,img:sl54}]
        }
      },
    }
</script>

<style scoped>

  .t07{
    font-size: 20px;
  }
  .t06{
    font-size: 36px;
  }
  .t05{
    width: 33.3%;
    text-align: center;
    color: rgb(255, 255, 255);
  }
  .t04{
    height: 180px;
    background: #4baf55;
    width: 100%;
    margin-top: 20px;
  }
  .t03{
    width: 520px;
    height: 400px;
    margin-left: 100px;
  }
  .t02{
    line-height: 36px;
    width: 500px;
  }
  .t01{
    width: 100%;
    height: 450px;
    background-image: url("../../assets/images/sl50.jpg");
    background-size: 100% 100%;
  }
  .main04{
    padding-top: 50px;
  }
  .main03{
    font-size: 16px;
    color: #cccccc;
    text-align: center;
  }
  .main02{
    font-size: 24px;
    color: rgb(74, 179, 68);
  }
  .main01{
    font-size: 60px;
    color: rgb(204, 204, 204);

  }
</style>
