<template>
    <div>
        <div class="youyu-indicator-mask" v-show="visible" ></div>
        <div class="youyu-indicator-wrapper" v-show="visible" >
            <div class="youyu-indicator-spin">
                <div class="youyu-spinner-fading-circle circle-color-11" style="width: 32px; height: 32px;">
                    <div class="youyu-spinner-fading-circle-circle is-circle2"></div>
                    <div class="youyu-spinner-fading-circle-circle is-circle3"></div>
                    <div class="youyu-spinner-fading-circle-circle is-circle4"></div>
                    <div class="youyu-spinner-fading-circle-circle is-circle5"></div>
                    <div class="youyu-spinner-fading-circle-circle is-circle6"></div>
                    <div class="youyu-spinner-fading-circle-circle is-circle7"></div>
                    <div class="youyu-spinner-fading-circle-circle is-circle8"></div>
                    <div class="youyu-spinner-fading-circle-circle is-circle9"></div>
                    <div class="youyu-spinner-fading-circle-circle is-circle10"></div>
                    <div class="youyu-spinner-fading-circle-circle is-circle11"></div>
                    <div class="youyu-spinner-fading-circle-circle is-circle12"></div>
                    <div class="youyu-spinner-fading-circle-circle is-circle13"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        visible: false
    })
}
</script>

<style>
.youyu-indicator-mask{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
}
.youyu-indicator-wrapper {
    padding: 15px;
    top: 50%;
    left: 50%;
    position: fixed;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    border-radius: 5px;
    background: rgba(0,0,0,.7);
    color: #fff;
    box-sizing: border-box;
    text-align: center;
}
.youyu-indicator-spin{
    display: inline-block;
    text-align: center;
}
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
