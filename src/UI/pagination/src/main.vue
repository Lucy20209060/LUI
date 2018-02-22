<template>
    <i 
        class="iconfont lu_icon"
    >
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
        small: {
            type:Boolean,
            default:false
        },
        background: {
            type:Boolean,
            default:false
        },
        'page-count': Number,
        'current-page': Number,
        'prev-text': {
            type:String,
            default:'上一页'
        },
        'next-text': {
            type:String,
            default:'下一页'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .lu_icon{
        font-size: 20px;
    }
</style>