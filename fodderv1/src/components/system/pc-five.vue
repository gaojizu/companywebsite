<template>
    <div>
        <div class="t01 wow bounceInDown" data-wow-duration="2s"></div>
        <div class="z-fixed-c wow bounceInUp" data-wow-duration="3s">
            <div class="fi01" v-for="(item,index) in dataList" :key="index" v-if="index<3"
                 :style="{marginRight:index<2?'50px':''}"
                 @click="toDynamicInfo(item)"
            >
                <div style="width:100%;">
                    <img style="cursor:pointer;" :src="item.img" class="imgClass"/>
                </div>
                <div class="fi02 wxc-elip elip--multiple otStyle onHover"
                     style="-webkit-line-clamp:1;cursor:pointer; -webkit-box-orient: vertical !important;">
                    {{item.title}}
                </div>
                <div class="fi03 wxc-elip elip--multiple otStyle" style="-webkit-line-clamp:3;">{{item.content}}</div>
            </div>
        </div>

        <div class="z-fixed-c ">
            <div style="margin-top: 50px;width: 65%;">
                <div class="z-fixed fi05 wow bounceInUp" data-wow-duration="2s"
                     v-for="(item,index) in dataList" :key="index" v-if="index>2"
                     @click="toDynamicInfo(item)"
                >
                    <div class="fi04" style="cursor:pointer;">
                        <div class="fi06">{{item.time.d}}</div>
                        <div class="fi07">{{item.time.yy+'/'+item.time.m}}</div>
                    </div>
                    <div class="fi08">
                        <div class="onHover" style="cursor:pointer;">{{item.title}}</div>
                        <div class=" wxc-elip elip--multiple otStyle fi09"
                             style="-webkit-box-orient: vertical !important;-webkit-line-clamp:2;">
                            {{item.content}}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    const sl70 = require('../../assets/images/sl70.jpg');
    const sl71 = require('../../assets/images/sl71.jpg');
    const sl72 = require('../../assets/images/sl72.jpg');
    export default {
        name: "pc-five",
        data() {
            return {
                dataList: "",

            }
        },
        created() {
            this.dataList = this.$json.dynamicList
            this.dataList.map((item, index) => {
                if (index < 3) {
                    item.img = index === 0 ? sl72 : index === 1 ? sl70 : sl71
                }
            })
        },
        mounted() {
            new this.$wow.WOW().init();
            window.scroll(0, 0);
        },
        methods: {
            toDynamicInfo(item) {
                this.$router.push({
                    name: "dynamicInfo",
                    query: {
                        id: item.id
                    }
                })
            }
        }
    }
</script>


<style scoped>
    .onHover:hover {
        color: #4ab344;
    }

    .fi09 {
        color: grey;
        margin-top: 10px;
    }

    .fi08 {
        color: #666666;
    }

    .fi07 {
        line-height: 14px;
        color: rgb(102, 102, 102);
        margin-top: 5px;
    }

    .fi06 {
        font-size: 25px;
        line-height: 25px;
        margin-top: 20px;
        color: rgb(102, 102, 102);
    }

    .fi05:hover {
        transform: scale(1.1);
    }

    .fi05 {
        margin-bottom: 20px;
        padding: 30px 0 30px 0;
        border-bottom: 1px dashed #e5e5e5;
        transition: all 1s;
    }

    .fi04 {
        min-width: 84px;
        height: 84px;
        background: #f2f2f2;
        text-align: center;
        margin-right: 20px;
    }

    .fi03 {
        padding: 20px 20px 0 20px;
        color: grey;
        margin-bottom: 20px;
    }

    .fi02 {
        font-size: 18px;
        padding: 20px 20px 0 20px;
        overflow: hidden;
        width: 100%;
        color: #666666;
        font-weight: bold;

    }

    .fi01:hover {
        transform: scale(1.1);
    }

    .fi01 {
        width: 360px;
        border: 1px solid #f1f1f1;
        margin-top: 100px;
        transition: all 1s;
    }

    .t01 {
        width: 100%;
        height: 450px;
        background-image: url("../../assets/images/sl73.jpg");
        background-size: 100% 100%;
    }
</style>
