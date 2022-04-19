import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Particulares from '../views/Particulares.vue'
import Empresas from '../views/Empresas.vue'
import SobreNosotros from '../views/SobreNosotros.vue'
import Contacto from '../views/Contacto.vue'
import Login from '../views/Login.vue'
import Form1 from '../views/Formulario1.vue'
import RecuContrasena from '../views/RecuContrasena.vue'
import Registro from '../views/Registro.vue'
import Form2 from '../views/Formulario2.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Particulares',
    name: 'Particulares', 
    component: Particulares
  },
  {
    path: '/Empresas',
    name: 'Empresas', 
    component: Empresas
  },
  {
    path: '/SobreNosotros',
    name: 'SobreNosotros', 
    component: SobreNosotros
  },
  {
    path: '/Contacto',
    name: 'Contacto', 
    component: Contacto
  },
  {
    path: '/login',
    name: 'Login', 
    component: Login
  },
  {
    path: '/RecuContrasena',
    name: 'RecuContrasena', 
    component: RecuContrasena
  },
  {
    path: '/Registro',
    name: 'Registro', 
    component: Registro
  },
  {
    path: '/form1',
    name: 'Form', 
    component: Form1
  },
  {
    path: '/form2',
    name: 'Form2', 
    component: Form2
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
