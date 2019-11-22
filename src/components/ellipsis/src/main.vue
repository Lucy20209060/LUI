<template>
    <div class="lu-ellipsis-wrap" :style="{width: ellipsisWidth}">
        <div 
            class="lu-ellipsis-content-copy" 
            ref="luEllipsisContentCopy" 
            id="luEllipsisContentCopy"
            :style="{
                fontSize: fontSize + 'px',
                lineHeight: lineHeight + 'px'
            }"
        >
            <span 
                v-for="(item,index) in text"
                :key="index"
            >{{item}}</span>
        </div>
        <div 
            class="lu-ellipsis-content"
            :style="{
                fontSize: fontSize + 'px',
                lineHeight: lineHeight + 'px'
            }"
        >{{subString}}</div>
    </div>
</template>
<script>

export default {
    name: 'LuEllipsis',
    data () {
        return {
            subString: ''
        }
    },
    props: {
        width: Number,
        lineLimit: {
            type: Number,
            default: 1
        },
        lineHeight: Number,
        fontSize: Number,
        text: {
            type: String,
            default: ''
        }
    },
    computed: {
        ellipsisWidth: function() {
            if(this.width){
                return this.width + 'px'
            }else{
                return '100%'
            }
        }
    },
    mounted(){
        this.subString = this.ellipsisText()
        window.addEventListener('resize',() => {
           this.subString = this.ellipsisText()
        },false);
    },
    destroyed() {
        window.removeEventListener('resize',() => {
           this.subString = this.ellipsisText()
        },false);
    },
    methods:{
        ellipsisText() {
            var obj = {};
            var arr = [];
            const children = this.$el.children[0].children;

            for(let item of children){
                // 空格节点offsetTop有差异，直接添加至当前行
                if(item.innerHTML === " " || arr.includes(item.offsetTop)){
                    obj[arr.length - 1] = [...obj[arr.length - 1], item]
                }else{
                    if(arr.length >= this.lineLimit) break;
                    arr.push(item.offsetTop)
                    obj[arr.length - 1] = [item]
                }
            }

            let len = 0;
            for(let i in obj){
                len = len + obj[i].length;
            }
            return this.text.substring(0,len - 4) + (len >= children.length ? '' : '...');
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .lu-ellipsis-wrap {
        /* display: inline-block; */
    }
    .lu-ellipsis-content-copy {
        opacity: 0;
        height: 0;
        overflow: hidden;
    }
    .lu-ellipsis-content:after {
        /* content: ' ...' */
    }
</style>
