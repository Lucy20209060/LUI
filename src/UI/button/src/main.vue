<template>

    <button 
        class="lu_button" 
        @click="btnClick"
        :class="[
            type&&!plain?'lu_button_'+type:'',
            plain?'lu_button_plain_'+type:'',
            size?'lu_button_'+size:'',
            radius?'':'lu_button_radius_false',
            disabled&&plain?'lu_button_plain_disabled':'',
            disabled&&!plain?'lu_button_disabled':''
        ]"
        :disabled="disabled"
    >
        <slot></slot>
    </button>

</template>

<script>
export default {
    name: 'lu_button',
    data () {
        return {
            
        }
    },
    props: {
        type: {
            type: String,
            default: 'default'
        },
        size:{
            type: String,
            default: ''
        },
        radius:{
            type: Boolean,
            default: true
        },
        plain:Boolean,
        disabled:Boolean,
    },
    mounted(){
        
    },
    methods:{
        btnClick(evt){
            this.$emit('click',evt);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>