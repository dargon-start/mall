<template>
    <div id="GoodsParms">
        <table v-for="table in goodsParms.sizes" :key="table" class="sizes">
            <tr v-for="tr in table" :key="tr">
                <td v-for="td in tr" :key="td">{{td}}</td>
            </tr>
        </table>
        <table class="info">
            <tr v-for="info in goodsParms.infos" :key="info">
                <td>{{info.key}}</td>
                <td>{{info.value}}</td>

            </tr>
        </table>
        <div v-if="goodsParms.image.length !== 0"  class="parms-imgs">
            <img :src="goodsParms.image" alt="">
        </div>
    </div>
</template>
<script>
export default {
  props: {
      goodsParms:{
          type:Object,
          default(){
              return {}
          }
      }
}

}
</script>
<style  scoped>
    #GoodsParms{
      background: #fff;
    }
    .sizes{
       
        width: 100%;
        text-align: center;
    }
    .sizes tr{
        height: 20px;
        display: flex;
        border: 1px solid #e0e0e0;
    }
    .sizes td{
        flex: 1;
    }
    .sizes td:nth-child(1){
        background: #e0e0e0;
    }
    .info{
        margin-top: 20px;
    }
    .info tr{
        display: flex;
        height: auto;
        margin: 10px 0;
    }
    .info td{
        flex: 1;
    }
    .info td:nth-child(1){
        padding-left: 5%;
    }
    .info td:nth-child(2){
        padding-right: 5%;
    }
    .parms-imgs{
        width: 100%;
    }
    .parms-imgs img{
        width: 100%;
        height: auto;
    }
</style>

