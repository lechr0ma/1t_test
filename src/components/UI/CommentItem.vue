<template>
    <div class="comment">
        <div class="comment__name">
            <img class="comment__img" src="@/images/comments/user.png">
            {{comment.name}}
        </div>
        <div class="comment__email">
            <img class="comment__img" src="@/images/comments/email.png">
            <a :href="`mailto:` + comment.email">{{comment.email}}</a>
        </div>
        <div class="comment__body">
            <img class="comment__img" src="@/images/comments/message.png">
            {{comment.body}}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'comment-item',
        props: {
            comment: {
                type: Object,
                require: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .comment {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        padding: 10px;
        border: 1px solid #4A8FE7;
        border-radius: 10px;
        &__img {
            width: 30px;
            height: 30px;
        }
    }
</style>