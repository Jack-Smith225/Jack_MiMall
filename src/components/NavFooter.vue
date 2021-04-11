<template> <!--template下面必须有一个根元素, 不能并列出现两个<div>-->
    <div class="footer">
        <div class="footer-logo">
            <img src="/imgs/logo-footer.png" alt="">
            <p>小米商城</p>
        </div>
        <div class="footer-link">
            <a href="https://www.imooc.com/u/1343480" target="_blank">河畔一角主页</a><span>|</span>
            <a href="https://coding.imooc.com/class/113.html" target="_blank">Vue全栈课程</a><span>|</span>
            <a href="https://coding.imooc.com/class/236.html" target="_blank">React全家桶课程</a><span>|</span>
            <a href="https://coding.imooc.com/class/343.html" target="_blank">微信支付专项课程</a>
        </div>
        <div class="copyright">
            Copyright ©2020 <span class="domain">mi.futurefe.com </span>All Rights Reserved.
        </div>
    </div>
</template>

<script>
export default {
    name: 'nav-footer'
}
</script>

<style lang="scss">
@import "../assets/scss/config";
.footer {
    height: 234px;
    border-top: 4px solid $colorA;
    background-color: #333333;
    color: #999999; /*字体的颜色*/
    font-size: 16px;
    text-align: center; /*字体是否居中*/

    .footer-logo {
        margin-top: 46px;
        margin-bottom: 31px;
        img {
            width: 53px;
            height: 36px;
            margin-bottom: 13px; /*外边距*/
        }
    }

    .footer-link {
        a {
            color: #999999; /*a标签文字的颜色*/
            display: inline-block; /*行内块元素*/
        }
        /*定义链接右边的竖线样式*/
        span{
            margin: 0 10px;
        }

        margin-bottom: 13px;
    }

    .copyright {
        .domain {
            color: $colorA;
        }
    }

}

</style>