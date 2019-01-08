<template>
  <p>
    <span v-for="text in item.languages" class="badge badge-primary mr-1" :key="text">{{text}}</span>
    <span v-for="text in item.frameworks" class="badge badge-success mr-1" :key="text">{{text}}</span>
    <span v-for="text in item.libraries" class="badge badge-info mr-1" :key="text">{{text}}</span>
    <span v-for="text in item.others" class="badge badge-secondary mr-1" :key="text">{{text}}</span>
    <span v-for="text in item.tags" class="badge badge-secondary mr-1" :key="text">{{text}}</span>
  </p>
</template>

<script>
export default {
  props: {
    item: Object
  }
}
</script>
