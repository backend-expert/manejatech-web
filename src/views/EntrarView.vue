<template>
    <div class="about">
      <h1>Entrar</h1>

      <main class="form-signinw-100 m-auto">
        <form @submit.stop.prevent="submit" >
          <img class="mb-4" src="../assets/images/logo.png" alt="logotipo" width="72" height="57">
          
          <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
      
          <div class="form-floating">
            <input
              v-model="email" 
              type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Email address</label>
          </div>
      
          <div class="form-floating">
            <input 
              v-model="password"
              type="password" class="form-control" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Password</label>
          </div>
      
        
          <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
          <p class="mt-5 mb-3 text-body-secondary">&copy; 2017–2023</p>
        </form>
      </main>
  
    </div>
</template>
  
  <script>
 import axios from 'axios';
//  import api from '@/services/api';
  // import Cookie from './js-cookie';
  
  
    export default {
      name: 'About',
  
      data () {
        return {
          email: '',
          password: ''
        };
      },
  
      methods: {
        submit(){
      
        axios({
          method: "post",
          url: "/login",
          headers: {
              'Content-Type': 'application/json',
              'Access': 'application/json',
              'Accept-Language': 'pt-BR'
            },
            body: JSON.stringify({
              email: this.email,
              password: this.password
            })
        });

          //console.log('here');
          axios.post(`5544/api/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Access': 'application/json',
              'Accept-Language': 'pt-BR'
            },
            body: JSON.stringify({
              email: this.email,
              password: this.password
            })
  
          })
          // .then(response =>response.json())
          // .then(res => {
          //   Cookie.set('token_user', res.access_token)
          //   console.log(res);
          // });
  
        },
  
      },
    };
  </script>
  
  <style>
  html,
  body {
    height: 100%;
  }
  
  body {
    display: flex;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #f5f5f5;
  }
  
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
  