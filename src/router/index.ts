import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import { remainingRouter } from "@/router/remaining";

const router = createRouter({
    history: createWebHistory(), // 使用历史模式
    routes: remainingRouter as RouteRecordRaw[],
    scrollBehavior: () => ({ left: 0, top: 0 })
});


export default router;
