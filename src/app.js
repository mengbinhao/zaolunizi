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


//单元测试
import Chai from 'chai'
import Spies from 'chai-spies'
Chai.use(Spies);

let expect = Chai.expect

{
    //console.log(Button);
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'setting'
        }
    })
    vm.$mount()
    //console.log(vm);
    //console.log(vm.$el);
    let use = vm.$el.querySelector('use')
    let href = use.getAttribute('xlink:href')
    expect(href).to.equal('#i-setting');
    vm.$el.remove()
    vm.$destroy()
}

{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'setting',
            loading: true
        }
    })
    vm.$mount()
    let use = vm.$el.querySelector('use')
    let href = use.getAttribute('xlink:href')
    expect(href).to.equal('#i-loading');
    vm.$el.remove()
    vm.$destroy()
}


{
    let div = document.createElement('div')
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'setting'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.equal('1');
    vm.$el.remove()
    vm.$destroy()
}

{
    let div = document.createElement('div')
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'setting',
            iconPosition: 'right'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.equal('2');
    vm.$el.remove()
    vm.$destroy()
}

{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'setting'
        }
    })
    vm.$mount()
    let spy = Chai.spy(function () {})
    vm.$on('click', spy)
    let button = vm.$el
    button.click()
    expect(spy).to.have.been.called();
}