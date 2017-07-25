<template>
    <div class="page-container">
        <header>
            <a class="page-back" @click="goBack">prev</a>
            <h1 class="page-title">{{name}}</h1>
        </header>
        <router-view></router-view>
    </div>
</template>

<script>
'use strict'

export default {
    data: () => ({
        name: ''
    }),
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.name = vm.$route.query.name
        })
    },
    methods: {
        goBack() {
            this.$router.back()
        }
    }
}
</script>

<style>
.page-toast-wrapper{
    padding: 0 20px;
    top: 50%;
    position: absolute;
    width: 100%;
    transform: translateY(-50%);
}
</style>
