<template>
  <v-app>
    <Radar1 />
    <v-row justify="center">
      <v-btn
        color="primary"
        light
        @click.stop="dialog = true"
      >
        Open Dialog
      </v-btn>

      <v-dialog
        v-model="dialog"
        width="420px"
        height="420px"
      >
        <v-card>
          <v-card-title class="headline">
            レポートを読んだ時、どの語句、文言が印象に残ったか？
          </v-card-title>
          <v-card-text />
          <v-card-text>
            自己確信： 成功
          </v-card-text>
          <v-card-text>
            指令性： 自立心
          </v-card-text>
          <v-card-text>
            競争性： 権威主義的
          </v-card-text>
          <v-card-text>
            着想： 冒険心
          </v-card-text>
          <v-card-text>
            戦略性： 真に重要
          </v-card-text>

          <v-card-actions>
            <v-spacer />

            <v-btn
              color="green darken-1"
              text
              @click="dialog = false"
            >
              close
            </v-btn>

          <!-- <v-btn
              color="green darken-1"
              text
              @click="dialog = false"
            >
              Agree
            </v-btn> -->
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-app>
</template>

<script>
import Radar1 from '~/components/Radar1.vue'

export default {
  components: {
    Radar1
  },
  data () {
    return {
      dialog: false
    }
  }
}

</script>
