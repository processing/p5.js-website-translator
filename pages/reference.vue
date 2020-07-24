<template>
  <v-layout column justify-center align-center>
    <v-flex>
      <textCard
        v-for="(item, key) in data"
        :key="key"
        :str-key="key"
        :original-str="item"
      />
    </v-flex>
  </v-layout>
</template>

<script>
import textCard from '../components/textCard.vue'
export default {
  components: {
    textCard,
  },
  async fetch() {
    const flatten = require('flat')
    const enJSON = await this.$http.$get(
      `https://raw.githubusercontent.com/processing/p5.js-website/d27452f34f5ed493b27c1b5fc37a65a655ae699d/src/data/reference/en.json`
    )
    const flattenedEnJSON = flatten(enJSON)
    this.data = flattenedEnJSON
  },
  data() {
    return {
      data: {},
    }
  },
  fetchOnServer: false,
}
</script>
