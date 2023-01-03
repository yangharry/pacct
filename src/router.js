import { createWebHistory, createRouter } from "vue-router";
import Ranking from './components/Ranking.vue'
import Market from './components/Market.vue'

const routes = [
    {
        path: "/pacct/Ranking",
        component: Ranking,
    },
    {
      path: "/pacct",
      component: Market,
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;