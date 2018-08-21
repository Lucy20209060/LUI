<template>
    <div class="hello-wrap">
        <i>hahahahhaha</i>
        <p @click="clicks">{{msg}}</p>

        <!-- <Btn @change="change1"></Btn> -->
		<lu-date-picker />
    </div>
</template>

<script>
// import { Toast } from 'alucy'
import { Toast } from 'lucy-toast'

export default {
	
    name: 'hello',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App 假装有个数据吧',
        }
    },
    mounted(){
		let base64Reg = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/g;
		
		// var reg=/boy(s)?\s+and\s+girl(s)?/gi;
 console.log(base64Reg.test('na='));


    	
    },
    components: {
		// Btn
		// Datepicker
	  },
    methods:{
    	clicks(){
            // console.log(this.$children)
    		// this.$anchu_toast('细胞信息提示')
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
			// font-size: 30px;
			i{
				color: red;
			}
		}
	}
</style>
