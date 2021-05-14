<template>
  <div>
    <div v-if="isPc" class="">
      <index-pc></index-pc>
      <div class="wow bounceInUp" data-wow-duration="2s">
        <pc-bottom></pc-bottom>
      </div>
    </div>
  </div>

</template>

<script>
  import indexPc from './index-pc.vue'
  import pcBottom from './pc-bottom'
  export default {
    components:{
      "index-pc":indexPc,
      "pc-bottom":pcBottom
    },
    data() {
      return {
        isPc: false
      }
    },

    mounted(){
      new  this.$wow.WOW().init()
      window.scroll(0, 0);
    },
    created(){
      let that = this
      if (navigator.userAgent.indexOf('Mobile') > -1) {
        that.isPc = false;
        window.location.href="https://www.jipincheng.cn/mobile"
      } else {
        that.isPc = true
      }
    }
  }

</script>

<style >

</style>
