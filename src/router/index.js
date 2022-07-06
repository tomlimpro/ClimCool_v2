import Vue from 'vue'
import VueRouter from 'vue-router'
import Accueil from '../views/Main.vue'
import Utilisateurs from '../views/client/choix_user.vue'
import Climatiseurs from '../views/Solutions/climatiseurs.vue'
import Groupe from '../views/groupe/groupe.vue'
import devis from '../views/devis/devis.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'Accueil',
    component: Accueil
  },
  {
    path:'/Accueil',
    name:'Accueil',
    component: Accueil
  },
  {
    path: '/Utilisateurs',
    name: 'Utilisateurs',
    component: Utilisateurs
  },
  {
    path: '/Climatiseurs',
    name:'Climatiseurs',
    component: Climatiseurs
  },
  {
    path: '/Notre-groupe',
    name:'Groupe',
    component: Groupe
  }
  ,
  {
    path: '/Contact-devis',
    name:'Contact-devis',
    component: devis
  }
  /*
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about"  '../views/About.vue')
  }
  */
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
