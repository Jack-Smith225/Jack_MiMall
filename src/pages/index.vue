<template>
    <div class="index">
        <div class="container">
            <!--轮播-->
            <div class="swiper-box">
                <div class="nav-menu">
                    <ul class="menu-wrap">
                        <li class="menu-item">
                            <a href="javascript:;">手机 电话卡</a> <!--设置点击之后什么都不做-->
                            <div class="children"></div>
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
            <div class="ads-box"></div>
            <div class="banner"></div>
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
                autoplay: true, /*设置自动滑动*/
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
            /*暂时写死循环的数据*/
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

                    &:hover{
                        background-color: $colorA;
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
}

</style>
