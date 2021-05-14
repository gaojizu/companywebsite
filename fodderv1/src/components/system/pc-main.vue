<template>
    <div>
      <div class="pc09 wow bounceInDown" data-wow-duration="2s">
        <mu-carousel style="height: 100%" :cycle="cycle"
        >
          <mu-carousel-item class="mu01">
            <img style="width: 100%;height: 100%;" src="../../assets/images/sl41.jpg">
          </mu-carousel-item>
          <mu-carousel-item class="mu01">
            <img style="width: 100%;height: 100%;" src="../../assets/images/sl47.jpg">
          </mu-carousel-item>
        </mu-carousel>
      </div>
      <div>
      <div class="z-fixed-c main04 " >
        <span class="main01 wow bounceInLeft" data-wow-duration="3s">P</span>
        <div style="margin-left: 10px" class="wow bounceInRight" data-wow-duration="3s">
          <div class="main02">产品展示</div>
          <div class="main03">roduct center</div>
        </div>
      </div>
      <div class="z-fixed-c main06 wow bounceInUp" data-wow-duration="3s">
        <div v-for="(item,index) in produceList" :key="index"
        @mouseover="proTabClick(index)">
          <div class="main05" :style="{color:index===proIndex ? 'rgb(74, 179, 68)' : ''}">{{item.title}}</div>
        </div>
      </div>
      <div class="z-fixed-c main08 wow bounceInUp" data-wow-duration="3s">
        <div v-for="(imgItem,imgIndex) in produceList[proIndex].imgList"
             :key="imgIndex"
             class="z-fixed-c main07"
        @click="proImgClick(imgItem)"
             style="cursor:pointer;"
        >
          <img :src="imgItem.img" class="imgClass main24"/>
        </div>
      </div>
      </div>
      <div>
        <div class="z-fixed-c main04">
          <span class="main01 wow bounceInLeft" data-wow-duration="2s">A</span>
          <div style="margin-left: 10px" class="wow bounceInRight" data-wow-duration="2s">
            <div class="main02">关于我们</div>
            <div class="main03">bout us</div>
          </div>
        </div>
         <div class="z-fixed-c wow bounceInUp" data-wow-duration="2s">
           <div class="main09">
             集团创建于1991年，是一家集生物发酵原料药、化工合成原料药、兽用生物制品、兽用药物制剂、饲料及饲料添加剂的研发、生产、国内外贸易和技术服务为一体的多元化高新科技企业集团。我们有严格的质量控制体系，从原料入库、半成品及产成品的生产过程、成品出库等进行全程质量控制。集团始终以“全心全意为人民服务”为企业宗旨，以“创新求变谋发展，实事求是铸伟业”为大政方针，始终坚持“高起点、高科技、高品质”的发展战略。
           </div>
         </div>
        <div class="z-fixed-c" @click="moreClick">
          <div class="main10 z-fixed-c wow  flipInY"
               style="cursor:pointer;"
               data-wow-duration="2s">了解更多</div>
        </div>
      </div>
       <!---->
      <div class="main11 wow bounceInUp" data-wow-duration="2s">
        <div class="z-fixed-c">
          <div class="main12 z-fixed-c">
            <div
              class="z-fixed-c"
              v-for="(asListItem,asListIndex) in asList" :key="asListIndex"  :style="{width:100/asList.length+'%'}">
              <div>
                <div class="main13 z-fixed-c wow bounceInUp" :data-wow-duration="asListIndex+1+'s'">
                  <img :src="asListItem.img" class="imgClass"/>
                </div>
                <div class="main14  wow bounceInUp" :data-wow-duration="asListIndex+2+'s'">{{asListItem.title}}</div>
              </div>

            </div>
          </div>
        </div>

        <div class="main15  wow bounceInUp" data-wow-duration="2s">
          <div class="z-fixed-c">
            <img src="../../assets/images/sl26.jpg" class="imgClass"/>
          </div>
        </div>
      </div>

      <div class="main16">
        <div class="z-fixed-c main04" style="padding-top: 90px;">
          <span class="main01 wow bounceInLeft" data-wow-duration="2s">A</span>
          <div style="margin-left: 10px" class="wow bounceInRight" data-wow-duration="2s">
            <div class="main02">关于我们</div>
            <div class="main03">bout us</div>
          </div>
        </div>
        <div class="z-fixed-c">
          <div class="main17">
            <div class="z-fixed">
              <div class="main18 main19 main01 wow bounceInRight" data-wow-duration="2s">
                <img src="../../assets/images/sl07.png" class="imgClass"/>
              </div>
              <div class="wow bounceInLeft" data-wow-duration="2s">
                <div class="main20 ">
                  <img src="../../assets/images/sl13.png" class="imgClass"/>
                </div>
                <div class="main21">研发背景</div>
                <div class="main22">
                  <div>引进荷兰AKZO-NOBEL核心技术，精心研制开发生产的饲用枯草芽孢杆菌速肥制剂为核心原料而</div><div>成，专注于提高饲料利用率和促进生长增重的复合生长添加剂，所含成分均符合欧、美、日等市场</div>标准，绿色无残留，使用安全
                </div>
              </div>
            </div>


            <div class="z-fixed" style="margin-top: 100px;">
              <div class="wow bounceInRight" data-wow-duration="2s">
                <div class="main20">
                  <img src="../../assets/images/sl34.png" class="imgClass"/>
                </div>
                <div class="main21">营养配方</div>
                <div class="main22" style="width: 400px">
                  <div>主营产品包括：猪饲料添加剂，中草药饲料添加剂，大蒜素，甜</div><div>味剂，甘露寡糖，酸化剂、壳红素等。我们一直躬耕于大型万头</div>养殖场，经过数千次实验，将配方全面升级并充分运用到每种单体上。
                </div>
              </div>

              <div class="wow wobble" data-wow-duration="2s">
                <div class="z-fixed-c">
                  <div class="main23 z-fixed-c">
                    <div>
                      <div>枯草芽</div>
                      <div>孢杆菌</div>
                    </div>
                  </div>
                  <div class="main23 z-fixed-c">
                    <div>
                      <div>中药</div>
                      <div>乳酸菌</div>
                    </div>
                  </div>
                </div>

                <div class="z-fixed-c"  style="margin-top: 20px;">
                  <div class="main23 z-fixed-c">
                    <div>
                      <div>多种</div>
                      <div>氨基酸</div>
                    </div>
                  </div>
                  <div class="main23 z-fixed-c">
                    <div>
                      <div>饲用级</div>
                      <div>复合酶</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="main18 main19 wow bounceInLeft" data-wow-duration="2s"  style="margin-left: 20px">
                <img src="../../assets/images/sl04.png" class="imgClass"/>
              </div>

            </div>

            <div class="z-fixed" style="margin-top: 50px;">
              <div class="main18 main19 wow bounceInRight" data-wow-duration="2s">
                <img src="../../assets/images/sl10.png" class="imgClass"/>
              </div>
              <div class="wow bounceInLeft" data-wow-duration="2s">
                <div class="main20">
                  <img src="../../assets/images/sl36.png" class="imgClass"/>
                </div>
                <div class="main21">研发背景</div>
                <div class="main22">
                 <div> 产品上市以来，分别在广东、广西、福建、山东、湖北、河南、浙江、东北等多个大型规模化养殖</div><div>场的试验与应用，充分验证了奇特功效，
                   可取代过去的添加剂，成为新一代绿色安全促生长，提高</div>产率的革命性产品，以科技求发展，以贴心的服务，不断满足和超越客户的需求和期望。
                </div>
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

   const sl24 = require('../../assets/images/sl24.png');
   const sl30 = require('../../assets/images/sl30.png');
   const sl27 = require('../../assets/images/sl27.png');
   const sl21 = require('../../assets/images/sl21.png');
   const sl31 = require('../../assets/images/sl21.png');

    export default {
        name: "pc-main",
      data(){
          return{
            cycle:true,
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
            asList:[{id:0,img:sl24,title:"先进的科研技术"},
              {id:1,img:sl30,title:"多年的经验沉淀"},
              {id:2,img:sl27,title:"专业的解决方案"},
              {id:3,img:sl21,title:"丰富的配套产品"},
              {id:4,img:sl31,title:"贴心的技术支持"}]
          }
      },
      mounted(){
        new  this.$wow.WOW().init();
        window.scroll(0, 0);
      },
      methods:{
        moreClick(){
          this.$router.replace({
            path:"/",
            query:{
              tabIndex:1
            }
          })
        },
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
      }
    }
