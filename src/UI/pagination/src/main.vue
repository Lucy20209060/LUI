<template>
    <i 
        class="iconfont lu_icon"
    >{{small}}
    </i>
</template>

<script>
export default {
    name: 'lu_pagination',
    data () {
        return {
            
            
        }
    },
    props: {
        // 分页大小类型
        small: {
            type:Boolean,
            default:false
        },
        // 页数背景色
        background: {
            type:Boolean,
            default:false
        },
        // 总页数
        pageCount: Number,
        // 当前页
        currentPage: {
            type: Number,
            default: 1
        },
        // 上一页字符
        prevText: {
            type:String,
            default:'上一页'
        },
        // 下一页字符
        nextText: {
            type:String,
            default:'下一页'
        }
    },
    created() {
        console.log(this.small)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .lu_icon{
        font-size: 20px;
    }
</style>