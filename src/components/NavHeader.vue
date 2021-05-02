<template>
    <div class="header">
        <!--/*顶部条*/-->
        <div class="nav-topbar">
            <div class="container">
                <!--/*容器左边的菜单: '松果出行, 云服务, MIUI...'*/-->
                <div class="topbar-menu">
                    <a href="javascript:;">小米商城</a>
                    <a href="javascript:;">MIUI</a>
                    <a href="javascript:;">云服务</a>
                    <a href="javascript:;">协议规则</a>
                </div>
                <!--/*容器右边的菜单: '登录, 注册...'*/-->
                <div class="topbar-user">
                    <a href="javascript:;" v-if="username">{{ username }}</a>
                    <a href="javascript:;" v-if="!username" v-on:click="login">登录</a>
                    <a href="javascript:;" v-if="username" v-on:click="login" @click="logout">退出</a>
                    <a href="javascript:;" v-if="username">我的订单</a>
                    <a href="javascript:;" class="my-cart" v-on:click="goToCart"><span
                        class="icon-cart"></span>购物车({{ cartCount }})
                    </a>
                </div>
            </div>
        </div>
        <!--/*顶部条下面的导航*/-->
        <div class="nav-header">
            <div class="container">
                <div class="header-logo">
                    <a href="/#/index"></a>
                </div>
                <div class="header-menu">
                    <div class="item-menu">
                        <span>小米手机</span>
                        <!--鼠标放上去之后, children才会展示出来, 所以默认需要把它隐藏掉 -->
                        <div class="children">
                            <ul>
                                <li class="product" v-for="(item, index) in phoneList" :key="index"> <!--index是item
                                的索引--><!--加:key渲染速度更高一些, 并且以后复用率更高一些-->
                                    <a v-bind:href="'/#/product/'+item.id" target="_blank"><!--_blank打开一个新窗口-->
                                        <div class="pro-img">
                                            <img
                                                v-lazy="item.mainImage" v-bind:alt="item.subtitle"/>
                                        </div>
                                        <div class="pro-name">{{ item.name }}</div>
                                        <div class="pro-price">{{ item.price | currency }}</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>RedMid红米</span>
                        <!--<div class="children">

                        </div>-->
                    </div>
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children">
                            <ul>
                                <li class="product">
                                    <a href="" target="_blank"><!--_blank打开一个新窗口-->
                                        <div class="pro-img">
                                            <img
                                                v-lazy="'/imgs/nav-img/nav-3-1.jpg'"/>
                                        </div>
                                        <div class="pro-name">小米壁画电视 65英寸</div>
                                        <div class="pro-price">6999元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank"><!--_blank打开一个新窗口-->
                                        <div class="pro-img">
                                            <img
                                                v-lazy="'/imgs/nav-img/nav-3-2.jpg'"/>
                                        </div>
                                        <div class="pro-name">小米全面屏电视E55A</div>
                                        <div class="pro-price">1999元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank"><!--_blank打开一个新窗口-->
                                        <div class="pro-img">
                                            <img
                                                v-lazy="'/imgs/nav-img/nav-3-3.png'"/>
                                        </div>
                                        <div class="pro-name">小米电视4A 32英寸</div>
                                        <div class="pro-price">699元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank"><!--_blank打开一个新窗口-->
                                        <div class="pro-img">
                                            <img
                                                v-lazy="'/imgs/nav-img/nav-3-4.jpg'"/>
                                        </div>
                                        <div class="pro-name">小米电视4A 55英寸</div>
                                        <div class="pro-price">1799元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank"><!--_blank打开一个新窗口-->
                                        <div class="pro-img">
                                            <img
                                                v-lazy="'/imgs/nav-img/nav-3-5.jpg'"/>
                                        </div>
                                        <div class="pro-name">小米电视4A 65英寸</div>
                                        <div class="pro-price">1799元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank"><!--_blank打开一个新窗口-->
                                        <div class="pro-img">
                                            <img
                                                v-lazy="'/imgs/nav-img/nav-3-6.png'"/>
                                        </div>
                                        <div class="pro-name">查看全部</div>
                                        <div class="pro-price">查看全部</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="header-search">
                    <div class="wrapper">
                        <input type="text" name="keyword">
                        <a href="javascript:;"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name: 'nav-header',
    data() {
        return {
            phoneList: []
        }
    },

    computed: {
        // // 计算属性解决数据显示延迟的问题
        // username() {
        //     return this.$store.state.username; // 从vuex中取数据
        // },
        // cartCount() {
        //     return this.$store.state.cartCount;
        // },

        // 替代上面的计算属性
        ...mapState([
            'username', 'cartCount'
        ])
    },

    // tag::金额格式化过滤器, 类似的 日期也可会用到过滤器
    filters: {
        currency(val) {
            if (!val) {
                return '0.00';

            }
            return '¥' + val.toFixed(2) + '元';

        }

    },
    // end::金额格式化过滤器, 类似的 日期也可会用到过滤器

    mounted() { // 相当于ready()
        this.getProductList();
        let params = this.$route.params
        // 如果是从login页面跳转过来的, 则重新获取购物车数量
        if (params && params.from == 'login') {
            this.getCartCount();
        }
    },
    methods: {
        login() { //跳转到登录页面的方法
            this.$router.push('/login')
        },
        getProductList() {
            this.axios.get('/products', { // get和post的传参方式有区别
                params: {
                    categoryId: '100012',
                    pageSize: 6
                }
            }).then((res) => {
                this.phoneList = res.list
            })
        },
        getCartCount() {
            this.axios.get('/carts/products/sum').then((res = 0) => { // res=0 给一个默认值
                this.$store.dispatch('saveCartCount', res)
            });
        },
        logout() {
            this.axios.post('/user/logout',).then(() => {
                this.$message.success('退出成功')

                // 清空cookie
                this.$cookie.set('userId', '', {
                    expires: '-1'
                });
                this.$store.dispatch('saveUserName', '');
                this.$store.dispatch('saveCartCount', '0');
            });
        },
        goToCart() {
            this.$router.push('/cart') /*跳转路由*/
        }
    }
};
</script>

