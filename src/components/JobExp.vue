<template>
  <li>
    <article>
      <time :datetime="datetime"></time>
      <h3 v-on:click="toggleDetails()">
        {{title}}
        <small>{{subtitle}}</small>
      </h3>
      <div class="content" :class="{ hidden: isHidden }">
        <slot></slot>
      </div>
    </article>
  </li>
</template>

<script>
export default {
  name: 'JobExp',
  props: [
    'title',
    'subtitle',
    'datetime'
  ],
  data () {
    return {
      isHidden: false
    }
  },
  methods: {
    toggleDetails: function () {
      this.isHidden = !this.isHidden
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  &.hidden {
    display: none;
  }
}
</style>
