<template>
    <div>
        <nav-bar class="navbar">
            <template v-slot:left>
                <div @click="Back">
                    <img src="~assets/img/common/back.svg" alt="" class="back">
                </div>
            </template>
            <template v-slot:center >
                <div class="title">
                    <div v-for="(item ,index) in title" :key="index" class="title-item"
                    :class="{active:currentindex==index}"
                    @click="itemclick(index)">
                        {{item}}
                    </div>
                </div>
            </template>
        </nav-bar>
    </div>
</template>
<script>
import NavBar from 'components/common/NavBar/NavBar.vue'

export default {
    components: {
        NavBar
    },
   data() {
      return {
          title:['商品','评价','参数','推荐'],
          currentindex:0
      }
   },
   methods: {
    itemclick(index){
        this.currentindex=index;
        this.$emit('NavClick', index);
    },
    Back(){
        this.$router.go(-1);
    }
   }
}
</script>
<style scoped>
.title{
    display: flex;
    font-size: 14px;
}
.title-item{
    flex: 1;
}
.back {
    margin-top: 12px;
}
.active{
    color: var(--color-high-text);
}
.navbar{
    background: #fff;
    color: #a0a0a0;
}
</style>
