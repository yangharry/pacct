<template>
  <div class="marketlist">
    <table class="marketlist-talbe">
      <tr v-for="(coin, i) in coins" :key="i">
        <td class="marketlist-candle">
          <span>막대</span>
        </td>
        <td class="marketlist-cpytoname">
          <strong class="marketlist-maintext" @click="price24high()">{{ coin.korean_name }}</strong
          ><br />
          <span class="marketlist-subtext">{{ coin.market }} </span>
        </td>
        <td class="marketlist-cpytoprice" >
          <strong class="marketlist-maintext" :style="[GetColor(coin.change),Getborder(coin.ask_bid)]">{{ Getcurrency(coin.trade_price) }}</strong
          ><br />
          <span class="marketlist-subtext">{{
            getprice24(coin.acc_trade_price_24h)
          }}</span>
        </td>
        <td class="marketlist-cpytoror" :style="GetColor(coin.change)">
          <span class="marketlist-maintext custom1">{{
            Getcurrency(coin.signed_change_price)
          }}</span
          ><br />
          <span class="marketlist-maintext custom1">{{
            GetChangeRate(coin.signed_change_rate*100)
          }}%</span>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>

import { ref, onMounted } from "vue";
import axios from "axios";
import { numToKorean } from "num-to-korean";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "app-marketlist",
  methods:{

    price24high(){
      this.coins.sort((a,b)=>{
        return b.acc_trade_price_24h - a.acc_trade_price_24h;
      })
    }

  },
  setup() {
    function Getborder(change){
      if (change == "ASK"){
        return { 
          animation: "blink1 0.5s"
         }
      } else if (change == "BID"){
        return {animation: "blink2 0.5s"}
      }
    }

    function GetColor(change) {
      if (change == "RISE") {
        return { color: "red" };
      } else if (change == "FALL") {
        return { color: "blue" };
      } else {
        return { color: "black" };
      }
    }
    function Getcurrency(value) {
      return Number(value).toLocaleString();
    }
    function GetChangeRate(value) {
      return Number(value).toFixed(2);
    }

    function getprice24(value) {
      return numToKorean(Math.floor(value / 10000) * 10000, "mixed");
    }

    let coins = ref([]);
    let symbols = ref([]);

    onMounted(async () => {
      await axios.get("https://api.upbit.com/v1/market/all").then((result) => {
        coins.value = result.data.filter((result)=>{
          return result.market.indexOf('KRW-') != -1;
        })

        coins.value.forEach((result) => {
          symbols.value.push(result.market);
        });
      });

      const ws = new WebSocket("wss://api.upbit.com/websocket/v1");

      ws.onopen = () => {
        ws.send(
          `${JSON.stringify([
            { ticket: uuidv4() },
            { type: "ticker", codes: symbols.value },
          ])}`
        );
      };

      ws.onmessage = async (result) => {
        const ticker = await new Response(result.data).json();
         const key = Object.keys(coins.value).find(
          key => coins.value[key].market === ticker.code
        );

       
          coins.value[key] = Object.assign(coins.value[key], ticker);
    
      };
    });

    return { coins, getprice24, GetChangeRate,Getcurrency,GetColor,Getborder };
  },

  data() {
    return {};
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

.marketlist-maintext {
  font-size: 12px;
}


@keyframes blink1 {
  from { 
    border: 1px solid red;
  }
  to { 
    border: 1px solid white;
  }
}
@keyframes blink2 {
  from { 
    border: 1px solid blue;
  }

  to { 
    border: 1px solid white;
  }
}

</style>