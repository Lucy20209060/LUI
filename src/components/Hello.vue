<template>
    <div class="hello-wrap">
        <i>hahahahhaha</i>
        <p @click="clicks">{{msg}}</p>

        <Btn @change="change1"></Btn>

    </div>
</template>

<script>
// import { Toast } from 'alucy'

import Btn from '@/page/button/button'

import { Toast } from 'lucy-toast'

export default {
	
    name: 'hello',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App 假装有个数据吧',
            citys:[
            	{
                    id:1,
                    name:'北京'
                },
                {
                    id:2,
                    name:'浙江'
                },
            ],
            sheng:[],
        }
    },
    mounted(){
    	// this.is_login();


    	
    },
    components: {
	    Btn
	  },
    methods:{
    	clicks(){
    		this.$toolTip('细胞信息提示')
    	},

        tap(){
            console.log('tap')
        },

    	change1(){
    		console.log('change1')
    	},

    	sheng(){
    		console.log('sheng')
    	},
    	

    	// 是否登录
		is_login(){

			this.$axios.post(this.$api.login.is_login)
			.then((res)=>{
				
				console.log(res.data)
				console.log(this)


			}).catch((err)=>{
				
			})
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	$class-pre:'hello';
	.#{$class-pre}{
		&-wrap{
			font-size: 30px;
			i{
				color: red;
			}
		}
	}
</style>
