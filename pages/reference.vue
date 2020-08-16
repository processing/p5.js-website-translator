<template>
  <v-layout column justify-center align-center>
    <virtual-list
      class="list"
      style="height: 100vh; overflow-y: auto; width: 100%;"
      :data-key="'strKey'"
      :data-sources="data"
      :data-component="item"
      :estimate-size="50"
      :keeps="50"
    />
  </v-layout>
</template>

<script>
import flatten from 'flat'
import VirtualList from 'vue-virtual-scroll-list'
import textCard from '../components/textCard.vue'
export default {
  components: { 'virtual-list': VirtualList },
  async fetch() {
    const jsonURL =
      'https://raw.githubusercontent.com/processing/p5.js-website/82b966d964d34db9d7a0d2bf436ff9a3754e08ca/src/data/reference/en.json'
    const enJSON = await this.$http.$get(jsonURL)
    const flattenedEnJSON = flatten(enJSON)
    const data = []
    for (const key in flattenedEnJSON) {
      const obj = { strKey: key, originalStr: flattenedEnJSON[key] }
      data.push(obj)
    }
    this.data = data
  },
  data() {
    return {
      item: textCard,
      data: [],
      strKey: '',
    }
  },
  fetchOnServer: false,
}
</script>
