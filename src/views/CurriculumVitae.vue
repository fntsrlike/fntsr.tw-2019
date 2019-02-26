<template>
  <section>
    <h2 class="d-none d-print-block text-center">履歷</h2>
    <exp-item title="享萊股份有限公司" subtitle="Scrum Master" from="2017-12" to="2018-12"
      anchorPath="cv" anchor-id="cv-sharelike" :isHeadlines="true">
      <p>
        在職期間進行了約 10 次敏捷主題的內部分享，讓團隊能暸解敏捷精神，而不拘泥於形式。並主持過 13 次回顧、12 次檢視、11 次規劃會議，和團隊執行了約 16 次衝刺，並一起努力做出了以下改變：
      </p>
      <ol>
        <li>
          <h6 class="d-inline">凝聚團隊意識：</h6><br/>
          讓團隊習慣出錯時不再譴責個人，而是思考團隊如何避免這類事情再次發生。
        </li>
        <li class="mt-1">
          <h6 class="d-inline">引導團隊自主成長：</h6><br/>
          在回顧會議時探索遇到的障礙，討論出解決方案去排除，並持續改進。
        </li>
        <li class="mt-1">
          <h6 class="d-inline">協助 PM 轉型 PO：</h6><br/>
          專注在研究產品價值與方向，使得團隊的開發方向得以穩定與明確。
        </li>
        <li class="mt-3">
          <h6 class="d-inline">降低開發干擾：</h6><br/>
          透過檢視會議集中回饋資訊、PO 統一排定待辦，讓團隊得以專注開發。
        </li>
        <li class="mt-1">
          <h6 class="d-inline">避免產能浪費：</h6><br/>
          透過開發成本、技術債主題分享，公司開始先驗證產品概念再正式開發。
        </li>
        <li class="mt-3">
          <h6 class="d-inline">改善估算準確度：</h6><br/>
          在規劃會議時使用規劃撲克去估算，並透過紀錄讓團隊暸解自己產能狀況。
        </li>
        <li class="mt-1">
          <h6 class="d-inline">提升部門間的信任：</h6><br/>
          協調團隊與 PO，訂出可以完成的衝刺待辦清單，讓承諾得以持續實現。
        </li>
        <li class="mt-3">
          <h6 class="d-inline">導入 Code Review：</h6><br/>
          透過自身經驗分享開啟討論，訂定出適合團隊的 Code Review 政策。
        </li>
        <li class="mt-1">
          <h6 class="d-inline">解決版本紊亂問題：<br/>
            </h6>主持團隊討論合適的 Git 協作流程並逐漸落實，讓分支簡化、明確。
        </li><li>
          <h6 class="d-inline">產線自動化：</h6><br/>
          引導團隊訂定政策，逐漸為專案建立 CI/CD 自動化，降低對人工的依賴。
        </li>
      </ol>
      <p>
        在 2019 iT 邦幫忙鐵人賽中，將與團隊共事所獲得的經驗與心得，寫成系列文《為團隊與組織導入敏捷的經驗分享》，受到評審團的肯定成為 Agile 主題的冠軍。這一年的經歷以及受到的肯定，也讓我對繼續擔任同性質職位感到自信，並期望在未來能繼續往這個方向前進。
      </p>
    </exp-item>
    <exp-item title="軟體工程碩士 @ 國立中央大學"  from="2014-09" to="2016-08"
      anchorPath="cv" anchor-id="cv-ncu">
      <p>
        在有了大學的實際開發經驗後，除了引起對軟體開發濃厚的興趣，也開始對許多軟體開發的議題有著種種困惑與撞牆，有感於於此，決定進修軟體開發相關的碩士學程，這時國立中央大學軟體工程碩士班以獨特的招生方式引起我的注意，並決定投身於此，最後成功取的入學資格，並開始學習軟體工程領域，期望能解決我經驗中所遇到的困境與疑惑。
      </p>
      <p>
        就學期間開始頻繁接觸軟體工程領域與相關主題，對協助工程師提高開發產能和品質的議題特別有興趣，因此開始尋找相關論文與書籍研讀，也是在這時後開始接觸敏捷文化的知識。在實驗室期間參與 KORAT（透過錄製/重播進行測試的工具）的開發時，也不斷推廣 Code Review 的文化並成功導入，也是實驗室到目前為止唯一仍有持續進行 Code Review 的專案。
      </p>
      <p>
        亦曾幫助指導教授推廣新式教育，協助將原本繁冗的紙本流程轉成基於 Ruby on Rails 的九宮格審題系統，讓選修課程的學生能在看完老師事先錄好的教學影片後，在電腦教室或是遠端進行答題，也讓助教可以遠端協助答題批改。並且不斷針對每一堂課收到的回饋進行改進，讓本套系統的操作流程更加順暢以及公平。本套系統仍有持續在該課程中使用。
      </p>
      <p>
        這時期參與的專案與相關作品：
      </p>
       <ul>
        <li v-for="portfolio in portfolios['ncu']" :key="portfolio.id">
          <router-link class="text-decoration-none" :to="{name: 'portfolios', hash: `#${portfolio.id}`}">
            {{portfolio.name}}
          </router-link>
        </li>
      </ul>
    </exp-item>
    <exp-item title="接案" from="2014-09" to="至今"
      anchorPath="cv" anchor-id="cv-cases">
      <p>
        經過大學時期的磨練、以及兩個月在職場上的實習，對程式開發與資訊技術有著一定的暸解，透過朋友的介紹以及前輩的推薦，也開始進行兼職，或是專案開發、或是書籍審閱，詳細可參見作品集中的介紹。
      </p>
      <p>
        在承接程式開發相關的案件時，也讓我得到與客戶直接、間接溝通的寶貴經驗，暸解客戶與工程師的溝通之間會出現哪些困境，並如何協助客戶歸納需求、問題，確保開發出來的產品是客戶需要的。
      </p>
      <p>
        這時期參與的專案與相關作品：
      </p>
      <ul>
        <li v-for="portfolio in portfolios['cases']" :key="portfolio.id">
          <router-link class="text-decoration-none" :to="{name: 'portfolios', hash: `#${portfolio.id}`}">
            {{portfolio.name}}
          </router-link>
        </li>
      </ul>
    </exp-item>
    <exp-item title="暑期實習 @ EZTABLE" from="2014-07" to="2014-08"
      anchorPath="cv" anchor-id="cv-eztable">
      <p>
        在實習期間直接參與 Core Team 的開發，並接觸了每日會議、完善的團隊協作流程，包括 Git Flow 、Code Review。也被鼓勵研究新技術，改善公司新人開發環境建置成本過高的問題，從那時開始研究 Docker，並在公司內部進行相關主題分享。
      </p>
    </exp-item>
    <exp-item title="歷史學學士 @ 國立中興大學 " from="2010-09" to="2014-06"
      anchorPath="cv" anchor-id="cv-nchu">
      <p>
        就讀歷史學這四年，經過必須研讀多份史料、撰寫報告、以及在考試進行申論，在資料處理、語文表達、邏輯思考上得到許多歷練，並習慣看待事情會去重視整個脈絡、全局觀。也由於歷史的多元性，讓我看待事情習慣會有不同視角，去尊重不同的聲音，並懂得質疑、批判既有的觀點，而不會單方面、不經思考的吸收有爭議的資訊。雖然外界常基於沒有生存技能去質疑本科系存在的必要性，但是事實上透過進修歷史學所獲得的成長是內化的、受用無窮的，我很高興自己投資人生的四年就讀，並以身為歷史系學生為傲。
      </p>
      <p>
        經過敝系開放、多元的課程選修方式，讓我得以除了本科系的進修外，亦有時間去資工系修課以及自習程式設計，讓我能能夠延伸中學時期就對資訊濃厚的興趣繼續發展。除了資訊相關課程的進修外，我也透過課外活動去提升我的程式實作能力。
      </p>
      <p>
        從大二起，開始在學校圖書館工讀，初期協助館內資訊設備的維修與管理，並在半年後開始協助維護網路應用程式。包括對「圖書館研究小間、讀者討論室借用系統」、「校外人士門禁系統」進行除錯、新增功能。後期也開始為館內既有的流程建立新的資訊系統，包括「圖書館業務統計系統」、「圖書館尋書系統」，改善原本整理不易、耗時耗人的問題。
      </p>
      <p>
        除了工讀，在就學期間也參與學生會，集結校內資訊同好組成小社群，一起開發網站，包括學生會官網、學權申訴系統、海報欄位管理系統、電競賽官方網站。並將資訊部門從單純秘書處下的一個職位，爭取成為一個正式部門，讓小社群的有志同好能夠一展長才，並且在編寫程式之餘，學習經營人際關係，熟悉行政流程、應對議會諮詢。之後也將這個小社群擴散出去，將資訊社復社，並舉辦多場資訊教育相關課程與講座，和這群同好為學校建立起一個資訊學習的綠洲。
      </p>
      <p>
        這時期參與的專案與相關作品：
      </p>
      <ul>
        <li v-for="portfolio in portfolios['nchu']" :key="portfolio.id">
          <router-link class="text-decoration-none" :to="{name: 'portfolios', hash: `#${portfolio.id}`}">
            {{portfolio.name}}
          </router-link>
        </li>
      </ul>
    </exp-item>
  </section>
