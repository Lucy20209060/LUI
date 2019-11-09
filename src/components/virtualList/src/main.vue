<template>
    <lu-scrollbar 
        :width="width"
        :height="contentHeight"
        ref="luVirtualListScrollbar" 
        @scroll="handleScroll"
    >
        <div :style="{width: '100%', height: listHeight}">
            <div class="lu_virtualList" ref="luVirtualList" :style="{ height: contentHeight }">
                <div 
                    :style="{ height: itemHeight + 'px'}"
                    v-for="(item,index) in currentData"
                    :key="index"
                >{{item.key}}</div>
            </div>
        </div>
    </lu-scrollbar>
</template>

<script>
import LuScrollbar from '../../scrollbar';
export default {
    name: 'LuVirtualList',
    components: {
      LuScrollbar
    },
    data () {
        return {
            startIndex: 0,
            currentData: []
        }
    },
    props: {
        pageSize: {
            type: Number,
            default: 10
        },
        itemHeight: {
            type: Number,
            default: 30
        },
        width: String,
        height: String,
        dataSource: Array
    },
    computed: {
        listHeight: function() {
            const h = this.dataSource.length * this.itemHeight;
            return h + 'px'
        },
        contentHeight: function() {
            const h = this.itemHeight * this.pageSize;
            return h + 'px'
        },
    },
    mounted(){
        this.update()
    },
    methods:{
        handleScroll(h){
            this.startIndex = Math.floor(h/this.itemHeight);
            this.update(this.startIndex);
        },
        update(index=0) {
            this.currentData = this.dataSource.slice(index, index + this.pageSize);
            this.$refs.luVirtualList.style.webkitTransform = `translate3d(0, ${index*this.itemHeight}px, 0)`;
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .lu_virtualList {
        /* display: inline-block; */
        overflow: hidden;
        /* position: relative; */
    }
    .lu_virtualList ul {
        height: 100%;
        overflow: auto;
        margin-right: -17px;
    }
</style>