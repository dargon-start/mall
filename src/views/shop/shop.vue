<template>
    <div id="shop">
       <nav-bar>
          <template v-slot:center class="navbar">
             <div>购物车({{$store.state.shoplist.length}})</div>
          </template>
       </nav-bar>

       <shoplist></shoplist>
      <shop-bottom-bar @totalClick='totalClick'></shop-bottom-bar>
      <toast ref="toast" ></toast>
    </div>
</template>
<script>
import NavBar from 'components/common/NavBar/NavBar.vue'
import Shoplist from './detailChild/shoplist.vue'
import ShopBottomBar from './detailChild/shopBottomBar.vue'
import Toast from '../../components/common/toast/Toast.vue'

export default {
   name:'shop',
  components: {
     NavBar,    
     Shoplist,
    ShopBottomBar,
    Toast
  },
   methods: {
      totalClick(){
         this.$refs.toast.show('结算');
      }
   }



}
</script>
<style>
#shop{
   height: 100vh;
   background: #f0f0f0;
}
.navbar{
   background: var(--color-tint);
   color: #fff;
   font-weight: 700;
}

</style>
