<template>
  <div class="row text-center" v-if="images.length != 0">
    <div class="col col-8 col-sm-6 col-md-4 col-lg-3 py-3" v-for="(imageName, index) in images" :key="index">
      <fancy-box :src="requireImage(imageName)"/>
    </div>
  </div>
</template>

<script>
import FancyBox from '@/components/FancyBox.vue'

export default {
  props: {
    images: {
      type: Array,
      default: () => []
    }
  },
  components: {
    FancyBox
  },
  methods: {
    requireImage: function (imageName) {
      return require(`@/assets/images/${imageName}`)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
