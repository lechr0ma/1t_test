<template>
    <div class="post__container">
        <spinner v-if="this.$store.state.post.isLoading"></spinner>
        <div class="post__filter">
            <input @input="this.$store.commit('setSearch', $event.target.value)"
                   class="input"
                   type="text"
                   placeholder="Filter"
                   :value="this.$store.state.post.searchQuery"
            >
            Sort by:
            <select @change="this.$store.commit('setSort', $event.target.value)"  name="sort">
                <option value="id">By ID</option>
                <option value="title">By Title</option>
            </select>
            Author:
            <select @change="changeAuthor($event.target.value)" name="sort">
                <option value="John Doe">John Doe</option>
                <option value="Jane Doe">Jane Doe</option>
                <option value="">All</option>
            </select>
        </div>
        <div v-if="this.$store.getters.sortedSearchedPosts.length" class="post__pages">
            <div
                    class="page"
                    v-for="page in this.$store.state.post.totalPages"
                    @click="changePage(page)"
                    :class="this.$store.state.post.currentPage === page ? 'current' : ''"
            >
                {{page}}
            </div>
        </div>
        <Post :post="post" v-for="post in this.$store.getters.sortedSearchedPosts"/>
        <div v-if="this.$store.getters.sortedSearchedPosts.length" class="post__pages">
            <div
                    class="page"
                    v-for="page in this.$store.state.post.totalPages"
                    @click="changePage(page)"
                    :class="this.$store.state.post.currentPage === page ? 'current' : ''"
            >
                {{page}}
            </div>
        </div>
        <div v-else-if="!this.$store.state.post.isLoading" class="no_posts">
            No Posts
        </div>
    </div>
</template>

<script>
    import Post from "@/components/Post";
    import Spinner from "@/components/UI/Spinner";

    export default {
        components: {
            Spinner,
            Post
        },
        data() {
            return {}
        },
        methods: {
            changePage(page) {
                this.$store.commit('setPage', page)
                this.$store.dispatch('getPosts')
            },
            changeAuthor(author){
                this.$store.commit('setAuthor', author)
                this.$store.dispatch('getPosts')
            }
        },
        mounted() {
            this.$store.dispatch('getPosts')
        }

    }
</script>

<style scoped>
    .page {
        cursor: pointer;
        border: 1px solid #5C7AFF;
        border-radius: 5px;
        width: 30px;
        height: 30px;
        margin-right: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .page.current {
        background: #5C7AFF;
        color: white;
    }
    .no_posts{
        display: flex;
        justify-content: center;
    }

</style>