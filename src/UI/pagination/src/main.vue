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
        small:{
            type:Boolean,
            default:false
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