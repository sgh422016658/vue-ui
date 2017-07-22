import Vue from 'vue'
import App from './App'
import VueProgressBar from 'vue-progressbar'
import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import YouyuUI from './components'

const options = {
    color: '#29d',
    failedColor: 'red',
    height: '2px'
}

Vue.use(VueProgressBar, options)
Vue.use(YouyuUI)

NProgress.configure({ showSpinner: false })

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    NProgress.start();
    next()
})

router.afterEach(route => {
    NProgress.done();
})

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})