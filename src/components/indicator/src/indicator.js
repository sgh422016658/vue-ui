import Vue from 'vue'

const IndicatorConstructor = Vue.extend(require('./indicator.vue'));
let instance;

export default {
    open() {
        if (!instance) {
            instance = new IndicatorConstructor().$mount();
        }
        document.body.appendChild(instance.$el);
        Vue.nextTick(() => {
            instance.visible = true;
        });
    },
    close() {
        if (instance) {
            instance.visible = false;
        }
    }
}