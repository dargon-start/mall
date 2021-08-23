<template>
    <div id="detailGoods">
        <div class="Goods-title">
            {{Goodsdetail.desc}}
        </div>
        <div v-for="list in Goodsdetail.detailImage " :key="list" class="Goods-img">
            <div class="Good-key">{{list.key}}</div>
            <img v-for="item in list.list" :src="item" alt="" :key="item">
        </div>
    </div>
</template>
<script>
export default {
    props: {
        Goodsdetail:{
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
}
</script>
<style>
#detailGoods{
    padding-top: 10px;
    background: #fff;
    font-size: 16px;
    line-height: 20px;
}
.Goods-title{
    padding: 5px;
}
.Goods-img{
    width: 100%;
    overflow: hidden;
}
.Good-key{
    width: 100%;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    margin-top: 20px;
}
.Goods-img img{
    width: 100%;
    height: auto;
}

</style>
