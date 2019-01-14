<template>
  <div class="fancybox" :class="{active: isActive}" @click="handleBoxClick">
    <global-events
      v-if="isActive"
      @keyup.esc="handleBoxClick"
    />
    <div class="box" :class="{'d-flex align-items-center justify-content-center': isActive}">
      <div class="image-box">
        <img class="rounded border-secondary box-image" :src="src"/>
      </div>
    </div>
  </div>
</template>

<script>
import GlobalEvents from 'vue-global-events'

export default {
  components: {
    GlobalEvents
  },
  props: {
    src: String
  },
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    handleBoxClick: function () {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style lang="scss" scoped>
.fancybox {
  .box {
    height: 100%;
  }

  .box-image {
    max-width: 100%;
  }

  &:not(.active) {
    .box-image {
      cursor: zoom-in;
      transition: opacity .4s;
      -webkit-backface-visibility: hidden;

      &:hover {
        &:not(.active) {
          opacity: .8;
        }
      }
    }
  }

  &.active {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,0.7);
    z-index: 1000;
    cursor: zoom-out;

    .image-box {
      will-change: width, height;
      max-width: 90vh;
      max-height: 90vh;
      z-index: 1001;
      padding: 2em;
      background: rgba(0,0,0,0.7);
    }

    .box-image {
      max-height: 80vh;
      cursor: zoom-out;
    }
  }
}
</style>
