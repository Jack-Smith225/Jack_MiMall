<template>
    <div>
        <!--子视图都会通过<router-view>来渲染-->
        <router-view></router-view>
        <service-bar></service-bar>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import NavFooter from "@/components/NavFooter";
import ServiceBar from "@/components/ServiceBar";

export default {
    name: 'order',
    data() {
        return {
            title: '',
            tip: ''
        }
    },
    components: {
        ServiceBar,
        NavFooter: NavFooter
    },
    mounted() {

    }}
</script>