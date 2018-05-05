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
            v-for="(item,index) in pageCount" 
            :key="index"
            :class="[
                currentPage === item ? 'current-page' :''
            ]"
            @click='currentChange(item)'
        >
            {{item}}
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
    created() {
        // console.log(this.small)
        // console.log(this.pageCount)
    },
    methods:{
        currentChange(index){
            // 触发当前页变化函数
            this.$emit('current-change', index);
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
            width:35px;
            height:28px;
            text-align: center;
            line-height: 28px;
            cursor: pointer;
            &:hover{
                color: #20a0ff;
            }
        }
        em{
            @extend .iconfont
        }
        .current-page{
            color: #20a0ff;
        }
        .last-page{
            cursor: not-allowed;
        }
        .first-page{
            @extend .last-page
        }
    }
</style>