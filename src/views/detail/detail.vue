<template>
    <div id="detail">
        <detail-navbar class="navar" @NavClick='NavClick' ref="nav"></detail-navbar>
        <detail-swiper :topImgs="topImgs"></detail-swiper>
        <detail-info :goods='goods'></detail-info>
        <commentinfo ref="comment" :commentData='commentData'></commentinfo>
        <detailshop :shop='shop'></detailshop>
        <detail-parms ref="parms" :goodsParms="goodsParms"></detail-parms>
        <detail-goods :Goodsdetail='Goodsdetail'></detail-goods>
        <goods-list ref="goodslist" :Goods='goodsitem' class="goodlist"></goods-list>
        <detail-bottom-bar @addToCart='addCart'></detail-bottom-bar>
        <back-top @click.native="backTop" v-show="isShowTop"></back-top>
        <toast ref="toast"></toast>
    </div>
</template>
<script>
import detailNavbar from './childrend/detailNavbar.vue'
import {getdetail,getrecommnend,Goods,Shop ,GoodsParms} from '../../network/detail'
import DetailSwiper from './childrend/detailSwiper.vue'
import DetailInfo from './childrend/detailInfo.vue'
import Detailshop from './childrend/detailshop.vue'
import BetterScroll from '../../components/common/Scroll/BetterScroll.vue'
import DetailGoods from './childrend/detailGoods.vue'
import DetailParms from './childrend/detailParms.vue'
import Commentinfo from './childrend/commentinfo.vue'
import GoodsList from '../../components/content/Goods/GoodsList.vue'
import DetailBottomBar from './childrend/detailBottomBar.vue'
import {backTop} from '../../common/mixin'
import Toast from '../../components/common/toast/Toast.vue'


export default {
    name:'detail',
    components: {
     detailNavbar,
     DetailSwiper,
     Detailshop,
     DetailInfo,
     BetterScroll,
     DetailGoods,
     DetailParms,
     Commentinfo,
     GoodsList ,
     DetailBottomBar,
        Toast,
    },
   data(){
          return {
          iid:null,
          topImgs:[],
          goods:{},
          shop:{},
          Goodsdetail:[],
          goodsParms:{},
          commentData:{},
          goodsitem:[],
          detailTop:[],
          currentindex:0,
          isshow:true      
      }
   },
    mixins: [backTop],
   created(){
      
      //1、保存iid
       this.iid=this.$route.params.iid;
      //2、获取数据
        getdetail(this.iid).then((res)=>{
            const date=res.data.result;
            this.topImgs=res.data.result.itemInfo.topImages;
            this.goods=new Goods(date.itemInfo,date.columns,date.shopInfo.services)
            this.shop=new Shop(date.shopInfo);
            this.Goodsdetail=date.detailInfo;
            this.goodsParms=new GoodsParms(date.itemParams.info,date.itemParams.rule);
            if(date.rate.cRate !==0){
                this.commentData=date.rate.list[0];
            }
       });

       getrecommnend().then((res)=>{
          this.goodsitem=res.data.data.list;
       })
   },
   mounted () {
     this.$mybus.on('imgload',()=>{
          //获取到顶部的高度
            this.detailTop=[];
            this.detailTop.push(0);
            this.detailTop.push(this.$refs.comment.$el.offsetTop);
            this.detailTop.push(this.$refs.parms.$el.offsetTop);
            this.detailTop.push(this.$refs.goodslist.$el.offsetTop); 
     })
    window.addEventListener('scroll',this.windowScroll);

   },
   methods: {
       NavClick(index){
           window.scrollTo(0,this.detailTop[index]-44);
       },
       //监听整个窗口的滚动条
         windowScroll() {
             
            // 滚动条距离页面顶部的距离
            // 以下写法原生兼容
            
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            for(let i=0;i<this.detailTop.length;i++){
                if(this.currentindex !==i &&((i<this.detailTop.length-1 && scrollTop>this.detailTop[i]-44 && scrollTop<this.detailTop[i+1]-44) ||( i===this.detailTop.length-1 && scrollTop >this.detailTop[i]-44 ) )){
                    this.currentindex=i;
                    this.$refs.nav.currentindex=this.currentindex;
            }
            }
            //是否显示回到顶部按钮
            const Ht=document.documentElement.clientHeight*1.5;

            this.isShowTop=(scrollTop) > Ht;
        },
        backTop(){
           document.documentElement.scrollTop=document.body.scrollTop=0;
        },
        addCart(){
            const product={};
            product.img=this.topImgs[0];
            product.title=this.goods.title;
            product.desc=this.goods.desc;
            product.price=this.goods.lowNowPrice;
            product.iid=this.iid;

            this.$store.dispatch('addShop', product).then(res => {
                 this.$refs.toast.show(res,2000);
            });

           
        }   

   }
  
}
</script>
<style scoped>
#detail{
    width: 100%;
    position: relative;
    z-index: 12;
    background: #f0f0f0;
}
.navar{
    position: fixed;
    z-index: 13;
    top: 0;
    left: 0;
    right:0;
}
.goodlist{
    padding-bottom: 58px;
}
</style>
