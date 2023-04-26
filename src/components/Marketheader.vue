<template>
  <div class="header">
    <div class="header-container">
      <div class="header-left">
        <transition name="title">
          <div v-if="title == true" class="header-left-1">
            <img class="header-logo" src="../assets/logo.png" />
            <span class="header-title">Prove Accout</span>
          </div>
        </transition>
        <transition name="searchscr">
          <div v-if="searchscr == false" class="header-left-2">
            <input class="header-input" type="text" v-model="text" @input="$emit('search', text , $event )" placeholder=" 코인명/심볼 검색"/>
          </div>
        </transition>
      </div>
      <div class="header-right">
        <i
          @click="(searchscr = !searchscr), (title = !title)"
          class="fa-solid fa-magnifying-glass custom-icon"
        ></i>
        <i class="fa-regular fa-bell custom-icon"></i>
        <i class="fa-solid fa-bars custom-icon"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-Marketheader",
  data() {
    return {
      searchscr: true,
      title: true,
    };
  },
  methods: {

  }
};
</script>

<style>
.header {
  width: 100%;
  height: 56px;
  background-color: #eee;
  padding: 16px;
  position: sticky;
  top: 0;
}

.haeader-tilte {
  font-size: 24px;
}

.haeader-logo {
  width: 24px;
  height: 24px;
}

.header-container {
  width: 100%;
  display: flex;
  transition: all 1s;
}

.header-left {
  width: 70%;
  display: flex;
  position: relative;
  overflow: hidden;
}

.header-logo {
  width: 25px;
  height: 25px;
  margin-right: 5px;
}

.header-title {
  font-weight: bolder;
  margin-right: 5px;
}

.header-right {
  width: 30%;
  display: flex;
  justify-content: flex-end;
}

.custom-icon {
  font-size: 25px;
  width: 33%;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
}

.header-input {
  width: 100%;
  height: 25px;
  border-radius: 10px;
}

.header-left-1 {
  width: 80%;
  position: absolute;
  left: 0px;
  text-align: left;
}

.header-left-2 {
  width: 80%;
  position: absolute;
  right: 0px;
}
.searchscr-enter-from,
.searchscr-leave-to {
  transform: translateX(100%);
}
.searchscr-enter-active,
.searchscr-leave-to {
  transition: all 0.5s;
}
.searchscr-enter-to,
.searchscr-leave-from {
  transform: translateX(0%);
}

.title-enter-from,
.title-leave-to {
  transform: translateX(-100%);
}
.title-enter-active,
.title-leave-to {
  transition: all 1s;
}
.title-enter-to,
.title-leave-from {
  transform: translateX(0%);
}
</style>