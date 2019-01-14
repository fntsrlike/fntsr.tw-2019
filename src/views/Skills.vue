<template>
  <section>
    <h2 class="d-none d-print-block text-center">專業</h2>
    <article class="mb-5">
      <h3>軟體工程</h3>
      <p>
        軟體工程是為了解決軟體危機而提出的概念，並主要分為兩個層面，分別是軟體開發技術以及軟體專案管理。這兩個層面都是我所熱衷的，但其中近年又以軟體專案管理層面為主要研究方向，並積極研究敏捷文化與方法。
      </p>
      <article>
        <h5>敏捷方法</h5>
        <p>
          熟悉 Scrum 與 KanBan，並能夠分享相關主題以及帶領團隊執行。在 Sharelike 工作期間，漸進的導入 Scrum，並總共執行 16 次以兩週為一迭代的衝刺，中間主持過 13 次回顧、12 次檢視、11 次規劃會議。
        </p>
        <p>
          能協助評估團隊當前狀態是否適合執行特定敏捷方法，並且漸進式的推廣敏捷文化到團隊中。不拘泥於既有的敏捷框架，而是專注在建立團隊文化以及專屬的敏捷流程。
        </p>
      </article>
      <article>
        <h5>軟體開發</h5>
        <p>
          從研讀碩士學程以來，就積極往降低程式設計師開發負擔的方向研究，這方向涉及的層面很廣，從善用設計模式（Design Pattern）、編寫測試（Testing）、需求規格實例化（Specification by Example）、持續整合（Continues Integration，簡稱 CI）、持續交付（Continuous Delivery）都是以來努力在涉獵的方向，並且希望能運用在未來的工作環境中。
        </p>
      </article>
    </article>
    <article class="my-5">
      <h3>程式設計</h3>
      <article v-for="(item, key) in developmentSkills" :key="key">
        <h5>
          {{item.name}}
        </h5>
        <development-badges :item="item"></development-badges>
        <p v-for="paragraph in item.description" :key="paragraph">
          {{paragraph}}
        </p>
      </article>
    </article>
  </section>
</template>

<script>
import ScrollToMountedMixin from '@/mixins/scrollToMounted.js'
import DevelopmentBadges from '@/components/DevelopmentBadges.vue'
import DevelopmentSkills from '@/assets/data/DevelopmentSkills.yaml'

export default {
  name: 'skill',
  mixins: [
    ScrollToMountedMixin
  ],
  components: {
    DevelopmentBadges
  },
  data () {
    return {
      developmentSkills: DevelopmentSkills
    }
  }
}
</script>
