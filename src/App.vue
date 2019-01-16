<template>
  <div id="app" class="container">
    <div id="display-area">
      <div class="row">
        <div class="col">
          <h1 class="text-center">
            fntsr
          </h1>
          <nav class="d-print-none">
            <ul class="nav justify-content-center">
              <li class="nav-item">
                <router-link class="nav-link px-2 px-sm-3" to="/">關於</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link px-2 px-sm-3" to="/skills">專業</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link px-2 px-sm-3" to="/cv">履歷</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link px-2 px-sm-3" to="/achievements">成就</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link px-2 px-sm-3" to="/portfolios">作品</router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="row content">
        <div class="col">
          <router-view class="mt-3"/>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <footer class="text-center text-muted py-5">
            <a class="text-reset text-decoration-none" href="https://github.com/fntsrlike/fntsr.tw-2019" target="_blank" title="Github Repositroy">
              <time datetime="2019-01-14">
                <small>最後更新：2019/01/15</small>
              </time>
            </a>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
#display-area {
  margin: auto;
  width: 100%;

  @each $breakpoint in map-keys($grid-breakpoints) {
    @include media-breakpoint-up($breakpoint) {
      max-width: content-max-widths($breakpoint)
    }
  }
}
</style>
