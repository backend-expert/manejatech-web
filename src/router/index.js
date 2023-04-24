import { createRouter, createWebHistory } from 'vue-router';
import Auth from '../services/middleware';


import Dashboard from '../views/DashboardView.vue';

// Utilitários
const Relatorios = () => import("@/views/relatorios");
const TestesApi = () => import("@/views/TestesApi.vue");
const Info = () => import("@/views/Info.vue");

//Plantas
const Plantas = () => import("@/views/plantas/Plantas.vue");
const CadastrarPlanta = () => import("@/views/plantas/CadastrarPlanta.vue");
const Planta = () => import("@/views/plantas/PerfilPlanta.vue");

//Usuários
const Usuarios = () => import("@/views/usuarios/");
const CadastrarUsuario = () => import("@/views/usuarios/CadastrarUsuario.vue");
const PerfilUsuario = () => import("@/views/usuarios/PerfilUsuario.vue");
const EditarUsuario = () => import("@/views/usuarios/EditarUsuario.vue");

const routes = [
  { 
    path: '/', 
    name: 'home', 
    beforeEnter: Auth.redirectionIfnotAuthenticated,
    component: Dashboard 
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
    path: '/about',
    name: 'about',

    component: function () {
      return import('../views/AboutView.vue')
    }
  },  

  {
    path: '/usuarios',
    name: 'usuarios',
    beforeEnter: Auth.redirectionIfnotAuthenticated,
   
    component: Usuarios
     // ,beforeEnter: Auth.auth,
    
  },

  {
    path: '/teste-api',
    name: 'teste-api',

    component: TestesApi
    
  },

  {
    path: '/info',
    name: 'info',

    component: Info
  },

  {
    path: '/relatorios',
    name: 'relatorios',

    component:Relatorios,
  },  

  // route usuarios
  {
    path: '/novo-usuario',
    name: 'novo-usuario',

    component: CadastrarUsuario,
    
  },

  {
    path: '/editar-usuario/:id',
    name: 'editar-usuario',

    component: EditarUsuario,
    
  },

  {
    path: '/perfil-usuario',
    name: 'perfil-usuario',

    component: PerfilUsuario,
    
  },


  // rotas plantas
  {
    path: '/nova-planta',
    name: 'nova-planta',

    component: CadastrarPlanta
  },
  {
    path: '/plantas',
    name: 'plantas',
    
    component: Plantas,

    // component: function () {
    //   return import('../views/plantas/')
    // }
   
  },
  {
    path: '/planta',
    name: 'planta',
    component: Planta
  
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
