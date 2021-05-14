<template>
 <div class="tab02">
   <div class="z-fixed">
     <div v-for="(item,index) in tabList" :key="index" class="tab01 z-fixed-c"
          :style="{background: tabIndex===index ?'rgb(74, 179, 68)' : ''}"
     @click="comTabClick(index)"
      >
       <div>{{item.title}}</div>
     </div>
   </div>
 </div>
</template>

<script>
    export default {
        name: "tab-bar",
        props:{
          tabList:{
            type:Array,
            default:[]
          },
          tabIndex:0
        },
      methods:{
        comTabClick(index){
          this.$emit("_tabClick",index)
        },
      }
    }
</script>

<style scoped>
  .tab02{
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    z-index: 100;
  }
  .tab01:hover{
    background: rgba(0, 0, 0, 0.8);
  }
 .tab01{
   width: 100%;
   height: 70px;
   background: #000000;
   font-size: 23px;
   color: #FFFFFF;
   transition:all 1s ;
 }
</style>
