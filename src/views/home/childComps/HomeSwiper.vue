<template>
    <div>
        <swiper >
                <swiperitem v-for="item in cbanners"  class="slide" :key="item">
                    <a :href="item.link">
                         <img :src="item.image" alt="" @load="simgload">
                    </a>
                </swiperitem>
        </swiper>
    </div>
</template>
<script>
import { Swiper,SwiperItem} from 'components/common/swiper/index.js'
export default {
    data() {
        return {
            isload: false,
        };
    },
    props: {
            cbanners:{
                type:Array,
                default() {
                    return []
                }
            }
    },
    components:{
            Swiper,
            SwiperItem
    },
    methods: {
        simgload(){
            if(!this.isload){
                this.$emit('simgload');
                this.isload=true;
            }
        }
    }
}
</script>
<style>
</style>
