<template>
 
    <div>
      <!-- <pre 
        v-for="(pokemon, index) in pokemons"
        :key="index"
      > -->
      <pre 
        v-for="pokemon in pokemons"
        :key="pokemon.id"
      >
      Name: {{ pokemon.name }}
      Name: {{ pokemon.nome }}
      Name: {{ pokemon.id }}
      </pre>
    </div>
    </template>
    
    <script>
    import api from '@/services/api'
    import { ref, onMounted } from 'vue';
   
    
    export default {
      name: 'App',
    
    
      setup() {
    
        const pokemons = ref();
    
        const fetchPokemons = () => api.get("info")
          .then((response) =>(pokemons.value = response.data.results));
    
          onMounted(fetchPokemons);
    
        return {
          pokemons      
        }
       
      }
    
     
    }
    
    </script>
    <style>
    
    </style>