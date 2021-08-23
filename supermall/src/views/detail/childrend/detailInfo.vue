<template>
<div>
    <div v-if="Object.keys(goods).length!==0" class="base-info">
        <div class="info-title">{{goods.title}}</div>
        <div class="info-price">
            <span class="n-price">{{goods.newPrice}}</span>
            <span class="o-price">{{goods.oldPrice}}</span>
            <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
        </div>
        <div class="info-other">
           <span>{{goods.columns[0]}}</span>
           <span>{{goods.columns[1]}}</span>
           <span>{{goods.services[goods.services.length-1].name}}</span>
        </div>
    </div>
    <div class="info-service">
            <span class="info-sItem" v-for="index in goods.services.length-1" :key="index">
                <img v-if="goods.services[index-1].icon" :src="goods.services[index-1].icon" alt="">
                <span>{{goods.services[index-1].name}}</span>
            </span>
    </div>
   </div>
</template>
<script>
export default {
  props: {
      goods:{
          type:Object,
          default(){
              return {}
          }
      }
  }


}
</script>
<style  scoped>
    .base-info{
        width: 98%;
        margin: 7px auto;
        font-size: 16px;
        border-radius: 10px;
        background: #fff;
    }
    .info-title{
        padding-top: 5px;
        line-height: 22px;
        font-weight: 600;
    }
    .info-price{
        margin-top: 5px;
    }
    .n-price{
        color: var(--color-high-text);
        font-size: 20px;
        margin: 0px 5px;
    }
    .o-price{
        text-decoration: line-through;
    }
    .discount{
        display: inline-block;
        margin: 0 8px;
        padding: 0px 5px;
        background: var(--color-tint);
        color: #fff;
        border-radius: 10px;
        vertical-align: top;
    }
    .info-other{
        display: flex;
        text-align: center;
        margin-top: 5px;
        padding-bottom: 5px;
    }
    .info-other span{
        flex: 1;
        line-height: 20px;
    }
    .info-other span:nth-child(1){
        text-align: left;
        margin-left: 3px;
    }
    .info-other span:nth-child(3){
        text-align: right;
        margin-right: 3px;
    }
    .info-service{
        background: #fff;
       font-size: 16px;
    }
    .info-sItem{
        line-height: 25px;
        display:inline-block;
        width: 50%;
        flex: 1;
    }
    .info-sItem:nth-child(2n-1){
        text-align: left;
        padding-left: 5px;
    }
    .info-sItem:nth-child(2n){
        text-align: right;
        padding-right: 5px;
    }
    .info-sItem img{
        width: 15px;
        height: 15px;
    }
</style>


