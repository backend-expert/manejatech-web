<template>
    <div>
        <h2 class="text-center">

            <div   
            v-if="spinner.get_plantas" 
            class="spinner-border text-warning" role="status"
            >
                <span class="visually-hidden">Loading...</span>
            </div>
                
            Lista de Plantas</h2>
        <router-link to="/nova-planta">Cadastrar </router-link> <br>

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
                        >
                            perfil
                        </router-link>
                        
                        <router-link 
                            :to="{name: 'editar-planta', params: { id: planta.id }}"                           
                            class="btn btn-success">
                            Editar
                        </router-link>
                        
                        <button class="btn btn-danger">Excluir</button>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>

        <!-- <div v-observe-visibility="visibilityChanged()">
            <div   
            class="spinner-border text-warning" role="status"
            >
                <span class="visually-hidden">Loading...</span>
            </div>
            ...

        </div> -->
        <Pagination :source="pagination" @navigate="navigate"></Pagination>

        <!-- <Pagination
            :totalPages="total_page"
            :perPage="per_page"
            :currentPage="currentPage"
            @pagechanged="onPageChange"
            /> -->


            <p>Total de Pagina:    {{ total_page }}</p>
            <p>Per de Pagina:    {{ per_page }}</p>
            <p>Curent Page de Pagina:    {{ current_page }}</p>
            <p>Per de Pagina:    {{ per_page }}</p>

         
    </div>
</template>

<script>
import axios from '@/services/api';
import _messages from '@/helpers/messages';
import  {  ObserveVisibility  }  from  'vue-observe-visibility'
// import Pagination from '@/components/Pagination.vue';

import Pagination from "@/components/PaginationOffBug.vue";

    export default {
        components: {
            Pagination,
        },

        directives: {
            ObserveVisibility,
        },

        data(){
            return {
               
                plantas:[],
             
                links: {
                    current_page: 1,
                    last_page: 1
                },

                _response: {
                    color:'',
                    message:'',
                },

                spinner: {
                    get_plantas:false
                },
                page:1,

                // links: {
                //     total_page:'',
                //     per_page:'',
                //     current_page:'',
                // },
                // page_default: 1,
                // total_page:'',
                // per_page:'',
                // current_page:'',
                next_page_url:'',
                pagination: {},


            }
        },

        created() {
            this.getPlantas()
            // this.visibilityChanged()
        },

        methods:{

            onPageChange(page) {
                console.log(page)
                this.currentPage = page;
            },

            navigate(page) {
                console.log(page);
                axios.post('/plantas/pesquisar?page='+this.page).then((response) => {

            
                //pagination
                this.plantas = response.data.data;
           
                this.pagination = response.data.data;

                })

            },

            getPlantas(){

                this.spinner.get_plantas = true;

                axios.post('/plantas/pesquisar?page='+this.next_page_url).then((response) => {

                    // this.plantas = response.data.data;
                    console.log(response.data);
                    //pagination
                    this.plantas = response.data.data;
                    // this.plantas.data.push(...response.data.data);
                    this.pagination = response.data.data;
                    // console.log("totalaldl",response.data.total);
                    this.total_page= response.data.total;
                    this.per_page= response.data.per_page;
                    this.current_page= response.data.current_page;
                    this.next_page_url= response.data.next_page_url;

                }).catch((error) => {

                    const errorCode = error?.response?.data?.error || 'ServerError';

                    // console.log(errorCode);

                    this._response.color = 'red',
                    this._response.message = _messages[errorCode]

                }).finally(() => {

                    this.spinner.get_plantas = false;

                });

            },

            // visibilityChanged(isVisible) {

            //     if (!isVisible)
            //     {
            //         return;
            //     }
            //     this.page_default++;
            //     this.getPlantas();

            //     console.log('isVisible...');
            // },

        },


      
    }
</script>
