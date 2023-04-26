<template>


  <router-view></router-view>

  <div class="footer">
    <router-link
      to="/pacct/Ranking"
      class="footer-btn"
      @click="footerNumber = 1"
      :style="footereffect(footerNumber, 1)" 
    >
      <i class="fa-solid fa-trophy"></i><br />
      <span>랭킹</span>
    </router-link>
    <router-link
      to="/pacct"
      class="footer-btn"
      @click="footerNumber = 2"
      :style="footereffect(footerNumber, 2)"
    >
      <i class="fa-solid fa-chart-simple"></i><br />
      <span>마켓</span>
    </router-link>
    <div class="footer-btn">
      <i class="fa-solid fa-user"></i><br />
      <span>내정보</span>
    </div>
  </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {

      footerNumber: 2,
    };
  },
  methods: {

    footereffect(a, b) {
      if (a == b) {
        return {
          color: "#41B883",
        };
      }
    },
  },
  components: {},
};
</script>

<style>
.list-header {
  width: 100%;
  padding: 5px;
  display: flex;
  z-index: 3;
}

.list-btn {
  width: 25%;
  border: 2px solid #eee;
  border-radius: 20px;
  background-color: white;
  font-size: 10px;
  margin: 1px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: grey;
}
.footer {
  width: 100%;
  background-color: #eee;
  position: sticky;
  bottom: 0px;
  padding: 4px;
  display: flex;
  text-align: center;
  color: black;
  /*    #41B883*/
}

.footer-btn {
  width: 50%;
  cursor: pointer;
  text-decoration: none;
  color: black;
}

body {
  margin: 0;
}

#app {
  box-sizing: border-box;
  max-width: 767px;
  font-family: "Spoqa Han Sans Neo", "Arial";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: auto;
  width: 100%;
}
</style>