<style lang="scss">
@import "../assets/scss/base";
@import "../assets/scss/mixin";
@import "../assets/scss/config";

.header {
    .nav-topbar {
        height: 39px;
        line-height: 39px;
        background-color: #333333;
        /*设置字体颜色*/
        color: #B0B0B0;

        .container {
            /*base.scss -> container*/
            @include flex();


            a {
                display: inline-block;
                color: #B0B0B0;
                margin-right: 17px;

                &:last-child {
                    margin-right: 0;
                }
            }

            .my-cart {
                width: 110px;
                background-color: #FF6600;
                text-align: center;
                color: #ffffff;

                .icon-cart {
                    @include bgImg(16px, 12px, '/imgs/icon-cart-checked.png');
                    //tag::由mixin函数替换
                    /*display: inline-block;
                    width: 16px;
                    height: 12px;
                    background: url('/imgs/icon-cart-checked.png') no-repeat center;
                    background-size: contain; !*缩放背景图片以完全装入背景区，可能背景区部分空白*!*/
                    //end::由mixin函数替换
                    margin-right: 4px;
                }
            }
        }
    }

    .nav-header {
        .container {
            position: relative; /*加了之后, children的绝对定位就以container为标准了*/
            /*base.scss -> container*/
            height: 112px;
            @include flex();
            //tag::由mixin函数替换
            /*display: flex;
            justify-content: $hov; !*两端对齐*!
            align-items: $col; !*在交叉轴的维度*!*/
            //end::由mixin函数替换


            .header-menu {
                display: inline-block;
                width: 643px;
                padding-left: 209px;

                .item-menu {
                    display: inline-block;
                    color: #333333;
                    font-weight: bold;
                    font-size: 16px;
                    line-height: 112px;
                    margin-right: 20px;

                    span {
                        cursor: pointer;
                    }

                    &:hover { /*控制item-menu的hover*/
                        color: $colorA;

                        .children {
                            height: 220px; /*设计稿上应有的高度*/
                            opacity: 1;
                        }
                    }

                    .children {
                        position: absolute;
                        top: 112px;
                        left: 0;
                        width: 1226px;
                        height: 0px; // 默认隐藏
                        opacity: 0; // 不透明度
                        overflow: hidden;
                        //height: 220px;
                        border-top: 1px solid #e5e5e5;
                        box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11); /*阴影*/
                        z-index: 10;
                        transition: all .5s;
                        background-color: #ffffff; /*设置下拉的背景色, 防止下层的元素显示出来*/

                        .product {
                            position: relative;
                            float: left;
                            width: 16.6%;
                            height: 220px;
                            font-size: 12px;
                            line-height: 12px;
                            text-align: center;


                            a {
                                display: inline-block; /*改变默认的行内样式*/
                            }

                            img {
                                width: auto;
                                height: 111px;
                                margin-top: 26px;

                            }

                            .pro-img {
                                height: 137px; /*img的高度 加上margin-top: 111px + 26px*/
                            }

                            .pro-name {
                                font-weight: bold;
                                margin-top: 19px;
                                margin-bottom: 8px;
                                color: $colorB;
                            }

                            .pro-price {
                                color: $colorA;
                            }

                            &:before {
                                content: ' ';
                                position: absolute;
                                top: 28px;
                                right: 0;
                                border-left: 1px solid #d7d7d7;
                                height: 100px;
                                width: 1px;
                            }

                            &:last-child:before {
                                display: none;
                            }

                        }
                    }
                }
            }

            .header-search {
                width: 319px;

                .wrapper {
                    height: 50px;
                    border: 1px solid #E0E0E0;
                    display: flex;
                    align-items: center; /*设置交叉轴向的对齐方式*/
                    input {
                        border: none;
                        box-sizing: border-box; /*设置宽度包含padding值, 否则宽度会变成264 + 14*/
                        border-right: 1px solid #E0E0E0;
                        width: 264px;
                        height: 50px;
                        padding-left: 14px;
                    }

                    a {
                        @include bgImg(18px, 18px, "/imgs/icon-search.png");
                        //tag::由mixin函数替换
                        /*display: inline-block; !*一般背景图片都会控制为inline-block*!
                        width: 18px; !*注意是按钮的宽度*!
                        height: 18px; !*注意是按钮的高度*!
                        background: url("/imgs/icon-search.png") no-repeat center; !*背景图片基本上都是这样去写的*!
                        background-size: contain; !*contain是让背景图片充满这个元素*!*/
                        //end::由mixin函数替换
                        margin-left: 17px;
                    }

                }
            }
        }
    }
}

</style>