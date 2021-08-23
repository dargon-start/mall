<template>
        <swiper class="detail-swiper">
            <swiperitem v-for="item in topImgs" :key="item" class="slide">
                    <img :src="item" alt="">
            </swiperitem>
        </swiper>
</template>
<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index'

export default {
 components: {
     Swiper,
     SwiperItem
 },
 props: {
     topImgs:{
         type:Array,
         default(){
             return []
         }
     }

 },


}
</script>
<style scoped>
.detail-swiper{
    height: 75vw;
}
</style>
