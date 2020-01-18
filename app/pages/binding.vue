<template>
  <div id="app">
    <div>
      カテゴリー：
      <select v-model="selectItem" name="item">
        <option value="">
          選択する
        </option>
        <option v-for="(item,index) in items" :key="index" :value="item.no">
          {{ item.label }}
        </option>
      </select>
    </div>
    <div>
      品物：
      <select v-model="selectSubItem[0]" name="item2">
        <option value="">
          選択する
        </option>
        <option v-for="(item, index) in getItems2" :key="index" :value="item.name">
          {{ item.name }}
        </option>
      </select>
    </div>
    <div>
      品物：
      <select v-model="selectSubItem[1]" name="item2">
        <option value="">
          選択する
        </option>
        <option v-for="(item, index) in getItems2" :key="index" :value="item.name">
          {{ item.name }}
        </option>
      </select>
    </div>
    <div>
      品物：
      <select v-model="selectSubItem[2]" name="item2">
        <option value="">
          選択する
        </option>
        <option v-for="(item, index) in getItems2" :key="index" :value="item.name">
          {{ item.name }}
        </option>
      </select>
    </div>
    <pre>{{ selectSubItem }}</pre>
  </div>
</template>

<script>
export default {

  el: '#app',
  data () {
    return {
      items: [
        { no: 1, label: '果物' },
        { no: 2, label: '野菜' },
        { no: 3, label: '肉' },
        { no: 4, label: 'ホームページ' }
      ],
      subItems: [
        { category: 1, name: 'バナナ' },
        { category: 1, name: 'りんご' },
        { category: 1, name: 'ぶどう' },
        { category: 2, name: 'きゃべつ' },
        { category: 2, name: 'トマト' },
        { category: 2, name: '玉ねぎ' },
        { category: 3, name: '豚肉' },
        { category: 3, name: '牛肉' },
        { category: 3, name: '鶏肉' },
        { category: 4, name: '名前' },
        { category: 4, name: '年齢' },
        { category: 4, name: '性別' }
      ],
      selectItem: '',
      selectSubItem: []
    }
  },
  computed: {
    getItems2 () {
      const self = this
      return this.subItems.filter(function (item) {
        console.log(self.selectItem, item.category.toString(), item.category.toString().includes(self.selectItem))
        return (item.category.toString().includes(self.selectItem))
      })
    }
  },
  watch: {
    selectItem () {
      this.selectSubItem = []
    }
  }
}
</script>
