<template>
    <div>
        <h3 class="text-center">Editar Usuário</h3>
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
                        <label>Detail</label>
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
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

import axios from '@/services/api'
    export default {
        data() {
            return {
                user: {},
                spinner:{
                    get_user: false
                },

            }
        },

        created() {

            axios.get(`usuario/${this.$route.params.id}`)
                .then((response) => {
                    this.user = response.data;
                });
        },

        methods: {
            updateUser() {
                axios
                    .patch(`usuario/${this.$route.params.id}`, this.user)
                    .then(() => {
                        // this.$router.push({ name: 'perfil-usuario'+$route.params.id });
                    })
                    .finally(() => {

                        this.spinner.get_user = false;

                    });
            }
        }
    }
</script>
