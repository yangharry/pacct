import { createWebHistory, createRouter } from "vue-router";
import Ranking from './components/Ranking.vue'
import KRWMarket from './components/KRWMarket.vue'
import BTCMarket from './components/BTCMarket.vue'
import USDTMarket from './components/USDTMarket.vue'

const routes = [
    {
        path: "/pacct/Ranking",
        component: Ranking,
    },
    {
      path: "/pacct",
      component: KRWMarket,
    },
    {
      path: "/pacct/BTCMarket",
      component: BTCMarket,
    },
    {
      path: "/pacct/USDTMarket",
      component: USDTMarket,
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;