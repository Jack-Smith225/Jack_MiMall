<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
//import storage from './storage/index'
//import axios from 'axios'
export default {
    name: 'App',
    components: {},
    data() {
        return {}
    },
    mounted() {
        this.getUser();
        this.getCartCount();

    },
    methods: {
        getUser() {
            this.axios.get('/user').then((res={}) => { // res={} 给一个默认值
                this.$store.dispatch('saveUserName', res.username)
            });
        },
        getCartCount() {
            this.axios.get('/carts/products/sum').then((res=0) => { // res=0 给一个默认值
                this.$store.dispatch('saveCartCount', res)
            });
        }
    }
}
</script>

<style lang="scss">
@import "assets/scss/reset.scss";
@import "assets/scss/button.scss";
</style>
