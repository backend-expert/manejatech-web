<template>
    <div>

        <!-- <button @click="goBack()">
      Voltar
    </button> -->
      
        <h3 class="text-center">
           
            
            Perfil Planta
        </h3> <br>



        <div class="row">
            <div class="col-md-6">
                
                    <div class="form-group">
                        <label>Código: {{planta.id}}</label>
                    
                     
                        
                    </div>
                    <div class="form-group">
                        <label>Nome: {{planta.nome}}</label>
                     
                        
                    </div>
                    <div class="form-group">
                        <label>Código Tipo : {{planta.tipo_planta_id}}</label>
                     
                        
                    </div>


                    <div v-if="planta.tipo_planta_id == 1 ">
                        <label for="">Tipo:         Árvore</label>
                    </div>

                    <div v-else-if="planta.tipo_planta_id == 2 ">
                        
                        <label for="">Tipo:        Palmeira</label>
                    </div>

                    <div v-else-if="planta.tipo_planta_id == 3 ">
                        <label for="">Tipo:       Touceira</label>
                        
                    </div>

                    <div v-else>
                        Sem especificação 
                    </div>


                    <!-- <div class="form-group">
                        <label
                        v-if="planta.tipo_planta_id == 1 "
                        
                        >Tipo: Árovore</label>
                        
                    </div>

                    <div class="form-group">
                        <label
                        v-else-if="planta.tipo_planta_id == 2"
                        
                        >Tipo: Palmeira</label>
                        
                    </div>
                    <div class="form-group">
                        <label
                        v-if="planta.tipo_planta_id == 1 "
                        
                        >Tipo: Árovore</label>
                        
                    </div> -->

                 
                    <router-link 
                            :to="{name: 'editar-planta', params: { id: planta.id }}"                           
                            class="btn btn-success">
                            Editar
                        </router-link>

                    <button
                        @click="goBack()" 
                    
                        class="btn btn-danger"
                    >
                        
                        cancelar</button>
                
            </div>
        </div>
    </div>
</template>

<script>
import axios from '@/services/api';
import _messages from '@/helpers/messages';

    export default {
        data() {
            return {
                planta: {},

                _response: {
                    color: '',
                    message:'',
                },
             
            }
        },

        created() {

            this.getPlanta()         
        },

        methods: {

            getPlanta() {

                // this.spinner.perfil = true;
                
                axios
                    .get(`/plantas/${this.$route.params.id}`).then((response) => {

                        // console.log(response);
                        this.planta = response.data;

                    }).catch((error) => {

                        const errorCode = error?.response?.data?.error || 'ServerError';

                        this._response.color = 'red',
                        this._response.message = _messages[errorCode]


                    }).finally(()=>{
           
                    })
            },

            goBack() {
                this.$router.go(-1)
            }


        }



        // created() {
        //     this.axios
        //         .get(`http://localhost:8000/api/products/${this.$route.params.id}`)
        //         .then((res) => {
        //             this.product = res.data;
        //         });
        // },
        // methods: {
        //     updateProduct() {
        //         this.axios
        //             .patch(`http://localhost:8000/api/products/${this.$route.params.id}`, this.product)
        //             .then((res) => {
        //                 this.$router.push({ name: 'home' });
        //             });
        //     }
        // }
    }
</script>
