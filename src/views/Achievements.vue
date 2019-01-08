<template>
  <section>
    <h2 class="d-none d-print-block text-center">成就</h2>
    <exp-item title="第十屆 iT 邦幫忙鐵人賽" subtitle="Agile 主題分組冠軍獎" from="2014-10">
      <p>
        iT 邦幫忙鐵人賽是一項必須挑戰在 iT 邦幫忙上連續 30 天發表技術文章不中斷的賽事。賽事會分為數個相關主題，並在每個主題中的眾多參賽者裡選出一個冠軍、不分組別選出數位優選、佳作，也給予成功挑戰 30 天比賽不中斷的參賽者「鐵人鍊成獎」。
      </p>
      <p>
        這屆賽事一共以下列題目報名三項主題組別，並且都成功挑戰成功並獲得「鐵人鍊成獎」，而其中 Agile 主題更獲得了主題分組冠軍。
      </p>
      <ul>
        <li>Agile：《為團隊與組織導入敏捷的經驗分享》系列</li>
        <li>Software Development 主題：《軟體開發隨筆談》系列</li>
        <li>Moden Web：《我或許沒那麼懂 Web》系列</li>
      </ul>
    </exp-item>
    <exp-item title="PHPConf 2015" subtitle="講師" from="2015-10">
      <p>
        距離去年講述「運用 Docker 部署 PHP 專案」已經過了一年，Docker 生態系逐漸成長，Machine、Compose、Swarm 皆趨於穩定、值得投入。本議程將承襲去年議程的概念，並講述如何透過這些工具利用 Docker 協助我們更方便的開發、測試、部署、遷移我們的 PHP 專案。
      </p>
      <p>
        <ul>
          <li>
            <a href="https://www.youtube.com/watch?v=B0Xw38EkFf8&feature=youtu.be">
              Youtube
            </a>
          </li>
          <li>
            <a href="https://www.slideshare.net/ruoshiling/ship-your-projects-with-docker-ecosystem">
              Slide
            </a>
          </li>
        </ul>
      </p>
    </exp-item>
    <exp-item title="第一屆芬安全資安競賽：獵駭行動" subtitle="第一名" from="2014-12">
      <p>
        F-Secure 舉辦的「資訊安全競賽：獵駭行動」是一個以程式遊戲及機智問答的方式進行的賽事。在就讀碩士期間，與友人楊安傑、蔡維泰組成「admin'--」隊伍參賽，獲得了該賽事的第一名。
      </p>
    </exp-item>
    <exp-item title="PHPConf 2014" subtitle="講師" from="2014-10">
      <p>
        <ul>
          <li>
            <a href="https://www.youtube.com/watch?v=Y5Gvk0mutZ4&index=13&list=PLI5n7xV4X5qUlAlVnu9aajJeoFDc3mYzv">
              Youtube
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/0B-59_4gDCY8XUElYbG9GTDBsTWc/view?usp=sharing">
              Slide
            </a>
          </li>
        </ul>
      </p>
      <p>
        Docker是這一年來虛擬化環境的新秀，以 LXC 技術展現輕量型虛擬化，並且擁有自動建構、版本控制的特性，配合Docker hub平台，讓我們能夠快速部署伺服器環境與專案。而這個連Google、Red Hat都很是重視的LXC管理工具，該如何運用在PHP的專案上呢？就讓我們一探究竟吧！
      </p>
    </exp-item>

    <exp-item title="第九屆創業週末・台中場" subtitle="第四名" from="2013-11">
      <p>
        創業週末是一個要在 54 小時內建立一家新創公司的競賽活動，要在這不到三天的時間內發表想法、組隊、討論、建立原型，最後呈現一個完整的創業計畫，最後由評審針對簡報與團隊進行評比。
      </p>
      <p>
        在本次活動賽事中，與另外三位夥伴組成團隊「水電哥哥」，以解決台灣二十年後沒有水電師傅的問題為使命，阻止水電技術斷層為目標作研究，並在最後獲得特設勇氣獎，列為第四名。
      </p>
    </exp-item>
  </section>
</template>

<script>
import ExpItem from '@/components/ExperienceItem.vue'

export default {
  name: 'archievement',
  components: {
    ExpItem
  }
}
</script>
