<template>
    <input class="input" :value="text" type="text">
</template>

<script>
    export default {
        name: 'def-input',
        props:{
            text: {
                type: String
            }
        }
    }
</script>

<style scoped>
    .input {
        width: 100%;
        height: 30px;
        border: #5C7AFF 1px solid;
        margin: 5px 0;
        padding: 5px;
    }
</style>