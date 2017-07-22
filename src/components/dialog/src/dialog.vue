<template>
    <div>
        <div class="mask-container" v-show="dialogShow"></div>
        <transition name="dialog">
            <div class="youyu-dialog" v-show="dialogShow">
                <div class="header">{{title}}</div>
                <div class="content">{{content}}</div>
                <div class="footer">
                    <a class="btn cancel" @click="handleAction('cancel')">取消</a>
                    <a class="btn" @click="handleAction('confirm')">确定</a>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data: () => ({
        title: '',
        content: '',
        callback: Function,
        dialogShow: false
    }),
    methods: {
        handleAction(action) {
            var callback = this.callback;
            callback(action)
        }
    }
}
</script>


<style>
.dialog-enter-active, .dialog-leave-active {
    transition: all .2s
}
.dialog-enter, .dialog-leave-to /* .fade-leave-active 在 <2.1.8 中 */ {
    opacity: 0;
}

.mask-container{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1000;
}
.youyu-dialog{
    position: fixed;
    top: 50%;
    left: 50%;
    width: 260px;
    background: #fff;
    border-radius: 10px;
    transform: translate3d(-50%,-50%,0);
    z-index: 2000;
}
.youyu-dialog .header{
    text-align: center;
    padding: 15px 0;
    color: rgb(34, 34, 34);
    font-size: 16px;
    font-weight: bold;
}
.youyu-dialog .content{
    text-align: center;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    padding: 30px 0;
    color: rgb(34, 34, 34);
    font-size: 14px;
}
.youyu-dialog .footer{
    height: 40px;line-height: 40px;display: flex;
}
.youyu-dialog .footer .btn{
    display: block;text-align: center;width: 50%;flex: 1;font-size: 15px;
}
.btn.cancel{
    border-right: 1px solid #e5e5e5;
    color: rgb(117, 117, 117);
}
</style>
