<template>
    <button class="my-button" :class="{[`icon-${iconPosition}`]: true}">
        <svg v-if="icon" class="icon">
            <use :xlink:href="`#i-${icon}`"></use>
        </svg>
        <div class="content">
            <slot/>
        </div>
    </button>
</template>
<script>
export default {
    name: 'my-button',
    props: ['icon','iconPosition'],
    data () {
        return {
            
        }
    }
}
</script>
<style lang="scss">
.my-button {
  height: var(--button-height);
  font-size: var(--font-size);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background-color: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;  //fix bug
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
      margin-right: .1em;
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
          margin-left: .1em;
          margin-right: 0;
      }
  }
}
</style>
