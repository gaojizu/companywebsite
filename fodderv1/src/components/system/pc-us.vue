<template>
    <div>
      <div class="t01 wow bounceInDown" data-wow-duration="2s"></div>
    </div>
</template>

<script>
    export default {
      mounted(){
        new  this.$wow.WOW().init();
        window.scroll(0, 0);
      },
    }
</script>

<style scoped>
  .t01{
    width: 100%;
    height: 450px;
    background-image: url("../../assets/images/sl75.jpg");
    background-size: 100% 100%;
  }
</style>
