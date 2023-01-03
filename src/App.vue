<template>
 <div class="header">
        <div class="header-container">
         <div class="header-left">
            <transition name="title">
         <div v-if="search == true" class="header-left-1">
         <img class="header-logo" src="./assets/logo.png">
         <span class="header-title">Prove Accout</span>
         </div>
        </transition>
        <transition name="search">
         <div v-if="search == false" class="header-left-2">
         <input class="header-input">
         </div>
        </transition>

         </div>
         <div class="header-right">
            <i @click="search = ! search, title = ! title" class="fa-solid fa-magnifying-glass custom-icon"></i>
            <i class="fa-regular fa-bell custom-icon"></i>
            <i class="fa-solid fa-bars custom-icon"></i>
         </div>
         </div>
     </div>




      <router-view></router-view>




     <div class="footer">
        <router-link to="/pacct/Ranking"  class="footer-btn">
            <i  class="fa-solid fa-trophy"></i><br>
            <span>랭킹</span>
        </router-link>
        <router-link to="/pacct" class="footer-btn">
            <i class="fa-solid fa-chart-simple"></i><br>
            <span>마켓</span>
        </router-link>
        <div class="footer-btn">
            <i class="fa-solid fa-user"></i><br>
            <span>내정보</span>
        </div>

    </div>
  


</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      search : true,
      title : true,
      step : 0,
    }
  },
  components: {
  }
}
</script>

<style>
.list-header {
   width: 100%;
   padding: 5px;
   display: flex;
}

.list-btn {
   width: 25%;
   border: 2px solid black ;
   border-radius: 28px;
   background-color: white;
   font-size: 12px;
   margin: 5px;
   cursor: pointer;
   
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
.search-enter-from, .search-leave-to{
  transform: translateX(100%);

}
.search-enter-active, .search-leave-to{
  transition: all 0.5s;
}
.search-enter-to, .search-leave-from{
  transform: translateX(0%);
}

.title-enter-from, .title-leave-to{
  transform: translateX(-100%);

}
.title-enter-active, .title-leave-to{
  transition: all 1s;
}
.title-enter-to, .title-leave-from{
  transform: translateX(0%);
}
body {
    margin: 0;
}

#app {
  box-sizing: border-box;
  max-width: 767px;
  font-family:  'Spoqa Han Sans Neo', 'Arial';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: auto;
  width: 100%;
}
</style>
