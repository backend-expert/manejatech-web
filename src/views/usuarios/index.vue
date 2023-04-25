<template>
  <div>
      <h2 class="text-center">Lista de Usuários</h2>
      <router-link to="/novo-usuario" class="btn btn-success">Criar Novo</router-link>


      <table class="table">
          <thead>
          <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Tipo</th>
              

              <th>Detail</th>
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
                      <!-- <button class="btn btn-danger" @click="deleteProduct(product.id)">Excluir</button> -->
                      <button class="btn btn-danger">Excluir</button>
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

            spinner: {
              get_users:false, 
            },
           
          }
      },

      created() {

        this.getUser()
          // axios.post('').then(response => {
          //         this.users = response.data;
          //     });
      },

      methods: {

       
        getUser() {

          this.spinner.get_users = true;

          axios.post('/usuarios').then((response) => {
            

            this.users = response.data.data;
          
          }).finally(() => {

            this.spinner.get_users = false;
          
          });
        
        }
          // deleteProduct(id) {
          //     this.axios
          //         .delete(`http://localhost:8000/api/products/${id}`)
          //         .then(response => {
          //             let i = this.products.map(data => data.id).indexOf(id);
          //             this.products.splice(i, 1)
          //         });
          // }
      }
  }
</script>
