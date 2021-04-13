<template>
    <div class="index">
        <div class="container">
            <!--轮播-->
            <div class="swiper-box">
                <swiper v-bind:options="swiperOption" >
                    <swiper-slide v-for="(item,index) in slideList" v-bind:key="index">
                        <a v-bind:href="'/#/product/'+item.id"><img v-bind:src="item.img" alt=""></a>
                    </swiper-slide>
                    <!-- Optional controls -->
                    <div class="swiper-pagination"  slot="pagination"></div> <!--分页器, 下面的小圆点-->
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                    <div class="swiper-scrollbar"   slot="scrollbar"></div>
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
import { swiper, swiperSlide } from 'vue-awesome-swiper'
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
                loop:true, /*循环滑动*/
                effect: "cube", /*滑动动画*/
                cubeEffect: {
                    slideShadows: true,
                    shadow: true,
                    shadowOffset: 100,
                    shadowScale: 0.6
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable:true /*设置点击小圆点切换*/
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            },
            /*暂时写死循环的数据*/
            slideList:[
                {
                    id:'42',
                    img:'/imgs/slider/slide-1.jpg'
                },
                {
                    id:'45',
                    img:'/imgs/slider/slide-2.jpg'
                },
                {
                    id:'46',
                    img:'/imgs/slider/slide-3.jpg'
                },
                {
                    id:'',
                    img:'/imgs/slider/slide-4.jpg'
                },
                {
                    id:'',
                    img:'/imgs/slider/slide-5.jpg'
                }

            ]
        }
    }
}
</script>
<style lang="scss">
.index{
    .swiper-box{
        .swiper-container {
            height: 451px;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
}

</style>
