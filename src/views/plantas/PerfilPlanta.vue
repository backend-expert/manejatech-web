<template>
    <div>
      
        <h3 class="text-center">Perfil Nome da Planta</h3>
        <div class="row">
            <div class="col-md-6">
                
                    <div class="form-group">
                        <label>Nome</label>
                        <!-- <input type="text" class="form-control" v-model="product.name"> -->
                        <input type="text" class="form-control">
                        
                    </div>

                    <div class="form-group">
                        <label>Detail</label>
                        <input type="text" class="form-control">
                    </div>

                    <router-link to="" class="btn btn-success">Editar</router-link>
                    <button class="btn btn-danger">cancelar</button>
                
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
