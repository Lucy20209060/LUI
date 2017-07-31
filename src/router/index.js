import Vue from 'vue'
import Router from 'vue-router'

import index from '@/components/index'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import about from '@/components/about'

Vue.use(Router)

const routes = [
	{ path: '/',name: 'index',component: index },
	{ path: '/hello',name: 'Hello',component: Hello },
	{ path: '/home',name: 'home',component: Home },
	{ path: '/about',name: 'about',component: about }
]

const router = new Router({
    routes
});

export default router;
