<template>
    <div>
        <div class="mask-container" v-show="dialogShow"></div>
        <transition name="dialog">
            <div class="youyu-dialog" v-show="dialogShow">
                <div class="header">{{title}}</div>
                <div class="content">
                    <span v-if="!isPrompt">{{content}}</span>
                    <input v-else type="text" v-model="inputValue" />
                </div>
                <div class="footer">
                    <a class="btn cancel" v-show="showCancelButton" @click="handleAction('cancel')">取消</a>
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
        showCancelButton: true,
        dialogShow: false,
        isPrompt: false,
        inputValue: ''
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
.dialog-enter {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0) scale(0.7) !important;
}
.dialog-leave-active {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0) scale(0.9) !important;
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
    background-color: #fff;
    transform: translate3d(-50%, -50%, 0);
    width: 80%;
    border-radius: 10px;
    font-size: 16px;
    transition: .2s;
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
    padding: 30px 15px;
    color: rgb(34, 34, 34);
    font-size: 14px;
}
.youyu-dialog input{
    border: 1px solid #dedede;
    border-radius: 5px;
    padding: 8px;
    width: 100%;
    appearance: none;
    outline: none;
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
