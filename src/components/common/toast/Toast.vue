<template>
    <div class="Toast" v-show="isShow">
        <div>{{message}}</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            message: '',
            isShow:false
        };
    },
   methods: {
       show(message,duration=1500){
           this.message=message
           this.isShow=true;

           setTimeout(() => {
               this.message='';
               this.isShow=false;
           }, duration);
       }
   }

}
</script>
<style scoped>
    .Toast{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        z-index: 99;
        padding: 5px 8px;
        border-radius: 3px;
        background: rgba(0, 0, 0,.75);
        color: #fff;
    }
</style>
