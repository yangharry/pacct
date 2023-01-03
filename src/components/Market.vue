<template>

     <div class="list-header">
        <button class="list-btn"><span>즐겨찾기</span></button>
        <button class="list-btn"><span>KRW</span></button>
        <button class="list-btn"><span>BTC</span></button>
        <button class="list-btn"><span>USDT</span></button>
    </div>

    <Marketlist/>


</template>

<script>
import Marketlist from './Marketlist.vue'

export default {
    name: 'app-market',
    data(){
        return{


        }
    },
    components :{
        Marketlist,
    }

}
</script>

<style>



</style>