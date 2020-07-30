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
import yaml from 'js-yaml'
import flatten from 'flat'
import textCard from '../components/textCard.vue'
export default {
  components: {
    textCard,
  },
  async fetch() {
    const yamlURL =
      'https://raw.githubusercontent.com/processing/p5.js-website/main/src/data/en.yml'
    let dataYAML
    // eslint-disable-next-line no-useless-catch
    try {
      dataYAML = await this.$http.$get(yamlURL)
    } catch (error) {
      throw error
      // TODO add dialog with error msg and reload button
    }
    let data
    // eslint-disable-next-line no-useless-catch
    try {
      data = yaml.safeLoad(dataYAML)
    } catch (error) {
      throw error
    }
    this.data = flatten(data)
  },
  data() {
    return {
      data: {},
    }
  },
  fetchOnServer: false,
}
</script>
