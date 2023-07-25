import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

export const Routes: RouteRecordRaw[] = [{
  path: '/',
  name: 'Home',
  component: () => import('@/views/Home/index.vue'),
}]

// app router
// 创建一个可以被 Vue 应用程序使用的路由实例
export const router = createRouter({
  history: createWebHashHistory(),
  routes: Routes,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

// config router
// 配置路由器
export function setupRouter(app: App<Element>) {
  app.use(router)
}
