import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/articles/createarticle'
  },
  {
    path: '/articles/createarticle',
    name: 'createarticle',
    component: () => import('../views/CreateArticle')
  },
  {
    path: '/articles/listarticle',
    name: 'listarticle',
    component: () => import( '../views/ListArticle')
  },
  {
    path: '/articles/:id/editarticle',
    name: 'editarticle',
    component: () => import( '../views/EditArticle')
  },
  {
    path: '/articles/:id/seearticle',
    name: 'seearticle',
    component: () => import( '../views/seeArticle')
  },
]

const router = new VueRouter({
  routes
})

export default router
