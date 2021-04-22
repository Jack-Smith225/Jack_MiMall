<template>
    <div class="nav-bar" :class="{'is_fixed':isFixed}">
        <div class="container"> <!--定义安全区域-->
            <!--左边的结构-标题-->
            <div class="pro-title">
                小米8
            </div>
            <!--右边的结构-参数导航列表-->
            <div class="pro-param">
                <a href="javascript:;">概述</a><span>|</span>
                <a href="javascript:;">参数</a><span>|</span>
                <a href="javascript:;">用户评价</a>
                <slot name="buy"> <!--插槽-->

                </slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'nav-bar',
    data() {
        return {
            isFixed: false
        }
    },
    mounted() {
        window.addEventListener('scroll', this.initHeight)
    },
    methods:{
        initHeight() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            this.isFixed = scrollTop > 152 ? true : false;

        }
    },
    destroyed() {
        window.removeEventListener('scroll', this.initHeight, false)
    }
}
</script>
<style lang="scss">
@import "./../assets/scss/config";
@import "./../assets/scss/mixin";
    .nav-bar {
        height: 70px;
        line-height: 70px;
        border-top: 1px solid $colorH;
        background-color: $colorG;

        &.is_fixed {
            position: fixed;
            top: 0;
            width: 100%;
            box-shadow: 0 5px 5px $colorE;
        }
        .container {
            @include flex();

            .pro-title {
                font-size: $fontH;
                color: $colorB;
                font-weight: bold;
            }

            .pro-param {
                font-size: $fontJ;

                a {
                    color: $colorC;
                }

                span {
                    margin: 0 10px; /*上下, 左右*/
                }
            }
        }
    }
</style>