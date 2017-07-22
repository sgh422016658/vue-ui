import Vue from 'vue';

const DialogConstructor = Vue.extend(require('../src/dialog.vue'))

let Dialog = {},
    instance;

Dialog.confirm = (option = {}) => {
    if (!instance) {
        instance = new DialogConstructor().$mount();
    } else {
        instance.dialogShow = true;
    }
    instance.title = option.title;
    instance.content = option.content;
    document.body.appendChild(instance.$el);
    Vue.nextTick(() => {
        instance.dialogShow = true;
    });
    return new Promise((resolve, reject) => {
        instance.callback = (action) => {
            if (action === 'confirm') {
                resolve(action)
            } else {
                reject(action)
            }
            instance.dialogShow = false;
        }
    })
}

export default Dialog