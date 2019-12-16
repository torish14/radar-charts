<template>
  <v-app id="app">
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark v-on="on">
            科目を入力してください。
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">科目</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="8">
                  <v-select :items="[ '国語', '数学', '英語', '社会', '理科' ]" label="1番目に得点の高い科目を選択してね。" multiple />
                </v-col>
                <v-col cols="12" sm="8">
                  <v-select :items="[ '国語', '数学', '英語', '社会', '理科' ]" label="2番目に得点の高い科目を選択してね。" multiple />
                </v-col>
                <v-col cols="12" sm="8">
                  <v-select :items="[ '国語', '数学', '英語', '社会', '理科' ]" label="3番目に得点の高い科目を選択してね。" multiple />
                </v-col>
                <v-col cols="12" sm="8">
                  <v-select :items="[ '国語', '数学', '英語', '社会', '理科' ]" label="4番目に得点の高い科目を選択してね。" multiple />
                </v-col>
                <v-col cols="12" sm="8">
                  <v-select :items="[ '国語', '数学', '英語', '社会', '理科' ]" label="5番目に得点の高い科目を選択してね。" multiple />
                </v-col>
              </v-row>
            </v-container>
            <small>*入力必須項目です。</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="blue darken-1" text @click="dialog = false">
              Close
            </v-btn>
            <v-btn color="blue darken-1" text @click="dialog = false">
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    dialog: false
  })
}
</script>
