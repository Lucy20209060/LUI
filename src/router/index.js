import Vue from 'vue'
import Router from 'vue-router'

import index from '@/components/index'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import about from '@/components/about'
import cart from '@/components/cart'

Vue.use(Router)

const routes = [
	{ path: '/',name: 'index',component: index },
	{ path: '/hello',name: 'Hello',component: Hello },
	{ path: '/home',name: 'home',component: Home },
	{ path: '/cart',name: 'cart',component: cart },
	{ path: '/about',name: 'about',component: about }
]

const router = new Router({
    routes
});

export default router;