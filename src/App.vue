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
</style>
