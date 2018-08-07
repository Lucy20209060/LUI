<template>
    <div 
        :class="[
            'lu_pagination',
            small?'lu_pagination_small':''
        ]"
    >
        <i 
            class="iconfont lu-icon-left"
            :class="[
                currentPage <= 1 ? 'first-page' :''
            ]"
            @click="prevChange"
        ></i>
        <em 
            v-for="(item,index) in pageArr" 
            :key="index"
            :class="[
                currentPage === item ? 'current-page' :''
            ]"
            @click='currentChange(item)'
        >
            {{typeof item === 'number' ? item : '...'}}
        </em>
        <i 
            class="iconfont lu-icon-right" 
            :class="[
                currentPage === pageCount ? 'last-page' :''
            ]"
            @click="nextChange"
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
        pageCount: Number,
        // 当前页
        currentPage: {
            type: Number,
            default: 1
        },
        // 上一页字符
        prevText: {
            type:String,
            default:'上一页'
        },
        // 下一页字符
        nextText: {
            type:String,
            default:'下一页'
        }
    },
    computed:{
        pageArr:function() {
            const currentPage = this.currentPage;
            const pageCount = this.pageCount;
            let pageArr = null;
            if(pageCount <= 8){
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
        // 触发当前页变化函数
        currentChange(index){
            // 点击当前页 不触发
            if(index === this.currentPage)return;
            let i = index;
            if(index === 'left'){
                i = this.currentPage - 4;
            }else if(index === 'right'){
                i = this.currentPage + 4;
            }
            this.$emit('current-change', i);
        },
        nextChange(){
            if(this.currentPage >= this.pageCount) return;
            // 触发当前页变化函数
            this.$emit('next-click', this.currentPage + 1);
            this.$emit('current-change', this.currentPage + 1);
        },
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
        .iconfont{
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
        em{
            @extend .iconfont
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
        }
        .first-page{
            @extend .last-page
        }
    }
</style>