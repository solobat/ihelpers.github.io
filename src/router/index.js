import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/automations',
    name: 'Automations',
    component: () => import(/* webpackChunkName: "automations" */ '../views/Automations.vue'),
  },
  {
    path: '/create',
    name: 'AutomationCreate',
    component: () => import(/* webpackChunkName: "create" */ '../views/Create.vue'),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue'),
    meta: {
      redirectAuthed: '/',
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: {
      redirectAuthed: '/',
    },
  },
  {
    path: '/user/:id',
    name: 'User',
    component: () => import(/* webpackChunkName: "user" */ '../views/User.vue'),
  },
  {
    path: '/automation/update/:id',
    name: 'AutomationUpdate',
    component: () => import(/* webpackChunkName: "create" */ '../views/Create.vue'),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/automation/:id',
    name: 'Automation',
    component: () => import(/* webpackChunkName: "automation" */ '../views/Automation.vue'),
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: () => import(/* webpackChunkName: "privacy" */ '../views/Privacy.vue'),
  }
]

const router = new VueRouter({
  mode: process.env.NODE_ENV === 'production' ? 'hash' : 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const logged = Boolean(store.state.account.user)

  if (to.meta.redirectAuthed && logged) {
    next({
      path: to.meta.redirectAuthed
    })
  }
  if (to.meta.requireAuth) {
      if (logged) {
          next();
      } else {
          next({
              path: '/login',
              query: {redirect: to.fullPath}
          })
      }
  }
  else {
      next();
  }
})

export default router
