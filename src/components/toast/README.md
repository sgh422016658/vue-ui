# vue-youyu-ui(Toast插件)

全局引入
```javascript
import Toast from './components/toast'

Vue.use(Toast)
```
使用
```javascript
this.$toast({
    message: this.number,
    position: 'bottom',
    duration: 3000
})
```