<template>
  <v-layout column justify-center align-center>
    <tool-bar
      page="reference"
      @setLang="setLanguage($event)"
      @setFilter="setFilter($event)"
    ></tool-bar>
    <virtual-list
      class="list"
      style="height: 100vh; overflow-y: auto; width: 100%"
      :data-key="'strKey'"
      :data-sources="data"
      :data-component="item"
      :estimate-size="50"
      :keeps="50"
    />
  </v-layout>
</template>

<script>
import flat from 'flat'
import VirtualList from 'vue-virtual-scroll-list'
import textCard from '../components/textCard.vue'
import toolBar from '../components/toolBar.vue'
import actions from '../plugins/actions.js'
export default {
  components: { 'virtual-list': VirtualList, 'tool-bar': toolBar },
  async fetch() {
    let flattenedOriginalFile = {}
    const originalFileLocalStorageKey =
      'p5js-website-translator.files.reference.en'
    const originalFileLocalStorage = await this.$localForage.getItem(
      originalFileLocalStorageKey
    )
    // if the English file is already saved in the local storage
    if (originalFileLocalStorage) {
      flattenedOriginalFile = originalFileLocalStorage.file
    } else {
      const originalFileURL =
        'https://raw.githubusercontent.com/processing/p5.js-website/main/src/data/reference/en.json'
      const originalFile = await this.$http.$get(originalFileURL)

      const originalFileCommitURL =
        'https://api.github.com/repos/processing/p5.js-website/commits?path=src/data/reference/en.json'
      const originalFileCommit = await this.$http.$get(originalFileCommitURL)
      const originalFileCommitSHA = originalFileCommit[0].sha
      flattenedOriginalFile = flat.flatten(originalFile, { delimiter: '/' })

      const originalFileValue = {
        commitSHA: originalFileCommitSHA,
        file: flattenedOriginalFile,
      }
      // save the English file in the local storage
      await this.$localForage.setItem(
        originalFileLocalStorageKey,
        originalFileValue
      )
    }

    let flattenedTranslatedFile = {}
    // if a language is selected
    if (this.language) {
      const translatedFileLocalStorageKey =
        'p5js-website-translator.files.reference.' + this.language
      const translatedFileLocalStorage = await this.$localForage.getItem(
        translatedFileLocalStorageKey
      )
      // if the translated file is already saved in the local storage
      if (translatedFileLocalStorage) {
        const changesLocalStorageKey =
          'p5js-website-translator.changes.reference.' + this.language
        const changesLocalStorage = await this.$localForage.getItem(
          changesLocalStorageKey
        )

        flattenedTranslatedFile = actions.buildEditedTranslatedFile(
          translatedFileLocalStorage.file,
          changesLocalStorage
        )
      } else {
        const translatedFileURL =
          'https://raw.githubusercontent.com/processing/p5.js-website/main/src/data/reference/' +
          this.language +
          '.json'
        const translatedFile = await this.$http.$get(translatedFileURL)

        const translatedFileCommitURL =
          'https://api.github.com/repos/processing/p5.js-website/commits?path=src/data/reference/' +
          this.language +
          '.json'
        const translatedFileCommit = await this.$http.$get(
          translatedFileCommitURL
        )
        const translatedFileCommitSHA = translatedFileCommit[0].sha
        flattenedTranslatedFile = flat.flatten(translatedFile, {
          delimiter: '/',
        })
        const translatedFileValue = {
          commitSHA: translatedFileCommitSHA,
          file: flattenedTranslatedFile,
        }
        // save the English file in the local storage
        await this.$localForage.setItem(
          translatedFileLocalStorageKey,
          translatedFileValue
        )
        // save the changes object in the local storage
        const translatedFileChangesLocalStorageKey =
          'p5js-website-translator.changes.reference.' + this.language
        await this.$localForage.setItem(
          translatedFileChangesLocalStorageKey,
          {}
        )
      }
    }
    this.data = actions.buildCardsData(
      this.language,
      this.filterOption,
      'reference',
      flattenedOriginalFile,
      flattenedTranslatedFile
    )
  },
  data() {
    return {
      item: textCard,
      data: [],
      strKey: '',
      language: '',
      filterOption: '',
    }
  },
  methods: {
    setLanguage(l) {
      this.language = l
      this.$nuxt.refresh()
    },
    setFilter(f) {
      this.filterOption = f
      this.$nuxt.refresh()
    },
  },
  fetchOnServer: false,
}
</script>
