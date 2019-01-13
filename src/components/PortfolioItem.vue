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
    <div class="row text-center" v-if="item.screenshots.length != 0">
      <div class="col col-8 col-sm-6 col-md-4 col-lg-3 py-3" v-for="screenshot in item.screenshots" :key="screenshot">
        <a :href="requireImage(screenshot)">
          <img class="screenshot border rounded" :src="requireImage(screenshot)"/>
        </a>
      </div>
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
  max-width: 100%;
}
</style>
