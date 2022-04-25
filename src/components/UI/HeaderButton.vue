<template>
    <button class="header__btn">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'header-button'
    }
</script>

<style lang="scss" scoped>
    .header__btn{
        border: none;
        color: white;
        cursor: pointer;
        background: transparent;
        font-size: 1em;
        &:hover{
            text-shadow: 0 0 5px black;
         }
    }
</style>