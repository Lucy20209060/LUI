<template>
    <transition name="lu_alert_fade">
        <div 
            class="lu_alert"
            :class="[
                alertClass,
                center ? 'is-center' : null,
                title ? 'is-title' : null
            ]"
            v-show="visible"
        >
            <i 
                v-if="showIcon" 
                :class="[
                    'icon-type',
                    `iconfont ${icon}`
                ]"
            ></i>
            <p class="title_desc">
                <span v-if="title">{{title}}</span>
                <em>{{description}}</em>
            </p>
            <i class="close iconfont lu-icon-delete" @click="close()"></i>
        </div>
    </transition>
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
    name: 'LuAlert',
    data () {
        return {
            visible: true
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
        center:Boolean,
        // close: Function

    },
    mounted(){
    //    console.log(this.close)
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
        close() {
            this.visible = false;
            this.$emit('close');
        }
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
        opacity: 1;
        transition: opacity .2s;
    }
    .lu_alert .close{
        position: absolute;
        top: 50%;
        right: 16px;
        transform:translateY(-50%);
        cursor: pointer;
    }
    .is-center{
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
    .is-title .title_desc span{
        font-size: 13px;
        font-weight: 700;
        padding-bottom: 8px;
    }
    .title_desc em{
        font-size: 12px;
    }
    .is-title .icon-type{
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
    .lu_alert_fade-enter,
    .lu_alert_fade-leave-active {
        opacity: 0;
    }
</style>