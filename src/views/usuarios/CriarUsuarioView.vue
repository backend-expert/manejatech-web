<template>
    <div>

        <h3 class="text-center">Criar Um Novo Usuário</h3>
        
        <div class="row">
            <div class="col-md-6">

                <form @submit.prevent="addProduct">
                    <div class="form-group">
                        <label>Nome</label>
                        <!-- <input type="text" class="form-control" v-model="usuario.nome"> -->
                        <input type="text" class="form-control" >
                    </div>

                    <div class="form-group">
                        <label>Sobrenome</label>
                        <input type="text" class="form-control">
                    </div>

                    <div class="form-group">
                        <label>CPF</label>
                        <input type="text" class="form-control">
                    </div>

                    <div class="form-group">
                        <label>Telefone</label>
                        <input type="text" class="form-control">
                    </div>

                    <div class="form-group">
                        <label>Tipo</label>
                        <select name="tipo" id="tipo">
                            <option value="produtor">Produtor </option>
                            <option value="tecnico">Técnico</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label>Data de Nascimento</label>
                        <input type="data" class="form-control">
                    </div>

                    



                    <button type="submit" class="btn btn-primary">Criar</button>
                </form>

            </div>
        </div>

    </div>
</template>

<script>
    export default {
        // data() {
        //     return {
        //         product: {}
        //     }
        // },
        // methods: {
        //     addProduct() {
        //         this.axios
        //             .post('http://localhost:8000/api/products', this.product)
        //             .then(response => (
        //                 this.$router.push({ name: 'home' })
        //             ))
        //             .catch(err => console.log(err))
        //             .finally(() => this.loading = false)
        //     }
        // }
    }
</script>
