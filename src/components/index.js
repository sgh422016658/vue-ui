import Toast from './toast'
import Dialog from './dialog'
import Indicator from './indicator'

let YouyuUI = {};

YouyuUI.install = (Vue, options) => {
    Vue.$toast = Vue.prototype.$toast = Toast;
    Vue.$dailog = Vue.prototype.$dailog = Dialog;
    Vue.$indicator = Vue.prototype.$indicator = Indicator;
}

export default YouyuUI