<template>
    <div class="goodsitem" @click="itemclick">
        <a>
            <img :src="showimg" alt="" class="goodsimg" @load="loadimg">
            <div class="regoods">
                <p>{{goodsitem.title}}</p>
                <span class="goodsprice">{{'￥'+goodsitem.price}}</span>
                <span class="cfav">{{goodsitem.cfav}}</span>
            </div>
        </a>
    </div>
</template>
<script>
export default {
   props: {
       goodsitem:{
           type:Object,
           default(){
               return {}
           }
       }
   },methods: {
       loadimg(){
          this.$mybus.emit('imgload');
       },
       itemclick(){
           this.$router.push('/detail/'+this.goodsitem.iid);
       }
   },
   computed: {
       showimg(){
           return this.goodsitem.img || (this.goodsitem.image || this.goodsitem.show.img);
       }
   }


}
</script>
<style>
.goodsitem{
    position: relative;
    width: 47%;
    border-radius: 4%;
    background-color: #fff;
    box-sizing: border-box;
    overflow: hidden;
    margin: 5px 0;
    padding-bottom: 50px;
}
.goodsitem a{
    display: block;
    width: 100%;
    height: 100%;
}
.goodsimg{
    width: 100%;
}
.regoods p{
    display: block;
    width: 100%;
    height: 20px;
    padding-left: 5px;
    line-height: 20px;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.regoods{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
    padding-left: 5px;
}
.regoods .goodsprice{
    color: var(--color-high-text);
    font-size: 16px;
    line-height: 30px;
}
.regoods .cfav{
    position: relative;
    margin-left: 37%;
}
.regoods .cfav::before{
    content: '';
    position: absolute;
    background: url('~assets/img/common/collect.svg') 0 0/14px 14px;
    width: 14px;
    height: 14px;
    left: -16px;
    top: 2px;
}
</style>
