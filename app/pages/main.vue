<template>
  <div class="contents">
    <label v-show="!uploadedImage" class="input-item__label">
      <input type="file" @change="onFileChange">
    </label>
    <div class="preview-item">
      <img v-show="uploadedImage" class="preview-item-file" :src="uploadedImage" alt="">
      <div v-show="uploadedImage" class="preview-item-btn" @click="remove">
        <e-icon class="preview-item-icon">
          close
        </e-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      uploadedImage: ''
    }
  },
  methods: {
    onFileChange (e) {
      const files = e.target.files || e.dataTransfer.files
      this.createImage(files[0])
    },
    // アップロードした画像を表示
    createImage (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        this.uploadedImage = e.target.result
      }
      reader.readAsDataURL(file)
    },
    remove () {
      this.uploadedImage = false
    }
  }
}
</script>

<style>
</style>
