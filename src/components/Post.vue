<template>
    <div class="post">
        <div class="post__title">
            {{post.title}}
        </div>
        <div class="post__body">
            {{post.body}}
        </div>
        <div class="post__data">
            ID: {{post.id}}, Author: {{post.author}}
        </div>
        <div class="post__actions">
            <def-button @click="removePost(post)" v-if="this.$store.state.admin">
                Delete
            </def-button>
            <def-button @click="getPost()" v-if="this.$store.state.admin">
                Edit
            </def-button>
            <def-button @click="this.$router.push(`/post/${post.dbID}`)">
                Open
            </def-button>
        </div>
    </div>
</template>

<script>
    import DefButton from "@/components/UI/DefButton";
    import {deletePost} from "@/API/Posts";

    export default {
        components: {DefButton},
        props: {
            post: {
                type: Object,
                require: true
            }
        },
        methods: {
            removePost(post) {
                deletePost(post.dbID)
                this.$store.commit('removePost', post.id)
            },
            getPost() {
                const id = setTimeout(() => console.log(id), 1000)
            }
        }
    }
</script>

<style lang="scss">
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
        &__data{
            align-self: flex-end;
            padding: 10px 0 0 0;
        }
        &__actions {
            align-self: flex-end;
            padding: 10px 0 0 0;
        }
    }
</style>