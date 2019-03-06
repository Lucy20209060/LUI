<template>
    <div 
        :class="[
            'lu-progress-wrap',
            `lu-progress-${currentSize}`,
            `lu-progress-${currentShape}`
        ]"
    >
        <!-- 直线进度条 -->
        <div v-if="currentShape === 'line'">
            <p>
                <em :style="{width:`${currentPercent}%`}"></em>
            </p>
            <span>{{`${percent}%`}}</span>
        </div>

        <!-- 圆形进度条 -->
        <div v-else>
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <path :d="d" stroke="#eeeff3" stroke-width="5" fill="none" />
                <path 
                    :d="d"
                    stroke="#5485f7" 
                    stroke-width="5" 
                    fill="none" 
                    :stroke-dasharray="preSize"
                    stroke-dashoffset='0' 
                    transition='all 1s cubic-bezier(.65,.2,.35,1)'
                    :stroke-linecap="`${currentPercent === 0 ? null : 'round' }`"
                    style="transition: all 1s cubic-bezier(.65,.2,.35,1)"
                />
            </svg>
            <i :style="`font-size:${currentFontSize}`">{{`${percent}%`}}</i>
        </div>
    </div>
</template>

<script>
const SIZE_CLASSES_MAP = {
    'small': {
        name: 'small',
        r: 50,
        fontSize: '18px'
    },
    'medium': {
        name: 'medium',
        r: 60,
        fontSize: '24px'
    },
    'large': {
        name: 'large',
        r: 70,
        fontSize: '36px'
    }
}
const SHAPE_CLASSES_MAP = {
    'line': 'line',
    'circle': 'circle'
}
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
        },
        shape: {
            type: String,
            default: 'line'
        }
    },
    watch: {
        
    },
    computed: {
        currentSize() {
            return SIZE_CLASSES_MAP[this.size].name || 'small';
        },
        currentShape() {
            return SHAPE_CLASSES_MAP[this.shape] || 'line';
        },
        currentFontSize() {
            return SIZE_CLASSES_MAP[this.currentSize].fontSize;
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
        },
        d() {
            /**
            *     a 50,50   0   1     1      0,100
            *      两个半径     0小弧  0逆时针  目的地坐标
            *                  1大弧  1顺时针
            */
            switch(this.currentSize) {
                case 'small': return 'M 50,3 a 45,45 0 1 1 0,94 a 45,45 0 1 1 0,-94';
                case 'medium': return 'M 60,3 a 57,57 0 1 1 0,114 a 57,57 0 1 1 0,-114';
                case 'large': return 'M 70,3 a 65,65 0 1 1 0,134 a 65,65 0 1 1 0,-134';
            }
        },
        preSize() {
            const currentSize = SIZE_CLASSES_MAP[this.currentSize].name;
            const d = 2 * SIZE_CLASSES_MAP[this.currentSize].r;
            // 计算百分比对应的扇形边长 规避误差 乘以 Math.PI 的近似值
            switch(currentSize) {
                case 'small': return `${ d * 2.92 * this.currentPercent/100 }px,100000px`;
                case 'medium': return `${ d * 2.96 * this.currentPercent/100 }px,100000px`;
                case 'large': return `${ d * Math.PI * this.currentPercent/100 }px,100000px`;
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
    .lu-progress-line{
        display: flex;
    }
    .lu-progress-line > div {
        display: flex;
        align-items: center;
        width: 100%;
    }
    .lu-progress-line p{
        width: calc(100% - 50px);
        background-color: #eeeff3;
        display: flex;
    }
    .lu-progress-line span{
        box-sizing: border-box;
        width: 50px;
        padding-left: 10px;
        font-size: 12px;
        color: #999;
    }
    .lu-progress-line p em{
        height: 100%;
        background-color: #409eff;
        transition: width .5s linear;
    }
    .lu-progress-line.lu-progress-small p,
    .lu-progress-line.lu-progress-small p em{
        height: 4px;
        border-radius: 4px;
    }
    .lu-progress-line.lu-progress-medium p,
    .lu-progress-line.lu-progress-medium p em{
        height: 8px;
        border-radius: 8px;
    }
    .lu-progress-line.lu-progress-large p,
    .lu-progress-line.lu-progress-large p em{
        height: 12px;
        border-radius: 12px;
    }
    .lu-progress-circle{
        display: inline-block;
    }
    .lu-progress-circle.lu-progress-large{
        width: 140px;
        height: 140px;
    }
    .lu-progress-circle.lu-progress-medium{
        width: 120px;
        height: 120px;
    }
    .lu-progress-circle.lu-progress-small{
        width: 100px;
        height: 100px;
    }
    .lu-progress-circle > div{
        width: 100%;
        height: 100%;
        position: relative;
    }
    .lu-progress-circle > div i{
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        text-align: center;
        transform: translateY(-50%);
        font-family: Roboto,Helvetica Neue,Helvetica,Tahoma,Arial,FZLanTingHeiS-L-G,PingFang SC,Microsoft YaHei;
    }
</style>