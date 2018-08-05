<template>
    <div class="lu_badge is_relative">
        <slot></slot>
        <sup 
            class="is_absolute"
            :style="{ backgroundColor: color }"
            v-if="!hidden"
            :class="[
                isDot?'lu_badge_isDot':''
            ]"
            v-text="isDot?'':value"
        >
        </sup>
    </div>
</template>

<script>
export default {
    name: 'lu_badge',
    props:{
        // 标记值
        value:[String,Number],
        // 是否显示红点
        isDot:{
            type: Boolean,
            default: false
        },
        // 是否显示标志
        hidden:{
            type: Boolean,
            default: false
        },
        // 标志背景色
        color: String,
    }
}
</script>