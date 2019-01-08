<template>
  <div>
    <ul v-if="type === 'publication'" class="list-unstyled">
      <li v-if="item.publisher">
        出版： {{item.publisher}}
      </li><li v-if="item.url">
        網站： <a target="_blank" :href="item.url">{{item.url}}</a>
      </li><li v-if="item.original">
        原著： {{item.original}}
      </li>
    </ul>
    <development-badge :item="item" v-if="type === 'software'"></development-badge>
    <ul v-if="type === 'software'" class="list-unstyled">
      <li v-if="item.source">
        程式碼： <a target="_blank" :href="item.source">{{item.source}}</a>
      </li><li v-if="item.url">
        網站： <a target="_blank" :href="item.url">{{item.url}}</a>
      </li>
    </ul>
    <p v-for="paragraph in item.description" :key="paragraph">
      {{paragraph}}
    </p>
    <div class="pt-1 pb-4" v-if="item.screenshots.length != 0">
      <a :href="requireImage(screenshot)" v-for="screenshot in item.screenshots" :key="screenshot">
        <img class="screenshot border rounded" :src="requireImage(screenshot)"/>
      </a>
    </div>
  </div>
</template>

<script>
import DevelopmentBadges from '@/components/DevelopmentBadges.vue'

export default {
  props: {
    item: Object,
    type: {
      type: String,
      default: ''
    }
  },
  components: {
    DevelopmentBadges
  },
  methods: {
    requireImage: function (imageName) {
      return require(`@/assets/images/${imageName}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.screenshot {
  width: 150px;
  height: 112.5px;
  margin: 0 2px;
}
</style>
