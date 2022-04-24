<template>
  <div class="home">
    <ul v-if="hasMemos">
      <li v-for="memo in memos" :key="memo.id">
        <router-link :to="{ name: 'edit', params: {id: memo.id }}">
          {{ memo.title }}
        </router-link>
        <button @click="deleteMemo">削除</button>
      </li>
    </ul>
    <p v-else>メモは有りません</p>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  computed: {
    hasMemos() {
      return this.$store.getters.getCount
    },
    memos() {
      return this.$store.getters.getAll
    }
  },
  methods: {
    deleteMemo() {
      const id = this.$store.memo.getters.getMemoById
      this.$store.commit('delete', id)
    }
  }
}
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 10px;
}

li a {
  color: #999;
  text-decoration: none;
  width: 100%;
  display: block;
}
</style>