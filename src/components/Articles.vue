<template>
    <div v-for="(post, index) in articles" :key="index">
        <h3>
            {{ post.title }}
        </h3>
        <p>
            {{ post.body }}

        </p>
        
        
    </div>

    <div 
    v-if="articles.length"
    v-observe-visibility="visibilityChanged"
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
        this.fetch()

    },

    data() {
        return {
            articles:[            
            ],
            page:1,

        }
    },

    methods: {
        async fetch(){
            let articles = await axios.get(`https://jsonplaceholder.typicode.com/posts?page=${this.page}`)
                // console.log(Response);
            
                this.articles= articles.data;
            

        },

        visibilityChanged(isVisible){

            if (!isVisible)               return;
            
            console.log('hi');
            this.page++
            this.fetch()

        }
    },

    // mounted () {
    //     this.fetch()
    // },
    
}
</script>
<style>
    
</style>