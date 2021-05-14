<template>
    <div>
      <div class="t01 wow bounceInDown" data-wow-duration="2s"></div>
      <div class="z-fixed-c wow bounceInUp" data-wow-duration="2s" style="margin-bottom: 50px">
        <div style="width: 80%;">
          <div class="pro01">
            <span class="pro02">产品详情</span>
           </div>

          <div class="z-fixed" style="color: rgb(102, 102, 102);margin-top: 50px;">
            <div class="pro03 wow bounceInUp" data-wow-duration="2.1s">
              <img class="imgClass" :src="produceInfo.img"/>
            </div>
            <div style="margin-left: 100px">
              <div class="pro04 wow bounceInUp" data-wow-duration="2.2s">{{produceInfo.title}}</div>
              <div class="pro05 wow bounceInUp" data-wow-duration="2.3s">使用说明：{{produceInfo.instructions}}</div>
              <div class="pro05 wow bounceInUp" data-wow-duration="2.4s">保质日期：{{produceInfo.expirationDate}}</div>
              <div class="pro05 wow bounceInUp" data-wow-duration="2.5s">贮存条件：{{produceInfo.condition}}</div>
              <div class="pro05 wow bounceInUp" data-wow-duration="2.6s">供应公司：{{produceInfo.company}}</div>

              <div class="pro07 wow bounceInUp" data-wow-duration="2.7s">
                <span class="pro06">电话：{{produceInfo.phone}}</span></div>
            </div>

          </div>
        </div>
      </div>
      <div class="wow bounceInUp" data-wow-duration="2s">
        <pc-bottom></pc-bottom>
      </div>
    </div>
</template>

<script>
  import pcBottom from './pc-bottom'
    export default {
        name: "produceInfo",
      components:{
        "pc-bottom":pcBottom
      },
      data(){
        return{
          produceInfo:""
        }
      },
      watch:{
        '$route':function (n,o) {
          if(this.$route.query && this.$route.query.pInfo){
            this.produceInfo = JSON.parse(this.$route.query.pInfo)
          }
          window.scrollTo(0,0);
        }
      },
      mounted(){
        new  this.$wow.WOW().init();
      },
      created(){
          if(this.$route.query && this.$route.query.pInfo){
            this.produceInfo = JSON.parse(this.$route.query.pInfo)
          }

      },
    }
</script>

<style scoped>
  .pro07{
    margin-top: 45px;

  }
  .pro06{
    color: #666666;
    border:1px solid #4ab344;
    padding: 10px 30px 10px 30px;
    border-radius: 4px;
  }
  .pro05{
    color: #666;
    line-height: 32px;
  }
  .pro04{
    font-size: 20px;
    margin-bottom: 20px;
    color: #585858;
  }
  .pro03{
    width: 500px;
    visibility: visible;
    display: block;
  }
  .pro02{
    padding: 0 20Px 0 20Px;
    line-height: 45Px;
    border-bottom: 2Px solid #4ab344;
    display: table-cell;
  }
  .pro01{
    color: #4ab344;
    font-size: 16Px;
    height: 45Px;
    line-height: 45Px;
    border-bottom: 1Px solid #cccccc;
    margin-top: 10Px;
  }
  .t01{
    width: 100%;
    height: 450px;
    background-image: url("../../assets/images/sl56.jpg");
    background-size: 100% 100%;
  }
</style>
