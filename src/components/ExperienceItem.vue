<template>
  <article class="mt-1 mb-2" :class="isHeadlines ? 'text-body' : 'text-dark'" >
    <div class="row" :title="`${from} ~ ${to}`">
      <div class="col-12 col-md-1">
        <time :datetime="fromDate.format('YYYY-MM')" pubdate="pubdate">
          <p class="d-none d-md-block text-center">
            {{fromDate.format('YYYY')}}<br/>
            <small>{{fromDate.format('MMM')}}</small>
          </p>
          <span class="d-md-none text-black-50">
            {{fromDate.format('YYYY/MM')}} ~ {{to ? toDate.format('YYYY/MM') : ''}}
          </span>
        </time>
      </div>
      <div class="col-12 col-md-11">
        <h4 class="pb-2" v-on:click="toggleDetails()">
          {{title}}
          <small class="pt-2 d-block text-info" v-if="subtitle != ''">
            {{subtitle}}
          </small>
        </h4>
        <div :class="[{ 'd-none': isHidden }]">
          <slot></slot>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import moment from 'moment'

moment.locale('zh-TW')

export default {
  name: 'JobExp',
  props: {
    title: String,
    subtitle: {
      type: String,
      default: ''
    },
    isHeadlines: {
      type: Boolean,
      default: false
    },
    from: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isHidden: false
    }
  },
  computed: {
    fromDate: function () {
      return moment(this.from, 'YYYY-MM')
    },
    toDate: function () {
      return moment(this.to, 'YYYY-MM')
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

</style>
