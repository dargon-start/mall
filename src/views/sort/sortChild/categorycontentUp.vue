<template>
    <div class="categoryUp" > 
        <div v-for="item in categoryData.list" :key="item" class="category-item">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
       
    </div>
</template>
<script>
export default {
    props: {
        categoryData:{
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
         

   },
   created(){
         

   },
   methods:{
         

   }


}
</script>
<style>
.categoryUp{
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.category-item{
   width: 81px;
   text-align: center;
   margin: 5px;
}
.category-item img{
    width:80px;
    height: 80px;
    margin-bottom: 5px;
}
.category-item div{
    text-align: center;
}
</style>
