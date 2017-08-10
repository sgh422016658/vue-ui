import Toast from './toast'
import Dialog from './dialog'
import Indicator from './indicator'
import LazyLoad from './lazyload'
import InfiniteScroll from './infinite-scroll'
import CellSwipe from './cell-swiper/'

let YouyuUI = {};

YouyuUI.install = (Vue, options) => {
    Vue.component(CellSwipe.name, CellSwipe);

    Vue.$toast = Vue.prototype.$toast = Toast;
    Vue.$dailog = Vue.prototype.$dailog = Dialog;
    Vue.$indicator = Vue.prototype.$indicator = Indicator;

    Vue.use(LazyLoad)
    Vue.use(InfiniteScroll)
}

export default YouyuUI