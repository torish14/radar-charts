<template>
  <div class="header">
    <Template />
    <div class="example-modal-window">
      <div class="radar1">
        <Upload />
        <button @click="openModal">
          <Radar1 style="width: 300px; height: 300px;" />
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
      <div class="radar2">
        <Upload />
        <button @click="openModal">
          <Radar2 style="width: 300px; height: 300px;" />
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
      <div class="radar3">
        <Upload />
        <button @click="openModal">
          <Radar3 style="width: 300px; height: 300px;" />
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
      <div class="radar4">
        <Upload />
        <button @click="openModal">
          <Radar4 style="width: 300px; height: 300px;" />
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
      <div class="radar5">
        <Upload />
        <button @click="openModal">
          <Radar5 style="width: 300px; height: 300px;" />
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
      <div class="radar6">
        <Upload />
        <button @click="openModal">
          <Radar6 style="width: 300px; height: 300px;" />
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
      <div class="radar7">
        <Upload />
        <button @click="openModal">
          <Radar7 style="width: 300px; height: 300px;" />
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
      <div class="radar8">
        <Upload />
        <button @click="openModal">
          <Radar8 style="width: 300px; height: 300px;" />
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
      <div class="radar9">
        <Upload />
        <button @click="openModal">
          <Radar9 style="width: 300px; height: 300px;" />
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
      <div class="radar10">
        <Upload />
        <button @click="openModal">
          <Radar10 style="width: 300px; height: 300px;" />
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
      <div class="radar11">
        <Upload />
        <button @click="openModal">
          <Radar11 style="width: 300px; height: 300px;" />
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
      <div class="radar12">
        <Upload />
        <button @click="openModal">
          <Radar12 style="width: 300px; height: 300px;" />
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
      <div class="radar13">
        <Upload />
        <button @click="openModal">
          <Radar13 style="width: 300px; height: 300px;" />
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
      <div class="radar14">
        <Upload />
        <button @click="openModal">
          <Radar14 style="width: 300px; height: 300px;" />
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
      <div class="radar15">
        <Upload />
        <button @click="openModal">
          <Radar15 style="width: 300px; height: 300px;" />
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
      <div class="radar16">
        <Upload />
        <button @click="openModal">
          <Radar16 style="width: 300px; height: 300px;" />
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
    </div>
  </div>
</template>

<script>
import Upload from '~/components/Upload.vue'
import ModalWindow from '~/components/ModalWindow.vue'
import Template from '~/components/Template.vue'
import Radar1 from '~/components/Radar1.vue'
import Radar2 from '~/components/Radar2.vue'
import Radar3 from '~/components/Radar3.vue'
import Radar4 from '~/components/Radar4.vue'
import Radar5 from '~/components/Radar5.vue'
import Radar6 from '~/components/Radar6.vue'
import Radar7 from '~/components/Radar7.vue'
import Radar8 from '~/components/Radar8.vue'
import Radar9 from '~/components/Radar9.vue'
import Radar10 from '~/components/Radar10.vue'
import Radar11 from '~/components/Radar11.vue'
import Radar12 from '~/components/Radar12.vue'
import Radar13 from '~/components/Radar13.vue'
import Radar14 from '~/components/Radar14.vue'
import Radar15 from '~/components/Radar15.vue'
import Radar16 from '~/components/Radar16.vue'

export default {
  components: {
    Upload,
    ModalWindow,
    Template,
    Radar1,
    Radar2,
    Radar3,
    Radar4,
    Radar5,
    Radar6,
    Radar7,
    Radar8,
    Radar9,
    Radar10,
    Radar11,
    Radar12,
    Radar13,
    Radar14,
    Radar15,
    Radar16
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
.example-modal-window {
  display: flex;
}

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

.radar1 {
  position: relative;
  height: 320px;
  width: 320px;
  top: -910px;
  right: -300px;
}

.radar2 {
  position: relative;
  height: 320px;
  width: 320px;
  top: -910px;
  right: -340px;
}

.radar3 {
  position: relative;
  height: 320px;
  width: 320px;
  top: -910px;
  right: -400px;
}

.radar4 {
  position: relative;
  height: 320px;
  width: 320px;
  top: -910px;
  right: -470px;
}

.radar5 {
  position: relative;
  height: 320px;
  width: 320px;
  top: -390px;
  right: 980px;
}

.radar6 {
  position: relative;
  height: 320px;
  width: 320px;
  top: -390px;
  right: 940px;
}

.radar7 {
  position: relative;
  height: 320px;
  width: 320px;
  top: -390px;
  right: 860px;
}

.radar8 {
  position: relative;
  height: 320px;
  width: 320px;
  top: -390px;
  right: 790px;
}

.radar9 {
  position: relative;
  height: 320px;
  width: 320px;
  top: 90px;
  right: 2260px;
}

.radar10 {
  position: relative;
  height: 320px;
  width: 320px;
  top: 90px;
  right: 2220px;
}

.radar11 {
  position: relative;
  height: 320px;
  width: 320px;
  top: 90px;
  right: 2140px;
}

.radar12 {
  position: relative;
  height: 320px;
  width: 320px;
  top: 90px;
  right: 2070px;
}

.radar13 {
  position: relative;
  height: 320px;
  width: 320px;
  top: 570px;
  right: 3550px;
}

.radar14 {
  position: relative;
  height: 320px;
  width: 320px;
  top: 570px;
  right: 3500px;
}

.radar15 {
  position: relative;
  height: 320px;
  width: 320px;
  top: 570px;
  right: 3410px;
}

.radar16 {
  position: relative;
  height: 320px;
  width: 320px;
  top: 570px;
  right: 3340px;
}
</style>
