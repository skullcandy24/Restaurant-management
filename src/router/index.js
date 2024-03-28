// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
      },

      {
        path: "/admin",
        name: "Admin",
        redirect:"DashBoard",
        component: () => import("@/views/Admin/DashBoard.vue"),

        children: [
          {
            path:"/dashboard",
            name:"Dashboard",
            component : () => import("@/views/Admin/DashBoardDetails.vue"),

          },

          {
            path: "/orderList",
            name: "OrderList",
            component: () => import("@/views/Admin/OrderList.vue"),
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
