<template>
    <div>
      <div class="t01 wow bounceInDown" data-wow-duration="2s"></div>
      <div style="margin-top: 50px">
        <div class="z-fixed-c main04">
          <span class="main01 wow bounceInLeft" data-wow-duration="3s">S</span>
          <div style="margin-left: 10px" class="wow bounceInRight" data-wow-duration="3s">
            <div class="main02">科研基地</div>
            <div class="main03">cience center</div>
          </div>
        </div>
      </div>

      <div style="padding: 20px" class="wow bounceInUp" data-wow-duration="2s">
        <div class="fo01">
          <div>公司设有专门的研发机构—科研中心，该中心实验及检测设备先进、功能完备。人员结构合理，技术互补，经验丰富，勇于攻关，是一支致力于酶制剂、生物菌种研究开发的高水平的科研队伍。</div>
          <div>该中心具有强大的自主创新、开发能力，目标瞄准国内外生物领域高端市场，开发并生产出具有国内先进水平的添加剂。</div>
        </div>
      </div>
       <div class="z-fixed-c wow bounceInUp" data-wow-duration="2s">
         <div style="width: 1200px;height: 420px;">
           <el-carousel :interval="2000" type="card" height="420px" >
             <el-carousel-item v-for="(imgItem,imgIndex) in imgList" :key="imgIndex">
              <img :src="imgItem" class="imgClass"/>
             </el-carousel-item>
           </el-carousel>
         </div>
       </div>


      <div>
        <div class="z-fixed-c main04">
          <span class="main01 wow bounceInLeft" data-wow-duration="3s">S</span>
          <div style="margin-left: 10px" class="wow bounceInRight" data-wow-duration="3s">
            <div class="main02">科研专家</div>
            <div class="main03">cience expert</div>
          </div>
        </div>
      </div>

      <div style="margin-top: 50px;margin-bottom: 100px;" class="z-fixed-c">
        <div class="fo08 z-fixed wow bounceInRight" data-wow-duration="3s">
          <div class="fo02">
            <img src="../../assets/images/sl67.png" class="imgClass"/>
          </div>
          <div class="fo03 ">
            <div class="fo04">彭教授</div>
            <div class="fo05">Professor Peng</div>
            <div class="fo06">华中农业大学毕业，从事畜牧行业多年，多年来带领研究团队不断优化产品，推出原创性产品，并进行产业化生产</div>
          </div>
        </div>

        <div class="fo08 z-fixed wow bounceInLeft" data-wow-duration="3s">
          <div class="fo02">
            <img src="../../assets/images/sl68.png" class="imgClass"/>
          </div>
          <div class="fo03 ">
            <div class="fo04">吴教授</div>
            <div class="fo05">Professor Wu</div>
            <div class="fo06">华南农业大学毕业，生物学硕士学位。从事微生物筛选、培养、改良，基因工程菌的构建，新型微生物活菌产品开发、发酵工艺探索及优化。</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  const sl62 = require('../../assets/images/sl62.jpg');
  const sl63 = require('../../assets/images/sl63.jpg');
  const sl64 = require('../../assets/images/sl64.jpg');
  const sl65 = require('../../assets/images/sl65.jpg');
  const sl66 = require('../../assets/images/sl66.jpg');
    export default {
        name: "pc-four",
      data(){
          return{
            imgList:[sl62,sl63,sl64,sl65,sl66]
          }
      },
      mounted(){
        new  this.$wow.WOW().init()
        window.scroll(0, 0);
      },
    }
</script>

<style >
  .el-carousel__indicators--outside{
    display: none;
  }
  .el-carousel__item:nth-child(2n) {
   /* background-color: #99a9bf;*/
   /* width: 600Px!important;*/
  }

  .el-carousel__item:nth-child(2n+1) {
    /*background-color: #d3dce6;*/
    /*width: 600Px!important;*/
  }
  .fo08{
    width: 567Px;
   /* background: red;*/
    height: 240px;
    position: relative;
  }
  .fo07{
    background-image: url("../../assets/images/sl69.png");
    width: 380px;
    height: 240px;
    background-size: 100% 100%;

  }
  .fo06{
   margin-top: 20Px;
    padding-right: 20Px;
  }
  .fo05{

  }

  .fo04{
    font-size: 24Px;
    margin-top: 34Px;
  }
  .fo03{
    line-height: 24Px;
    /*position: absolute;
    top: 0;
    left: 0px;*/
    z-index: 1;
    padding-left: 100Px;
   /* padding-right: 40px;*/
   /* background: green;*/
    height: 100%;
    position: absolute;
    left: 120Px;
    width: 400Px;
    background-image: url("../../assets/images/sl69.png");
    background-size: 100% 100%;
  }
  .fo02{
    min-width: 203Px;
    height: 302Px;
    /*position: absolute;
    top: 0;*/
    z-index: 2;
  }
  .fo01{
    line-height: 36px;
    color: rgb(102, 102, 102);
    text-align: center;
  }
  .t01{
    width: 100%;
    height: 450px;
    background-image: url("../../assets/images/sl61.jpg");
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
