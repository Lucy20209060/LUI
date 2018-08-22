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
        <input 
            type="text" 
            @input="inputEnter"
            v-model="inputValue" 
        />
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
        value: {
            type: [ Number, String ],
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
        const value = Number(this.value);
        if(this.min && value <= this.min){
            temValue = this.min;
            console.error('Incorrect value(value <= min)')
        }else if(this.max && value >= this.max){
            temValue = this.max;
            console.error('Incorrect value(value >= max)')
        }else{
            temValue = value;
        }
        this.inputValue = temValue;
    },
    watch:{
        inputValue(newVal, oldValue){
            // 实时更新v-model
            this.$emit('input',newVal)
        }
    },

    methods:{
        inputOver() {
            this.activeSign = true;
        },
        inputOut() {
            this.activeSign = false;
        },
        addClick() {
            const ceilingNum = Number(this.inputValue) + this.step;
            // 存在最大值 则数值增加时需要收到限制
            if(this.max){
                this.inputValue = ceilingNum <= this.max ? ceilingNum : this.max;
            }else{
                this.inputValue = ceilingNum;
            }
        },
        reduceClick() {
            // this.inputValue -= this.step
            const floorNum = this.inputValue - this.step;
            // 存在最大值 则数值增加时需要收到限制
            if(this.min){
                floorNum >= this.min ? this.inputValue = floorNum : null;
            }else{
                this.inputValue = floorNum;
            }
        },
        inputEnter() {
            const currNum = Number(this.inputValue);
            if(this.max && currNum >= this.max){
                this.inputValue = this.max;
            }else if(this.min && currNum <= this.min){
                this.inputValue = this.min;
            }else if(currNum === 0){
                this.inputValue = currNum;
            }else{
                this.inputValue = 1;
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
