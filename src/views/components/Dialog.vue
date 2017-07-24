<template>
    <div>
        <button class="youyu-button" @click="openAlert">打开alert对话框</button>
        <button class="youyu-button" @click="openConfirm">打开confirm对话框</button>
        <button class="youyu-button" @click="openPrompt">打开prompt对话框</button>
    </div>
</template>

<script>
'use strict'

export default {
    mounted() {
        
    },
    methods: {
        openConfirm() {
            this.$dailog.confirm({
                title: '标题',
                content: '内容'
            }).then(action => {
                console.log(action)
            }).catch(e => {
                console.log(e)
            })
        },
        openAlert() {
            this.$dailog.alert({
                title: '标题',
                content: '内容'
            }).then(action => {
                console.log(action)
            }).catch(e => {
                console.log(e)
            })
        },
        openPrompt() {
            this.$dailog.promop({
                title: '标题'
            }).then(action => {
                console.log(action)
            }).catch(e => {
                console.log(e)
            })
        }
    }
}
</script>

