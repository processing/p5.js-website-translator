<template>
  <v-layout column justify-center align-center>
    <h1>{{ dataJSON }}</h1>
  </v-layout>
</template>

<script>
/* import textCard from '../components/textCard.vue' */
import YAML from 'yaml'
export default {
  async fetch() {
    const dataYAML = await this.$http.$get(
      `https://raw.githubusercontent.com/yukienomiya/p5.js-website/italian/src/data/it.yml`
    )
    this.dataJSON = YAML.parseDocument(dataYAML)
  },
  /* components: {
    textCard,
  }, */
  data() {
    return {
      dataJSON: {},
    }
  },
  fetchOnServer: false,
}
</script>
