<template>
    <i :class="['iconfont', 'lu_icon', className]"></i>
</template>

<script>
    export default {
        name: 'LuIcon',
        props: {
            // 图标class 使用 iconfont
            className:{
                type:String,
                default:'lu-icon-info'
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