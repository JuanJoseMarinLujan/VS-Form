import { createRouter, createWebHistory } from "vue-router";
import  Home from "../components/Home.vue";
import StepOne from "../components/StepOne.vue";
import StepTwo from "../components/StepTwo.vue";
import StepThree from "../components/StepThree.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/Paso1",
      name: "Paso1",
      component: StepOne,
    },
    {
      path: "/Paso2",
      name: "Paso2",
      component: StepTwo,
    },
    {
      path: "/Paso3",
      name: "Paso3",
      component: StepThree,
    },
  ],
});

export default router;
