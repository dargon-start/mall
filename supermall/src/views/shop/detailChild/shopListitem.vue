<template>
    <div class="ShopItem clear-fix" >
        <!-- 选项√ -->
        <div class="Scheck" @click.native="check" > 
            <check class="Cimg" :ischeck='shopitem.ischeck'></check>
        </div>
        <!-- 商品的数据 -->
        <div class="shopDetail clear-fix">
            <div class="Shopimg">
            <img :src="shopitem.img" alt="" class="Simg">
            </div>
            <div class="Sdetail">
                <div>{{shopitem.title}}</div>
               
                <div class="Sub">
                    <span class="Sprice">￥{{shopitem.price}}</span>
                    <span class="Scount">x{{shopitem.count}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Check from '../../../components/content/check/check.vue';
export default {
    components: {
      Check  
    },
   props: {
       shopitem:{
          type:Object,
           default(){
               return {}
           }
       }
   },
  methods: {
       check(){
          this.shopitem.ischeck=!this.shopitem.ischeck;
       }
   }

}
</script>
<style>
.ShopItem{
    width: 100%;
    height: 120px;
    background: #fff;
    border-radius: 15px;
    margin: 8px 0;
}
.Cimg{
    width: 26px;
    height: 26px;
    margin: 45px 30%;
    border: 3px solid #e0e0e0;
    border-radius: 50%;
}
.Scheck{
    width: 15%;
    float: left;
    height: 100%;
}
.shopDetail{
    float: left;
    width: 80%;
    overflow: hidden;
}
.Shopimg{
    float: left;
    width:24%;
    margin-top: 3%;
}
.Simg{
   width: 100%;
   height: auto;
   border-radius: 7%;
}
.Sdetail{
    float: left;
    width: 74%;
    height: 100%;
    margin-left: 2%;
}
  .Sdetail div{
    height: 30px;
    width: 98%;
    overflow: hidden;
    line-height: 30px;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 10px;
}
.Sdetail .Sub{
    margin-top: 40px;
}
.Sprice{
    font-size: 20px;
    color: var(--color-high-text);
}
.Scount{
    display: inline-block;
    width: 25px;
    height: 25px;
    text-align: center;
    line-height: 25px;
    border: 1px solid #e0e0e0;
    border-radius: 3px;
    margin-left: 50%;
}

</style>
