<template>
    <div>
      <h1>INFO</h1>  
      <pre>
        Name: {{ pokemons.name }}
      </pre>
      
    </div>
</template>
<script>
  import api from '@/services/api';
  import { ref, onMounted } from 'vue';
export default {

    setup() {

        const pokemons = ref();

        const fetchPokemons = () => api.get("/info").then((response) =>(
            pokemons.value = response.data.results
            // console.log(response.data)
        ));
        
        onMounted(fetchPokemons);

        return {
        pokemons      
        }

    }


//     api.get('/info')
//   .then(function (response) {
//     // manipula o sucesso da requisição
//     console.log(response);
//   })
//   .catch(function (error) {
//     // manipula erros da requisição
//     console.error(error);
//   })
//   .finally(function () {
//     // sempre será executado
//   });
}
</script>
<style>
    
</style>