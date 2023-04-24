<template>
    <div>
        <h3 class="text-center">Cadastrar Planta</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="adPlanta">
                    <div class="form-group">
                        <label>Nome</label>
                        <input type="text" class="form-control">
                    </div>
                   
                    <div class="form-group">
                        <label>Tipo</label>
                        <input type="text" class="form-control">
                    </div>


                    <div class="form-group">
                        <label>Detail</label>
                        <input type="text" class="form-control">
                    </div>
                    <button type="submit" class="btn btn-primary">Cadastrar</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                planta: {}
            }
        },
        methods: {
            addPlanta() {
                this.axios
                    .post('http://localhost:8000/api/plantas', this.planta)
                    .then(response => (
                        this.$router.push({ name: 'home' })
                    ))
                    .catch(error => console.log(error))
                    .finally(() => this.loading = false)
            }
        }
    }
</script>
