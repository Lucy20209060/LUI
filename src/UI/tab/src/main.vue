<template>
    <dl class="lu_tab">
        <dt>
            <span
                v-for="(item,index) in tabs"
                :key="index"
                :class="[
                    currentValue === index ? 'tabActive' : null
                ]"
                @click="currentValueChange(index)"
            >{{item.label}}</span>
        </dt>
        <dd>{{tabs[currentValue].content}}</dd>
    </dl>
</template>

<script>
export default {
    name: 'LuTab',
    data () {
        return {
            currentValue: 0
        }
    },
    props: {
        tabs:{
            type: Array,
            default: []
        }
    },
    mounted(){
        console.log(this.currentValue)
    },
    methods:{
        currentValueChange(index){
            if(!this.tabs[index].value)return console.error('not value');
            this.currentValue = index;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .lu_tab dt{
        display: flex;
        user-select: none;
        border-bottom: 2px solid #e4e7ed;
    }
    .lu_tab dt span{
        padding: 0 10px;
        height: 40px;
        box-sizing: border-box;
        line-height: 40px;
        display: inline-block;
        list-style: none;
        font-size: 14px;
        cursor: pointer;
        color: #333;
        transition: color .3s;
        position: relative;
    }
    .lu_tab dt span:hover,
    .lu_tab dt span.tabActive{
        color: #409eff;
    }
    .lu_tab dt span:after{
        position: absolute;
        content: '';
        width: 0;
        height: 2px;
        left: 50%;
        bottom: -2px;
        background:transparent;
        transition: all .3s;
    }
    .lu_tab dt span.tabActive:after{
        width: 100%;
        left: 0;
        background:#409eff;
    }
    .lu_tab dd{
        padding-top: 15px;
    }
</style>