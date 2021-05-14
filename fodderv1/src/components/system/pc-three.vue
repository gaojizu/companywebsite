<template>
    <div style="padding-bottom: 100px">
      <div class="t01 wow bounceInDown" data-wow-duration="2s"></div>

      <div style="margin-top: 50px">
        <div class="z-fixed-c main04">
          <span class="main01 wow bounceInLeft" data-wow-duration="3s">P</span>
          <div style="margin-left: 10px" class="wow bounceInRight" data-wow-duration="3s">
            <div class="main02">产品展示</div>
            <div class="main03">roduct center</div>
          </div>
        </div>
        <div class="z-fixed-c main06 main06 wow bounceInUp" data-wow-duration="3s">
          <div v-for="(item,index) in produceList" :key="index"
               @mouseover="proTabClick(index)">
            <div class="main05" :style="{color:index===proIndex ? 'rgb(74, 179, 68)' : ''}">{{item.title}}</div>
          </div>
        </div>
        <div class="z-fixed-c main08 main08 wow bounceInUp" data-wow-duration="3s" >
          <div v-for="(imgItem,imgIndex) in produceList[proIndex].imgList"
               :key="imgIndex"
               class="z-fixed-c main07"
               style="cursor:pointer;"
               @click="proImgClick(imgItem)"
          >
            <img :src="imgItem.img" class="imgClass main24"/>
          </div>
        </div>
      </div>

      <div style="margin-top: 50px">
        <div class="z-fixed-c main04">
          <span class="main01 wow bounceInLeft" data-wow-duration="3s">U</span>
          <div style="margin-left: 10px" class="wow bounceInRight" data-wow-duration="3s">
            <div class="main02">应用成效</div>
            <div class="main03">sing cases</div>
          </div>
        </div>

        <div class="z-fixed-c">
          <div class="th01 wow  flipInY"  data-wow-duration="2s">
            <img src="../../assets/images/sl58.jpg" class="imgClass"/>
          </div>
          <div>
            <div class="th02 wow  flipInY"  data-wow-duration="2s">
              <img src="../../assets/images/sl60.jpg" class="imgClass"/>
            </div>
            <div class="z-fixed-c">
              <div  class="th03 wow  flipInY"  data-wow-duration="2s">
                <img src="../../assets/images/sl59.jpg" class="imgClass"/>
              </div>
              <div class="th04 wow  flipInY"  data-wow-duration="2s">
                <img src="../../assets/images/sl57.jpg" class="imgClass"/>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
</template>

