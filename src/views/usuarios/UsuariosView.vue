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
          <!-- <tr v-for="product in products" :key="product.id"> -->
          <tr>
              <!-- <td>{{ product.id }}</td> -->
              <td>23</td>
              <td>cezar loures</td>
              <td>cezar@gmail.com</td>
              <td>Produtor</td>
              <td>
                  <div class="btn-group" role="group">
                      <!-- <router-link :to="{name: 'edit', params: { id: product.id }}" class="btn btn-success">Edit</router-link> -->
                      <router-link to="" class="btn btn-success">Visualizar</router-link>
                      <router-link to="" class="btn btn-success">Editar</router-link>
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
  export default {
      // data() {
      //     return {
      //         products: []
      //     }
      // },
      // created() {
      //     this.axios
      //         .get('http://localhost:8000/api/products/')
      //         .then(response => {
      //             this.products = response.data;
      //         });
      // },
      // methods: {
      //     deleteProduct(id) {
      //         this.axios
      //             .delete(`http://localhost:8000/api/products/${id}`)
      //             .then(response => {
      //                 let i = this.products.map(data => data.id).indexOf(id);
      //                 this.products.splice(i, 1)
      //             });
      //     }
      // }
  }
</script>
