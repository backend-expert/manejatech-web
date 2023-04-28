<template>
  
  <main class="form-signin w-100 m-auto">

      
      <img class="mb-4" src="@/assets/images/logo.png" alt="" width="72" height="57">

      <div>

         <button @click="goBack">
      Voltar
    </button>

            <strong class="w-100 h3 mb-3 fw-normal">
              <div   
                  v-if="spinner.perfil_user" 
                  class="spinner-border text-warning" role="status"
              >
                  <span class="visually-hidden">Loading...</span>
              </div>

              Perfil Usuário
            </strong>
      </div>
    

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

      <div class="form-floating">
          
          <input 
          
              type="text" 
              class="form-control" 
              id="floatingInput" 
            
          >
          <label for="floatingInput">{{ user.nome }}</label>
      </div> <br>

      <div class="form-floating">
          
          <input 
             
              type="text" 
              class="form-control" 
              id="floatingInput" 
            
          >
          <label for="floatingInput">{{ user.sobrenome }}</label>
      </div> <br>

      <div class="form-floating">
          
          <input 
           
              type="email" 
              class="form-control" 
              id="floatingInput" 
             
             
          >
          <label for="floatingInput">{{ user.email }}</label>
      </div> <br>

      <div class="form-floating">
          
          <input 
           
              type="text" 
              class="form-control" 
              id="floatingInput" 
              placeholder="{{user.cpf}}"
             
          >
          <label for="floatingInput">{{ user.cpf }}</label>
      </div> <br>

      <div class="form-floating">
          
          <input 
           
              type="date" 
              class="form-control" 
              id="floatingInput" 
             
          >
          <label for="floatingInput">{{ dt_nascimento }}</label>
      </div> <br>

      <div class="form-floating">
          
          <input 
            
              type="text" 
              class="form-control" 
              id="floatingInput" 
              placeholder="Telefone"
             
          >
          <label for="floatingInput">{{ user.telefone }}</label>
      </div> <br>

      <div class="form-group">
                      <label>{{ user.tipo }}</label>
                      <select 
                         
                          name="_tipo" 
                          id="tipo" 
                          required
                      >
                          <option value="1">Produtor </option>
                          <option value="2">Técnico</option>
                      </select>
                  </div>

     
    <br>          
     
      <button 
          class="w-100 btn btn-lg btn-primary" 
          type="submit"
      >

      <div   
          v-if="spinner.perfil_user" 
          class="spinner-border text-warning" role="status"
      >
          <span class="visually-hidden">Loading...</span>
      </div>
     
          Enviar
      </button>
     
     
  </main>
<p class="mt-5 mb-3 text-body-secondary">&copy; 2017–2023</p>
</template>
<script>
import axios from '@/services/api';
import _messages from '@/helpers/messages';

export default {

components:{ },

data() {

  return {

     user:{},

      _response: {
              color: '',
              message:'',
          },
      spinner: {
          perfil_user: false
      }, 

  };
},

created(){
  this.getUser()
},

methods: {

  getUser() {
          
    this.spinner.perfil_user = true;
    
    axios.get('/usuario/'+this.$route.params.id_user)
      .then((response) => {

        console.log("teste "+response);
        
        this.user = response.data;
        
      }).catch((error) => {
        const errorCode = error?.response?.data?.error || 'ServerError';

        this._response.color = 'red',
        this._response.message = _messages[errorCode]

      }).finally(() => {
        
        this.spinner.perfil_user = false;
      
      });
  
  },

  goBack() {
      this.$router.go(-1)
  }

 

 
}

}
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



 
      