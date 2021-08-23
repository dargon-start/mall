<template>
  <div>
        <router-view></router-view>
        <tab-bar></tab-bar>
        <icon></icon>
        <svg-icon></svg-icon>
  </div>

</template>
<script>
import tabBar from 'components/common/tabbar/tabBar.vue'
import Icon from 'components/content/Icon/Icon.vue'
import SvgIcon from 'components/content/Icon/svg.vue'
export default ({
  name:'app',
  components: {
    tabBar,
    Icon,
    SvgIcon
  }
})
</script>
    

<style>
@import url('assets/css/base.css');

</style>
