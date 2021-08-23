<template>
    <div class="GoodsList">
           <goods-item v-for="item in Goods" :key="item" :goodsitem='item' ></goods-item>
    </div>
</template>
<script>
import GoodsItem from './Goodsitem.vue';
export default {
    components: {
        GoodsItem
    },
    props: {
      Goods:{
          type:Array,
          default(){
              return []
          }
      }
    },
    methods: {
      
    }
  
  }
</script>
<style>
.GoodsList{
    display: flex;
    flex-wrap: wrap;
    background-color: #f0f0f0;
    justify-content:space-around;
}
</style>
