<template>
  <section>
    <h3>{{item.name}}</h3>
    <ul v-if="category === 'publication'">
      <li v-if="item.responsibility">
        負責： {{item.responsibility}}
      </li><li v-if="item.date">
        日期： {{item.date}}
      </li><li v-if="item.publisher">
        出版： {{item.publisher}}
      </li><li v-if="item.url">
        網站： <a target="_blank" :href="item.url">{{item.url}}</a>
      </li><li v-if="item.original">
        原著： {{item.original}}
      </li>
    </ul>
    <ul v-if="category === 'software'">
      <li v-if="item.date">
        起始於： {{item.date}}
      </li><li v-if="item.source">
        程式碼： <a target="_blank" :href="item.source">{{item.source}}</a>
      </li><li v-if="item.languages">
        程式語言： {{item.languages.join(', ')}}
      </li><li v-if="item.frameworks">
        框架： {{item.frameworks.join(', ')}}
      </li><li v-if="item.libraries">
        函式庫： {{item.libraries.join(', ')}}
      </li><li v-if="item.url">
        網站： <a target="_blank" :href="item.url">{{item.url}}</a>
      </li>
    </ul>
    <p v-for="paragraph in item.description" :key="paragraph">
      {{paragraph}}
    </p>
    <div>
      <a :href="requireImage(screenshot)" v-for="screenshot in item.screenshots" :key="screenshot">
        <img class="screenshot" :src="requireImage(screenshot)"/>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    item: Object,
    category: {
      type: String,
      default: ''
    }
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
