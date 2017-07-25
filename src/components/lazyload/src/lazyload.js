export default (Vue, options = {}) => {
    if (!Array.prototype.remove) {
        Array.prototype.remove = function(item) {
            if (!this.length) return
            var index = this.indexOf(item);
            if (index > -1) {
                this.splice(index, 1);
                return this
            }
        }
    }

    var init = {　　
        default: require('./load.gif')
    }

    //需要进行监听的图片列表，还没有加载过得 
    var listenList = [];　　
    //已经加载过得图片缓存列表
    var imageCatcheList = [];
    //是否已经加载过了
    const isAlredyLoad = imageSrc => {
        if (imageCatcheList.indexOf(imageSrc) > -1) {
            return true;
        } else {
            return false;
        }
    }

    //检测图片是否可以加载，如果可以则进行加载
    const isCanShow = item => {
        var ele = item.ele;
        var src = item.src;
        //图片距离页面顶部的距离
        var top = ele.getBoundingClientRect().top;
        //页面可视区域的高度
        var seeHeight = document.documentElement.clientHeight; //可见区域高度
        //top + 10 已经进入了可视区域10像素
        if (top + 10 < window.innerHeight) {
            var image = new Image();
            image.src = src;
            image.onload = function() {
                ele.src = src;
                imageCatcheList.push(src);
                listenList.remove(item);
            }
            return true;
        } else {
            return false;
        }
    };

    //节流
    const throttle = (fun, delay, time) => {
        var _self = this,
            timeout,
            startTime = new Date();

        return function() {
            var args = arguments,
                curTime = new Date();
            clearTimeout(timeout);
            if (curTime - startTime >= time) {
                fun.apply(_self, args);
                startTime = curTime;
            } else {
                timeout = setTimeout(() => {
                    fun.apply(_self, args)
                }, delay)
            }
        }
    }

    const loadImg = function() {
        var length = listenList.length;
        for (let i = 0; i < length; i++) {
            isCanShow(listenList[i]);
        }
    }

    const onListenScroll = container => {
        if (container) {
            document.getElementById(container).addEventListener('scroll', throttle(loadImg, 500, 1000))
        } else {
            window.addEventListener('scroll', throttle(loadImg, 500, 1000))
        }
    }

    //Vue 指令最终的方法
    const addListenner = (ele, binding) => {
        var container = (Object.keys(binding.modifiers))[0];

        //绑定的图片地址
        var imageSrc = binding.value;
        //如果已经加载过，则无需重新加载，直接将src赋值
        if (isAlredyLoad(imageSrc)) {
            ele.src = imageSrc;
            return false;
        }

        var item = {
            ele: ele,
            src: imageSrc
        }

        //图片默认地址
        ele.src = init.default;

        setTimeout(() => {
            //再看看是否可以显示此图片
            if (isCanShow(item)) {
                return false;
            }
            //否则将图片地址和元素均放入监听的lisenList里
            listenList.push(item);

            //然后开始监听页面scroll事件
            onListenScroll(container);
        }, 100)
    }

    Vue.directive('lazyload', {
        inserted: addListenner,
        update: addListenner
    })
}