</template>

<script>
import ScrollToMountedMixin from '@/mixins/scrollToMounted.js'
import ExpItem from '@/components/ExperienceItem.vue'

export default {
  name: 'cv',
  mixins: [
    ScrollToMountedMixin
  ],
  components: {
    ExpItem
  },
  data () {
    return {
      portfolios: {
        cases: [
          {
            id: 'publication-ISBN-9789864767946',
            name: '《白話深度學習與 TensorFlow》'
          },
          {
            id: 'publication-ISBN-9789864764877',
            name: '《第一次用Docker就上手》'
          },
          {
            id: 'web-project-808',
            name: '專案 808'
          },
          {
            id: 'web-meder-book',
            name: 'Facebook 塗鴉牆解析再製程式'
          },
          {
            id: 'web-ncyu-life',
            name: '嘉義大學自殺防治網站・安心在嘉'
          },
          {
            id: 'web-ics2015',
            name: '論文投稿與審核系統'
          },
          {
            id: 'utility-m2isocket',
            name: 'M2I Socket'
          }
        ],
        ncu: [
          {
            id: 'app-korat',
            name: '錄製重播測試工具：KORAT'
          },
          {
            id: 'web-nine-grids-judge',
            name: '九宮格審題系統'
          }
        ],
        nchu: [
          {
            id: 'web-business-statics-system',
            name: '興大圖書館・業務統計系統'
          },
          {
            id: 'web-book-search-system',
            name: '興大圖書館・尋書系統'
          },
          {
            id: 'web-outdoor-gate-system',
            name: '興大圖書館・校外人士門禁系統'
          },
          {
            id: 'web-room-borrow-system',
            name: '興大圖書館・研究小間、讀者討論室借用系統'
          },
          {
            id: 'web-board-manger-system',
            name: '興大學生會・海報張貼管理系統'
          },
          {
            id: 'web-appeal-management-system',
            name: '興大學生會・學權申訴系統'
          },
          {
            id: 'web-nchusg-official',
            name: '興大學生會・官方網站'
          }
        ]
      }
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      if (this.$route.hash !== '') {
        setTimeout(() => {
          this.$scrollTo(this.$route.hash)
        }, 500)
      }
    })
  }
}
</script>
