import Home from "@/pages/Home";
import About from "@/pages/About";
import AddPost from "@/pages/AddPost";
import PostPage from "@/pages/PostPage";
import {createRouter, createWebHashHistory} from "vue-router";

const routes =[
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/add', component: AddPost},
    {path: '/post/:id', component: PostPage},
    {path: '/:pathMatch(.*)*', component: Home}
]
const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})

export default router