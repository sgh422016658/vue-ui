<template>
    <div>
        <div @click="testToast">测试Toast</div>
    </div>
</template>

<script>
'use strict'

export default {
    data: () => ({
        number: 0
    }),
    methods: {
        testToast() {
            this.$toast({
                message: this.number,
                position: 'bottom',
                duration: 10000
            })
            this.number ++;
        }
    }
}
</script>
