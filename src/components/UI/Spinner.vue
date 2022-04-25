<template>
    <div class="spinner__container">
        <img class="spinner" src="@/images/spinner.svg">
    </div>
</template>

<script>
    export default {
        name: 'spinner'
    }
</script>

<style lang="scss" scoped>
    .spinner {
        width: 100px;
        height: 100px;
        animation: spin 1s linear infinite;

        &__container {
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            background: rgba(0, 0, 0, .5);
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>