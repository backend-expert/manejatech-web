<template>
    <div> <button @click="goBack">
      Voltar
    </button>



        <h3 class="text-center">Editar Usuário</h3>


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


        <div class="row">
            <div class="col-md-6">

                <form @submit.prevent="updateUser">

                    <div class="form-group">
                        <label>Name</label>
                        <input 
                            v-model="user.nome"
                            type="text" 
                            class="form-control" 

                        >
                    </div>


                    <div class="form-group">
                        <label>sobrenome</label>
                        <input 
                            v-model="user.sobrenome"
                            type="text" 
                            class="form-control" 

                        >
                    </div> 

                    <div class="form-group">
                        <label>CPF</label>
                        <input 
                            v-model="user.sobrenome"
                            type="text" 
                            class="form-control" 

                        >
                    </div>

                    <div class="form-group">
                        <label>Telefone</label>
                        <input 
                            v-model="user.telefone"
                            type="text" 
                            class="form-control" 

                        >
                    </div>

                    <div class="form-group">
                        <label>Data Nascimento</label>
                        <input 
                            v-model="user.dt_nascimento"
                            type="text" 
                            class="form-control" 

                        >
                    </div>

                    <div class="form-group">
                        <label>Data Nascimento</label>
                        <input 
                            v-model="user.perfil"
                            type="text" 
                            class="form-control" 

                        >
                    </div>

                    <div class="form-group">
                        <label>Email</label>
                        <input 
                            v-model="user.email"
                            type="email" 
                            class="form-control"
                        > 
                    </div>
                    
                    <button 
                        type="submit" 
                        class="btn btn-primary"
                    >

                    <div   
                        v-if="spinner.update_user" 
                        class="spinner-border text-warning" role="status"
                    >
                        <span class="visually-hidden">Loading...</span>
                    </div>

                        Enviar
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

import axios from '@/services/api';
import messages from '@/helpers/messages';
    export default {
        
        data() {
            return {

                user: {},
                
                spinner:{
                    update_user: false
                },

                _response: {
                    color:'',
                    message:'',
                },

            }
        },

        created() {

          this.getUser()
        },

        methods: {       

            getUser() {
                 axios.get(`usuario/${this.$route.params.id}`)
                    .then((response) => {
                        this.user = response.data;
                    });
            },
           
            updateUser() {
                axios
                    .patch(`usuario/${this.$route.params.id}`, this.user)
                    .then(() => {

                        this._response.color = 'green';
                        this._response.message = 'Planta editada com sucesso!';
                        // this.$router.push({ name: 'perfil-usuario'+$route.params.id });
                    }).catch((error) =>{

                        const errorCode = error?.response?.data?.error || 'ServerError';

                        this._response.color = 'red',
                        this._response.message = _messages[errorCode]
                     
                    }).finally(() => {

                        this.spinner.update_user = false;

                    });

                   
            },

        }
    }
</script>
