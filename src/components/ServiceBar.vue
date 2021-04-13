<!--服务条组件-->
<template> <!--template下面必须有一个根元素, 不能并列出现两个<div>-->
    <div class="service">
        <div class="container"> <!--安全区域, 这里它被四个li瓜分-->
            <ul><!--无序列表-->
                <li>
                    <span class="icon-setting"></span>预约维修服务
                </li>
                <li>
                    <span class="icon-7day"></span>7天无理由退货
                </li>
                <li>
                    <span class="icon-15day"></span>15天免费换货
                </li>
                <li>
                    <span class="icon-post"></span>满150元包邮
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'service-bar'
}
</script>

<style lang="scss">
@import "../assets/scss/base";
@import "../assets/scss/mixin";
.service {
    padding: 33px 0; /*padding会把父元素自动撑大*/
    color: #666666; /*字体颜色*/
    font-size: 16px;

    li {
        display: inline-block; /*li本身是块级元素, 这里需要变成行内块元素. 否则会重启一行*/
        width: 24.9%;
        text-align: center; /*整体的文字居中*/
        border-right: 1px solid #e5e5e5;

        span {
            display: inline-block;
            width: 20px;
            height: 20px;
            vertical-align: middle; /*这里设置背景图片的垂直位置*/
            margin-right: 8px; /*设置图标和右边文字的外边距*/
        }
        .icon-setting {
            @include bgImg(20px, 20px, '/imgs/icon-setting.png');
        }
        .icon-7day {
            @include bgImg(20px, 20px, '/imgs/icon-7day.png');
        }
        .icon-15day {
            @include bgImg(20px, 20px, '/imgs/icon-15day.png');
        }
        .icon-post {
            @include bgImg(20px, 20px, '/imgs/icon-post.png');
        }
    }
}

</style>