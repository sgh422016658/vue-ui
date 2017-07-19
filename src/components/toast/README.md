# vue-youyu-ui(Toast插件)

全局引入
```javascript
import Toast from './components/toast'

Vue.use(Toast)
```
使用
```javascript
this.$toast({
    message: '测试',
    position: 'bottom', //此处可以选择top bottom middle来设置toast位置
    duration: 3000
})
```