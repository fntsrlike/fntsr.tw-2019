<template>
  <article>
    <h2 class="d-none d-print-block text-center">作品</h2>
    <section>
      <h3>目錄</h3>
      <ul>
        <li>
          書籍審閱
          <ol>
            <li>《Tensorflow》</li>
            <li>《第一次用Docker就上手》</li>
          </ol>
        </li><li>
          網頁程式
          <ol>
            <li>Nine Grids Judge System (九宮格審題系統)</li>
            <li>論文投稿與審核系統</li>
            <li>安心在嘉</li>
            <li>圖書館業務統計系統</li>
            <li>圖書館尋書系統</li>
            <li>圖書館研究小間、讀者討論室借用系統</li>
            <li>學生會官方網站</li>
            <li>學生會公佈欄海報張貼管理系統</li>
            <li>學生會學權申訴案件管理系統</li>
            <li>摩斯電碼編解碼工具</li>
            <li>內埔國小五十九屆六年庚班班級網頁 復刻版</li>
          </ol>
        </li><li>
          軟體程式
          <ol>
            <li>KORAT（基於影像擷取卡的錄製/重播工具）</li>
            <li>國立文華高中 BBS 校站</li>
            <li>ISR 2013: Burning Civilization</li>
          </ol>
        </li><li>
          工具程式
          <ol>
            <li>教育替代役各梯開缺解析工具</li>
            <li>Slack IRC 訊息同步機器人</li>
          </ol>
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
import PortfolioPublicationData from '@/data/PortfolioPublication.yaml'
import PortfolioWebData from '@/data/PortfolioWeb.yaml'
import PortfolioAppData from '@/data/PortfolioApp.yaml'
import PortfolioUtilityData from '@/data/PortfolioUtility.yaml'

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
    name: '應用程式',
    type: 'software',
    data: PortfolioAppData
  },
  {
    name: '工具程式',
    type: 'software',
    data: PortfolioUtilityData
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
