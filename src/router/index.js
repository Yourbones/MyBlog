import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login'
import Admin from '../views/Admin'
import PostDetail from '../views/PostDetail'
import About from '../views/About'
import EditPost from '../views/EditPost'
import Page404 from '../views/404'

// 显式使用插件
Vue.use(VueRouter)

// 项目路由，复杂时可以考虑移到单独文件
const routes = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    name: 'Index',
    meta: {
      title: '欢迎光临👏',
    },
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '用户登录',
    },
    component: Login,
  },
  {
    path: '/admin',
    name: 'Admin',
    meta: {
      title: '管理后台',
      isLogin: true,
    },
    component: Admin,
  },
  {
    path: '/post/:id',
    name: 'PostDetail',
    meta: {
      title: '文章详情',
    },
    component: PostDetail,
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: '关于我的一些事情',
    },
    component: About,
  },
  {
    path: '/editor/:id',
    meta: {
      title: '写文章',
    },
    component: EditPost,
  },
  {
    path: '*',
    meta: {
      title: '404',
    },
    component: Page404,
  },
]

// 生成 router 实例
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

// 设置导航守卫
router.beforeEach((to, from, next) => {
  // 设置页面标题
  if (to.meta && to.meta.title) {
    const title = to.meta.title || '许某某的奇妙幻想'

    document.title = title
  }
  // 判断页面是否设置权限
  if (to.meta && to.meta.isLogin) {
    next('/login')
  }
  next()
})

export default router
