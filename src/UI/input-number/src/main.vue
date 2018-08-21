<template>
    <div 
        :class="[
            'lu_input_number_wrap',
            { 'active-input': activeSign }
        ]"
    >
        <i 
            class="iconfont lu-icon-reduce" 
            @mouseover="inputOver('reduce')" 
            @mouseout="inputOut('reduce')"
            @click="reduceClick"
        ></i>
        <i 
            class="iconfont lu-icon-add"
            @mouseover="inputOver('add')" 
            @mouseout="inputOut('add')"
            @click="addClick"
        ></i>
        <input type="text" v-model="inputValue" />
    </div>
</template>

<script>
export default {
    name: 'LuInputNumber',
    data () {
        return {
            activeSign: false,
            inputValue: 1
        }
    },
    props: {
        // title: String,
        // type:{
        //     type: String,
        //     default: 'info'
        // },
        // description: String,
        // showIcon: {
        //     type: Boolean,
        //     default: false
        // },
        // center:Boolean,
        // closable: {
        //     type: Boolean,
        //     default: true
        // }
        value: {
            type: Number,
            default: 1
        },
        step: {
            type: Number,
            default: 1
        },
        min: Number,
        max: Number

    },
    mounted(){
        let temValue = null;
        if(this.min && this.value <= this.min){
            temValue = this.min;
            console.error('Incorrect value(value <= min)')
        }else if(this.max && this.value >= this.max){
            temValue = this.max;
            console.error('Incorrect value(value >= max)')
        }else{
            temValue = this.value;
        }
        this.inputValue = temValue;
    },
    computed:{
        
    },
    methods:{
        inputOver() {
            this.activeSign = true;
        },
        inputOut() {
            this.activeSign = false;
        },
        addClick() {
            const ceilingNum = this.inputValue + this.step;
            // 存在最大值 则数值增加时需要收到限制
            if(this.max){
                ceilingNum <= this.max ? this.inputValue = ceilingNum : null
            }else{
                this.inputValue = ceilingNum;
            }
        },
        reduceClick() {
            // this.inputValue -= this.step
            const floorNum = this.inputValue - this.step;
            // 存在最大值 则数值增加时需要收到限制
            if(this.min){
                floorNum > this.min ? this.inputValue = floorNum : null
            }else{
                this.inputValue = floorNum;
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .lu_input_number_wrap{
        display: inline-block;
        position: relative;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        border-radius: 4px;
        background: #fff;
        color: #606266;
        transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    }
    .active-input{
        border-color: #409eff;
    }
    .lu_input_number_wrap i{
        position: absolute;
        top: 0;
        font-size: 20px;
        height: 100%;
        width: 40px;
        box-sizing: border-box;
        text-align: center;
        line-height: 40px;
        
    }
    .lu_input_number_wrap i:hover{
        color: #409eff;
    }
    .lu_input_number_wrap input{
        width: 180px;
        height: 40px;
        text-align: center;
        font-size: 14px;
        padding: 0 50px;
        background: transparent;
        box-sizing: border-box;
    }
    .lu_input_number_wrap :nth-child(1){
        border-right: 1px solid #dcdfe6;
        left: 0;
    }
    .lu_input_number_wrap :nth-child(2){
        border-left: 1px solid #dcdfe6;
        right: 0;
    }
    .iconfont{
        cursor: pointer;
    }
    .not-allowed{
        cursor: not-allowed;
    }


</style>
