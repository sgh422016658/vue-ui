<template>
    <div class="youyu-content">
        <ul class="infinite-scroll-wrap" v-infinite-scroll="loadmore" infinite-scroll-distance="20">
            <li v-for="(list, index) in dataList" :key="index">{{list}}</li>
            <div class="page-infinite-loading" v-show="laodShow">
                <div class="youyu-spinner-fading-circle circle-color-11" style="width: 28px; height: 28px;">
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
                <p>加载中</p>
            </div>
        </ul>
    </div>
</template>

<script>
'use strict'

export default {
    data: () => ({
        dataList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        loading: false,
        laodShow: true,
    }),
    mounted() {
        console.log(1)
    },
    methods: {
        loadmore() {
            if(this.loading) return;
            this.loading = true;
            if(this.dataList.length > 30) {
                this.$toast({
                    message: '没有更多了'
                })
                this.laodShow = false;
                return;
            }
            setTimeout(() => {
                let last = this.dataList[this.dataList.length - 1] || 0;
                for (let i = 1; i <= 10; i++) {
                    this.dataList.push(last + i);
                }
                this.loading = false;
            }, 2000);
        }
    }
}
</script>


<style>
.infinite-scroll-wrap{
    width: 100%;
}
.infinite-scroll-wrap li{
    width: 100%;
    height: 50px;
    border-top: 1px solid #eee;
    display: flex;
    justify-content: center;
    align-items: center;
}
.page-infinite-loading{
    border-top: 1px solid #eee;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.page-infinite-loading p{
    margin-left: 10px;
    font-size: 12px;
}
</style>
