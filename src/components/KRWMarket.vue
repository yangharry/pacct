<template>
  <Market-header @search="search" />
  <Market-listbtn @alignbtn="alignbtn($event)" :marketselect="1" />

  <div class="marketlist">
    <table class="marketlist-talbe">
      <tr v-for="(coin, i) in coins" :key="i">
        <td class="marketlist-candle">
          <div class="marketlist-candle-box">
            <div :style="candle(coin)"></div>
            <div :style="candlehighlow(coin)"></div>
          </div>
        </td>
        <td class="marketlist-cpytoname">
          <strong class="marketlist-maintext">{{ coin.korean_name }}</strong
          ><br />
          <span class="marketlist-subtext">{{ coin.market }} </span>
        </td>
        <td class="marketlist-cpytoprice">
          <strong
            class="marketlist-maintext"
            :style="[GetColor(coin.change), Getborder(coin.ask_bid)]"
            >{{ Getcurrency(coin.trade_price) }}</strong
          ><br />
          <span class="marketlist-subtext">{{
            getprice24(coin.acc_trade_price_24h)
          }}</span>
        </td>
        <td class="marketlist-cpytoror" :style="GetColor(coin.change)">
          <span class="marketlist-maintext custom1"
            >{{ Getpm(coin.change)
            }}{{ Getcurrency(coin.signed_change_price) }}</span
          ><br />
          <span class="marketlist-maintext custom1"
            >{{ Getpm(coin.change)
            }}{{ GetChangeRate(coin.signed_change_rate * 100) }}%</span
          >
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import { onBeforeMount, ref } from "vue";
import axios from "axios";
import { numToKorean } from "num-to-korean";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "app-krwmarket",
  data() {
    return {};
  },
  components: {
  },
  methods: {
    alignbtn(a) {
      if (a == 1) {
        this.coins.sort((a, b) => {
          return b.acc_trade_price_24h - a.acc_trade_price_24h;
        });
      } else if (a == 2) {
        this.coins.sort((a, b) => {
          return b.signed_change_rate - a.signed_change_rate;
        });
      } else if (a == 3) {
        this.coins.sort((a, b) => {
          return b.acc_trade_volume_24h - a.acc_trade_volume_24h;
        });
      }
    },
  },
  setup() {
    function candlehighlow(a) {
      if (a.trade_price > a.opening_price) {
        return {
          background: "red",
          width: "5%",
          height:
            ((a.high_price - a.low_price) / a.opening_price) * 200 + 1 + "%",
          position: "absolute",
          bottom: "17.5px",
          left: "4.75px",
        };
      } else if (a.trade_price < a.opening_price) {
        return {
          background: "blue",
          width: "5%",
          height:
            ((a.high_price - a.low_price) / a.opening_price) * 200 + 1 + "%",
          position: "absolute",
          top: "17.5px",
          left: "4.75px",
        };
      } else {
        return;
      }
    }
    function candle(a) {
      if (a.trade_price > a.opening_price) {
        return {
          background: "red",
          width: "100%",
          height:
            ((a.trade_price - a.opening_price) / a.opening_price) * 200 +
            1 +
            "%",
          position: "absolute",
          bottom: "17.5px",
        };
      } else if (a.trade_price < a.opening_price) {
        return {
          background: "blue",
          width: "100%",
          height:
            ((a.opening_price - a.trade_price) / a.opening_price) * 200 +
            1 +
            "%",
          position: "absolute",
          top: "17.5px",
        };
      } else {
        return;
      }
    }

    function Getpm(change) {
      switch (change) {
        case "RISE":
          return "+";
        default:
          return " ";
      }
    }

    function Getborder(change) {
      if (change == "ASK") {
        return {
          animation: "blink1 0.5s",
        };
      } else if (change == "BID") {
        return { animation: "blink2 0.5s" };
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

    function search(a,b) {
      if (a == "") {
        coins.value = coins2.value;
      } else if (b.data == null){
        coins.value = coins2.value;
        let re = coins.value.filter((result) => {
          let korean = [];
          const 초성 = [
        'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ',
        'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ',
        'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
              ];
              for(var i = 0; i < result.korean_name.length; i++){
                korean.push( 초성[parseInt(((result.korean_name.charCodeAt(i))-44032)/588)] )
              }
              korean.push(result.korean_name)
              let korean2 = korean.join("")
          return (
            result.market.match(new RegExp(a, "i")) ||
            korean2.indexOf(a) != -1
          );
        });
        coins.value = re;
        

      } else {
        coins.value = coins2.value;
        let re = coins.value.filter((result) => {
          let korean = [];
          const 초성 = [
        'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ',
        'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ',
        'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
              ];
              for(var i = 0; i < result.korean_name.length; i++){
                korean.push( 초성[parseInt(((result.korean_name.charCodeAt(i))-44032)/588)] )
              }
              korean.push(result.korean_name)
              let korean2 = korean.join("")
          return (
            result.market.match(new RegExp(a, "i")) ||
            korean2.indexOf(a) != -1 &&
            korean2.indexOf(b.data) != -1
          );
        });
        coins.value = re;
      }
    }

    let coins = ref([]);
    const coins2 = ref([]);
    const symbols = ref([]);

   onBeforeMount(() => {
     axios.get("https://api.upbit.com/v1/market/all").then((result) => {
        let newcoins = result.data.filter((result) => {
          return result.market.indexOf("KRW-") != -1;
        });
        coins2.value = [...newcoins];
        coins.value = [...coins2.value];

        console.log(coins.value)
        console.log(coins2.value)

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
          (key) => coins.value[key].market == ticker.code
        );
        if (coins.value[key] == null) {
          return;
        } else if (coins.value[key].market == ticker.code) {
          coins.value[key] = Object.assign(coins.value[key], ticker);
        }
      };
    });
    return {
      search,
      coins,
      getprice24,
      GetChangeRate,
      Getcurrency,
      GetColor,
      Getborder,
      Getpm,
      candle,
      candlehighlow,
    };
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
  text-align: center;
}

.marketlist-candle-box {
  background-color: #eee;
  margin: auto;
  width: 10px;
  height: 35px;
  overflow: hidden;
  position: relative;
  z-index: -1;
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