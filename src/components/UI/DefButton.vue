<template>
    <button class="def_button">
        <slot/>
    </button>
</template>

<script>
    export default {
        name: 'def-button',
    }
</script>

<style lang="scss" scoped>
    .def_button{
        width: 100px;
        height: 30px;
        background: transparent;
        border: #5C7AFF 1px solid;
        margin: 5px;
        cursor: pointer;
        color: #5C7AFF;
        font-weight: 500;
        &:hover{
            box-shadow: 0 0 5px #5C7AFF;
        }
    }
</style>