<template>
    <div class="sort clear-fix">
        <nav-bar class="navbar" >
          <template v-slot:center>
            <div>分类</div>
          </template>
        </nav-bar>
        
        <category-sub :title="categories" @tabclick='subclick' class="sub"></category-sub>
        <better-scroll class="scroll">
          <categorycontent-up :categoryData='showSubcategory' ></categorycontent-up>
          <tab-control :titles="['流行','新款','精选']" @tabclick='tabCon' ></tab-control>
          <goods-list :Goods='showCategoryDetail'></goods-list>
        </better-scroll>
    </div>
    
</template>
<script>
import NavBar from '../../components/common/NavBar/NavBar.vue';
import {getCategory,getSubcategory,getCategoryDetail} from 'network/sort';
import CategorySub from './sortChild/categorySub.vue';
import CategorycontentUp from './sortChild/categorycontentUp.vue';
import Catecontentdetail from './sortChild/catecontentdetail.vue';
import GoodsList from '../../components/content/Goods/GoodsList.vue';
import TabControl from '../../components/content/TabControl/TabControl.vue';
import BetterScroll from '../../components/common/Scroll/BetterScroll.vue';
export default {
  name:'sort',
  components: {
     NavBar,
    CategorySub,
    CategorycontentUp,
    Catecontentdetail,
    GoodsList,
    TabControl,
    BetterScroll
  },
  data() {
      return {
        categories: [],
        categoryData: [],
        currentIndex: -1,
        currentType:'pop'
      }
   },
   created() {
		  // 1.请求分类数据
      this._getCategory()
    
    },
    computed: {
		  showSubcategory() {
		    if (this.currentIndex === -1) return {}
        return this.categoryData[this.currentIndex].subcategories
      },
      showCategoryDetail() {
		    if (this.currentIndex === -1) return []
		    return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
      }
    },
    methods: {
		  _getCategory() {
		    getCategory().then(res => {
		      // 1.获取分类数据
		      this.categories = res.data.data.category.list
          // 2.初始化每个类别的子数据
          for (let i = 0; i < this.categories.length; i++) {
            this.categoryData[i] = {
              subcategories: {},
              categoryDetail: {
                'pop': [],
                'new': [],
                'sell': []
              }
            }
          }
          // 3.请求第一个分类的数据
          this._getSubcategories(0)
        })
      },
      _getSubcategories(index) {
        this.currentIndex = index;
		    const mailKey = this.categories[index].maitKey;
        getSubcategory(mailKey).then(res => {
          this.categoryData[index].subcategories = res.data.data;
          this.categoryData = {...this.categoryData}
          this._getCategoryDetail('pop')
          this._getCategoryDetail('new')
          this._getCategoryDetail('sell')
        })
      },
      _getCategoryDetail(type) {
		    // 1.获取请求的miniWallkey
        const miniWallkey = this.categories[this.currentIndex].miniWallkey;
        // 2.发送请求,传入miniWallkey和type
		    getCategoryDetail(miniWallkey, type).then(res => {
		      // 3.将获取的数据保存下来
		      this.categoryData[this.currentIndex].categoryDetail[type] = res.data
          this.categoryData = {...this.categoryData}
        })
      },
      subclick(index){
          this._getSubcategories(index);
      },
      tabCon(index){
      switch(index){
        case 0:
          this.currentType='pop'
          break
        case 1:
          this.currentType='new'
          break
        case 2:
          this.currentType='sell'
          break
      }
    }


   }
   
   

}
</script>
<style scoped>
.sort{
  width: 100%;
  height: 100vh;
}
.navbar{
  width: 100%;
  position:relative;
  z-index: 3;
  background: var(--color-tint);
  color: #fff;
  font-size: 18px;
  font-weight: 700;

}
.sub{
  float: left;
  width:20%;
}
.scroll{
  float: left;
  width: 80%;
  height:  calc(100% - 93px);
}
</style>
