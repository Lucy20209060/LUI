<template>
    <div class="lu_radio_wrap">
        <label 
            v-for="(item,index) in res"
            :key="index"
            :class="[
                item.disabled ? 'is-disabled' : null,
                item.value === currentValue ? 'is-value' : null
            ]"
            :for="item.value"
        >
            <em></em>
            <span>{{item.label}}</span>
            <input 
                class="lu_radio_input"
                type="radio" 
                :id="item.value" 
                :name="name" 
                v-model="currentValue" 
                :value="item.value"
                :disabled="item.disabled"
            >
        </label>
    </div>
</template>

<script>
export default {
    name: 'LuRadio',
    data () {
        return {
            
        }
    },
    props: {
        resource: Array,
        value: [Number, Boolean, String],
        name: String
    },
    computed: {
        res:function(){
            /**
             * 数据检测
             * disabled 不是boolean类型的均转化为 false
            */
            for(let item of this.resource){
                const disabled = item.disabled;
                item.disabled = typeof disabled === 'boolean' ? disabled : false
            }
            return this.resource;
        },
        currentValue: {
            get() {
                return this.value || 1;
            },
            set(val) {
                this.$emit('input', val);
            }
        }
    },
    mounted(){
        
    },
    methods:{
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .lu_radio_wrap{
        display: flex;
        flex-wrap: wrap;
    }
    .lu_radio_wrap label{
        margin-left: 30px;
        color: #606266;
        font-size: 14px;
        display: flex;
        align-items: center;
        cursor: pointer;
        user-select: none;
    }
    .lu_radio_wrap .is-value{
        color: #409eff;
    }
    .lu_radio_wrap :first-child{
        margin-left: 0;
    }

    .lu_radio_wrap label em{
        position: relative;
        width: 14px;
        height: 14px;
        cursor: pointer;
        display: inline-block;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        border-radius: 100%;
        background-color: #fff;
        transition: border .15s ease-in;
    }
    .lu_radio_wrap .is-value em{
        background: #409eff;
        border-color: #409eff;
    }
    .lu_radio_wrap label em:after{
        position: absolute;
        content: '';
        top: 50%;
        left: 50%;
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background: #fff;
        transform: translate(-50%,-50%) scale(0);
        transition: transform .15s ease-in;
    }
    .lu_radio_wrap .is-value em:after{
        transform: translate(-50%,-50%) scale(1);
    }
    .lu_radio_wrap label em:hover{
        border-color: #409eff;
    }
    .lu_radio_wrap label span{
        padding-left: 10px;
    }
    .lu_radio_input{
        height:0;
        overflow:hidden;
        visibility:hidden;
    }

    .lu_radio_wrap label.is-disabled {
        cursor: not-allowed;
    }
    .lu_radio_wrap label.is-disabled em{
        background-color: #f5f7fa;
        border-color: #e4e7ed;
        cursor: not-allowed;
    }
    .lu_radio_wrap label.is-disabled span{
        color: #c0c4cc;
    }
    .lu_radio_wrap label.is-disabled.is-value em{
        background-color: #f5f7fa;
        border-color: #e4e7ed;
    }
    .lu_radio_wrap label.is-disabled.is-value em:after{
        background-color: #c0c4cc;
    }

</style>