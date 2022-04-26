import {getAllByLimit, getByAuthor,} from "@/API/Posts";


export const PostModule = {
    state: () => ({
        posts: [],
        isLoading: false,
        sortBy: '',
        searchQuery: '',
        author: null,
        limit: 10,
        currentPage: 1,
        totalPages: 0
    }),
    getters: {
        sortedPosts(state) {
            return state.posts.sort((a, b) => {
                if (typeof a[state.sortBy] === 'string') {
                    return a[state.sortBy].localeCompare(b[state.sortBy])
                }
                if (typeof a[state.sortBy] === 'number') {
                    return b[state.sortBy] - a[state.sortBy]
                }
            })
        },
        sortedSearchedPosts(state, getters) {
            return getters.sortedPosts.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
        }
    },
    mutations: {
        addPost(state, post) {
            state.posts = [...state.posts, post]
        },
        getPosts(state, posts) {
            state.posts = posts
        },
        setLoading(state, isLoading) {
            state.isLoading = isLoading
        },
        setSort(state, sortBy) {
            state.sortBy = sortBy
        },
        setSearch(state, search) {
            state.searchQuery = search
        },
        setPage(state, page) {
            state.currentPage = page
        },
        setTotal(state, total) {
            state.totalPages = total
        },
        setAuthor(state, author){
            state.author = author
        },
        removePost(state, id) {
            state.posts = state.posts.filter(post => post.id !== id)
        }
    },
    actions: {
        async getPosts({state, commit}) {
            commit('setLoading', true)
            if (!state.author){
                try {
                    const {total, postsSnap} = await getAllByLimit(state.currentPage, state.limit)
                    commit('setTotal', Math.ceil(total.length / state.limit))
                    commit('getPosts', postsSnap.map(e => e.data()))
                    commit('setLoading', false)
                } catch (e) {
                    console.log(e)
                    commit('setLoading', false)
                }
            } else {
                try {
                    const {total, postsSnap} = await getByAuthor(1, state.limit, state.author)
                    if (Math.ceil(total.length / state.limit) < state.totalPages){
                        commit('setPage', 1)
                        commit('setTotal', Math.ceil(total.length / state.limit) )
                        commit('getPosts', postsSnap.map(e => e.data()))
                        commit('setLoading', false)
                    } else {
                        const {total, postsSnap} = await getByAuthor(state.currentPage, state.limit, state.author)
                        commit('setTotal', Math.ceil(total.length / state.limit) )
                        commit('getPosts', postsSnap.map(e => e.data()))
                        commit('setLoading', false)
                    }


                } catch (e) {
                    alert(e.message)
                    commit('setLoading', false)
                }
            }

        },

    }

    ,
}

