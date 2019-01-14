<template>
  <article class="mt-1 mb-2" :class="isHeadlines ? 'text-body' : 'text-dark'" >
    <div class="row">
      <div class="col-12 col-md-1" :title="dateRangeText">
        <router-link class="text-decoration-none text-reset"
          :to="{name: 'portfolios', hash: `#${anchorId}`}"
          v-on:click.native="$emit('date-clicked', `#${anchorId}`)">
          <time :datetime="fromDate.format('YYYY-MM')" pubdate="pubdate">
            <p class="d-none d-md-block text-center">
              {{fromDate.format('YYYY')}}<br/>
              <small>{{fromDate.format('MMM')}}</small>
            </p>
            <span class="d-md-none text-black-50">
              {{dateRangeText}}
            </span>
          </time>
        </router-link>
      </div>
      <div class="col-12 col-md-11">
        <h4 class="pb-2">
          <div class="small float-right clickable text-muted" v-on:click="toggleDetails()">
            <font-awesome-icon :icon="['fas', 'plus']" v-if="isHidden"/>
            <font-awesome-icon :icon="['fas', 'minus']" v-if="!isHidden"/>
          </div>
          <span :class="{'headline-title': isHeadlines}" >
            {{title}}
          </span>
          <small class="pt-2 d-block " :class="isHeadlines ? 'headline-subtitle' : 'text-info'" v-if="subtitle != ''">
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
    anchorId: {
      type: String,
      default: ''
    },
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
    fromDateText: function () {
      return this.parseDateText(this.from)
    },
    toDateText: function () {
      return this.parseDateText(this.to)
    },
    dateRangeText: function () {
      if (!this.to) {
        return this.fromDateText
      }
      return `${this.fromDateText} ~ ${this.toDateText}`
    }
  },
  methods: {
    toggleDetails: function () {
      this.isHidden = !this.isHidden
    },
    parseDateText: function (dateText) {
      if (this.isDateValid(dateText)) {
        return moment(dateText, 'YYYY-MM').format('YYYY-MM')
      }
      return dateText
    },
    isDateValid: function (dateText) {
      return moment(dateText, 'YYYY-MM').isValid() ||
        moment(dateText, 'YYYY-MM-DD').isValid()
    }
  }
}
</script>

<style lang="scss" scoped>
.headline-title {
  color: #c21f30;
}

.headline-subtitle {
  color: #c04851;
}

</style>
