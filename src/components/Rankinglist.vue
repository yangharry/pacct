<template>

    <div v-for="a in 10" :key="a" class="list">
        <div class="list-number"><span>1</span></div>
        <div class="list-profile"><img class="list-profile-img" src="../assets/16.jpg"></div>
        <div class="list-id">
            <strong>USERID</strong><br><span>포트폴리오 이름</span>
        </div>
        <div class="list-ror">
            <span>수익률</span>
        </div>
    </div>
</template>

<script>


export default {
    name:'app-rankiglist',
    data(){
        return{
        
        }
    },

}
</script>

<style>

.list {
    width: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    padding: 5px;
    cursor: pointer;
}

.list-profile {
    width: 20%;
}

.list-profile-img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}

.list-number {
    width: 10%;
    
}

.list-id {
    width: 50%;
    text-align: left
}

.list-ror {
    width: 25%;
}




</style>