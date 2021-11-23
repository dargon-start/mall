<template>
    <div id="home">
        <nav-bar class="navbar">
          <template v-slot:center>
              <div>首页</div>
          </template>
        </nav-bar>
        <better-scroll class="scroll" ref="scroll" 
        @homescroll='Hscroll' 
        :probeType='3'
        @upLoad='upLoad'
        >
            <homeswiper :cbanners="banners" @simgload='swiperImgload'></homeswiper>
            <recommend-view :crecommend='recommend'></recommend-view>
            <feature-view></feature-view>
            <tab-control :titles="['流行','新款','精选']" @tabclick='tabCon' ref="tabcontrol"> </tab-control>
            <goods-list :Goods="goods[currentType].list"></goods-list>
        </better-scroll>
       <back-top @click.native="backTop" v-show="isShowTop"></back-top>
    </div>
</template>

<script>
import NavBar from 'components/common/NavBar/NavBar.vue'
import {getHomeMultiData,getGoodsData} from 'network/home.js'
import tabControl from 'components/content/TabControl/TabControl.vue'
import GoodsList from 'components/content/Goods/GoodsList.vue'
import BetterScroll from 'components/common/Scroll/BetterScroll.vue';


import homeswiper from './childComps/HomeSwiper.vue'
import RecommendView from './childComps/RecommnendView.vue'
import FeatureView from './childComps/FeatureView.vue'
import BackTop from '../../components/content/backTop/BackTop.vue'


export default {
  name:'home',
   components: {
     NavBar,
     homeswiper,
     RecommendView,
     FeatureView,
     tabControl,
     getGoodsData,
     GoodsList,
     BetterScroll,
     BackTop,
      
   },
   data() {
     return {
       banners: [],
       recommend:[],
       currentType:'pop',
       isShowTop:false,
       goods:{
         'pop':{page:0,list:[]},
         'new':{page:0,list:[]},
         'sell':{page:0,list:[]}
       },
       tabScroTop:0,
       scrollY:0,
       saveY:0
     };
   },

   
   created() {
     //上面数据
     this.getHomeMultiData();
     //商品数据
     this.getGoodsData('pop');
     this.getGoodsData('new');
     this.getGoodsData('sell');
   },
   mounted () {
    const refresh= this.debounce(this.$refs.scroll.refresh,100)
      this.$mybus.on('imgload',()=>{
          refresh();
     })
    // const tabcontrol= document.getElementsByClassName('tabcontrol')[0];
    //  console.log(tabcontrol.offsetTop);
   },
   
   methods: {
     //事件方法
     //防抖函数
     debounce(func,delay){
       let timer=null;
       return function(...args){
          if(timer) clearTimeout(timer);
          timer=setTimeout(() => {
            func.apply(this,args)
          }, delay);
       }
     },
    tabCon(index){
      switch(index){
        case 0:
          this.currentType='pop'
          break
        case 1:
          this.currentType='new'
          break
        case 2:
          this.currentType='sell'
          break
      }
    },
    backTop(){
      this.$refs.scroll.scrollTo(0,0,500);
    },
    Hscroll(position){
      // console.log(position);
      const Ht=document.documentElement.clientHeight*1.5;
      this.isShowTop=(-position.y) > Ht;

        let tabcontrol=document.getElementsByClassName('tabControl')[0];
        if((-position.y)>this.tabScroTop){
          tabcontrol.style.top=(-position.y)-this.tabScroTop+'px';
        }
        else{
          tabcontrol.style.top=0+'px';
        }
    },
    upLoad(){
      this.getGoodsData(this.currentType);
    },
    swiperImgload(){
      this.tabScroTop=this.$refs.tabcontrol.$el.offsetTop;
    },
    


     //网络请求方法
     getHomeMultiData(){
          getHomeMultiData().then(res => {
          //  console.log(res);
          this.banners=res.data.data.banner.list
          this.recommend=res.data.data.recommend.list
        })
     },
     getGoodsData(type){
          const page=this.goods[type].page + 1;
          getGoodsData(type,page).then(res => {
          //...res.data.list语法是对数组list进行解构
          this.goods[type].list.push(...res.data.data.list);
          this.goods[type].page += 1;
          this.$refs.scroll.finishPullUp();
        })
     }
   }
}

</script>
<style scoped>
#home{
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.navbar{
  color: var(--color-background);
  background-color: var(--color-tint);
}
.scroll{
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}



</style>
