<template>
   
      <h1>Testes H!</h1>

      <div
            v-if="_response.message"
            :class="`${_response.color}`"
        >
        <h3
        :class="`${_response.color}`"
        >
            {{ _response.message }}
        </h3>

        </div>

      <main class="form-signinw-100 m-auto">

        <form @submit.prevent="onSubmitLogin()">
          <img class="mb-4" src="@/assets/images/logo.png" alt="logotipo" width="72" height="57">
          
          <h1 class="h3 mb-3 fw-normal">Entrar</h1>
      
          <div class="form-floating">
            <input
              v-model="email" 
              type="email" 
              class="form-control" 
              id="floatingInput" 
              placeholder="name@example.com">
            <label for="floatingInput">Email address</label>
          </div> <br>
      
          <div class="form-floating">
            <input 
              v-model="password"
              type="password" 
              class="form-control" 
              id="floatingPassword" 
              placeholder="Password">
            <label for="floatingPassword">Password</label>
          </div> <br>
      
        
          <button 
            class="w-100 btn btn-lg btn-primary" 
            type="submit"
            :disabled="spinner.login"
          >
            <img 
              v-if="spinner.login"
              src="@/assets/images/icons8-spinner.gif" alt=""
            >
        
          Entrar
          </button>
          
            <p class="mt-5 mb-3 text-body-secondary">&copy; 2017–2023</p>
        </form>
      </main>
  
    
</template>
  
<script>
  // import axios from 'axios';
  import axios from '@/services/api';
  import message from '@/helpers/messages';
  // import Cookie from 'js-cookie';
  import Cookie from '@/services/cookie';
  
  
    export default {
      name: 'Entrar',
  
      data () {
        return {
          email: '',
          password: '',

          _response: {
                color: '',
                message:'',
            },

            spinner: {
                login: false
            },
        };
      },
  
      methods: {
        onSubmitLogin(){

          const payload = {
                email: this.email,
                password: this.password
            };

            this.resetResponse();

            this.spinner.login = true;

         

            //conexao ajax
            axios.post('/login', payload).then((response) => {
                console.log(response);

                // const token = `${response.data.token_type} ${response.data.access_token}`; 
                const bearer = 'bearer';
                const token = `${bearer} ${response.data.token}`; 

                console.log('token', token);

                // Cookie.set('admin_token', token, { expires:30 });
                Cookie.setToken(token);

                // console.log(this.$router);
                this.$store.commit('user/STORE_USER', response.data.data);

                this.$router.replace('/');
            })
            .catch((error) => {
                    this.spinner.login = false;

                    const errorCode = error?.response?.data?.error || 'ServerError';
                    this._response.color = 'red',
                    this._response.message = message[errorCode]
                   
                });
      
        // axios({
        //   method: "post",
        //   url: "/login",
        //   headers: {
        //       'Content-Type': 'application/json',
        //       'Access': 'application/json',
        //       'Accept-Language': 'pt-BR'
        //     },
        //     body: JSON.stringify({
        //       email: this.email,
        //       password: this.password
        //     })
        // });

          // console.log('here');
          // api.post(`5544/api/login`, {
          // axios.post(`/api/login`, {
          //   method: 'POST',
          //   headers: {
          //     'Content-Type': 'application/json',
          //     'Access': 'application/json',
          //     'Accept-Language': 'pt-BR'
          //   },
          //   body: JSON.stringify({
          //     email: this.email,
          //     password: this.password
          //   })
  
          // })
          // .then(response =>response.json())
          // .then(res => {
          //   Cookie.set('token_user', res.access_token)
          //   console.log(res);
          // });
  
        },

        resetResponse() {
            this._response.color = '',
            this._response.message = ''
        },
  
      },
    };
  </script>
  
  <style scoped>
  
  .form-signin {
    max-width: 330px;
    padding: 15px;
  }
  
  .form-signin .form-floating:focus-within {
    z-index: 2;
  }
  
  .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  
  .form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  </style>
  