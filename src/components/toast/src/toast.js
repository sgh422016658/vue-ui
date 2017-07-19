import Vue from 'vue';

const ToastConstructor = Vue.extend(require('./toast.vue'));

let Toast = {},
    toastPool = [];

let getAnInstance = () => {
    if (toastPool.length > 0) {
        let instance = toastPool[0];
        toastPool.splice(0, 1);
        return instance;
    }
    return new ToastConstructor().$mount()
}

ToastConstructor.prototype.close = function() {
    this.visible = false;
    //等过渡动画完成后再移除DOM
    this.$el.addEventListener('transitionend', removeDom);
    this.closed = true;

};

let removeDom = event => {
    if (event.target.parentNode) {
        event.target.parentNode.removeChild(event.target);
    }
};

Toast.install = (Vue, options) => {
    Vue.prototype.$toast = (options = {}) => {
        let duration = options.duration || 3000;

        let instance = getAnInstance();
        instance.closed = false;
        clearTimeout(instance.timer);

        instance.message = typeof options === 'string' ? options : options.message;
        instance.position = options.position || 'middle';
        instance.visible = true;

        document.body.appendChild(instance.$el)

        Vue.nextTick(function() {
            instance.visible = true;
            instance.$el.removeEventListener('transitionend', removeDom);
            instance.timer = setTimeout(function() {
                if (instance.closed) return;
                instance.close();
            }, duration)
        });

    }
}

export default Toast