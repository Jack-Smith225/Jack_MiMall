<template>
    <div class="index">
        <div class="container">
            <!--轮播-->
            <div class="swiper-box">
                <div class="nav-menu">
                    <ul class="menu-wrap">
                        <li class="menu-item">
                            <a href="javascript:;">手机 电话卡</a> <!--设置点击之后什么都不做-->
                            <div class="children">
                                <ul v-for="(item,i) in menuList" :key="i">
                                    <li v-for="(sub,j) in item" :key="j">
                                        <a v-bind:href="sub?'/#/product/' +sub.id:'' ">
                                            <img v-bind:src="sub ? sub.img: '/imgs/item-box-1.png'" alt="">
                                            {{ sub ? sub.name : '小米9' }} <!--是true则渲染, 否则展示默认值-->
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电视 盒子</a> <!--设置点击之后什么都不做-->
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">笔记本 平板</a> <!--设置点击之后什么都不做-->
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">家电 插线板</a> <!--设置点击之后什么都不做-->
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">出行 穿戴</a> <!--设置点击之后什么都不做-->
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">智能 路由器</a> <!--设置点击之后什么都不做-->
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电源 配件</a> <!--设置点击之后什么都不做-->
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">生活 箱包</a> <!--设置点击之后什么都不做-->
                        </li>

                    </ul>
                </div>
                <swiper v-bind:options="swiperOption">
                    <swiper-slide v-for="(item,index) in slideList" v-bind:key="index">
                        <a v-bind:href="'/#/product/'+item.id"><img v-bind:src="item.img" alt=""></a>
                    </swiper-slide>
                    <!-- Optional controls -->
                    <div class="swiper-pagination" slot="pagination"></div> <!--分页器, 下面的小圆点-->
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                    <div class="swiper-scrollbar" slot="scrollbar"></div>
                </swiper>
            </div>
            <!--广告位-->
            <div class="ads-box">
                <a v-bind:href="'/#/product/' + item.id" v-for="(item, index) in adsList" :key="index">
                    <img v-bind:src="item.img" alt="">
                </a>
            </div>
            <!--banner大图-->
            <div class="banner">
                <a href="/#/product/30">
                    <img src="/imgs/banner-1.png" alt="">
                </a>
            </div>
            <!--商品列表-->
            <div class="product-box"></div>
        </div>

        <service-bar></service-bar> <!--紧贴底部的服务条-->
    </div>
</template>

<script>
import ServiceBar from "./../components/ServiceBar";
import {swiper, swiperSlide} from 'vue-awesome-swiper'
// require styles
import 'swiper/css/swiper.css'

export default {
    name: 'index',
    components: {
        swiper,
        swiperSlide,
        ServiceBar
    },
    data() {
        return {
            /*滑动的整体配置*/
            swiperOption: {
                autoplay: false, /*设置自动滑动*/
                loop: true, /*循环滑动*/
                effect: "cube", /*滑动动画*/
                cubeEffect: {
                    slideShadows: true,
                    shadow: true,
                    shadowOffset: 100,
                    shadowScale: 0.6
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true /*设置点击小圆点切换*/
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            },
            /*轮播图片列表-暂时写死循环的数据*/
            slideList: [
                {
                    id: '42',
                    img: '/imgs/slider/slide-1.jpg'
                },
                {
                    id: '45',
                    img: '/imgs/slider/slide-2.jpg'
                },
                {
                    id: '46',
                    img: '/imgs/slider/slide-3.jpg'
                },
                {
                    id: '',
                    img: '/imgs/slider/slide-4.jpg'
                },
                {
                    id: '',
                    img: '/imgs/slider/slide-5.jpg'
                }

            ],
            /*轮播菜单的二级菜单-二维数组, 暂时写死*/
            menuList: [
                [
                    {
                        id: '30',
                        img: '/imgs/item-box-1.png',
                        name: '小米CC9',
                    },
                    {
                        id: '31',
                        img: '/imgs/item-box-2.png',
                        name: '小米8青春版',
                    },
                    {
                        id: '32',
                        img: '/imgs/item-box-3.jpg',
                        name: 'Redmi K20 Pro',
                    },
                    {
                        id: '33',
                        img: '/imgs/item-box-4.jpg',
                        name: '移动4G专区',
                    }
                ],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ],
            /*广告位*/
            adsList:[
                {
                    id:'33',
                    img:'/imgs/ads/ads-1.png'
                },
                {
                    id:'48',
                    img:'/imgs/ads/ads-2.jpg'
                },
                {
                    id:'45',
                    img:'/imgs/ads/ads-3.png'
                },
                {
                    id:'47',
                    img:'/imgs/ads/ads-4.jpg'
                }
            ]
        }
    }
}
</script>
<style lang="scss">
@import "./../assets/scss/mixin";
@import "./../assets/scss/config";

.index {
    .swiper-box {
        position: relative;
        /*这里他是绝对定位*/
        .nav-menu {
            position: absolute;
            width: 264px;
            height: 451px;
            padding: 26px 0; /*定义内边距*/
            box-sizing: border-box; /*如果不加的话 实际的高度会被padding撑大*/
            z-index: 9; /*不加的话, 会被轮播图盖掉*/
            background-color: #55585a66;


            .menu-wrap {
                .menu-item {
                    position: relative;
                    height: 50px; /*元素自身的高度*/
                    line-height: 50px; /*元素中文本内容的高度*/

                    a {
                        font-size: 16px;
                        color: #ffffff;
                        padding-left: 30px;

                        /*向右指向的箭头*/
                        &:after {
                            position: absolute;
                            right: 30px; /*距离右边30px*/
                            top: 17.5px; /*item高度50px - 箭头高度15px /2 = 17.5px*/
                            content: ' ';
                            @include bgImg(10px, 15px, '/imgs/icon-arrow.png')
                        }
                    }

                    &:hover {
                        background-color: $colorA;
                        .children {

                            display: block;
                        }
                    }

                    .children {
                        display: none; /*默认不显示*/
                        width: 962px;
                        height: 451px;
                        transition: all .5s;
                        background-color: $colorG;
                        position: absolute;
                        top: -26px;
                        left: 264px; /*left和right指定一个就可以*/
                        border: 1px solid $colorH;

                        ul {
                            display: flex;
                            justify-content: space-between;
                            height: 75px; /*children的总高度是451px 451/6 = 75*/
                            li {
                                height: 75px;
                                line-height: 75px; /*height和line-height设置相同, 可以让文字垂直方向居中*/
                                flex: 1; /*这样每个li也能均分*/
                                //width: 241px; /*children的总宽度是962px 总共4列, 所以 962/4 = 241*/
                                padding-left: 23px;

                                a {
                                    color: #333333;
                                    font-size: 14px;
                                }
                                img {
                                    width: 42px;
                                    height: 35px;
                                    vertical-align: middle; /*设置图片垂直方向居中*/
                                    margin-right: 15px;
                                }

                            }
                        }
                    }

                }
            }
        }

        /*参考https://www.swiper.com.cn/usage/index.html*/
        .swiper-container {
            height: 451px;


            .swiper-button-prev {
                left: 274px; /*它默认使用绝对定位*/
            }

            img {
                width: 100%;
                height: 100%;
            }
        }
    }
    .ads-box {
        @include flex();


        a {
            width: 296px;
            height: 167px;
        }

        margin-top: 14px;
        margin-bottom: 31px;
    }
    .banner{
        a{
            img {
                width: 100%;
                height: auto;
            }
        }
        margin-bottom: 50px; /*距离上方元素的距离, 已经在ads里面定义过了*/
    }
}

</style>
