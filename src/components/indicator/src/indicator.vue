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

</style>
