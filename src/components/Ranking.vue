<template>
  <Market-header @search="search" />

  <div class="list-header">
    <button class="list-btn"><span>즐겨찾기</span></button>
    <button class="list-btn"><span>1일</span></button>
    <button class="list-btn"><span>1주일</span></button>
    <button class="list-btn"><span>전체</span></button>
  </div>

  <Rankinglist />
</template>

<script>
import Rankinglist from "./Rankinglist.vue";

export default {
  name: "app-market",
  data() {
    return {};
  },
  components: {
    Rankinglist,
  },
};
</script>

<style>
</style>