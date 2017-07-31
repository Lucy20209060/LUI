<template>
    <div class="Alert" @click="Btntap">
        <i>{{msg}}</i>
    </div>
</template>

<script>
export default {
    
    name: 'lu_alert',
    data () {
        return {
            msg: 'Alert提示'
        }
    },
    mounted(){
    },
    methods:{
        Btntap(){
            this.$emit('change');
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    
    $class-pre:'Alert';
    .#{$class-pre}{
        display: inline-block;
        padding: 10px 20px;
        background: #009e4d;
        font-size: 20px;
        &-wrap{
            font-size: 30px;
            i{
                color: red;
            }
        }
    }

</style>
<style>
    [v-cloak]{
        display: none;
    }