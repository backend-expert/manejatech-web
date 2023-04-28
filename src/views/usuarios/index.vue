<template>
  <div>
      <h2  class="text-center">

        <div   
          v-if="spinner.get_users" 
          class="spinner-border text-warning" role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div> 
  
        Lista de Usuários</h2>
    
      <router-link to="/novo-usuario" class="btn btn-success">Criar Novo</router-link>

      <div
            v-if="_response.message"
            :class="`${_response.color}`">

            <h3
                :class="`${_response.color}`">

                {{ _response.message }}
            </h3>

        </div>


      <table class="table">
          <thead>
          <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Tipo</th>
              <th>Ações</th>
              <!-- <th>Actions</th> -->
          </tr>
          </thead>
          <tbody>
          <tr 
            v-for="user in users" 
            :key="user.id"
            >

              <td>{{ user.id }}</td>
             
              <td>{{ user.nome }}</td>
              <td>{{ user.email }}</td>
              <td></td>
              <td>
                  <div class="btn-group" role="group">
                      <router-link :to="{name: 'editar-usuario', params: { id: user.id }}" class="btn btn-success">Edit</router-link>
                      <router-link to="perfil-usuario" class="btn btn-success">Perfil</router-link>
                      <!-- <router-link to="" class="btn btn-success">Editar</router-link> -->
                      <button class="btn btn-danger" @click="deleteUser(user.id)">Excluir</button>
                    
                  </div>
              </td>
          </tr>
          </tbody>
      </table>
  </div>
</template>

<script>


import axios from '@/services/api';

  export default {

   
      data() {
          return { 
            users: [],

            _response: {
              color:'',
              message:'',
            },

            spinner: {
              get_users:false, 
            },
           
          }
      },

      created() {

        this.getUser()

      },

      methods: {
        
        getUser() {
          
          this.spinner.get_users = true;
          
          axios.post('/usuarios').then((response) => {
            
            this.users = response.data.data;
            
          }).finally(() => {
            
            this.spinner.get_users = false;
          
          });
        
        },

        deleteUser(id) {
                if(confirm("Tem certeza que deseja EXCLUIR ?")){
                    axios.delete(`/usuario/${id}`)
                        .then(response => {
                            let i = this.users.map(data => data.id).indexOf(id);
                            this.users.splice(i, 1);

                        }).catch((error) => {

                            const errorCode = error?.response?.data?.error || 'ServerError';

                            this._response.color = 'red',
                            this._response.message = _messages[errorCode]

                        }).finally(() => {                            

                        })
                };
            }
  
      }
  }
</script>
