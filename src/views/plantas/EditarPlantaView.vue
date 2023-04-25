<template>
    <div>
        <button @click="goBack">
      Voltar
    </button>

        <h3 class="text-center">Editar Planta</h3> <br>

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
                <form @submit.prevent="updatePlanta">

                    <div class="form-group">
                        <label>{{ planta.nome }}</label>
                        <input type="text" class="form-control" v-model="planta.nome"
                      
                        >
                    </div>
                    <div class="form-group">
                        <label>{{planta.tipo_planta_id}} </label>
                        <input 
                            v-model="_tipo"
                            type="text" 
                            class="form-control"
                           
                        >
                    </div>

                    <div class="form-group">
                        <label>Tipo*</label>
                        <select 
                            v-model="planta.tipo_planta_id" 
                            name="_tipo" 
                            id="tipo" 
                            required
                        >
                            <option value="1">Árvores</option>
                            <option value="2">Palmeiras</option>
                            <option value="3">Touceiras</option>
                        </select>
                    </div><br>


                    <button type="submit" class="btn btn-primary">
                        <div   
                            v-if="spinner.update_planta" 
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
import _messages from '@/helpers/messages';

    export default {
        data() {
            return {
                planta: {},

    
                _response: {
                        color: '',
                        message:'',
                    },

                spinner: {
                    update_planta: false
                }, 


            }
        },

        created() {

            this.getPlanta()         
        },

        methods: {

            getPlanta() {
                
                axios
                    .get(`/plantas/${this.$route.params.id}`).then((response) => {

                        // console.log(response);

                        this.planta = response.data;
                    });
            },

            updatePlanta() {
                axios
                    .put(`/plantas/${this.$route.params.id}`, this.planta).then(() => {

                        this._response.color = 'green';
                        this._response.message = 'Planta editada com sucesso!';
                        // this.$router.replace(`planta/pesquisar/${this.$route.params.id}`)

                        // this.$router.push({ name: 'home' });
                        // this.$router.push({ name: 'home' });
                        // this.$router.go(-1);
                    }).catch((error) =>{

                        const errorCode = error?.response?.data?.error || 'ServerError';

                        this._response.color = 'red',
                        this._response.message = _messages[errorCode]
                     
                    }).finally(() => {

                        this.spinner.update_planta = false;

                    });
            },

            goBack() {
                this.$router.go(-1)
            }


        }
    }
</script>
