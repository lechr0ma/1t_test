<template>
    <div class="container">
        <spinner v-if="isLoading"/>
        <div class="post__content">
            <div class="post__title">
                {{post.title}}
            </div>
            <div class="post__body">
                {{post.body}}
            </div>
            <div class="post__author">
                <div>Author: {{post.author}}</div>
                <div><a :href="'mailto:'+ post.email">{{post.email}}</a></div>
            </div>
        </div>
        <div class="comments__content">
            <comment-item :comment="comment" v-for="comment in comments"/>
        </div>
    </div>
</template>

<script>
    import CommentItem from "@/components/UI/CommentItem";
    import {getOne} from "@/API/Posts";
    import {getByPost} from "@/API/Comments";
    import Spinner from "@/components/UI/Spinner";

    export default {
        components: {Spinner, CommentItem},
        data() {
            return {
                isLoading: true,
                post: {},
                comments: []
            }
        },
        methods: {
            async fetchPost() {
                this.post = await getOne(this.$route.params.id)
                this.comments = (await getByPost(this.post.id)).map(el => el.data())
                this.isLoading = false
            }
        },
        mounted() {
            this.fetchPost()
        }
    }
</script>

<style lang="scss" scoped>
    .container {
        width: 80%;
        margin: 10px auto 0;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 30px #4A8FE7;
        background: #fff;
    }

    .post {
        &__content {
            border: 1px solid #000000;
            border-radius: 10px;
            padding: 10px;
            box-shadow: 0 0 2px black;
            min-height: 200px;
            display: flex;
            flex-direction: column;
        }

        &__title {
            color: #5C7AFF;
            font-weight: 500;
            padding: 10px 0;
        }

        &__body {
            padding: 0 10px;
        }

        &__author {
            margin-top: auto;
            align-self: flex-end;
            display: flex;
            flex-direction: column;
        }
    }

</style>