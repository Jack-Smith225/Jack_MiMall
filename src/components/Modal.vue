<!--模态框组件-->
<template>
    <transition name="slide">
        <div class="modal" v-show="showModal">
            <div class="mask"></div> <!--遮罩层-->
            <div class="modal-dialog"> <!--弹框窗口-->
                <div class="modal-header">
                    <span>{{ title }}</span>
                    <a href="javascript:;" class="icon-close" v-on:click="$emit('cancel')"></a> <!--关闭按钮-->
                </div>
                <div class="modal-body">
                    <slot name="body"></slot> <!--定义插槽, 可以动态插一个东西-->
                </div>
                <div class="modal-footer">
                    <a href="javascript:;" class="btn" v-if="btnType==1" v-on:click="$emit('submit')">{{sureText}}</a>
                    <a href="javascript:;" class="btn" v-if="btnType==2" v-on:click="$emit('cancel')">{{cancelText}}</a>

                    <div class="btn-group" v-if="btnType==3">
                        <a href="javascript:;" class="btn" v-on:click="$emit('submit')">{{sureText}}</a>
                        <a href="javascript:;" class="btn btn-default" v-on:click="$emit('cancel')">{{cancelText}}</a>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    name: 'modal',
    props: {
        /*弹框类型 小small, 中middle, 大large, 表单form*/
        modalType: {
            type: String,
            default: 'form'
        },
        /*弹框标题*/
        title: String,
        /*按钮类型 1:只有确定按钮 2:取消按钮 3: 确定取消都有*/
        btnType: String,
        sureText: {
            type: String,
            default: '确定'
        },
        cancelText: {
            type: String,
            default: '取消'
        },
        showModal: Boolean

    }
}
</script>
<style lang="scss">
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/modal.scss";
@import "./../assets/scss/config.scss";
</style>