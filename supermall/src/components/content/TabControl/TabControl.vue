<template>
    <div class="tabControl">
        <div class="tabcon-item" v-for="(item,index) in titles" :key="index"
        :class="{active:index==curindex}"
        @click="tabclick(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            curindex: 0,
        };
    },
  props: {
      titles:{
          type:Array,
          default(){
              return []
          }
      }
  },
  methods: {
      tabclick(index){
          this.curindex=index
          this.$emit('tabclick', index);
      }
  }

}
</script>
<style>
.tabControl{
    position: relative;
    top: 0;
    z-index: 2;
    display: flex;
    text-align: center;
    background-color: #fff;
    font-size: 15px;
}

.tabcon-item{
    flex: 1;
    height: 40px;
    line-height: 40px;
}
.tabcon-item span{
    padding: 3px;
}
.active{
    color: var(--color-tint);
}
.active span {
    border-bottom: 3px solid var(--color-tint);
}
</style>
