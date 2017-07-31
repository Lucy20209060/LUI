<template>
    <div class="Button" @click="Btntap">
        <i>{{msg}}</i>

    </div>
</template>

<script>
export default {
    
    name: 'aaa',
    data () {
        return {
            msg: '按钮'
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
    
    $class-pre:'Button';
    .#{$class-pre}{
        display: inline-block;
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
</style>