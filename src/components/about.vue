<template>
    <div class="hello-wrap">
        <i>hahahahhaha</i>
        <input type="text" value="2324323">
        <p v-for="(item,index) in list" key="index">{{item.ad_name}}</p>
    </div>
</template>

<script>
// import { getAdList } from '@/utils/http'
import api from '@/utils/Api'

import { getlevel1,getAdList,fetch } from '@/utils/ajax'

export default {

    name: 'hello',
    data () {
        return {
            msg: 'about',
            list:[]
        }
    },
    mounted(){

        async function sayHello(params) { 
          const externalFetchedText = await fetch(`${api.home.getAdList}`, params)
          console.log(externalFetchedText); // Hello, es8
        }
        sayHello();

        console.log(11111111)




        let obj = { 
            name: 'lucy', 
            age: 18,
            add:'杭州',
            child:{
                child1:{
                    name:'lucy1',
                    age:3
                },
                child1:{
                    name:'lucy2',
                    age:5
                }
            }
        }

        // console.log(Object.getOwnPropertyDescriptors(obj))
        // console.log(obj)

        // for (let [k,v] of Object.entries(obj)) {
        //     console.log(k,v);
        // }

        // console.log(Object.entries(obj))

        // const arr = Object.values(obj)

        // console.log(arr)

        // const str = 'hhhh'
        // console.log(str.padStart(3,'abc'))
        // console.log(str.padEnd(3,'abc'))

        // const arr = [1,2,3,4,]

        // console.log(arr)

        // function gets(a,b,c,){
        //     console.log(a,b,c)
        // }

        // gets(1,2,3,);

        // console.log('this.$jsEncrypt',this.$jsEncrypt);
        // this.lucy.fun2();
        // this.console(getAdList)


        // getlevel1().then(res => {
        //     // this.sendCode = true
        //     console.log('getlevel1',res)
        //     // this.setTimeOut()
        // }).catch(err => {
        //     // _.alert('短信发送失败')

        //     console.log('err',err)
        // })

        // this.get();
        // console.log(222222)

    },
    methods:{

        get(){
            getAdList({
                pid:2
            }).then(res => {
                // this.sendCode = true
                console.log('getAdList',res)
                // this.setTimeOut()
            }).catch(err => {
                // _.alert('短信发送失败')

                console.log('err',err)
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
