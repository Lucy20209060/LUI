<template>
    <div 
        class="lu_alert"
        :class="alertClass"
    >
        <i 
            v-if="showIcon" 
            :class="[
                `iconfont ${icon}`,
                title ? 'istitle' : null
            ]"
        ></i>
        <p class="title_desc">
            <span 
                :class="[
                    title ? 'istitle' : null
                ]" 
                v-if="title"
            >{{title}}</span>
            <em>{{description}}</em>
        </p>
    </div>
</template>

<script>
const TYPE_CLASSES_ICON = {
    'success': {
        icon:'lu-icon-success',
        class:'lu_alert_success'
    },
    'warning': {
        icon: 'lu-icon-warning',
        class: 'lu_alert_warning'
    },
    'error': {
        icon: 'lu-icon-error',
        class: 'lu_alert_error'
    },
    'info': {
        icon: 'lu-icon-info2',
        class: 'lu_alert_info'
    }
}
export default {
    name: 'lu_alert',
    data () {
        return {
            currentValue: 0
        }
    },
    props: {
        title: String,
        type:{
            type: String,
            default: 'info'
        },
        description: String,
        showIcon: {
            type: Boolean,
            default: false
        },
        center:{
            type: Boolean,
            default: true
        }

    },
    mounted(){
       console.log(this.center)
    },
    computed:{
        icon:function() {
            return TYPE_CLASSES_ICON[this.type].icon
        },
        alertClass:function() {
            return TYPE_CLASSES_ICON[this.type].class
        }
    },
    methods:{
       
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .lu_alert{
        width: 100%;
        padding: 8px 16px;
        box-sizing: border-box;
        border-radius: 4px;
        position: relative;
        background-color: #fff;
        display: flex;
        align-items: center;
    }
    .lu_alert_center{
        justify-content:center;
    }
    .title_desc{
        padding: 0 8px;
        display: flex;
        flex-direction: column;
    }
    .title_desc span{
        font-size: 12px;
    }
    .title_desc span.istitle{
        font-size: 13px;
        font-weight: 700;
        padding-bottom: 8px;
    }
    .title_desc em{
        font-size: 12px;
    }
    .lu_alert .iconfont.istitle{
        font-size: 28px;
    }
    .lu_alert_success{
        background-color: #f0f9eb;
        color: #67c23a;
    }
    .lu_alert_info{
        background-color: #f4f4f5;
        color: #909399;
    }
    .lu_alert_warning{
        background-color: #fdf6ec;
        color: #e6a23c;
    }
    .lu_alert_error{
        background-color: #fef0f0;
        color: #f56c6c;
    }
</style>