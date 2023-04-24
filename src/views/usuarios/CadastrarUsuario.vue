<template>
  
    <main class="form-signin w-100 m-auto">


    <form @submit.prevent="onSubmitRegister()">
        <img class="mb-4" src="@/assets/images/logo.png" alt="" width="72" height="57">

        <div>
              <strong class="w-100 h3 mb-3 fw-normal">Cadastrar Novo Usuário</strong>
        </div>
      

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

        <div class="form-floating">
            
            <input 
                v-model="_sobrenome"
                type="text" 
                class="form-control" 
                id="floatingInput" 
                placeholder="Sobrenome"
                required
            >
            <label for="floatingInput">Sobrenome*</label>
        </div> <br>

        <div class="form-floating">
            
            <input 
                v-model="_email"
                type="email" 
                class="form-control" 
                id="floatingInput" 
                placeholder="name@example.com"
                required
            >
            <label for="floatingInput">Email*</label>
        </div> <br>

        <div class="form-floating">
            
            <input 
                v-model="_cpf"
                type="text" 
                class="form-control" 
                id="floatingInput" 
                placeholder="cpf"
            >
            <label for="floatingInput">CPF</label>
        </div> <br>

        <div class="form-floating">
            
            <input 
                v-model="_data_nascimento"
                type="date" 
                class="form-control" 
                id="floatingInput" 
                placeholder="_data_nascimento"
            >
            <label for="floatingInput">data nascimento</label>
        </div> <br>

        <div class="form-floating">
            
            <input 
                v-model="_telefone"
                type="text" 
                class="form-control" 
                id="floatingInput" 
                placeholder="Telefone"
                required
            >
            <label for="floatingInput">Telefone*</label>
        </div> <br>

        <div class="form-group">
                        <label>Tipo</label>
                        <select 
                            v-model="_perfil" 
                            name="_tipo" 
                            id="tipo" 
                            required
                        >
                            <option value="1">Produtor </option>
                            <option value="2">Técnico</option>
                        </select>
                    </div>

       

        <div class="form-floating">

            <input 
                v-model="_password"
                type="text" 
                class="form-control" 
                id="floatingPassword" 
                placeholder="Password"
                required
            >
            <label for="floatingPassword">Password</label>
        </div> <br>          
       
        <button 
            class="w-100 btn btn-lg btn-primary" 
            type="submit"
        >
        <div   
            v-if="spinner.register" 
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
 <p class="mt-5 mb-3 text-body-secondary">&copy; 2017–2023</p>
</template>
<script>
import axios from '@/services/api';
import _messages from '@/helpers/messages';

export default {
name:'Register',
components:{ },

data() {

    return {

        _nome:'',
        _email:'',
        _cpf:'',
        _data_nascimento:'',
        _telefone:'',
        _perfil:'',
        _password:'',

        _response: {
                color: '',
                message:'',
            },
        spinner: {
            register: false
        }, 

    };
},

methods: {

    async onSubmitRegister() {

        const payload = {
            nome: this._nome,
            email: this._email,
            cpf:this._cpf,
            dt_nascimento: this._data_nascimento,
            telefone:this._telefone,
            perfil:this._perfil,
            password: this._password,
        };

        console.log(payload);

        this.resetResponse();

        this.spinner.register = true;

        axios.post('/cadastrar', payload).then(() => {
            
            this._response.color = 'green';
            this._response.message = 'Usuário cadastrado com sucesso!';

            this.resetForm();

        }).catch((error) => {
            
            const errorCode = error?.response?.data?.error || 'ServerError';

            this._response.color = 'red',
            this._response.message = _messages[errorCode]

        }).finally(() => {
            this.spinner.register = false;
        });
    },

    resetResponse() {
        this._response.color ='';
        this._response.message ='';
    },

    resetForm() {
        this._nome='';
        this._email='';
        this._cpf='';
        this._data_nascimento='';
        this._telefone='';
        this._perfil='';
        this._password='';
    }
}

}
</script>
<style scoped>


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



   
        