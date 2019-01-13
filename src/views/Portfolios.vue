<template>
  <article>
    <h2 class="d-none d-print-block text-center">作品</h2>
    <section>
      <h3>目錄</h3>
      <ul>
        <li v-for="category in categories" :key="category.name">
          {{category.name}}
          <ul>
            <li v-for="item in category.data" :key="item.id">{{item.name}}</li>
          </ul>
        </li>
      </ul>
    </section>
    <section class="mb-5" v-for="category in categories" :key="category.name">
      <h3 class="mb-3">{{category.name}}</h3>
      <exp-item
        v-for="item in category.data" :key="item.id"
        :title="item.name" :subtitle="item.responsibility" :from="item.date">
        <portfolio-item :type="category.type" :item="item">
        </portfolio-item>
      </exp-item>
    </section>
  </article>
</template>

<script>
import ExpItem from '@/components/ExperienceItem.vue'
import PortfolioItem from '@/components/PortfolioItem.vue'
import PortfolioPublicationData from '@/assets/data/PortfolioPublication.yaml'
import PortfolioWebData from '@/assets/data/PortfolioWeb.yaml'
import PortfolioAppData from '@/assets/data/PortfolioApp.yaml'
import PortfolioGameData from '@/assets/data/PortfolioGame.yaml'
import PortfolioUtilityData from '@/assets/data/PortfolioUtility.yaml'

const categories = [
  {
    name: '書籍',
    type: 'publication',
    data: PortfolioPublicationData
  },
  {
    name: '網路程式',
    type: 'software',
    data: PortfolioWebData
  },
  {
    name: '軟體程式',
    type: 'software',
    data: PortfolioAppData
  },
  {
    name: '工具程式',
    type: 'software',
    data: PortfolioUtilityData
  },
  {
    name: '遊戲相關',
    type: 'software',
    data: PortfolioGameData
  }
]

export default {
  name: 'collections',
  components: {
    ExpItem,
    PortfolioItem
  },
  data () {
    return {
      categories: categories
    }
  }
}
</script>

<style lang="scss" scoped>
.collections .collection-name:before {
  content: '#' counter(collection, decimal-leading-zero) '. ';
  counter-increment: collection;
}
</style>
