<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{

    }
  },

}
</script>

<style>
 @import "./components/common/font/font.css";

 ::-webkit-scrollbar {
   width: 0;
   height: 0;
   color: transparent;
   -webkit-overflow-scrolling: touch;
 }
 div{
   font-family:'wryh';
   -moz-user-select:none; /* Firefox私有属性 */
   -webkit-user-select:none; /* WebKit内核私有属性 */
   -ms-user-select:none; /* IE私有属性(IE10及以后) */
   -khtml-user-select:none; /* KHTML内核私有属性 */
   -o-user-select:none; /* Opera私有属性 */
   user-select:none; /* CSS3属性 */
   font-size: 14px;
 }
  /*每个页面公共css */
  a{text-decoration:none}
  /*每个页面公共css */
  .wxc-elip {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
 .imgClass{
   width: 100%;
   /*height: 100%;*/
 }
  .elip--multiple {
    white-space: normal;
    display: -webkit-box;
    -webkit-box-orient: vertical !important;
  }

  .otStyle {
    word-break: break-word;
  }

  .z-margin {
    margin: 0 29px;
    font-size: 30px;
  }

  .font-light-color {
    color: #ACACAC;
  }

  .font-red-color {
    color: #E25838;
  }

  .background-color {
    background: linear-gradient(90deg, rgba(227, 20, 54, 1) 0%, rgba(247, 107, 28, 1) 100%);
  }

  .font-w {
    font-weight: bold;
  }

  .font-r {
    border-radius: 8px;
  }

  .font-white {
    color: #FFFFFF;
  }

  .z-fixed {
    display: flex;
    align-items: center;
  }

  .z-fixed-c {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .z-overflow {
    white-space: nowrap;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    overflow: hidden;
  }

</style>
