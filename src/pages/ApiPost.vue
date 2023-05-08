<template>
    <div class="container ">
        <h1>Demo Posts</h1>
    </div>
    <div class="box" v-for="post in posts" :key="post.id">
        <h2 class="title is-5">{{ post.title }}</h2>
        <h2>{{ post.body }}</h2>

    </div>
    </template>
    <script>
// import { throwStatement } from '@babel/types';

    export default{
        data(){
            return{
                posts:[]
            }
        },
        created(){
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                this.posts = data;
            })
        }
    }
    </script>