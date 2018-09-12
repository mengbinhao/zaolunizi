<template>
    <div class="g-buttongroup">
        <slot />
    </div>
</template>
<script>
export default {
    name: 'my-buttongroup',
    data () {
        return {
            
        }
    },
    mounted () {
        //console.log(this.$children);
        //console.log(this.$el.children);
        for(let node of this.$el.children) {
            let nodeName = node.nodeName;
            if (nodeName.toLowerCase() !== 'button') {
                console.warn(`my-buttongroup的子元素应该是my-button,现在是${nodeName}`);
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.g-buttongroup {
    display: inline-flex;
    vertical-align: middle;
    > .g-button {
        //below has a bug
        //&:not(:first-child) {border-left: none;}
        margin-left: -1px;
        position: relative;
        &:hover { z-index: 1;}
        border-radius: 0;
        &:first-child {
            border-top-left-radius: var(--border-radius);
            border-bottom-left-radius: var(--border-radius);
        }
        &:last-child {
            border-top-right-radius: var(--border-radius);
            border-bottom-right-radius: var(--border-radius);
        }
    }
}
</style>
