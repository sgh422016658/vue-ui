<template>
    <div>
        <button class="youyu-button" @click="middleToast">点击弹出Toast</button>
        <button class="youyu-button" @click="bottomToast">自定义Toast位置</button>
    </div>
</template>

<script>
'use strict'

export default {
    methods: {
        bottomToast() {
            this.$toast({
                message: '提示信息',
                position: 'bottom', //此处可以选择top bottom middle来设置toast位置
                duration: 3000
            })
        },
        middleToast() {
            this.$toast({
                message: '提示信息',
            })
        }
    }
}
</script>
