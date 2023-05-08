import { createApp } from 'vue'
import App from './App.vue'
import JobVacancies from './pages/JobVacancies.vue'
import JobHome from './pages/JobHome.vue'
import ApiPost from './pages/ApiPost.vue'
import ColorSlider from './pages/ColorSlider.vue'
 import { createRouter, createWebHistory } from 'vue-router'
 const routes = [
    {
        path:'/',
        component:JobHome
    },
    {
        path:'/vacancies',
        component:JobVacancies
    },
    {
        path:'/posts',
        component:ApiPost
    }, 
    {
        path:'/slider',
        component:ColorSlider
    }
 ]
 const router = createRouter({
    history:createWebHistory(),
    routes
 })

 const app = createApp(App);
 app.use(router);
 app.mount('#app')
