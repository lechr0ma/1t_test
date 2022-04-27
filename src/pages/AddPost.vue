<template>
    <div class="post__create">
        <form @submit.prevent>
            <h4>Add Post</h4>
            <def-input placeholder="Title" @input="title = $event.target.value" :text="title" />
            <def-input placeholder="Body" @input="body = $event.target.value" :text="body" />
            <def-button @click="addPost" class="def_button ml0">Add Post</def-button>
            <span v-if="ok && !loading">Post created!</span>
        </form>
    </div>
</template>

<script>
    import DefButton from "@/components/UI/DefButton";
    import {setPost} from "@/API/Posts";
    import DefInput from "@/components/UI/DefInput";

    export default {
        components: {DefInput, DefButton},
        data() {
            return {
                title: '',
                body: '',
                loading: false,
                ok: false
            }
        },
        methods: {
            addPost() {
                if (this.title && this.body) {
                    this.loading = true
                    setPost({
                        title: this.title,
                        body: this.body,
                        id: Date.now(),
                        author: this.$store.state.admin ? 'John Doe' : 'Jane Doe',
                        email: this.$store.state.admin ? 'johndoe@test.com' : 'janedoe@test.com'
                    }).then(() => {
                        this.title = '';
                        this.body = '';
                        this.loading = false;
                        this.ok = true
                    })
                } else {
                    alert('Empty field!')
                }
            },
        }
    }
</script>

<style scoped>
    .post__create {
        width: 80%;
        margin: 10px auto 0;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 30px #4A8FE7;
        background: #fff;
    }

    .ml0 {
        margin-left: 0;
    }

</style>