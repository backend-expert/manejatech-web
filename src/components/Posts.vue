<template>
    <div v-for="(post, index) in posts.data" :key="index">
        <h3>
            {{ post.title }}
        </h3>
        <p>
            {{ post.body }}

        </p>
        
        
    </div>

    <div
    v-observe-visibility="visibilityChanged(isibility)"
    >
    Checou no final ...
    </div>
</template>
<script>
import axios from 'axios';
import  {  ObserveVisibility  }  from  'vue-observe-visibility'
export default {
    directives:{
        ObserveVisibility
    },
    created () {
        this.fetchPosts()

    },

    data() {
        return {
            posts: {
                data: [],
                meta: {
                    current_page: 1,
                    last_page:99
                } 
            },
            page:1,

        }
    },

    methods: {
        fetchPosts () {
            axios.get("https://jsonplaceholder.typicode.com/posts?page="+this.page).then((Response) => {
                console.log(Response);
                this.posts.data = Response.data;
            })

        },

        visibilityChanged(isVisible){
            if (!isVisible){
                return;
            }
            this.page++
            this.fetchPosts()

        }
    },
    
}
</script>
<style lang="">
    
</style>