<template>
    <div class="shopBottom">
        <div class="check-all">
            <check class="checkedImg" :ischeck='issellectAll' @click.native="AllCheckClick"></check>
            <span>全选</span>
        </div>
        <div class="total-price">
            总计 {{totalPrice}}
        </div>
        <div class="go-acount" @click="Total">
            结算({{totalcount}})
        </div>
    </div>
</template>
<script>
import check from 'components/content/check/check.vue'
import { mapGetters } from 'vuex'
export default {
  components: { 
      check 
  },
  computed: {
      ...mapGetters(['totalShop','shoplist']),
      totalPrice(){
         return '￥'+ this.shoplist.filter(item => {
             return item.ischeck
        }).reduce((preValue,item) =>{
             return preValue + item.price * item.count;
          },0)
      },
      totalcount(){
          return this.shoplist.filter(item => {
              return item.ischeck
          }).length;
      },
      issellectAll(){
          //购物车没有数据是为false，表示不选中
        //   if(this.shoplist.length === 0) return false
          //判断shoplist中是否有 没有选中的，如果有就返回false
        //   return !this.shoplist.find(item => !item.ischeck);

          return this.shoplist.length === 0 ? false :  !this.shoplist.find(item => !item.ischeck)
      },
    

  },
  methods: {
    AllCheckClick(){
          if(this.issellectAll){
              this.shoplist.forEach(element => {
                  element.ischeck =false;
              });
          }else{
              this.shoplist.forEach(element => {
                  element.ischeck =true;
              });
          }
      },
      Total(){
          this.$emit('totalClick');
      }
  }
  

 


}
</script>
<style>
.shopBottom{
    height: 40px;
    position: relative;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.check-all{
   display: flex;
    align-items: center;
    margin-left: 5%;
}
.checkedImg{
    display: inline-block;
    width: 26px;
    height: 26px;
    border: 3px solid #e0e0e0;
    border-radius: 50%;
    margin-right: 5px;
}
.go-acount{
    width: 80px;
    height: 35px;
    background: var( --color-tint);
    border-radius: 15px;
    text-align: center;
    line-height: 35px;
}


</style>
