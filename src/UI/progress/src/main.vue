<template>
    <div 
        :class="[
            'lu-progress-wrap',
            `lu-progress-${currentSize}`
        ]"
    >
        <p>
            <em :style="{width:`${currentPercent}%`}"></em>
        </p>
        <span>{{`${percent}%`}}</span>
    </div>
</template>

<script>
const SIZE_CLASSES_MAP = {
    'small': 'small',
    'medium': 'medium',
    'large': 'large'
  };
export default {
    name: 'LuProgress',
    data () {
        return {
            
        }
    },
    props: {
        percent:{
            type: Number,
            default: 0
        },
        size: {
            type: String,
            default: 'small'
        }
    },
    watch: {
        
    },
    computed: {
        currentSize() {
            return SIZE_CLASSES_MAP[this.size] || 'small';
        },
        currentPercent() {
            const { percent } = this;
            if(percent <= 0){
                return 0;
            }else if(percent >= 100){
                return 100;
            }else{
                return percent;
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
    .lu-progress-wrap{
        display: flex;
        align-items: center;
    }
    .lu-progress-wrap p{
        width: calc(100% - 50px);
        background-color: #eeeff3;
        display: flex;
    }
    .lu-progress-wrap span{
        box-sizing: border-box;
        width: 50px;
        padding-left: 10px;
        font-size: 12px;
        color: #999;
    }
    .lu-progress-wrap p em{
        height: 100%;
        background-color: #409eff;
        transition: width .5s linear;
    }
    .lu-progress-small p,
    .lu-progress-small p em{
        height: 4px;
        border-radius: 4px;
    }
    .lu-progress-medium p,
    .lu-progress-medium p em{
        height: 8px;
        border-radius: 8px;
    }
    .lu-progress-large p,
    .lu-progress-large p em{
        height: 12px;
        border-radius: 12px;
    }
</style>