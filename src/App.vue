<template>
    <div id="app">
        <vue-progress-bar></vue-progress-bar>
        <transition :name="slideName" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
'use strict'

export default {
    data: () => ({
        slideName: 'slide-left'
    }),
    watch: {
        $route(to, from) {
            let toPath = to.path.split('/').length,
            fromPath = from.path.split('/').length;
            toPath > fromPath ? this.slideName = "slide-left" : this.slideName = "slide-right";
        }
    }
}
</script>

<style>
html, body{
    margin: 0;padding: 0;background: #fafafa;
}
h1, h2, h3, h4, h5, h6 {
    font-size: 100%;
    font-weight: 400;
    line-height: 2;
}
ul{
    margin: 0;padding: 0;
}
li{
    list-style-type: none;
}
*{
    box-sizing: border-box;
}

.slide-left-enter, .slide-right-leave-to{
    opacity: 0;
    transform: translate(30px, 0);
    transition: all .5s cubic-bezier(.55,0,.1,1)
}
.slide-left-leave-to, .slide-right-enter{
    opacity: 0;
    transform: translate(-30px, 0);
    transition: all .5s cubic-bezier(.55,0,.1,1)
}
.youyu-content{
    position: absolute;left: 0;top: 60px;right: 0; bottom: 0;overflow-x: hidden;overflow-y: auto;-webkit-overflow-scrolling: touch;
}
.page-back{
    display: inline-block;
    top: 0;
    left: 0;
    position: absolute;
    width: 60px;
    height: 60px;
    line-height: 60px;
    font-size: 14px;
    text-align: center;
}
.page-container{
    position: absolute;left: 0;top: 0;right: 0;bottom: 0;overflow-y: auto;overflow-x: hidden;
    
}
.page-title{
    font-size: 20px;
    margin: 20px auto;
    text-align: center;
    line-height: 1;
}
.youyu-cell{
    display: block;width: 100%;height: 50px;line-height: 50px;padding: 0 10px;background: #fff;
    border-bottom: 1px solid #eee;
}
.youyu-button{
    display: block;
    width: 100%;
    margin: 20px 0;
    font-size: 18px;
    height: 41px;
    color: #656b79;
    background-color: #f6f8fa;
    border-radius: 4px;
    border: none;
    box-shadow: 0 2px 2px #b8bbbf;
    outline: none;
}
/*加载*/
.youyu-spinner-fading-circle {
    position: relative
}
.circle-color-11 > div::before {
    background-color: #ccc;
}
.youyu-spinner-fading-circle-circle {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute
}
.youyu-spinner-fading-circle-circle::before {
    content: " ";
    display: block;
    margin: 0 auto;
    width: 15%;
    height: 15%;
    border-radius: 100%;
    -webkit-animation: youyu-fading-circle 1.2s infinite ease-in-out both;
            animation: youyu-fading-circle 1.2s infinite ease-in-out both
}
.youyu-spinner-fading-circle-circle.is-circle2 {
    -webkit-transform: rotate(30deg);
            transform: rotate(30deg)
}
.youyu-spinner-fading-circle-circle.is-circle2::before {
    -webkit-animation-delay: -1.1s;
            animation-delay: -1.1s
}
.youyu-spinner-fading-circle-circle.is-circle3 {
    -webkit-transform: rotate(60deg);
            transform: rotate(60deg)
}
.youyu-spinner-fading-circle-circle.is-circle3::before {
    -webkit-animation-delay: -1s;
            animation-delay: -1s
}
.youyu-spinner-fading-circle-circle.is-circle4 {
    -webkit-transform: rotate(90deg);
            transform: rotate(90deg)
}
.youyu-spinner-fading-circle-circle.is-circle4::before {
    -webkit-animation-delay: -0.9s;
            animation-delay: -0.9s
}
.youyu-spinner-fading-circle-circle.is-circle5 {
    -webkit-transform: rotate(120deg);
            transform: rotate(120deg)
}
.youyu-spinner-fading-circle-circle.is-circle5::before {
    -webkit-animation-delay: -0.8s;
            animation-delay: -0.8s
}
.youyu-spinner-fading-circle-circle.is-circle6 {
    -webkit-transform: rotate(150deg);
            transform: rotate(150deg)
}
.youyu-spinner-fading-circle-circle.is-circle6::before {
    -webkit-animation-delay: -0.7s;
            animation-delay: -0.7s
}
.youyu-spinner-fading-circle-circle.is-circle7 {
    -webkit-transform: rotate(180deg);
            transform: rotate(180deg)
}
.youyu-spinner-fading-circle-circle.is-circle7::before {
    -webkit-animation-delay: -0.6s;
            animation-delay: -0.6s
}
.youyu-spinner-fading-circle-circle.is-circle8 {
    -webkit-transform: rotate(210deg);
            transform: rotate(210deg)
}
.youyu-spinner-fading-circle-circle.is-circle8::before {
    -webkit-animation-delay: -0.5s;
            animation-delay: -0.5s
}
.youyu-spinner-fading-circle-circle.is-circle9 {
    -webkit-transform: rotate(240deg);
            transform: rotate(240deg)
}
.youyu-spinner-fading-circle-circle.is-circle9::before {
    -webkit-animation-delay: -0.4s;
            animation-delay: -0.4s
}
.youyu-spinner-fading-circle-circle.is-circle10 {
    -webkit-transform: rotate(270deg);
            transform: rotate(270deg)
}
.youyu-spinner-fading-circle-circle.is-circle10::before {
    -webkit-animation-delay: -0.3s;
            animation-delay: -0.3s
}
.youyu-spinner-fading-circle-circle.is-circle11 {
    -webkit-transform: rotate(300deg);
            transform: rotate(300deg)
}
.youyu-spinner-fading-circle-circle.is-circle11::before {
    -webkit-animation-delay: -0.2s;
            animation-delay: -0.2s
}
.youyu-spinner-fading-circle-circle.is-circle12 {
    -webkit-transform: rotate(330deg);
            transform: rotate(330deg)
}
.youyu-spinner-fading-circle-circle.is-circle12::before {
    -webkit-animation-delay: -0.1s;
            animation-delay: -0.1s
}
@-webkit-keyframes youyu-fading-circle {
    0%, 39%, 100% {
        opacity: 0
    }
    40% {
        opacity: 1
    }
}
@keyframes youyu-fading-circle {
    0%, 39%, 100% {
        opacity: 0
    }
    40% {
        opacity: 1
    }
}
</style>
