<template>
  <v-row class="d-flex justify-space-between">
    <v-col cols="6" md="4">
      <v-select
        v-model="language"
        label="Language"
        outlined
        dense
        :items="languages"
        @change="emitLang"
      ></v-select>
    </v-col>
    <v-spacer></v-spacer>
    <v-col cols="6" md="4">
      <v-select
        v-model="filterOption"
        label="Filter"
        outlined
        dense
        :items="filterOptions"
        :disabled="isLanguageSet(language)"
        @change="emitFilter"
      ></v-select>
    </v-col>
    <v-col cols="6" md="2">
      <v-btn
        justified
        min-height="40"
        :disabled="isLanguageSet(language)"
        @click="restoreFile()"
      >
        RESTORE
      </v-btn>
    </v-col>
    <v-col cols="6" md="2">
      <v-btn
        class="white--text"
        color="green lighten-1"
        min-height="40"
        download
        :disabled="isLanguageSet(language)"
        @click="downloadFile()"
      >
        DOWNLOAD
        <v-icon right>mdi-download</v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import actions from '../plugins/actions.js'
export default {
  props: {
    page: {
      type: String,
      default() {
        return ''
      },
    },
  },
  async fetch() {
    const p5jswebsitePkgURL =
      'https://raw.githubusercontent.com/processing/p5.js-website/main/package.json'
    const pkgJSON = await this.$http.$get(p5jswebsitePkgURL)
    this.languages = actions.getLanguages(pkgJSON)
  },
  data() {
    return {
      languages: [],
      language: '',
      originalFileSHA: '',
      translatedFileSHA: '',
      filterOption: '',
      filterOptions: ['All', 'Translated', 'To be translated'],
    }
  },
  methods: {
    emitLang(event) {
      this.$emit('setLang', this.language)
    },
    emitFilter(event) {
      this.$emit('setFilter', this.filterOption)
    },
    async downloadFile() {
      const fileKey = `p5js-website-translator.files.${this.page}.${this.language}`
      const fileObj = await this.$localForage.getItem(fileKey)
      const changesKey = `p5js-website-translator.changes.${this.page}.${this.language}`
      const changesObj = await this.$localForage.getItem(changesKey)
      const obj = actions.buildEditedTranslatedFile(fileObj.file, changesObj)

      if (this.page === 'reference') {
        actions.downloadFileJSON(this.language, obj)
      } else {
        actions.downloadFileYAML(this.language, obj)
      }
    },
    async restoreFile() {
      const changesKey = `p5js-website-translator.changes.${this.page}.${this.language}`
      await this.$localForage.setItem(changesKey, {})
      this.$nuxt.refresh()
    },
    async getCommitSHAs() {
      const originalFileKey = `p5js-website-translator.files.${this.page}.${this.language}`
      const originalFileObj = await this.$localForage.getItem(originalFileKey)
      const translatedFileKey = `p5js-website-translator.files.${this.page}.${this.language}`
      const translatedFileObj = await this.$localForage.getItem(
        translatedFileKey
      )
      this.originalFileSHA = originalFileObj.commitSHA
      this.translatedFileSHA = translatedFileObj.commitSHA
    },
    isLanguageSet(language) {
      return language.length === 0
    },
  },
  fetchOnServer: false,
}
</script>
