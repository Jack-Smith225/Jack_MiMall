<template>
    <div class="order-list">
        <order-header title="订单列表">
            <template v-slot:tip>
                <span>请谨防钓鱼链接或诈骗电话，了解更多></span>
            </template>
        </order-header>
        <div class="wrapper">
            <div class="container">
                <div class="order-box">
                    <loading v-if="loading"></loading>
                    <div class="order" v-for="(order, index) in list" :key="index"> <!--遍历每一个订单-->

                        <div class="order-title">
                            <div class="item-info fl">
                                {{ order.createTime }}
                                <span>|</span>
                                {{ order.receiverName }}
                                <span>|</span>
                                订单号：{{ order.orderNo }}
                                <span>|</span>
                                {{ order.paymentTypeDesc }}
                            </div>
                            <div class="item-money fr">
                                <span>应付金额：</span>
                                <span class="money">{{ order.payment }}</span>
                                <span>元</span>
                            </div>
                        </div>
                        <div class="order-content clearfix">
                            <div class="good-box fl">
                                <div class="good-list" v-for="(item, i) in order.orderItemVoList" :key="i">
                                    <div class="good-img">
                                        <img
                                            v-lazy="item.productImage"
                                            alt="">
                                    </div>
                                    <div class="good-name">
                                        <div class="p-name">{{ item.productName }}</div>
                                        <div class="p-money">{{ item.totalPrice + 'X' + item.quantity }}元</div>
                                    </div>
                                </div>
                            </div>
                            <div class="good-state fr" v-if="order.status == 20">
                                <a href="javascript:;">{{ order.statusDesc }}</a>
                            </div>
                            <div class="good-state fr" v-else>
                                <a href="javascript:;" @click="goPay(order.orderNo)">{{ order.statusDesc }}</a>
                            </div>
                        </div>
                    </div>

                    <!--start::分页插件-->
                    <el-pagination
                        class="pagination"
                        background
                        layout="prev, pager, next"
                        :page-size="pageSize"
                        :total="total"
                        @current-change="handleChange"
                    >

                    </el-pagination>
                    <!--end::分页插件-->

                    <!--start::加载更多插件-->
                    <div class="load-more">
                        <el-button type="primary" :loading="loading" @click="loadMore" v-if="false">加载更多</el-button>
                    </div>
                    <!--end::加载更多插件-->

                    <!--start::滚动加载-->
                    <div class="scroll-more" v-infinite-scroll="scrollMore" infinite-scroll-disabled="true"
                         infinite-scroll-distance="410" v-if="false">
                        <img src="/imgs/loading-svg/loading-spinning-bubbles.svg" v-show="false" alt="">
                    </div>
                    <!--end::滚动加载-->

                    <no-data v-if="!loading && list.length === 0"></no-data>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import OrderHeader from './../components/OrderHeader';
import Loading from "@/components/Loading";
import NoData from "@/pages/NoData";
import {Pagination, Button} from 'element-ui'
import infiniteScroll from 'vue-infinite-scroll'

export default {
    name: 'order-list',
    components: {
        OrderHeader,
        Loading,
        NoData,
        [Pagination.name]: Pagination,
        [Button.name]: Button
    },
    directives: {infiniteScroll},
    data() {
        return {
            list: [], //订单列表
            loading: true, // 是否显示loading
            pageSize: 10,
            pageNum: 1, // 当前页
            total: 0, // 总条数
            showNextPage: true, // "加载更多"按钮是否显示
            busy: false, // 决定滚动加载图标是否禁用
        }
    },
    mounted() {
        this.getOrderList();
    },
    methods: {
        getOrderList() {
            this.axios.get('/orders', {
                params: {
                    pageNum: this.pageNum,
                    pageSize: this.pageSize
                }
            }).then((res) => {
                this.list = res.list;
                this.total = res.total;
                this.loading = false;
            }).catch(() => {
                this.loading = false;
            });
        },
        goPay(orderNo) {
            // start::三种路由传参方式
            // this.$router.push('/order/pay')

            // this.$router.push((
            //     name: 'order-pay',
            //     params: {
            //         orderNo
            // }
            // ))

            this.$router.push({
                path: '/order/pay',
                query: {
                    orderNo
                }
            })
            // end:三种路由传参方式
        },
        /**
         * 组件会传过来这个参数, 即"回调参数" - 分页器分页
         * @param pageNum 当前页码-"回调参数"
         */
        handleChange(pageNum) {

            this.loading = true;
            this.list = [];
            this.pageNum = pageNum;
            this.getOrderList()

        },
        /**
         * 加载更多方法 - 加载更多分页
         */
        loadMore() {
            this.pageNum++;
            this.getOrderList();
        },
        /**
         * 滚动更多方法 - 滚动更多分页
         */
        scrollMore() {
            this.busy = true;
            setTimeout(() => {
                this.pageNum++;
                this.getList();

            }, 500);
        },
        /**
         * 专门给scrollMore使用
         */
        getList() {
            this.loading = true;
            this.axios.get('/orders', {
                params: {
                    pageNum: this.pageNum,
                    pageSize: this.pageSize
                }
            }).then((res) => {
                this.list = this.list.concat(res.list);
                this.loading = false;
                if (res.hasNextPage) {
                    this.busy = false;
                } else {
                    this.busy = true;
                    this.showNextPage = false;
                }
            });
        }
    }
}
</script>
<style lang="scss">
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';

.order-list {
    .wrapper {
        background-color: $colorJ;
        padding-top: 33px;
        padding-bottom: 110px;

        .order-box {
            .order {
                @include border();
                background-color: $colorG;
                margin-bottom: 31px;

                &:last-child {
                    margin-bottom: 0;
                }

                .order-title {
                    @include height(74px);
                    background-color: $colorK;
                    padding: 0 43px;
                    font-size: 16px;
                    color: $colorC;

                    .item-info {
                        span {
                            margin: 0 9px;
                        }
                    }

                    .money {
                        font-size: 26px;
                        color: $colorB;
                    }
                }

                .order-content {
                    padding: 0 43px;

                    .good-box {
                        width: 88%;

                        .good-list {
                            display: flex;
                            align-items: center;
                            height: 145px;

                            .good-img {
                                width: 112px;

                                img {
                                    width: 100%;
                                }
                            }

                            .good-name {
                                font-size: 20px;
                                color: $colorB;
                            }
                        }
                    }

                    .good-state {
                        @include height(145px);
                        font-size: 20px;
                        color: $colorA;

                        a {
                            color: $colorA;
                        }
                    }
                }
            }

            .pagination {
                text-align: right;
            }

            /*start::改分页器的主题色-->第一种方式*/
            .el-pagination.is-background .el-pager li:not(.disabled).active {
                background-color: #ff6600;
                color: #FFF;
            }

            /*end::改分页器的主题色-->第一种方式*/

            .load-more, .scroll-more {
                text-align: center; // 控制div里面的按钮居中, 通常需要把行内元素放到块级元素里面, 并设置text-align来设置居中
            }

            .el-button--primary {
                color: #FFF;
                background-color: #ff6600;
                border-color: #ff6600;
            }

        }
    }
}
</style>