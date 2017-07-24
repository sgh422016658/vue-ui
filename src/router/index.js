import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/demo',
            name: 'Demo',
            component: resolve => {
                require(['../views/Demo.vue'], resolve);
            },
            children: [{
                    path: 'toast',
                    name: 'Toast弹窗',
                    component: resolve => {
                        require(['../views/components/Toast.vue'], resolve);
                    }
                },
                {
                    path: 'dialog',
                    name: 'Dialog对话框',
                    component: resolve => {
                        require(['../views/components/Dialog.vue'], resolve);
                    }
                },
                {
                    path: 'indicator',
                    name: 'indicator加载框',
                    component: resolve => {
                        require(['../views/components/Indicator.vue'], resolve);
                    }
                }
            ]
        },
    ]
})