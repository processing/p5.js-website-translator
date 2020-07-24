<template>
  <div class="flex">
    <v-card class="ma-2">
      <v-container>
        <v-row>
          <v-col cols="4" class="pa-0">
            <v-card-title>{{ strKey }}</v-card-title>
          </v-col>
          <v-col class="col-2 pa-0">
            <v-card-actions class="justify-end">
              <v-btn icon>
                <v-icon>mdi-github</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-google-translate</v-icon>
              </v-btn>
            </v-card-actions>
          </v-col>
          <v-col class="col-6 pa-0">
            <v-card-actions class="justify-end">
              <v-btn icon>
                <v-icon>mdi-compare</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-restore</v-icon>
              </v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-card-text class="pa-0">{{ originalStr }}</v-card-text>
          </v-col>
          <v-col cols="6">
            <v-textarea
              auto-grow
              outlined
              rows="1"
              value="Translation."
            ></v-textarea>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    strKey: {
      type: String,
      default: '',
    },
    originalStr: {
      type: String,
      default: '',
    },
  },
}
</script>
