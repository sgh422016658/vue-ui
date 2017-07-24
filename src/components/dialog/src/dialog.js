import Vue from 'vue';

const DialogConstructor = Vue.extend(require('./dialog.vue'))

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
    instance.showCancelButton = true;
    instance.isPrompt = false;
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

Dialog.alert = (option = {}) => {
    if (!instance) {
        instance = new DialogConstructor().$mount();
    } else {
        instance.dialogShow = true;
    }
    instance.title = option.title;
    instance.content = option.content;
    instance.showCancelButton = false;
    instance.isPrompt = false;
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

Dialog.promop = (option = {}) => {
    if (!instance) {
        instance = new DialogConstructor().$mount();
    } else {
        instance.dialogShow = true;
    }
    instance.title = option.title;
    instance.content = option.content;
    instance.showCancelButton = true;
    instance.isPrompt = true;
    document.body.appendChild(instance.$el);
    Vue.nextTick(() => {
        instance.dialogShow = true;
    });
    return new Promise((resolve, reject) => {
        instance.callback = (action) => {
            if (action === 'confirm') {
                resolve(instance.inputValue);
            } else {
                reject(action)
            }
            instance.dialogShow = false;
            instance.inputValue = '';
        }
    })
}

export default Dialog