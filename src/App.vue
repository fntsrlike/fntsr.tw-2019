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
                <router-link class="nav-link" to="/">關於</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/cv">履歷</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/achievements">成就</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/skills">專業</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/portfolios">作品</router-link>
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
            <time datetime="">
              <small>最後更新：2018/12/31</small>
            </time>
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
