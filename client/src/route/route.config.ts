import type { RouteRecordRaw } from 'vue-router'

// 是不是可以把 routes 中的所有 route 的 name 提取出作为一个类型，这样再 router.push 的时候就可以自己推断是不是存在当前的路由了？
export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('@view/layout/layout.vue'),
        children: [
            {
                path: '/',
                component: () => import('@view/home/home.vue')
            },
            {
                path: '/home',
                name: 'home',
                component: () => import('@view/home/home.vue')
            },
            {
                path: '/test-case',
                name: 'test-case',
                component: () => import('@view/test-case/test-case.vue'),
                children: [
                    {
                        path: 'module/:moduleId',
                        name: 'case-module',
                        component: () => import('@view/test-case/case-module.vue')
                    },
                    {
                        path: 'class/:classId',
                        name: 'case-class',
                        component: () => import('@view/test-case/case-class.vue')
                    },
                    {
                        path: 'interface:interfaceId',
                        name: 'case-interface',
                        component: () => import('@view/test-case/case-interface.vue')
                    },
                    {
                        path: 'case/:caseId',
                        name: 'case',
                        component: () => import('@view/test-case/case.vue')
                    },
                    {
                        path: 'new-case',
                        name: 'new-case',
                        component: () => import('@view/test-case/new-case.vue')
                    }
                ]
            },
            {
                path: '/global-config',
                name: 'global-config',
                component: () => import('@view/global-config/global-config.vue')
            },
            {
                path: '/data-manager',
                name: 'data-manager',
                component: () => import('@view/data-manager/data-manager.vue')
            }]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@view/login/login.vue')
    }
]
