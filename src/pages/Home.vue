<template>
    <div class="post__container">
        <spinner v-if="this.$store.state.post.isLoading"></spinner>
        <div class="post__filter">
<!--            <def-input @input="this.$store.commit('setSearch', $event.target.value)"-->
<!--                   placeholder="Filter"-->
<!--                   :text="this.$store.state.post.searchQuery"-->
<!--            />-->
            <def-input @input="testTime"
                       placeholder="Filter"
                       :text="this.$store.state.post.searchQuery"
            />
            Sort by:
            <select @change="this.$store.commit('setSort', $event.target.value)"  name="sort">
                <option value="id">By ID</option>
                <option value="title">By Title</option>
            </select>
            Author:
            <select @change="changeAuthor($event.target.value)" :value="this.$store.state.post.author" name="sort">
                <option value="John Doe">John Doe</option>
                <option value="Jane Doe">Jane Doe</option>
                <option selected value="">All</option>
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
    import DefButton from "@/components/UI/DefButton";
    import DefInput from "@/components/UI/DefInput";

    export default {
        components: {
            DefInput,
            DefButton,
            Spinner,
            Post
        },
        data() {
            return {
                timeout: 0
            }
        },
        methods: {
            changePage(page) {
                this.$store.commit('setPage', page)
                this.$store.dispatch('getPosts')
            },
            changeAuthor(author){
                this.$store.commit('setAuthor', author)
                this.$store.commit('setPage', 1)
                this.$store.dispatch('getPosts')
            },
            testTime(){
                clearTimeout(this.timeout)
                const id = setTimeout(()=> console.log('work'), 1000)
                this.timeout = id
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