import { createRouter, createWebHistory } from 'vue-router';
import Auth from '../services/middleware';


import Dashboard from '../views/DashboardView.vue';

// Utilitários
const Relatorios = () => import("@/views/relatorios");
const TestesApi = () => import("@/views/TestesApi.vue");
const TestePagination = () => import("@/views/TestePagination.View.vue");
const Info = () => import("@/views/Info.vue");

//Plantas
const Plantas = () => import("@/views/plantas/PlantasView.vue");
const CadastrarPlanta = () => import("@/views/plantas/CadastrarPlanta.vue");
const PerfilPlanta = () => import("@/views/plantas/PerfilPlanta.vue");
const EditarPlanta = () => import("@/views/plantas/EditarPlantaView.vue");

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
    path: '/teste-pagination',
    name: '/teste-pagination',
 

    component: TestePagination
    
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
    beforeEnter: Auth.redirectionIfnotAuthenticated,

    component: CadastrarUsuario,
    
  },

  {
    path: '/editar-usuario/:id',
    name: 'editar-usuario',
    beforeEnter: Auth.redirectionIfnotAuthenticated,

    component: EditarUsuario,
    
  },

  {
    path: '/perfil-usuario',
    name: 'perfil-usuario',
    beforeEnter: Auth.redirectionIfnotAuthenticated,

    component: PerfilUsuario,
    
  },

  // rotas plantas
  {
    path: '/nova-planta',
    name: 'nova-planta',
    beforeEnter: Auth.redirectionIfnotAuthenticated,

    component: CadastrarPlanta
  },
  {
    path: '/plantas',
    name: 'plantas',
    beforeEnter: Auth.redirectionIfnotAuthenticated,
    
    component: Plantas,

  },
  
  {
    path: '/editar-planta/:id',
    name: 'editar-planta',
    component: EditarPlanta
  
  },
  
  {
    path: '/perfil-planta/:id',
    name: 'perfil-planta',
    beforeEnter: Auth.redirectionIfnotAuthenticated,

    component: PerfilPlanta
  
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
