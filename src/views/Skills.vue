<template>
  <section>
    <h2 class="d-none d-print-block text-center">專業</h2>
    <article class="mb-5">
      <h3>軟體工程</h3>
      <p>軟體工程是為了解決軟體危機而提出的概念，並主要分為兩個層面，分別是軟體開發技術以及軟體專案管理。這兩個層面都是我所熱衷的，但其中近年又以軟體專案管理層面為主要研究方向，並積極研究敏捷文化與方法。</p>
      <article>
        <h5>敏捷方法</h5>
        <p>熟悉 Scrum 與 KanBan，並能夠分享相關主題以及帶領團隊執行。在 Sharelike 工作期間，漸進的導入 Scrum，並總共執行 16 次以兩週為一迭代的衝刺，中間主持過 13 次回顧、12 次檢視、11 次規劃會議。</p>
      </article>
      <article>
        <h5>軟體開發</h5>
        <p>測試、規格、CI、CD、設計模式</p>
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
import DevelopmentBadges from '@/components/DevelopmentBadges.vue'
import DevelopmentSkills from '@/data/DevelopmentSkills.yaml'

export default {
  name: 'skill',
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
