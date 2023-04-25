<template>
     <main class="form-signin w-100 m-auto">

        <button
        @click="goBack()"
        >
        Voltar

        </button>

        <form @submit.prevent="onCadastrarPlanta()">
        <img class="mb-4" src="@/assets/images/logo.png" alt="" width="72" height="57">

        <div>
            <strong class="w-100 h3 mb-3 fw-normal">Cadastrar Nova Planta</strong>
        </div><br>

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
                v-model="_nome"
                type="text" 
                class="form-control" 
                id="floatingInput" 
                placeholder="nome"
                required
            >
            <label for="floatingInput">Nome*</label>
        </div> <br>

        <div class="form-group">
            <label>Tipo*</label>
            <select 
                v-model="_tipo" 
                name="_tipo" 
                id="tipo" 
                required
            >
                <option value="1">Árvores</option>
                <option value="2">Palmeiras</option>
                <option value="3">Touceiras</option>
            </select>
        </div><br>

        <button 
            class="w-100 btn btn-lg btn-primary" 
            type="submit"
        >
            <div   
                v-if="spinner.cadastrar" 
                class="spinner-border text-warning" role="status"
            >
                <span class="visually-hidden">Loading...</span>
            </div>
            <!-- <img 
                v-if="spinner.register"
                src="@/assets/images/icons8-spinner.gif" alt=""
            > -->
            Enviar
        </button>

        </form>
    </main>
    
    
    
    <div>
        <div   
            v-if="spinner.register" 
            class="spinner-border text-warning" role="status"
        >
            <span class="visually-hidden">Loading...</span>
        </div>


        <h3 class="text-center">Plantas Cadastradas</h3>
        <div class="row"  
            v-for="planta in plantas"
            :key="planta.id"
        >
            <div class="col-md-6">
                <!-- <form @submit.prevent="adPlanta"> -->
                    <div class="form-group">
                        <label>{{ planta.nome }}</label>
                        
                       
                    </div>
                    
                    <div class="form-group">
                        <label>{{ planta.tipo_planta_id }}</label>
                        <input type="text" class="form-control">
                    </div>
                    
                    
                    <div class="form-group">
                        <label>Tipo : {{planta.tipo_planta_id}}</label>
                     
                        
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


                    <!-- <button type="submit" class="btn btn-primary">Cadastrar</button> -->
                <!-- </form> -->
            </div>
        </div>
    </div>
    
    <p class="mt-5 mb-3 text-body-secondary">&copy; 2017–2023</p>
</template>

<script>
import axios from '@/services/api';
import _messages from '@/helpers/messages';

export default {
    name:'CadastrarPlanta',
    components:{ },

    data() {

        return {
            _nome:'',
            _tipo:'',
    
            _response: {
                    color: '',
                    message:'',
                },

            spinner: {
                cadastrar: false
            }, 

            //plantas mostrar
            plantas:[], 

            spinner: {
                get_plantas:false
            }

        };
    },

    created() {
        this.getPlantas()
    },

    methods: {

        goBack() {
            this.$router.go(-1)
        },

        async onCadastrarPlanta() {

            const payload = {
                nome: this._nome,
                tipo_planta_id:this._tipo,
               
            };

            console.log(payload);

            this.resetResponse();

            this.spinner.cadastrar = true;

            axios.post('/plantas', payload).then(() => {
                
                this._response.color = 'green';
                this._response.message = 'Planta cadastrada com sucesso!';

                this.resetForm();

            }).catch((error) => {
                
                const errorCode = error?.response?.data?.error || 'ServerError';

                this._response.color = 'red',
                this._response.message = _messages[errorCode]

            }).finally(() => {

                this.spinner.cadastrar = false;
            
            });
        },

        resetResponse() {
            this._response.color ='';
            this._response.message ='';
        },

        resetForm() {
            this._nome='';
            this._tipo='';
        },

        // plantas mostrar
        getPlantas() {
          this.spinner.get_plantas = true;

          axios.get('/planta/pesquisar').then((response) => {
            
            this.plantas = response.data.data;
          
          }).finally(() => {

            this.spinner.get_plantas = false;
          
          });
        
        }



    }

}


   // methods: {
        //     addPlanta() {
        //         this.axios
        //             .post('http://localhost:8000/api/plantas', this.planta)
        //             .then(response => (
        //                 this.$router.push({ name: 'home' })
        //             ))
        //             .catch(error => console.log(error))
        //             .finally(() => this.loading = false)
        //     }
        // }
  
</script>

<style>
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
     
