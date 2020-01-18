<template>
  <div class="example-modal-window">
    <Upload />
    <button @click="openModal">
      <Radar1 style="width: 320px; height: 320px;" />
    </button>

    <!-- コンポーネント -->
    <ModalWindow v-if="modal" @close="closeModal">
      <!-- default スロットコンテンツ -->
      <div class="header">
        <p>レポートを読んだ時、どの語句、</p>
        <p>どの文言が印象に残ったか？</p>
      </div>
      <br>
      <div class="main">
        <p>自己確信: &nbsp;成功</p>
        <br>
        <p>指令性: &nbsp;自立心</p>
        <br>
        <p>競争性: &nbsp;権威主義的</p>
        <br>
        <p>着想: &nbsp;冒険心</p>
        <br>
        <p>戦略性: &nbsp;真に重要</p>
      </div>
      <!-- <div><input v-model="message"></div> -->
      <!-- /default -->
      <!-- footer スロットコンテンツ -->
      <div class="footer">
        <template slot="footer">
          CLOSE
        </template>
      </div>
      <!-- /footer -->
    </ModalWindow>
  </div>
</template>

<script>
import ModalWindow from '~/components/ModalWindow.vue'
import Upload from '~/components/Upload.vue'
import Radar1 from '~/components/Radar1.vue'
// import Radar2 from '~/components/Radar2.vue'

export default {
  components: {
    ModalWindow,
    Upload,
    Radar1
    // Radar2
  },
  data () {
    return {
      modal: false,
      message: ''
    }
  },
  methods: {
    openModal () {
      this.modal = true
    },
    closeModal () {
      this.modal = false
    }
  }
}
</script>

<style>
.header {
  color: rgba(0, 0, 0, 0.87);
  font-family: Roboto, sans-serif;
  font-size: 24px;
  padding: 5px 10px;
}

.main {
  color: rgba(0, 0, 0, 0.6);
  font-family: Roboto, sans-serif;
  font-size: 14px;
  padding: 5px 10px 10px;
}

.footer {
  font-family: Roboto, sans-serif;
  font-size: 14px;
}
</style>
