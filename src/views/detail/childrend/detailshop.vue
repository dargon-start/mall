<template>
    <div class="shop">
       <div class="shop-top">
           <img :src="shop.logo" alt="">
           <span>{{shop.name}}</span>
       </div>
       <div class="shop-bottom">
            <div class="shop-Bleft">
                <div class="shop-count">
                    <div class="Snumber">{{shop.sells}}</div>
                    <div>总销量</div>
                </div>
                <div class="shop-fans">
                    <div class="Snumber">{{shop.goodsCount}}</div>
                    <div>全部宝贝</div>
                </div>
            </div>
            <div class="shop-Bright">
                <div v-for="item in shop.score" :key="item">
                    <span class="item-name">{{item.name}}</span>
                    <span :class="{better:item.isBetter}" class="Score">{{item.score}}</span>
                    <span v-if="item.isBetter" class="better">高</span>
                    <span v-else class="Nbetter">低</span>
                </div>
            </div>
       </div>

       
    </div>
</template>
<script>

export default {
    props: {
        shop:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    computed: {
        
    },
   data() {
      return {
          isbetter:this.shop.score
      }
   },
   


}
</script>
<style>
.shop{
    background: #fff;
    margin-top: 5px;
    border-radius: 15px 15px 0 0;
    overflow: hidden;
}
.shop-top{
    height: 60px;
    box-sizing: border-box;
    overflow: hidden;
    padding: 10px 10px;
}
.shop-top img{
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
}
.shop-top span{
    display: inline-block;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    vertical-align: top;
}
.shop-bottom{
    display: flex;
    overflow: hidden;
    box-sizing: border-box;
    padding: 10px 10px;
}
.shop-Bleft{
    flex:1;
    display: flex;
    font-size: 14px;
}
.shop-count,.shop-fans{
    flex:1;
    text-align: center;
    padding: 10px;
}

.shop-fans{
    flex: 1;
     border-right: 2px solid #e0e0e0;
}
.shop-Bright{
    flex: 1;
    display: flex;
    flex-direction: column;
}
.shop-Bright div{
    flex:1;
    display: flex;
}
.shop-Bright div span{
   flex: 1;
   text-align: center;
}
.shop-Bright div .item-name{
    flex: 2;
}
.Snumber{
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
}
.Score{
    display: inline-block;
    width: 32px;
    color: green;
}
.better{
    color: red;
}
.Nbetter{
    color: green;
}
</style>
