// implementacao futura
import axios from 'axios';

const api = axios.create({
    baseURL: "http://127.0.0.1/5544/api",
    // baseURL: "https://pokeapi.co/api/v2/"
    headers: {
        'Content-Type': 'application/json',
        'Access': 'application/json',
        'Accept-Language': 'pt-BR',
        'Access-Control-Allow-Origin': '*'
      },

});

export default api;