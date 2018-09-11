<template>
    <button class="my-button">按钮</button>
</template>
<script>
export default {
    name: 'my-button',
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
    &:hover {
    border-color: var(--border-color-hover);
    }
    &:active {
        background-color: var(--button-active-bg);
    }
    &:focus {
        outline: none;
    }
}
</style>
