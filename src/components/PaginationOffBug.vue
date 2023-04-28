<template>
    <nav aria-label="...">
    <ul class="pagination">
      <li class="page-item disabled">
        <a href="#"  @click="navigate($event, source.current_page-1)"> 
            <span class="page-link">Previous</span>
        </a>
       
      </li>

      <li 
        v-for="page in pages"
        :key="page.label"
            class="page-item">
        <a 
            @click="navigate($event, page)"
            class="page-link" href="#">
        {{ page }}    
        </a>
        </li>

      <li class="page-item">
        <a class="page-link" href="#"    @click="navigate($event, source.current_page+1)">Next</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { range } from 'lodash';

export default {
    propos:[
            'source'
        ],

    data() {
        return {
            pages: [],
        }
    },

    methods: {
        navigate(event,page) {
            event.preventDefault();
            this.$dispatch('navigation', page)
        }

    },

    watch: {
        source() {
            this.pages = range(1, this.source.last_page+1);
           console.log("source;...."+this.pages);

        },
    },
    
}
</script>
<style>
    
</style>
