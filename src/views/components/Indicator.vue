<template>
    <div class="page-toast-wrapper">
        <button class="youyu-button" @click="openIndicator">打开Indicator加载框</button>
    </div>
</template>

<script>
'use strict'

export default {
    methods: {
        openIndicator() {
            this.$indicator.open();
            setTimeout(() => {
                this.$indicator.close();
            }, 3000)
        }
    }
}
</script>
