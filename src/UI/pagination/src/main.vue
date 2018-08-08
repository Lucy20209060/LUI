<template>
    <div 
        :class="[
            'lu_pagination',
            small?'lu_pagination_small':''
        ]"
    >
        <i 
            :class="[
                'iconfont',
                currentPage <= 1 ? 'first-page' :''
            ]"
            @click="prevChange"
            v-html="prevText"
        ></i>
        <em 
            v-for="(item,index) in pageArr" 
            :key="index"
            :class="[
                currentPage === item ? 'current-page' :''
            ]"
            @click='currentChange(item)'
            @mouseenter='moreMouseEnter(item)'
            @mouseleave='moreMouseLeave(item)'
        >
            <i v-if="typeof item === 'number'">{{item}}</i>
            <i v-if="item === 'left' || item === 'right'" class='iconfont lu-icon-more'></i>
            <i v-if="item === 'left-arrow'" class='iconfont lu-icon-left-arrow'></i>
        </em>
        <i 
            :class="[
                'iconfont',
                currentPage >= pageCount ? 'last-page' :''
            ]"
            @click="nextChange"
            v-html="nextText"
        ></i>
    </div>
</template>

<script>
export default {
    name: 'lu_pagination',
    data () {
        return {
            
        }
    },
    props: {
        // 分页大小类型
        small: {
            type:Boolean,
            default:false
        },
        // 页数背景色
        background: {
            type:Boolean,
            default:false
        },
        // 总页数
        pageCount: {
            type: Number,
            default: 10
        },
        // 当前页
        currentPage: {
            type: Number,
            default: 1
        },
        // 上一页字符
        prevText: {
            type:String,
            default:'&#xe612;'
        },
        // 下一页字符
        nextText: {
            type:String,
            default:'&#xe60b;'
        }
    },
    computed:{
        pageArr:function() {
            const currentPage = this.currentPage;
            const pageCount = this.pageCount;
            let pageArr = null;
            if(pageCount < 8){
                // 页数较少时 直接渲染
                pageArr =  Array.from({ length: pageCount },(value, index) => {
                    return index + 1;
                })
            }else{
                // 当前页数在中间 存在左右箭头
                if(currentPage > 4 && currentPage <= pageCount-4){
                    pageArr = [1, 'left', currentPage-2, currentPage-1, currentPage,currentPage+1, currentPage+2, 'right', pageCount];
                }
                // 当前页数在左侧 存在右箭头 
                else if(currentPage <= 4){
                    pageArr = Array.from({ length: 6 },(value, index) => {
                        return index + 1;
                    })
                    pageArr = pageArr.concat(['right', pageCount])
                }
                // 当前页数在右侧 存在左箭头
                else if(currentPage > pageCount - 4){
                    pageArr = Array.from({ length: 6 },(value, index) => {
                        return pageCount - (5 - index)
                    })
                    pageArr = [1, 'left'].concat(pageArr);
                }
            }
            return pageArr;
        }
    },
    created() {},
    methods:{
        moreMouseEnter(item){
            
            // if(item === 'left')this.pageArr[1] = 'left-arrow';
            // if(item === 'right')this.pageArr[this.pageArr.length - 2] = 'right-arrow';
            // this.pageArr=[1,2,3,4]
            // console.log(this.pageArr)
        },
        moreMouseLeave(item){
            // if(item === 'left-arrow')this.pageArr[1] = 'left';
            // if(item === 'right-arrow')this.pageArr[this.pageArr.length - 2] = 'right';
            // console.log(this.pageArr)
        },
        // 触发当前页变化函数
        currentChange(index){
            // 点击当前页 不触发
            if(index === this.currentPage)return;
            let i = index;
            if(index === 'left'){
                // 递减 防止超过范围
                const currentPage = this.currentPage - 5;
                i = currentPage <= 0 ? 1 : currentPage;
            }else if(index === 'right'){
                // 递增 防止超过范围
                const currentPage = this.currentPage + 5;
                i = currentPage >= this.pageCount ? this.pageCount : currentPage;
            }
            this.$emit('current-change', i);
        },
        // 下一页 按钮
        nextChange(){
            if(this.currentPage >= this.pageCount) return;
            // 触发当前页变化函数
            this.$emit('next-click', this.currentPage + 1);
            this.$emit('current-change', this.currentPage + 1);
        },
        // 上一页 按钮
        prevChange(){
            if(this.currentPage <= 1) return;
            // 触发当前页变化函数
            this.$emit('prev-click', this.currentPage - 1);
            this.$emit('current-change', this.currentPage - 1);
        }
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .lu_pagination{
        display: flex;
        align-items: center;
        -webkit-user-select:none;
		-khtml-user-select:none;
		-moz-user-select:none;
		-ms-user-select:none;
		user-select:none;
        em{
            // padding: 0 5px;
            min-width:35px;
            height:28px;
            text-align: center;
            line-height: 28px;
            cursor: pointer;
            background:#f4f4f5;
            margin: 0 5px;
            font-size: 13px;
            border-radius: 2px;
            &:hover{
                color: #20a0ff;
            }
        }
        .iconfont{
            @extend em;
            padding:0 5px;
            box-sizing: border-box;
        }
        .current-page{
            color: #fff;
            background: #409EFF;
            &:hover{
                color: #fff;
            }
        }
        .last-page{
            cursor: not-allowed;
            color: #c0c4cc;
            &:hover{
                color: #c0c4cc;
            }
        }
        .first-page{
            @extend .last-page
        }
    }
</style>