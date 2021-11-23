<template>
   <div>
        <img src="~assets/img/cart/tick.svg" alt="" class="checkImg" v-show="ischeck">
   </div>
</template>
<script>
export default {

props: {
    ischeck:{
        type:Boolean,
        default(){
            return false
        }
    }
}
}
</script>
<style>
.checkImg{
    width: 20px;
    height: 20px;
    background: red;
    border-radius: 10px;
}
</style>
