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
        >{{text}}</div>
    </div>
</template>
<script>
let timer = null;
const throttle = (func, wait=100) => {
  if (timer) return;
  timer = setTimeout(() => {
    func();
    timer = null;
  }, wait);
};
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
        fontSize: {
            type: Number,
            default: 16
        },
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
        this.subString = this.ellipsisText();



        window.onresize = () => {
            const timer = Math.ceil(Math.random() * 100);
            console.log(timer)
            throttle(()=>{
                this.subString = this.ellipsisText();

            }, timer)
        }
    },
    methods:{
        ellipsisText() {
            var obj = {};
            var arr = [];
            const children = this.$refs.luEllipsisContentCopy.children;

            for(let item of children){
                if(arr.includes(item.offsetTop)){
                    obj[arr.length - 1] = [...obj[arr.length - 1], item]
                }else{
                    if(arr.length >= this.lineLimit) break;
                    arr.push(item.offsetTop)
                    obj[arr.length - 1] = [item]
                }
            }
            // console.lo/--')
            let len = 0;
            for(let i in obj){
                len = len + obj[i].length;
            }
            // console.log(len)
            return this.text.substring(0,len - 3)
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
        content: ' ...'
    }
</style>