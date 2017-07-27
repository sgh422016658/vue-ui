<template>
    <div class="page-container">
        <div class="page-title">
            vue-youyu-ui
        </div>
        <a class="youyu-cell" @click="linkTo('/demo/toast', 'Toast')">Toast</a>
        <a class="youyu-cell" @click="linkTo('/demo/dialog', 'Dialog')">Dialog</a>
        <a class="youyu-cell" @click="linkTo('/demo/indicator', 'Indicator')">Indicator</a>
        <a class="youyu-cell" @click="linkTo('/demo/lazyload', 'Class图片懒加载')">LazyLoad(ES6 Class类实现)</a>
        <a class="youyu-cell" @click="linkTo('/demo/lazyload/directive', 'Directive图片懒加载')">LazyLoad(vue-directive实现)</a>
        <a class="youyu-cell" @click="linkTo('/demo/infinite', '无限加载')">Infinite Scroll</a>
    </div>
</template>

<script>
'use strict'

export default {
    data: () => ({
        number: 0
    }),
    mounted() {
        
    },
    methods: {
        linkTo(path, name) {
            this.$router.push({path: path, query: { name: name}})
        }
    }
}
</script>
