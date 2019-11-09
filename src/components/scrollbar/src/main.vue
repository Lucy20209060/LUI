<template>
    <div 
        class="lu-scrollbar"
        :style="{width, height}"
    >
        <div 
            class="lu-scrollbar-content-wrap"
            ref="luScrollbarContentWrap"
            @scroll="handleScroll($event)"
        >
            <div 
                class="lu-scrollbar-content"
                ref="luScrollbarContent"
            >
                <slot></slot>
            </div>
        </div>
        <div 
            class="lu_scrollbar_wrap"
            :style="{opacity: contentHeight <= contentWrapHeight ? 0 : ''}"
            @click="handleBar"
        >   
            <div class="lu_scrollbar_bar">
                <div 
                    class="lu_scrollbar_thumb"
                    ref="luScrollbarThumb"
                    :style="{
                        height: `${contentWrapHeight/contentHeight * 100}%`,
                        transform: `translateY(${thumbY}px)`,
                    }"
                    @click.stop=""
                ></div>
            </div>
        </div>
    </div>
</template>

<script>

const cubic = value => Math.pow(value, 3);
const easeInOutCubic = value => value < 0.5
    ? cubic(value * 2) / 2
    : 1 - cubic((1 - value) * 2) / 2;

export default {
    name: 'LuScrollbar',
    data () {
        return {
            contentWrapHeight: 0,
            contentHeight: 0,
            scrollTop: 0,
            thumbY: 0
        }
    },
    props: {
        width: String,
        height: String,
    },
    watch: {
        scrollTop(val, oldValue) {
            // 滚动条滑块高度
            const thumbH = this.$refs.luScrollbarThumb.offsetHeight;
            this.thumbY = this.scrollTop/this.contentHeight * (this.contentWrapHeight-thumbH);
        }
    },
    mounted(){
        this.contentWrapHeight = this.$refs.luScrollbarContentWrap.offsetHeight;
        this.contentHeight = this.$refs.luScrollbarContent.offsetHeight;
    },
    methods:{
        handleScroll(event) {
            this.scrollTop = this.$refs.luScrollbarContentWrap.scrollTop || 0;
            this.$emit('scroll', this.scrollTop);
        },
        handleBar(event){
            const endValue = event.offsetY/this.contentWrapHeight * this.contentHeight;
            this.scrollTo(endValue);
        },
        // 滚动条滚动到指定位置
        scrollTo (endValue) {
            const el = this.$refs.luScrollbarContentWrap;
            const beginTime = Date.now();
            const beginValue = this.$refs.luScrollbarContentWrap.scrollTop;
            const rAF = func => setTimeout(func, 16);
            const frameFunc = () => {
                const progress = (Date.now() - beginTime) / 500;
                if (progress < 1) {
                    el.scrollTop = endValue + (beginValue-endValue)*(1 - easeInOutCubic(progress))
                    rAF(frameFunc);
                } else {
                    el.scrollTop = endValue;
                }
            };
            rAF(frameFunc);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .lu-scrollbar {
        position: relative;
        overflow: hidden;
        height: 100%;
    }
    .lu-scrollbar-content-wrap {
        overflow: auto;
        height: 100%;
        margin-right: -17px;
    }
    .lu-scrollbar:hover .lu_scrollbar_wrap{
        opacity: 1;
    }
    .lu-scrollbar:hover .lu_scrollbar_thumb{
        background-color: rgba(144,147,153,.5);
    }
    .lu_scrollbar_wrap {
        position: absolute;
        width: 6px;
        top: 2px;
        padding: 2px;
        right: 2px;
        bottom: 2px;
        z-index: 1;
        border-radius: 6px;
        opacity: 0;
        transition: opacity .34s ease-out;
        background-color: rgba(241, 241, 241, 0.6);
    }
    .lu_scrollbar_bar {
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-radius: inherit;
    }
    .lu_scrollbar_thumb {
        position: relative;
        display: block;
        width: 6px;
        min-height: 20px;
        cursor: pointer;
        border-radius: inherit;
        background-color: rgba(144,147,153,.3);
        transition: background-color .3s;
    }
</style>