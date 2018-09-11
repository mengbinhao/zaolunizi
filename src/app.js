import Vue from 'vue'
import Button from './button'
import Icon from './icon'

Vue.component(Icon.name, Icon)
Vue.component(Button.name, Button)

new Vue({
    el: '#app'
})