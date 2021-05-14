<template>
  <div>
    <!--<div class="pc01">食料添加剂</div>-->
    <router-link :to="{path:'/',query:{tabIndex:tabIndex}}"
    >
      <tab-bar :tabList="tabList" :tabIndex="tabIndex"
               @_tabClick="tabClick"
      ></tab-bar>
    </router-link>

    <!--<div class="z-fixed-c"
        ref="loading"
         style="width: 100%;height: 300px;background: black;padding-top: 50px;">
        <img style="width: 300px;" src="//wimg.588ku.com/gif620/21/04/16/9111cd5cc21ac8f5b7c1bf5c5ab90c65.gif" />
    </div>-->
    <div v-if="tabIndex===0">
        <pc-main></pc-main>
    </div>
    <div v-if="tabIndex===1">
        <pc-two></pc-two>
    </div>
    <div v-if="tabIndex===2">
        <pc-three></pc-three>
    </div>
    <div v-if="tabIndex===3">
        <pc-four></pc-four>
    </div>
    <div v-if="tabIndex===4">
        <pc-five></pc-five>
    </div>
    <div v-if="tabIndex===5">
        <pc-us></pc-us>
    </div>

   <!-- <div>
      <pc-bottom></pc-bottom>
    </div>-->
  </div>

</template>

<script>
  import PcBottom from './pc-bottom'
  import TabBar from  '../common/tabBar'
  import PcMain from  './pc-main'
  import PcTwo from  './pc-two'
  import PcThree from  './pc-three'
  import PcFour from  './pc-four'
  import PcFive from  './pc-five'
  import PcUs from  './pc-us'
  export default {
    components:{
      TabBar,PcMain,PcTwo,PcThree,PcFour,PcFive,PcUs,
      "pc-bottom" : PcBottom
    },
    data() {
      return {
        tabIndex:0,
        tabList:[{
          id:0,
          title:"首页"
        },{
          id:0,
          title:"走进企业"
        },{
          id:0,
          title:"产品中心"
        },{
          id:0,
          title:"科研中心"
        },{
          id:0,
          title:"行业动态"
        },{
          id:0,
          title:"联系我们"
        }]
      }
    },
    watch:{
      '$route':function (n,o) {
        if(Number(this.$route.query.tabIndex)){
          this.tabIndex = Number(this.$route.query.tabIndex)
        }else{
          this.tabIndex = 0
        }
        window.scrollTo(0,0);
      }
    },
    created(){
      window.scroll(0, 0);
      if(Number(this.$route.query.tabIndex)){
        this.tabIndex = Number(this.$route.query.tabIndex)
      }else{
        this.tabIndex = 0
      }

    },
    mounted(){
      new  this.$wow.WOW().init();
      window.scroll(0, 0);
    },
    methods:{
      tabClick(index){
        this.tabIndex = index;
      },
      handleScroll () {
        let that = this;
        this.$nextTick(()=> {
          let scrollTop = document.documentElement.scrollTop+141;
          let blocks = document.querySelectorAll('.jpc');
          blocks.forEach((item, index) => {
            if (scrollTop >= item.offsetTop) {
              that.index = index;
            }
          })
        });
      },

      swipeChange(){
        var wow = new this.$wow.WOW({
        boxClass:'mu01',
        animateClass:"mu01",
        offset: 0,
          mobile: true,
          live: true
      });
        wow.init();
      }
    }
  }

</script>

<style >
.pcIndex01{

}
.pc01{
  font-size: 40px;
  font-weight: bold;
  color: rgb(74, 179, 68);
  padding: 50px;
}
</style>
