import Toast from './toast'
import Dialog from './dialog'
import Indicator from './indicator'
import LazyLoad from './lazyload'

let YouyuUI = {};

YouyuUI.install = (Vue, options) => {
    Vue.$toast = Vue.prototype.$toast = Toast;
    Vue.$dailog = Vue.prototype.$dailog = Dialog;
    Vue.$indicator = Vue.prototype.$indicator = Indicator;

    Vue.use(LazyLoad)
}

export default YouyuUI