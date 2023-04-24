// implementacao futura
import axios from 'axios';
import Cookie from './cookie';


const token = Cookie.getToken();


const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
    headers: {
        'Content-Type': 'application/json',
        'Access': 'application/json',
        'Accept-Language': 'pt-BR',
        'Authorization': token,
        'Access-Control-Allow-Origin': '*'
      },
      // proxy: {
      //   protocol: 'http',
      //   host: '127.0.0.1',
      //   port: 8000,
      //   auth: {
      //     username: 'admin',
      //     password: '321321'
      //   }
      // },

});

export default api;