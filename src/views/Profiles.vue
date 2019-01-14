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
    <article>
      <h3>現況</h3>
      <p>
        正在尋找下一份有挑戰性的職缺。<br/>
      </p>
      <p>
        在網頁程式開發領域約有七年資歷，<br/>
        也有導入敏捷開發相關經驗，<br/>
        目前對這兩方面的相關工作都有興趣。<br/>
      </p>
      <p>
        對於我過往的工作經歷，可以參見本站的<router-link to="/cv"><ruby>履歷<rt>CV</rt></ruby></router-link>頁面；<br/>
        或是來信 work@fntsr.tw 索取較為正式的<ruby>簡歷<rt>résumé</rt></ruby>檔案。<br/>
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
