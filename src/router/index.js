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
                        require(['../views/Toast.vue'], resolve);
                    }
                },
                {
                    path: 'dialog',
                    name: 'Dialog对话框',
                    component: resolve => {
                        require(['../views/Dialog.vue'], resolve);
                    }
                }
            ]
        },
    ]
})