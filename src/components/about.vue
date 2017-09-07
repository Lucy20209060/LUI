<template>
    <div class="hello-wrap">
        <i>hahahahhaha</i>
        <input type="text" value="2324323">
        <p>{{msg}}</p>
    </div>
</template>

<script>
import { getAdList } from '@/utils/http'
export default {

    name: 'hello',
    data () {
        return {
            msg: 'about',
        }
    },
    mounted(){
        console.log('this.$jsEncrypt',this.$jsEncrypt);
        // this.lucy.fun2();

        const params = {
            pid:2
        }

        // getAdList(params).then(res => {
        //  console.log(1111)
     //        console.log(res.data)
            
     //    }).catch(error => {
     //        // console.log(error.data.data)
     //    })


    },
    methods:{


    	// 是否登录
		is_login(){

			// console.log(this.$axios.post(this.$api.login.is_login))

			// this.$axios.post(this.$api.login.is_login)
			// .then((res)=>{
				
			// 	console.log(res.data)
			// 	// console.log(this)


			// }).catch((err)=>{
				
			// })
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
