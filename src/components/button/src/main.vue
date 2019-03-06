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
        <i v-if="icon != ''" class="iconfont" :class="icon"></i>
        <span><slot></slot></span>
    </button>

</template>

<script>
export default {
    name: 'LuButton',
    data () {
        return {
            
        }
    },
    props: {
        // 类型
        type: {
            type: String,
            default: 'default'
        },
        // 大小
        size:{
            type: String,
            default: ''
        },
        // 是否圆角
        radius:{
            type: Boolean,
            default: true
        },
        // icon图标
        icon:{
            type: String,
            default: ''
        },
        // 滑过效果
        plain:Boolean,
        // 是否禁用
        disabled:Boolean,
    },
    mounted(){
        
    },
    methods:{
        btnClick(evt){
            // 触发当前实例上的事件
            this.$emit('click',evt);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>