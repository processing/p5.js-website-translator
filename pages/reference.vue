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
import flatten from 'flat'
import textCard from '../components/textCard.vue'
export default {
  components: {
    textCard,
  },
  async fetch() {
    const jsonURL =
      'https://raw.githubusercontent.com/processing/p5.js-website/main/src/data/en.yml'
    const enJSON = await this.$http.$get(jsonURL)
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
