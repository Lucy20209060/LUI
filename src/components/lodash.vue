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
        //====================================== Array ========================================
        /*
            chunk
            将某个数组按特定的长度划分成多个数组
        */
        const arr0 = ['a', 'b', 'c', 'd',1]
        const arr1 = _.chunk(arr0, 2) 
        // [['a','b'],['c','d'],[1]]

        /*
            compact
            剔除掉数组中的假值（null,'',undefined,NaN）
            " "空字符串 不是假值 
        */
        const arr2 = _.compact([false,null,true,0,'',' ',undefined,NaN,'a',1])
        // [true, " ", "a", 1]

        /*
            difference 
            后续数组中出现的值 会在第一个数组中剔除掉 并返回剔除干净后的第一个数组
        */
        const arr3 = _.difference(arr0,['a','b'],['c',1])
        // [1]

        /*
            drop
            剔除掉数组的前n个元素 n默认等于1
        */
        const arr4 = _.drop(arr0,3)
        // ['d',1]

        /*
            dropRight
            删除掉数组尾部的n个元素 n默认等于1
        */
        const arr5 = _.dropRight([1, 2, 3]);
        // [1,2]
        const arr6 = _.dropRight([1, 2, 3],2);
        // [1]

        /*
            dropRightWhile

        */

        /*
            fill
            替换掉数组中的元素
        */
        const arr01 = ['a', 'b', 'c', 'd',1]
        // const arr7 = _.fill(arr01,5)
        // [5,5,5,5,5]

        const arr8 = _.fill(arr01,5,1,4)
        // ["a", 5, 5, 5, 1]

        /*
            findIndex
            返回匹配条件的第一个元素的索引值 未匹配返回 -1
        */
        var users = [
            { 'user': 'barney',  'active': false },
            { 'user': 'fred',    'active': false },
            { 'user': 'pebbles', 'active': true }
        ];

        let returnIndex = _.findIndex(users, function(chr) {
        return chr.user == 'barney';
        });
        // 0


        console.log(returnIndex)
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