</script>

<style scoped>
  .main24:hover{
    transform: scale(1.2);
  }
  .main24{
    transition: all 1s;
  }
  .main23{
    width: 84px;
    height: 84px;
    text-align: center;
    background-image: url("../../assets/images/sl28.png");
    background-size: 100% 100%;
    color: rgb(102, 102, 102);
    margin-right: 20px;
  }
  .main22{
    line-height: 36px;
    margin-right: 20px;
  }
  .main21{
    color: rgb(51, 51, 51);
    font-size: 24px;
    margin-bottom: 10px;
  }
  .main20{
    width: 72px;
    min-width: 72px;
    height: 41px;
  }
  .main19{
    margin-right: 50px;
  }
  .main18{
    min-width: 420px;
    height: 240px;
  }
  .main17{
    width: 1200px;
    height: 100%;
    margin-top: 70px;
  }
  .main16{
    background-image: url("../../assets/images/sl01.jpg");
    background-size: 100% 100%;
    height: 1200px;
    position: relative;
  }
  .main15{
    position: absolute;
    width: 100%;
    height: 400px;
    top:90px;
    z-index: 1;
  }
  .main14{

    margin-top: 10px;
    text-align: center;
  }
  .main13{
    width: 100px;
    height: 60px;
  }
  .main12{
    position: absolute;
    height: 180px;
    width: 1200px;
    top: 0;
    z-index: 2;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 2px -2px 2px 2px rgba(187, 187, 187, 0.2);
    background: #FFFFFF;
  }
  .main11{
    position: relative;
    height: 620px;
  }

  .main10{
    margin-bottom: 50px;
    border-radius: 26px;
    font-size: 16px;
    width: 164px;
    height: 42px;
    border: 1px solid  rgb(74, 179, 68);
    color: rgb(74, 179, 68);
    margin-top: 50px;
  }
  .main09{
    width: 1150px;
    line-height: 36px;

    text-align: center;
    color: rgb(102, 102, 102);
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
  .pc09 .mu-carousel-button.mu-icon-button{
    background: #00000024;
    border-radius: 0;
  }
  .pc09 .mu-carousel-indicator-button__active .mu-carousel-indicator-icon{
    opacity: 1;
    background-color: #E25838;
    border: 2px solid #FFFFFF;
    width: 18px;
    height: 18px;
  }
  .pc09 .mu-carousel-indicator-icon{
    opacity: 1;
    width: 18px;
    height: 18px;
    background: #D8D8D8;
    border: 2px solid #979797;
  }
  .pc09 .mu-carousel-indicator-button{
    margin: 5px;
  }
  .pc09{
    width: 100%;
    height: 520px;
    background: #FFE2DA;
    position: relative;
  }
</style>
