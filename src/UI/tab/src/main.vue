<template>
    <dl class="lu_tab">
        <dt>
            <span
                v-for="(item,index) in tabs"
                :key="index"
                :class="[
                    currentValue === item.value ? 'tabActive' : null
                ]"
                @click="currentValueChange(item)"
            >{{item.title}}</span>
        </dt>
        <dd></dd>
    </dl>
</template>

<script>
export default {
    name: 'lu_tab',
    data () {
        return {
            currentValue: this.tabs[0].value
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
        currentValueChange(item){
            if(!item.value)return console.error('not value');
            this.currentValue = item.value;
            // console.log(item)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .lu_tab{
        margin: 0;
    }
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
    }
    .lu_tab dt span:hover,
    .lu_tab dt span.tabActive{
        color: #409eff;
    }
</style>