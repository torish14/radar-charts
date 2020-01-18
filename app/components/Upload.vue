<template>
  <div class="resize-img">
    <!-- 画像選択 -->
    <div v-show="!resizedImg" class="resize-img__post">
      <!-- 要素の繰り返し -->
      <label for="file" class="resize-img__post__label">
        <input
          id="file"
          ref="fileInput"
          type="file"
          @change="uploadImg"
        >
      </label>
    </div>
    <!-- プレビュー （画像を選択する画面） -->
    <div v-show="resizedImg" class="resize-img__preview">
      <canvas ref="canvas" class="resize-img__preview__canvas" />
      <!-- 画像の削除 -->
      <div class="resize-img__preview__circle" @click="clearUploadImg">
        <span class="resize-img__preview__circle__close-icon">×</span>
      </div>
    </div>
  </div>
  <!-- <div class="contents">
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
  </div> -->
</template>

<script>
export default {
  data () {
    return {
      resizedImg: null
    }
  },
  destroyed () {
    this.clearUploadImg()
  },
  methods: {
    // e は event の e
    uploadImg (e) {
      // e.target はイベントデリゲーションの実装
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onload = (e) => {
        this.generateImgUrl(e.target.result)
      }
      reader.readAsDataURL(file)
    },
    generateImgUrl (file) {
      const image = new Image()
      image.crossOrigin = 'Anonymous'

      image.onload = (e) => {
        const resizedBase64 = this.makeResizeImg(image)
        // リサイズ済みのBase64をblobに変換
        const resizedBlob = this.base64ToBlob(resizedBase64)
        // urlを生成してプレビュー表示できるようにする
        const resizedImg = window.URL.createObjectURL(resizedBlob)
        this.resizedImg = resizedImg
      }
      image.src = file
    },
    makeResizeImg (image) {
      const canvas = this.$refs.canvas
      const ctx = canvas.getContext('2d') // 2Dコンテキスト
      // 縦横で長い方の最大値を 130とする
      const MAX_SIZE = 130

      // MAX_SIZEよりも小さい場合、MAX_SIZE = 180 に固定
      if (image.width < MAX_SIZE || image.height < MAX_SIZE) {
        image.width = MAX_SIZE
        image.height = MAX_SIZE
        canvas.width = image.width
        canvas.height = image.height
        ctx.drawImage(image, 0, 0)
        return canvas.toDataURL('image/jpeg')
      }

      let dstWidth
      let dstHeight
      // 縦横比の計算
      if (image.width > image.height) {
        dstWidth = dstHeight = MAX_SIZE
        // dstHeight = (image.height * MAX_SIZE) / image.width
      } else {
        dstWidth = dstHeight = MAX_SIZE
        // dstWidth = (image.width * MAX_SIZE) / image.height
      }
      canvas.width = dstWidth
      canvas.height = dstHeight
      // リサイズ
      ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, dstWidth, dstHeight)

      // data_url形式に変換したものを返す
      return canvas.toDataURL('image/jpeg')
    },
    clearUploadImg () {
      this.resizedImg = null
      if (this.$refs.fileInput && this.$refs.fileInput.value !== undefined) {
        this.$refs.fileInput.value = ''
      }
    },
    base64ToBlob (base64) {
      const bin = atob(base64.replace(/^.*,/, ''))
      const buffer = new Uint8Array(bin.length)
      for (let i = 0; i < bin.length; i++) {
        buffer[i] = bin.charCodeAt(i)
      }
      return new Blob([buffer.buffer], {
        type: 'image/png'
      })
    }
  }
}
// export default {
//   data () {
//     return {
//       uploadedImage: ''
//     }
//   },
//   methods: {
//     onFileChange (e) {
//       const files = e.target.files || e.dataTransfer.files
//       this.createImage(files[0])
//     },
//     // アップロードした画像を表示
//     createImage (file) {
//       const reader = new FileReader()
//       reader.onload = (e) => {
//         this.uploadedImage = e.target.result
//       }
//       reader.readAsDataURL(file)
//     },
//     remove () {
//       this.uploadedImage = false
//     }
//   }
// }
</script>

<style>
.resize-img {
  margin-left: 80px;
}

label input #file {
  height: 20;
  width: 40;
}

.resize-img__preview__circle__close-icon {
  padding-left: 180px;
  cursor: pointer;
}
/*.resize-img {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  margin-top: 20px;

  &__post {
    border: 1px solid rgba(#000, 0.16);
    line-height: 30rem;

    &__label {
      display: inline-block;
      width: 100%;
      color: rgba(0, 0, 0, 0.4);
      text-align: center;

      & > input {
        display: none;
      }
    }
  }

  &__preview {
    width: 100px;
    height: 100px;

    &__circle {
      position: absolute;
      right: 37px;
      width: 27px;
      height: 27px;
      margin: 5px;
      padding: 2px 9px;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.3);

      &__close-icon {
        color: #fff;
      }
    }

    &__canvas {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}*/
</style>
