import Toast from './toast'
import Dialog from './dialog'

let YouyuUI = {};

YouyuUI.install = (Vue, options) => {
    Vue.$toast = Vue.prototype.$toast = Toast;
    Vue.$dailog = Vue.prototype.$dailog = Dialog;
}

export default YouyuUI