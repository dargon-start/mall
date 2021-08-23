<template>
    <div class="category-detail">
        <goods-list :Goods='showCategoryDetail'></goods-list>
        <div>{{showCategoryDetail[0].iid}}</div>
    </div>
</template>
<script>
import GoodsList from 'components/content/Goods/GoodsList.vue'
export default {
    props: {
        showCategoryDetail:{
            type:Object,
            default(){
                return {}
            }
        }
    },
   data() {
      return {
          

      }
   },
   components:{
      GoodsList
         

   },
   created(){
         

   },
   methods:{
         

   }


}
</script>
<style>

</style>
