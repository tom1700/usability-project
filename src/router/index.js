import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/screens/Home'
import MyAccount from '@/screens/MyAccount'
import Contact from '@/screens/Contact'
import GetPremium from '@/screens/GetPremium'
import Messages from '@/screens/Messages'
import Comments from '@/screens/Comments'
import Login from '@/screens/Login'
import tracker from '../tracker';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/account',
      name: 'MyAccount',
      component: MyAccount
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/premium',
      name: 'GetPremium',
      component: GetPremium
    },
    {
      path: '/messages',
      name: 'Messages',
      component: Messages
    },
    {
      path: '/comments/:newsId',
      name: 'Comments',
      component: Comments
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

router.beforeEach((to, _, next) => {
  tracker.pageView(to.name)
  next()
})

export default router;
