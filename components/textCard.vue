<template>
  <div class="flex">
    <v-card class="my-3" :elevation="1">
      <v-container>
        <div class="pl-2" :style="source.cardColor">
          <v-row>
            <v-col cols="4" class="pa-0">
              <v-card-title>{{ source.strKey }}</v-card-title>
            </v-col>
            <v-col class="col-8 pa-0">
              <v-card-actions class="justify-end">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      icon
                      :disabled="isLangChosen()"
                      v-bind="attrs"
                      @mousedown="originalVal()"
                      @mouseup="editedVal()"
                      v-on="on"
                    >
                      <v-icon>mdi-compare</v-icon>
                    </v-btn>
                  </template>
                  <span>Compare</span>
                </v-tooltip>

                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      icon
                      :disabled="isLangChosen()"
                      v-bind="attrs"
                      @click="restoreKey()"
                      v-on="on"
                    >
                      <v-icon>mdi-restore</v-icon>
                    </v-btn>
                  </template>
                  <span>Restore</span>
                </v-tooltip>
              </v-card-actions>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-card-text class="pa-0">{{ source.originalStr }}</v-card-text>
            </v-col>
            <v-col cols="6">
              <v-textarea
                v-model="source.translatedStr"
                auto-grow
                outlined
                rows="1"
                @change="saveChange"
              ></v-textarea>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    source: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  methods: {
    async saveChange() {
      const editedKey = this.source.strKey
      const editedVal = this.source.translatedStr

      const fileKey = `p5js-website-translator.files.${this.source.page}.${this.source.language}`
      const fileObj = await this.$localForage.getItem(fileKey)

      const changesKey = `p5js-website-translator.changes.${this.source.page}.${this.source.language}`
      let changesObj = await this.$localForage.getItem(changesKey)
      if (editedVal === fileObj.file[editedKey]) {
        if (changesObj[editedKey]) {
          delete changesObj[editedKey]
          await this.$localForage.setItem(changesKey, changesObj)
        }
      } else {
        if (!changesObj) {
          changesObj = {}
        }
        changesObj[editedKey] = editedVal
        await this.$localForage.setItem(changesKey, changesObj)
        this.$nuxt.refresh()
      }
    },
    async originalVal() {
      const editedKey = this.source.strKey
      const originalKey = `p5js-website-translator.files.${this.source.page}.${this.source.language}`
      const originalObj = await this.$localForage.getItem(originalKey)
      const originalValue = originalObj.file[editedKey]
      this.source.translatedStr = originalValue
    },
    editedVal() {
      this.$nuxt.refresh()
    },
    async restoreKey() {
      const editedKey = this.source.strKey
      const changesKey = `p5js-website-translator.changes.${this.source.page}.${this.source.language}`
      const changesObj = await this.$localForage.getItem(changesKey)
      delete changesObj[editedKey]
      await this.$localForage.setItem(changesKey, changesObj)
      this.$nuxt.refresh()
    },
    isLangChosen() {
      return this.source.language.length === 0
    },
  },
}
</script>
