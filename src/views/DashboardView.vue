<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/images/logo.png">
    <Dashboard msg="Welcome Dashboard"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Dashboard from '@/components/Dashboard.vue'

export default {
  name: 'DashboardView',
  components: {
    Dashboard
  }
}
</script>
