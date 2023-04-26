<template>
  <div class="list-header">
    <button class="list-btn"><span>즐겨찾기</span></button>
    <router-link
      to="/pacct"
      class="list-btn"
      :style="bordereffect(marketselect, 1)"
    >
      <span style="vertical-align: middle">KRW</span>
    </router-link>
    <router-link
      to="/pacct/BTCMarket"
      class="list-btn"
      :style="bordereffect(marketselect, 2)"
    >
      <span style="vertical-align: middle">BTC</span>
    </router-link>
    <router-link
      to="/pacct/USDTMarket"
      class="list-btn"
      :style="bordereffect(marketselect, 3)"
    >
      <span style="vertical-align: middle">USDT</span>
    </router-link>
    <select
      class="list-btn"
      v-model="selected"
      @change="$emit('alignbtn', selected)"
    >
      <option value="">정렬</option>
      <option value="2">상승률순</option>
      <option value="1">거래대금순</option>
      <option value="3">거래볼륨순</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "app-Marketlistbtn",
  data() {
    return {
      selected: "",
    };
  },
  methods: {
    bordereffect(a, b) {
      if (a == b) {
        return {
          border: "2px solid #41B883",
          color: "#41B883",
        };
      }
    },
  },
  props: {
    marketselect: Number,
  },
};
</script>

<style>
</style>