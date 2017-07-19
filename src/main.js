import Vue from 'vue'
import App from './App'
import router from './router'

//Toast
import Toast from './components/toast'

Vue.use(Toast)

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})