import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Auth from '../services/middleware';

const routes = [
  { path: '/', name: 'home', component: HomeView },
  {
    path: '/about',
    name: 'about',

    component: function () {
      return import('../views/AboutView.vue')
    }
  },  
  {
    path: '/usuarios',
    name: 'usuarios',
   
    component: () =>  import('../views/usuarios/')
     // ,beforeEnter: Auth.auth,
    
  },

  {
    path: '/entrar',
    name: 'Entrar',
    beforeEnter: Auth.auth,

    // component: () => import('../views/Plantas.vue'),beforeEnter: Auth.auth,
   
    component: function () {
      return import('../views/Entrar.vue')    
    }
  },

  {
    path: '/teste-api',
    name: 'teste-api',

    component: function () {
      return import('../views/TestesApi.vue')
    }
  },

  {
    path: '/info',
    name: 'info',

    component: function () {
      return import('../views/Info.vue')
    }
  },

  {
    path: '/relatorios',
    name: 'relatorios',

    component: function () {
      return import('../views/Relatorios/')
    }
  },  

  // route usuarios
  {
    path: '/novo-usuario',
    name: 'novo-usuario',

    component: function () {
      return import('../views/usuarios/CadastrarUsuario.vue')
    }
  },


  // rotas plantas
  {
    path: '/nova-planta',
    name: 'nova-planta',

    component: function () {
      return import('../views/plantas/CadastrarPlanta.vue')
    }
  },
  {
    path: '/plantas',
    name: 'plantas',
    // component: () => import('../views/Plantas.vue'),beforeEnter: Auth.auth,

    component: function () {
      return import('../views/plantas/')
    }
   
  },
  {
    path: '/planta',
    name: 'planta',
    component: function () { return import('../views/plantas/Planta.vue') }
  
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
