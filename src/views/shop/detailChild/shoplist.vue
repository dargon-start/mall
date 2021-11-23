<template>
    <div class="shoplist" >
        <better-scroll class="scroll-list">
         <shop-listitem v-for="item in shoplist" :key="item" :shopitem='item'></shop-listitem>
        </better-scroll>
       
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import BetterScroll from 'components/common/Scroll/BetterScroll.vue'
import ShopListitem from './shopListitem.vue'

export default {
  components: { 
      BetterScroll,
      ShopListitem 
  },
    computed: {
    ...mapGetters(['totalShop','shoplist'])
  }

}
</script>
<style>
.shoplist{
    height: calc(100% - 133px);
}
.scroll-list{
    height: 100%;
    overflow: hidden;
}
</style>
