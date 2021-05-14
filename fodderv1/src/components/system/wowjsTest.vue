<template>
  <div class="test_wow" >
    <div class="test_wow wow slideInLeft"  data-wow-duration="1s">
      <!--<section class="wow slideInLeft" style="color: white;text-align: center" data-wow-duration="1s">
        slideInLeft
      </section>-->
      slideInLeft
    </div>
    <div class="wow rollIn test_wow1" data-wow-duration="2s" >rollIn</div>
    <div class="wow bounceIn test_wow2" data-wow-duration="1s" >bounceIn</div>
    <div class="wow bounceInUp test_wow3" data-wow-duration="2s" >bounceInUp</div>
    <div class="wow bounceInDown test_wow1" data-wow-duration="3s" >bounceInDown</div>
    <div class="wow bounceInLeft test_wow2" data-wow-duration="3s" >bounceInLeft</div>
    <div class="wow slideInLeft test_wow4" data-wow-duration="1s" >slideInLeft</div>
    <div class="wow bounceInRight test_wow1" data-wow-duration="1s" >bounceInRight</div>
    <div class="wow slideInRight test_wow2" data-wow-duration="2s" >slideInUp</div>
    <div class="wow bounceInRight test_wow3" data-wow-duration="2s" >slideInDown</div>
    <div class="wow bounceInRight test_wow4" data-wow-duration="2s" >slideInRight</div>
    <div class="wow  lightSpeedIn test_wow1" data-wow-duration="2s" > lightSpeedIn</div>
    <div class="wow  pulse test_wow2" data-wow-duration="2s" > pulse</div>
    <div class="wow  flipInX test_wow3" data-wow-duration="2s" > flipInX</div>
    <div class="wow  flipInY test_wow4" data-wow-duration="2s" > flipInY</div>
    <div class="wow  bounce test_wow1" data-wow-duration="2s" > bounce</div>
    <div class="wow  shake test_wow2" data-wow-duration="2s" > shake</div>
    <div class="wow  swing test_wow3" data-wow-duration="2s" > swing</div>
    <div class="wow  bounceInU test_wow4" data-wow-duration="2s" > bounceInU</div>
    <div class="wow  wobble test_wow1" data-wow-duration="2s" > wobble</div>
  </div>

</template>

<script>

  export default {
    data() {
      return {
      }
    },
    mounted(){
      new  this.$wow.WOW().init()
    }
  }

</script>

<style scoped>
  .test_wow{
    position: relative;
    width: 1920px;
    height: 500px;
    background: #212121;
    margin: 0 auto;
    color: white;
    font-size: 28px;
  }

  .test_wow1{
    position: relative;
    width: 1000px;
    height: 400px;
    background: #741919;
    margin: 0 auto;
  }
  .test_wow2{
    position: relative;
    width: 1000px;
    height: 400px;
    background: #2b0f44;
    margin: 0 auto;
  }
  .test_wow3{
    position: relative;
    width: 1000px;
    height: 400px;
    background: #558614;
    margin: 0 auto;
  }
  .test_wow4{
    position: relative;
    width: 1000px;
    height: 400px;
    background: #440707;
    margin: 0 auto;
  }
</style>
