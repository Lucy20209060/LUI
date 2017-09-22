<template>
    <div class="hello-wrap">
        <i>hahahahhaha</i>
        <input type="text" value="2324323">
        <p v-for="(item,index) in list" key="index">{{item.ad_name}}</p>
    </div>
</template>

<script>
// import { getAdList } from '@/utils/http'
import Api from '@/utils/ajax'
import api,{ order } from '@/utils/Api'
export default {

    name: 'hello',
    data () {
        return {
            msg: 'about',
            list:[]
        }
    },
    mounted(){
        // console.log('this.$jsEncrypt',this.$jsEncrypt);
        // this.lucy.fun2();

        // this.console(getAdList)

        const params = {
            pid:2
        }

        console.log(Api)

        // Api.getlevel1({
        //     pid:2
        // }).then(res => {
        //     // this.sendCode = true
        //     // console.log(res.data.data)
        //     // this.setTimeOut()
        // }).catch(err => {
        //     // _.alert('短信发送失败')

        //     console.log('err',err.data)
        // })


    },
    methods:{


    	// 是否登录
		// is_login(){

		// 	// console.log(this.$axios.post(this.$api.login.is_login))

		// 	this.$axios(this.$api.login.is_login)
		// 	.then((res)=>{
				
		// 		console.log(res.data)
		// 		// console.log(this)


		// 	}).catch((err)=>{
				
		// 	})
		// }
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
