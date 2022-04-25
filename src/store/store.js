import {createStore} from "vuex";
import {PostModule} from "@/store/modules/PostsModule";



const store = createStore({
    state: () => ({
            admin: false
    }),
    getters:{

    },
    mutations: {
        setAdmin(state){
            state.admin = !state.admin
        }
    },
    modules:{
        post: PostModule,
    }

})
export default store