<template>
  <div id="app" class="han-init">
    <h1 class="website-title">
      fntsr
    </h1>
    <div id="nav">
      <router-link to="/">關於</router-link> |
      <router-link to="/hunting">求職</router-link> |
      <router-link to="/cv">履歷</router-link> |
      <router-link to="/achievements">成就</router-link> |
      <router-link to="/skills">專業</router-link> |
      <router-link to="/portfolios">作品</router-link>
    </div>
    <div id="view">
      <router-view/>
    </div>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheFooter from '@/components/TheFooter.vue'

export default {
  components: {
    TheFooter
  }
}
</script>

<style lang="scss">
#app {
  max-width: 768px;
  margin: auto;
}

.website-title {
  text-align: center;
}
</style>
