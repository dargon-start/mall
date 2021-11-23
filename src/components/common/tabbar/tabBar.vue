<template>
    <div id="tabbar">
            <tabbaritem path='/home' actcolor='#ff8197'>
                <template v-slot:tabimg>
                    <span  class="iconfont">&#xe611;</span>
                </template>
                <template v-slot:tabtext>
                    <div>首页</div>
                </template>
            </tabbaritem>
            <tabbaritem path='/sort' actcolor='#ff8197'>
                <template v-slot:tabimg>
                    <div class="iconfont">&#xe65e;</div>
                </template>
                <template v-slot:tabtext>
                    <div >分类</div>
                </template>
            </tabbaritem>
            <tabbaritem path='/shop' actcolor='#ff8197'>
                <template v-slot:tabimg>
                    <div  class="iconfont">&#xe600;</div>
                </template>
                <template v-slot:tabtext>
                    <div>购物车</div>
                </template>
            </tabbaritem>
            <tabbaritem path='/profile' actcolor='#ff8197'>
                <template v-slot:tabimg>
                    <div class="iconfont">&#xf018;</div>
                </template>
                <template v-slot:tabtext >
                     <div >我的</div>
                </template>
                               
            </tabbaritem>
    </div>
</template>
<script>
import tabbaritem from './tabBarItem.vue'

export default {
   components: {
       tabbaritem,
   },

}
</script>
<style>
@font-face {
  font-family: 'iconfont';
  src: url('../../../assets/icon/iconfont/iconfont.woff2?t=1624540911725') format('woff2'),
       url('../../../assets/icon/iconfont/iconfont.woff?t=1624540911725') format('woff'),
       url('../../../assets/icon/iconfont/iconfont.ttf?t=1624540911725') format('truetype');
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 23px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#tabbar{
    position: fixed;
    z-index: 10;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    height: 49px;
    background-color: #f6f6f6;
}

</style>
