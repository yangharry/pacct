<template>
  <div class="marketlist">
    <table class="marketlist-talbe">
      <tr v-for="(coin,i) in coins2" :key="i" >
        <td class="marketlist-candle">
          <span>막대</span>
        </td>
        <td class="marketlist-cpytoname">
          <strong class="marketlist-maintext" @click="price24()">{{ coins1[i].korean_name }}</strong><br />
          <span class="marketlist-subtext"> {{ coin.code }}</span>
        </td>
        <td class="marketlist-cpytoprice">
          <strong class="marketlist-maintext" :style="GetColor(coin.change)">{{ Getcurrency(coin.trade_price) }}</strong><br />
          <span class="marketlist-subtext">{{getVolume(coin.acc_trade_price_24h)}} 원</span>
        </td>
        <td class="marketlist-cpytoror" :style="GetColor(coin.change)">
          <span class="marketlist-maintext custom1">{{ GetRatePrefix(coin) }}{{Getcurrency(coin.change_price)}}</span><br />
          <span class="marketlist-maintext custom1">{{ GetRatePrefix(coin) }}{{GetChangeRate(coin.change_rate*100)}}%</span>
        </td>
      </tr>
    </table>
  </div>
</template>
<script setup>
import { handleError, onMounted, ref } from 'vue'
import axios from 'axios'
import {numToKorean} from 'num-to-korean'
import { v4 as uuidv4 } from 'uuid'



function GetColor(change) {
  if (change == 'RISE' ) {
    return {color : 'red'}
  }
  else if (change == 'FALL' ) {
    return { color : 'blue'}
  }
  else {
    return { color : 'black'}
  }
}

function Getcurrency(value){
    return Number(value).toLocaleString()
}

function GetChangeRate(value) {
  return Number(value).toFixed(2)
}

function getVolume(volume) {
  return numToKorean(Math.floor(volume / 10000) * 10000, 'mixed')
}
function GetRatePrefix(coin) {
  switch (coin.change) {
    case 'RISE':
      return '+'
    default:
      return ''
  }
}


const coins1 = ref({})
const markets = ref([])
const coins2 = ref({})

function GetSymbols() {
  return axios.get('https://api.upbit.com/v1/market/all')
}

// function GetTickers(markets = []) {
//   return axios.get('https://api.upbit.com/v1/ticker', {
//     params: { markets: markets.join(',') },
//   })
// }

// 페이지가 로드되면 자동으로 호출되는 Vue.js의 사전 정의 함수
onMounted(async () => {
  try {


    const { data: symbols } = await GetSymbols()

    symbols.forEach((symbol) => {
      /** `KRW-` 으로 시작하는 마켓만 핕터링 */
      if (symbol.market.indexOf('KRW-') === -1) {
        return
      }

      markets.value.push(symbol.market)
      coins1.value[symbol.market] = symbol
      coins2.value[symbol.market] = symbol
    })




    // const { data: tickers } = await GetTickers(markets)

    // tickers.forEach((ticker) => {

    //     if (ticker.change === 'FALL') {
    //     ticker.change_price = -ticker.change_price
    //     ticker.change_rate = -ticker.change_rate
    //   }

    //   ticker.change_rate = ticker.change_rate * 100



    //   coins.value[ticker.market] = Object.assign(
    //     coins.value[ticker.market],
    //     ticker
    //   )
    //   console.log(coins.value[ticker.market])
    // })

    const ws = new WebSocket('wss://api.upbit.com/websocket/v1')

    ws.onopen = (e) => {
        
        ws.send(
            `${JSON.stringify([
                {ticket:uuidv4()},
                {type:'ticker', codes:markets.value },
            ])}`
        )
    }

    ws.onmessage = async (payload) => {
        const ticker = await new Response(payload.data).json()
        // console.log(coins.value[ticker.code])
        // console.log(ticker)
        coins2.value[ticker.code] = ticker
 
    }


  } catch (err) {
    handleError(err)
  }
})

</script>



<script>
export default {
  name: "app-marketlist",


  data() {
    return {

    }
  },
};
</script>

<style>
td {
  border-bottom: 1px solid #eee;
  padding: 5px;
}

.marketlist {
  width: 100%;
  padding: 5px;
}

.marketlist-talbe {
  width: 100%;
}

.marketlist-cpytoname {
  width: 45%;
  text-align: left;
  overflow: hidden;
}

.marketlist-candle {
  width: 5%;
}

.marketlist-cpytoprice {
  width: 30%;
  text-align: right;
}

.marketlist-cpytoror {
  width: 20%;
  text-align: right;
}

.marketlist-subtext {
  font-size: 10px;
}

.marketlist-maintext{
    font-size: 12px;
}
</style>