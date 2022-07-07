import Vue from 'vue'
import VueRouter from 'vue-router'
import Accueil from '../views/Main.vue'
import Utilisateurs from '../views/client/choix_user.vue'
import Particuliers from '../views/Solutions/particuliers.vue'
import Professionnel from '../views/Solutions/professionnel.vue'
import Groupe from '../views/groupe/groupe.vue'
import devis from '../views/devis/devis.vue'
import Monobloc from '../views/Solutions/Climatiseurs/Monobloc.vue'
import Split from '../views/Solutions/Climatiseurs/Split.vue'
import Splitfixe from '../views/Solutions/Climatiseurs/Splitfixe.vue'
import Bisplitfixe from '../views/Solutions/Climatiseurs/Bisplitfixe.vue'


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
    path: '/Utilisateurs/Particuliers',
    name:'Particuliers',
    component: Particuliers
  },
  {
    path:'/Utilisateurs/Professionnel',
    name:'Professionnel',
    component: Professionnel

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
  },
  {
    path: '/Solutions/Monobloc',
    name:'Monobloc',
    component: Monobloc
  },
  {
    path: '/Solutions/Split',
    name:'Split',
    component: Split
  },
  {
    path: '/Solutions/Splitfixe',
    name:'Splitfixe',
    component: Splitfixe
  },
  {
    path:'/Solutions/Bisplitfixe',
    name: 'Bisplitfixe',
    component: Bisplitfixe
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
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 };
  }
})

export default router
