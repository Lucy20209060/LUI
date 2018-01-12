<template>
    <div class="lodash-wrap">
        lodash.js测试页面
    </div>
</template>

<script>

export default {
    name: 'lodash',
    data () {
        return {
            timer:null
        }
    },
    mounted(){
        /*
            chunk
            将某个数组按特定的长度划分成多个数组
        */
        const arr1 = _.chunk(['a', 'b', 'c', 'd',1], 2) 
        //[['a','b'],['c','d'],[1]]

        /*
            compact
            剔除掉数组中的假值（null,'',undefined,NaN）
            " "空字符串 不是假值 
        */
        const arr2 = _.compact([false,null,true,0,'',' ',undefined,NaN,'a',1])
        // [true, " ", "a", 1]


        console.log(arr2)
    },
    methods:{
        interval(){
            
        },
        clearInterval() {
            
        }
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	$class-pre:'test';
	.#{$class-pre}{
		&-wrap{
			
		}
	}
</style>