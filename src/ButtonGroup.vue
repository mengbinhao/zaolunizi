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
