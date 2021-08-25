<template>
    <div ref="wrapper">
        <div>
            <slot></slot>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
import ObserveDOM from '@better-scroll/observe-dom'

BScroll.use(ObserveDOM);
export default {
  data() {
      return {
         scroll:null,
      };
  },
  props:{
      probeType:{
          type:Number,
          defualt:0
      }
  },
  mounted () {
      //创建BScroll
    this.scroll=new BScroll(this.$refs.wrapper,{
          ObserveDOM:true,
          click:true,
          probeType:this.probeType,
          pullUpLoad:true,
          observeImage:true
    })
      //监听事件
    this.scroll.on('scroll',(position)=>{
        this.$emit('homescroll', position);
    })
    this.scroll.on('pullingUp',()=>{
        this.$emit('upLoad');
    })
    console.log(this.scroll);
  },
  methods: {
      scrollTo(x,y,time){
          this.scroll.scrollTo(x,y);
      },
      finishPullUp(){
       this.scroll && this.scroll.finishPullUp();
      },
      refresh(){
         this.scroll && this.scroll.refresh();
      }
  }


}
</script>
<style>

</style>
