<template>
  <div>
    <development-badges :item="item"></development-badges>
    <ul v-if="type === 'publication'" class="list-unstyled">
      <li v-if="item.publisher">
        出版： {{item.publisher}}
      </li><li v-if="item.url">
        網站： <a target="_blank" :href="item.url">{{item.url}}</a>
      </li><li v-if="item.original">
        原著： {{item.original}}
      </li>
    </ul>
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
    <image-gallery :images="item.screenshots"></image-gallery>
  </div>
</template>

<script>
import DevelopmentBadges from '@/components/DevelopmentBadges.vue'
import ImageGallery from '@/components/ImageGallery.vue'

export default {
  props: {
    item: Object,
    type: {
      type: String,
      default: ''
    }
  },
  components: {
    DevelopmentBadges,
    ImageGallery
  }
}
</script>

<style lang="scss" scoped>
</style>
