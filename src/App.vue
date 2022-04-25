<template>
    <Header/>
    <section class="main__content">
        <router-view/>
    </section>
</template>
<style lang="scss">
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    #app {
        width: 100%;
        height: 100%;
        background: #b9f3de;
    }

    .post {
        margin: 10px;
        padding: 10px;
        box-shadow: 0 0 10px #5C7AFF;
        border-radius: 10px;
        display: flex;
        flex-direction: column;

        &__container {
            width: 80%;
            min-height: 100vh;
            margin: 0 auto;
            border: #4A8FE7 1px solid;
            box-shadow: 0 0 10px #5C7AFF;
            background: #ffffff;
        }

        &__filter {
            padding: 10px;
        }

        &__pages {
            padding: 10px;
            display: flex;
            justify-content: center;
        }

        &__title {
            color: #5C7AFF;
            font-weight: 500;
            padding: 10px 0;
        }

        &__body {
            padding: 0 10px;
        }

        &__actions {
            align-self: flex-end;
            padding: 10px 0 0 0;
        }
    }

    .input {
        width: 100%;
        height: 30px;
        border: #5C7AFF 1px solid;
        margin-top: 5px;
        padding: 5px;
    }

    .main__content {
        padding-top: 60px;
        width: 80%;
        margin: 0 auto;
        min-height: 100vh;
    }
</style>
<script>
    import Header from "@/components/Header";
    import Home from "@/pages/Home";
    import AddPost from "@/pages/AddPost";

    export default {
        components: {
            Header, Home, AddPost
        }
    }
</script>