<script>
  const sl11 = require('../../assets/images/sl11.jpg');
  const sl02 = require('../../assets/images/sl02.jpg');
  const sl05 = require('../../assets/images/sl05.jpg');
  const sl42 = require('../../assets/images/sl42.jpg');

  const sl23 = require('../../assets/images/sl23.jpg');
  const sl20 = require('../../assets/images/sl20.jpg');
  const sl32 = require('../../assets/images/sl32.jpg');
  const sl29 = require('../../assets/images/sl29.jpg');

  const sl39 = require('../../assets/images/sl39.jpg');
  const sl37 = require('../../assets/images/sl37.jpg');
  const sl38 = require('../../assets/images/sl38.jpg');
  const sl40 = require('../../assets/images/sl40.jpg');

  const sl46 = require('../../assets/images/sl46.jpg');
  const sl44 = require('../../assets/images/sl44.jpg');
  const sl43 = require('../../assets/images/sl43.jpg');
  const sl45 = require('../../assets/images/sl45.jpg');

    export default {
        name: "pc-three",
      data(){
          return{
            produceList:
              [{id:0, title:"饲料添加剂",imgList:[{ id:0,img:sl11,
                  title:"黄连解毒散兽用清热解毒清瘟败毒中药",
                  instructions:"使用前请详细阅读使用说明",
                  expirationDate:"24个月",
                  condition:"存放于背阴、干燥处",
                  company:"生物科技有限公司",
                  phone:"13800000000"},
                  {id:1,img:sl02,
                    title:"浓缩蒜素大蒜素兽用大蒜粉饲料添加剂",
                    instructions:"使用前请详细阅读使用说明",
                    expirationDate:"24个月",
                    condition:"存放于背阴、干燥处",
                    company:"生物科技有限公司",
                    phone:"13800000000"},
                  {id:2,img:sl05,
                    title:"水产电解多维复合维生素促长素鱼虾蟹通用饲料添加剂",
                    instructions:"使用前请详细阅读使用说明",
                    expirationDate:"24个月",
                    condition:"存放于背阴、干燥处",
                    company:"生物科技有限公司",
                    phone:"13800000000"},
                  {id:3,img:sl42,
                    title:"脱霉剂正品强效母猪牛羊兔子玉米饲料添加剂",
                    instructions:"使用前请详细阅读使用说明",
                    expirationDate:"24个月",
                    condition:"存放于背阴、干燥处",
                    company:"生物科技有限公司",
                    phone:"13800000000"}]},
                {id:1,title:"微生物菌剂",imgList:[{id:0,img:sl23,
                    title:"保肝护胆水产小龙虾鱼蟹泥鳅药牛蛙养殖专用药",
                    instructions:"使用前请详细阅读使用说明",
                    expirationDate:"24个月",
                    condition:"存放于背阴、干燥处",
                    company:"生物科技有限公司",
                    phone:"13800000000"
                  },
                    {id:1,img:sl20,
                      title:"氟苯尼考粉兽用水产猪牛羊兔药呼吸道气喘",
                      instructions:"使用前请详细阅读使用说明",
                      expirationDate:"24个月",
                      condition:"存放于背阴、干燥处",
                      company:"生物科技有限公司",
                      phone:"13800000000"},
                    {id:2,img:sl32,
                      title:"清瘟败毒散兽用猪用荆防败毒扶正解毒中药",
                      instructions:"使用前请详细阅读使用说明",
                      expirationDate:"24个月",
                      condition:"存放于背阴、干燥处",
                      company:"生物科技有限公司",
                      phone:"13800000000"
                    },
                    {id:3,img:sl29,
                      title:"止痢散兽用母猪过奶止痢康一拉稀消炎兽药",
                      instructions:"使用前请详细阅读使用说明",
                      expirationDate:"24个月",
                      condition:"存放于背阴、干燥处",
                      company:"生物科技有限公司",
                      phone:"13800000000"
                    }]},
                {id:2,title:"预混合饲料",imgList:[{id:0,img:sl39,
                    title:"大蒜素鱼虾蟹维生素C预混合饲料",
                    instructions:"使用前请详细阅读使用说明",
                    expirationDate:"24个月",
                    condition:"存放于背阴、干燥处",
                    company:"生物科技有限公司",
                    phone:"13800000000"
                  },
                    {id:1,img:sl37,
                      title:"猛长牛饲料育肥促生长 猪牛羊料精催肥宝",
                      instructions:"使用前请详细阅读使用说明",
                      expirationDate:"24个月",
                      condition:"存放于背阴、干燥处",
                      company:"生物科技有限公司",
                      phone:"13800000000"},
                    {id:2,img:sl38,
                      title:"兽用止咬灵饲料添加剂 鸡鸭猪牛羊预混料",
                      instructions:"使用前请详细阅读使用说明",
                      expirationDate:"24个月",
                      condition:"存放于背阴、干燥处",
                      company:"生物科技有限公司",
                      phone:"13800000000"
                    },
                    {id:3,img:sl40,
                      title:"猪牛羊速长素育肥促生长催肥增重预混饲料",
                      instructions:"使用前请详细阅读使用说明",
                      expirationDate:"24个月",
                      condition:"存放于背阴、干燥处",
                      company:"生物科技有限公司",
                      phone:"13800000000"
                    }]},
                {id:3,title:"水产酶制剂",imgList:[{id:0,img:sl46,
                    title:"蓝藻速灭水产养殖小龙虾蟹鱼塘蓝藻分解酶",
                    instructions:"使用前请详细阅读使用说明",
                    expirationDate:"24个月",
                    condition:"存放于背阴、干燥处",
                    company:"生物科技有限公司",
                    phone:"13800000000"
                  },
                    {id:1,img:sl44,
                      title:"禽用复合酶制剂饲料利用率添加剂",
                      instructions:"使用前请详细阅读使用说明",
                      expirationDate:"24个月",
                      condition:"存放于背阴、干燥处",
                      company:"生物科技有限公司",
                      phone:"13800000000"
                    },
                    {id:2,img:sl43,
                      title:"饲用纤维素酶L型 饲料添加剂",
                      instructions:"使用前请详细阅读使用说明",
                      expirationDate:"24个月",
                      condition:"存放于背阴、干燥处",
                      company:"生物科技有限公司",
                      phone:"13800000000"
                    },
                    {id:3,img:sl45,
                      title:"植酸酶SDG-2432饲料添加剂复合酶",
                      instructions:"使用前请详细阅读使用说明",
                      expirationDate:"24个月",
                      condition:"存放于背阴、干燥处",
                      company:"生物科技有限公司",
                      phone:"13800000000"
                    }]
                }],
            proIndex:0,
          }
      },
      mounted(){
        new  this.$wow.WOW().init()
        window.scroll(0, 0);
      },
      methods:{
        proTabClick(index){
          this.proIndex = index
        },
        proImgClick(item){
          let data =JSON.stringify(item)
          this.$router.push({
            name:"produceInfo",
            query:{
              pInfo:data
            }
          })
        }
      },
    }
</script>

<style scoped>
  .main24:hover{
    transform: scale(1.2);
  }
  .main24{
    transition: all 1s;
  }
  .th04{
   /* width: 368px;*/
    /*height: 288px;*/
  }
  .th03{
   /* width: 368px;*/
    /*height: 288px;*/
    margin-right: 20px;
  }
  .th02{
   /* height: 273px;*/
    margin-bottom: 20px;
  }
  .th01{
   /* height: 581px;*/
    margin-right: 20px;
  }


  .main08{
    margin-top: 40px;
  }
  .main07{
    width: 270px;
    /*height: 270px;*/
    margin-right: 80px;
  }
  .main06{
    margin-top: 20px;

  }
  .main05:hover{
    color: rgb(74, 179, 68);
  }
  .main05{
    margin-right: 50px;
    font-size: 20px;
  }
  .t01{
    width: 100%;
    height: 450px;
    background-image: url("../../assets/images/sl56.jpg");
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
