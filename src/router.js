import { createRouter,createWebHistory } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue"
import ExamplePath from "./components/ExamplePath.vue"

const routes = [
    {
        name:'HelloWorld',
        component: HelloWorld,
        path:'/'
    },
    {
        name:'ExamplePath',
        component: ExamplePath,
        path: '/example'
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router