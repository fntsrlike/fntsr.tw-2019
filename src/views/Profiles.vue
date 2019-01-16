<template>
  <section>
    <h2 class="d-none d-print-block text-center">關於</h2>
    <div class="float-sm-right text-center">
      <div class="row">
        <div class="col">
          <img class="rounded-circle" src="../assets/images/avatar_100x100.jpg" />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <ul class="list-unstyled list-inline">
            <li class="list-inline-item">
              <a href="https://github.com/fntsrlike" target="_blank">
                <font-awesome-icon :icon="['fab', 'github']" />
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://blog.fntsr.tw" target="_blank">
                <font-awesome-icon :icon="['fab', 'wordpress']" />
              </a>
            </li>
            <li class="list-inline-item">
              <a href="mailto:work@fntsr.tw" target="_blank">
                <font-awesome-icon :icon="['fas', 'envelope']" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <article>
      <h3>關於</h3>
      <p>
        敝姓<u>林</u>，名<u>書緯</u>；<br/>
        表字<u><ruby>若虛<rt>Ruoshi</rt></ruby></u>，在網路上通常都以此自稱；<br/>
        現實中的朋友多暱稱我為<u><ruby>月湖<rt>Yuehu</rt></ruby></u>。<br/>
      </p>
      <p>
        目前以程式設計師為業，並聚焦在編寫網頁程式；<br/>
        亦曾擔任 ScrumMaster，逐步為團隊導入敏捷開發以及 Scrum 框架。<br/>
      </p>

    </article>
    <article class="mt-5">
      <h4 class="pb-2 headline-title">
        <span>
          求職
        </span>
        <small class="pt-2 d-block">
          ScrumMaster、程式設計師
        </small>
      </h4>
      <p>
        我是個有七年程式開發經驗的程式設計師，也是個有成功為團隊導入敏捷文化與 Scrum 經驗的 ScrumMaster，日前於 <router-link :to="{name: 'achievements', hash: '#it-iron-2019'}">2019 年 iT 邦幫忙鐵人賽的 Agile 主題中獲得冠軍</router-link>，現在正在尋找下一份職缺。
      </p>
      <p>
        下一份工作希望能延續 ScrumMaster 的經驗，繼續引導團隊，並和團隊一起成長。或是擔任 ScrumMaster，或是繼續擔任程式設計師，但是能有一群願意持續成長、進步的夥伴，和他們分享適合團隊當前文化的敏捷經驗與知識。也因為期望會和團隊夥伴有頻繁互動，希望面試的時候也能和團隊成員交流，暸解彼此的價值觀。
      </p>
      <p>
        在程式開發上，主要著重在網頁程式開發，並且以涉獵 PHP, Ruby, JavaScript (Node.js, Vue.js) 為主，在開發上傾向繼續深耕這些技術。另外，也有以 C# 進行視窗程式開發的經驗，並對於 C# 的相關專案或職缺也有興趣。
      </p>
      <p>
        若地點與工作模式若是需要緊密與團隊合作，會比較偏好在台中工作。若是比較偏向個人開發的職缺，會希望能以遠端工作為主，並能接受定期去公司開重要會議。
      </p>
      <p>
        對於我過往的工作經歷，可以參見本站的<router-link to="/cv"><ruby>履歷<rt>CV</rt></ruby></router-link>頁面；或是下載<a href="https://www.dropbox.com/s/fh5kn7quccbhm0d/Resume2019_ScrumMaster.pdf?dl=1"><ruby>簡歷<rt>résumé</rt></ruby>（ScrumMaster）</a>檔案。若有興趣認識、合作，可以來信 work@fntsr.tw 聯絡。
      </p>
    </article>
  </section>
</template>

<script>
export default {
  name: 'profiles',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.headline-title {
  color: #c21f30;

  small {
    color: #c04851;
  }
}

</style>
