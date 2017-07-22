<template>
    <div class="page-container">
        <div class="page-title">
            vue-youyu-ui
        </div>
        <a class="youyu-cell" @click="linkTo('/demo/toast', 'Toast')">Toast</a>
        <a class="youyu-cell" @click="linkTo('/demo/dialog', 'Dialog')">Dialog</a>
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
