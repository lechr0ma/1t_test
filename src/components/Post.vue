<template>
    <div class="post">
        <div class="post__title">
            {{post.title}}
        </div>
        <div class="post__body">
            {{post.body}}
        </div>
        <div class="post__actions">
            <def-button @click="removePost(post)" v-if="this.$store.state.admin">
                Delete
            </def-button>
            <def-button @click="getPost(post.id)" v-if="this.$store.state.admin">
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
    import {deletePost, getOne} from "@/API/Posts";

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
            getPost(id) {
                getOne(id)
            }
        }
    }
</script>

<style scoped>

</style>