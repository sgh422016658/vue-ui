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
                message: '测试',
                position: 'bottom', //此处可以选择top bottom middle来设置toast位置
                duration: 3000
            })
            this.number ++;
        }
    }
}
</script>
