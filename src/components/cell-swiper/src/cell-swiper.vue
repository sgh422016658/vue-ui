<template>
    <div class="youyu-cell-swiper"
        v-clickoutside:touchstart="swipeMove"
        @click="swipeMove()"
        @touchstart="startDrag"
        @touchmove="onDrag"
        @touchend="endDrag"
        ref="cell">
        <div class="youyu-cell-wraper">
            {{content}}
        </div>
        <div class="youyu-cell-right" ref="right" @click="remove">
            <a class="youyu-cell-button">remove</a>
        </div>
    </div>
</template>

<script>
import clickoutside from '../../../utils/clickoutside'

export default {
    name: 'YouyuCellSwiper',
    props: {
        content: String,
    },
    directives: {
        clickoutside
    },
    mounted() {
        this.wrap = this.$refs.cell.querySelector(".youyu-cell-wraper");
        this.rightElem = this.$refs.right;
       
        this.rightWidth = Math.ceil(this.rightElem.getBoundingClientRect().width);
        
        this.rightElem.style.transform = this.translate3d(this.rightWidth)
    },
    methods: {
        remove() {
            this.$emit('remove')
        },
        translate3d(offsetLeft) {
            return `translate3d(${offsetLeft}px, 0, 0)`
        },
        startDrag(e) {
            this.startX = e.changedTouches[0].pageX;
        },
        onDrag(e) {
            if(this.opened) {
                this.swipeMove(0);
                this.opened = false;
                return;
            }
            const offsetLeft = this.offsetLeft = e.changedTouches[0].pageX - this.startX;
            if(offsetLeft < 0 && -offsetLeft > this.rightWidth || offsetLeft > 0 && !this.leftWidth) {
                return
            }
            e.preventDefault();
            this.swipeMove(this.offsetLeft);
        },
        endDrag() {
            this.swipeLeaveTransition(this.offsetLeft > 0 ? 1 : -1)
        },
        swipeMove(offsetLeft = 0) {
            this.wrap.style.transform = this.translate3d(offsetLeft)
            this.rightElem.style.transform = this.translate3d(this.rightWidth + offsetLeft)
        },
        swipeLeaveTransition(direction) {
            if(direction < 0 && -this.offsetLeft > this.rightWidth * 0.4) {
                this.swipeMove(-this.rightWidth);
                this.resetSwipeStatus();
                return;
            }
            this.swipeMove(0)
        },
        resetSwipeStatus() {
            this.opened = true;
            this.offsetLeft = 0;
        }
    }
}
</script>

<style>
.youyu-cell-swiper{
    position: relative;
    background: #fff;
    height: 50px;
    border-bottom: 1px solid #eee;
}
.youyu-cell-wraper{
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 10px;
    transition: transform .2s ease-in-out;
}
.youyu-cell-right{
    position: absolute;
    height: 100%;
    right: 0;
    top: 0;
    transform: translate3d(100%, 0, 0);
    transition: transform .2s ease-in-out;
}
.youyu-cell-button{
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    background: red;
    color: #fff;
}
</style>
