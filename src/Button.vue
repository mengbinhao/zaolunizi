<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
        <my-icon v-if="icon && !loading" :name="icon" class="icon"/>
        <my-icon class="loading icon" v-if="loading" name="loading"/>
        <div class="content">
            <slot/>
        </div>
    </button>
</template>
<script>

//不推荐全局使用
//import Vue from 'vue'
//Vue.component(Icon.name, Icon)
import Icon from './Icon'

export default {
    name: 'my-button',
    //props: ['icon','iconPosition'],
    props: {
        icon: {},
        loading: {
            type: Boolean,
            default: false
        },
        iconPosition:{
            type: String,
            default: 'left',
            validator (position) {
                return position === 'left' || position === 'right'
            }
        }
    },
    components: {
      'my-icon': Icon
    }
}
</script>
<style lang="scss">
.g-button {
  height: var(--button-height);
  font-size: var(--font-size);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background-color: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle; //fix bug
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  > .icon {
    order: 1;
    margin-right: 0.1em;
  }
  > .content {
    order: 2;
  }
  &.icon-right {
    > .content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-left: 0.1em;
      margin-right: 0;
    }
  }

  @keyframes circle {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .loading {
    animation: circle 1s infinite linear;
  }
}
</style>
