<template>
    <div>
        <h2 class="text-center">

            <div   
            v-if="spinner.get_plantas" 
            class="spinner-border text-warning" role="status"
            >
                <span class="visually-hidden">Loading...</span>
            </div>
                
            Lista de Plantas
        
        </h2>

        <router-link to="/nova-planta">Cadastrar </router-link> <br>

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
                <th>Código</th>
                <th>Nome</th>
                <th>Tipo</th>
                <th>Opções</th>
               
            </tr>
            </thead>
            <tbody>

            <tr 
                v-for="planta in plantas"
                :key="planta.id"
            >

                <td>{{ planta.id }} </td>
                <td>{{ planta.nome }}</td>
                <td> {{ planta.tipo_planta_id }}</td>

                <td>
                    <div class="btn-group" role="group">
                        <router-link 
                            :to="{name: 'perfil-planta', params: {id: planta.id }}" 
                            class="btn btn-success"
                        >  perfil

                        </router-link>
                        
                        <router-link 
                            :to="{name: 'editar-planta', params: { id: planta.id }}"                           
                            class="btn btn-success"
                        >  Editar

                        </router-link>
                        
                        <button 
                            class="btn btn-danger" 
                           
                        > Excluir

                        </button>
                     
                    </div>
                </td>
            </tr>
            </tbody>
        </table>

      
        <!-- <Pagination :source="pagination" @navigate="navigate"></Pagination> -->

       


         
         
    </div>
</template>

<script>
import axios from '@/services/api';
import _messages from '@/helpers/messages';



import Pagination from "@/components/PaginationOffBug.vue";

    // export default {
    export default {
        components: {
            // Pagination,
        },

        data(){
            return {
               
                plantas:[],
             
              
                _response: {
                    color:'',
                    message:'',
                },

                spinner: {
                    get_plantas:false
                },


                // page:1,              
                // next_page_url:'',
                // pagination: {},


            }
        },

        created() {
            this.getPlantas()
           
        },

        methods:{

          

            // navigate(page) {
            //     console.log(page);
            //     axios.post('/plantas/pesquisar?page='+page).then((response) => {

            
            
            //     this.plantas = response.data.data;
           
            //     this.pagination = response.data.data;

            //     })

            // },

            getPlantas(){

                this.spinner.get_plantas = true;

                axios.post('/plantas/pesquisar').then((response) => {
                // axios.post('/plantas/pesquisar?page='+this.next_page_url).then((response) => {

                 
                
                  
                    this.plantas = response.data.data;

                    // this.pagination = response.data.data;
                   
                  

                }).catch((error) => {

                    const errorCode = error?.response?.data?.error || 'ServerError';

                  
                    this._response.color = 'red',
                    this._response.message = _messages[errorCode]

                }).finally(() => {

                    this.spinner.get_plantas = false;

                });

            },

          


        },


      
    }
</script>
