// implementacao futura
import axios from 'axios';

const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
    headers: {
        'Content-Type': 'application/json',
        'Access': 'application/json',
        'Accept-Language': 'pt-BR',
        'Access-Control-Allow-Origin': '*'
      },

});

export default api;