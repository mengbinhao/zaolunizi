import Vue from 'vue'
import Button from './Button'
import Icon from './Icon'
import ButtonGroup from './ButtonGroup'

Vue.component(Icon.name, Icon)
Vue.component(Button.name, Button)
Vue.component(ButtonGroup.name, ButtonGroup)

new Vue({
    el: '#app',
    data: {
        loadingFlag: false
    }
})