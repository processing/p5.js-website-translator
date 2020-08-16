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
import yaml from 'js-yaml'
import flatten from 'flat'
import VirtualList from 'vue-virtual-scroll-list'
import textCard from '../components/textCard.vue'
export default {
  components: { 'virtual-list': VirtualList },
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
    let dataObj
    // eslint-disable-next-line no-useless-catch
    try {
      dataObj = yaml.safeLoad(dataYAML)
    } catch (error) {
      throw error
    }
    const data = []
    const fObj = flatten(dataObj)
    for (const key in fObj) {
      const obj = { strKey: key, originalStr: fObj[key] }
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
