<template>
    <div>
        <button class="youyu-button">打开alert对话框</button>
        <button class="youyu-button" @click="openConfirm">打开confirm对话框</button>
        <button class="youyu-button">打开prompt对话框</button>
    </div>
</template>

<script>
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
        }
    }
}
</script>
