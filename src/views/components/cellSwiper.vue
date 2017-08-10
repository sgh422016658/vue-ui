<template>
    <div>
        <youyu-cell-swiper
            v-for="(list, index) in cellList" :key="index"
            :content="list"
            @remove="remove(index)"
        ></youyu-cell-swiper>
    </div>
</template>

<script>
export default {
    data: () => ({
        cellList: ["a", "b", "c", "d", "e"]
    }),
    methods: {
        remove(index) {
            console.log(index)
        }
    }
}
</script>
