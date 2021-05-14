<template>
    <div >
      <div class="t01 wow bounceInDown" data-wow-duration="2s"></div>
      <div  class="z-fixed-c wow bounceInUp" data-wow-duration="2s"
            id="0"
            style="padding-top: 50px;">
        <div style="width: 50%;">
          <div class="dy01">{{dynamicInfo && dynamicInfo.title ? dynamicInfo.title : ''}}</div>
          <div class="dy02">发表时间：{{dynamicInfo && dynamicInfo.time ? (dynamicInfo.time.yy+'-'+dynamicInfo.time.m+'-'+dynamicInfo.time.d) :''}}
            <span> {{dynamicInfo && dynamicInfo.time ? dynamicInfo.time.hh+':'+dynamicInfo.time.mm:''}}</span>
          </div>
          <div class="dy03 wow bounceInUp" data-wow-duration="2.2s" v-if="dynamicInfo && dynamicInfo.conDiv">
            <div v-html="dynamicInfo.conDiv"></div>
          </div>

          <div class="z-fixed dy04 wow bounceInUp" data-wow-duration="2s"
          @click="nexClick"
          >
            下一篇：{{nexData && nexData.title ? nexData.title : ''}}
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
        name: "dynamicInfo",
      components:{
        "pc-bottom":pcBottom
      },
      data(){
          return{
            dynamicInfo:"",
            nexData:"",
          }
      },
      watch:{
        '$route':function (n,o) {
          this.dynamicInfo = this.$json.dynamicList[this.$route.query.id];
          if(this.$route.query.id == this.$json.dynamicList.length-1){
            this.nexData = this.$json.dynamicList[0]
          }else{
            this.nexData = this.$json.dynamicList[this.$route.query.id+1]
          }
          window.scrollTo(0,0);
        }
      },
      created(){
        this.dynamicInfo = this.$json.dynamicList[this.$route.query.id];
        if(this.$route.query.id == ((this.$json.dynamicList.length)-1)){
          this.nexData = this.$json.dynamicList[0]
        }else{
          this.nexData = this.$json.dynamicList[this.$route.query.id+1]
        }

      },
      mounted(){
        new  this.$wow.WOW().init();
      },
      methods:{
        nexClick(){
          this.dynamicInfo = this.$json.dynamicList[this.nexData.id];
          let id =Number(this.dynamicInfo.id)
          if(id == this.$json.dynamicList.length-1){
            this.nexData = this.$json.dynamicList[0]
          }else{
            this.nexData = this.$json.dynamicList[id+1]
          }
          window.scrollTo(0,0);
          document.getElementById('0').scrollIntoView({
            behavior:"smooth",
            block:"start"
          })
        },
      }
    }
</script>

<style scoped>
  .dy04:hover{
    color: #4ab344;
  }
  .dy04{
    padding: 20px 0 50px 0;cursor:pointer;
  }
  .dy03{
    font-size: 14px;
    color: #676767;
    line-height: 26px;
    padding: 20px 0 20px 0;
    margin: 20px 0 20px 0;
    border-top:1px dashed #f0efef;
    border-bottom:1px dashed #f0efef;
  }
  .dy02{
    font-size: 13px;
    color: #adadad;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 20px;
  }
  .dy01{
    font-size: 25px;
    color: #333333;
    text-align: left;

  }
  .t01{
    width: 100%;
    height: 450px;
    background-image: url("../../assets/images/sl74.jpg");
    background-size: 100% 100%;
  }
</style>
