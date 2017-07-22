<template>
    <transition name="toast">
        <div class="youyu-toast" :class="customClass" v-show="visible">
            <div class="youyu-toast-text">{{message}}</div>
        </div>
    </transition>
</template>

<script>
'use strict'

export default {
    data: () => ({
        visible: false
    }),
    props: {
        message: String,
        position: {
            type: String,
            default: 'middle'
        },
    },
    computed: {
        customClass() {
            let classes;
            switch (this.position) {
                case 'top':
                    classes = 'is-placetop';
                    break;
                case 'bottom':
                    classes = 'is-placebottom';
                    break;
                default:
                    classes = 'is-placemiddle';
            }
            return classes;
        }
    }
}
</script>

<style>
.youyu-toast{
    position: fixed;
    max-width: 80%;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    font-size: 16px;
    padding: 10px 20px;
    z-index: 1000;
}
.youyu-toast.is-placetop{
    top: 50px;
    left: 50%;
    transform: translate(-50%)
}
.youyu-toast.is-placemiddle{
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%)
}
.youyu-toast.is-placebottom{
    bottom: 50px;
    left: 50%;
    transform: translate(-50%)
}

.toast-enter-active, .toast-leave-active {
    transition: opacity .5s
}
.toast-enter, .toast-leave-to  {
    opacity: 0
}
</style>

