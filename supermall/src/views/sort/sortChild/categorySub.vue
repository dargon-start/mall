<template>
 <better-scroll class="Csub-scroll">
        <div v-for="(item,index) in title" :key="index" 
        class="Csub-item" 
        @click="itemclick(index)"
        :class="{itemActive:index==currentindex}">
            {{item.title}}
        </div>
</better-scroll>
</template>
<script>
import BetterScroll from 'components/common/Scroll/BetterScroll.vue';
export default {
    props: {
        title:{
            type:Array,
            default(){
                return []
            }
        }
    },
   data() {
      return {
          currentindex:0
      }
    },
   components:{
      BetterScroll
    },
  
   methods:{
        itemclick(index){
            this.$emit('tabclick',index);
            this.currentindex=index;
        } 

   }


}
</script>
<style scoped>
.Csub-scroll{
    width: 20%;
    height:   calc(100vh - 93px);
}
.Csub-item{
    width: 100%;
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    background: #fbf8f8;
}
.itemActive{
    color: var(--color-high-text);
    background: #fff;
}

</style>

