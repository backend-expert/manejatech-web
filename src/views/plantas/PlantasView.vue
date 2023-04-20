<template>
    <div>
        <h2 class="text-center">Lista de Plantas</h2>
        <router-link to="/nova-planta">Adicionar </router-link>

        <table class="table">
            <thead>
            <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>Tipo</th>
                <th>Opções</th>
                <!-- <th>Actions</th> -->
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>3</td>
                <td>vical</td>
                <td>Touceira</td>
                <td>
                    <div class="btn-group" role="group">
                        <router-link to="#" class="btn btn-success">visualizar</router-link>
                        <router-link to="/planta" class="btn btn-success">Editar</router-link>
                        <button class="btn btn-danger">Excluir</button>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
      
    }
</script>
