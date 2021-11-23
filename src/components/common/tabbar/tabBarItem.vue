<template >
    <div class="tabitem" @click="itemclick" :style="activestyle">
        <slot name="tabimg"></slot>
        <slot name="tabtext"></slot>
    </div>
</template>
<script>
export default {
    props: {
       path:{
           type:String,
           required:true
       },

       actcolor:{
           type:String,
           default:'red'
       }
   },
  computed: {
      curpath(){
          return this.$route.path;
      },
      isactive(){
          //不等于-1，说明path中包含this.path
          return this.$route.path.indexOf(this.path)!==-1
          
      },
      activestyle(){
          return this.isactive ? {'color':this.actcolor} : {}
      }
  },
  methods: {
      itemclick(){
          if(this.$route.path.indexOf(this.path)==-1){
                this.$router.replace(this.path)
          }
        
      }
  }


}
</script>
<style>

.tabitem{
    flex: 1;
    text-align: center;
    margin-top: 3px;
}
/* .tabitem-act{
    color: red;
} */

</style>
