<template>
    <div class="hello-wrap">
        <!-- <i>hahahahhaha</i> -->
        <!-- <p @click="clicks">{{msg}}</p>

        <Btn @change="change1"></Btn> -->
        
        <!-- 按钮 -->
        <h1>按钮类</h1>
        <p>按钮类型 默认/danger/success/warning 四种 [type="danger"]</p>
        <p>
            <lu_button @click="tap">默认按钮</lu_button>
            <lu_button type="danger" @click="tap">危险按钮</lu_button>
            <lu_button type="success" @click="tap">成功按钮</lu_button>
            <lu_button type="warning" @click="tap">警告按钮</lu_button>
        </p>

        <p>滑过按钮 四种类型 同上 [:plain="true"]</p>
        <p>  
            <lu_button :plain="true" @click="tap">默认按钮</lu_button>
            <lu_button :plain="true" type="danger"  @click="tap">危险按钮</lu_button>
            <lu_button :plain="true" type="success" @click="tap">成功按钮</lu_button>
            <lu_button :plain="true" type="warning" @click="tap">警告按钮</lu_button>
        </p>

        <p>按钮大小 超大/默认/小型/超小型 四种 [size="large"]</p>
        <p>
            <lu_button type="danger" size="large">超大按钮</lu_button>
            <lu_button type="danger">默认按钮</lu_button>
            <lu_button type="danger" size="small">小型按钮</lu_button>
            <lu_button type="danger" size="mini">微小按钮</lu_button>
        </p>
        
        <p>去除按钮默认圆角 [:radius="false"]</p>
        <p>
            <lu_button type="danger" :radius="false">去除默认的圆角</lu_button>
        </p>

        <p>按钮禁用 [:disabled="true"]</p>
        <p>
            <lu_button type="danger" :disabled="true" @click="tap">按钮禁用</lu_button>
            <lu_button :plain="true" :disabled="true" type="success" @click="tap">按钮禁用</lu_button>
        </p>

        <hr/>

        <h1>单选框</h1>

        <lu_radio v-model="radio" name="tem" label="1">aaa</lu_radio>
        <lu_radio v-model="radio" name="tem" label="2">bbb</lu_radio>
        <lu_radio v-model="radio" name="tem" label="3">ccc</lu_radio>

        <hr/>

        <h1>Badge 标记</h1>
        <P>隐藏Badge [:hidden="true"] 默认false，是否红点显示 [:isDot="true"] 默认 false</P>
        <p>
            <lu_badge :value="7245">
                <lu_button type="danger" size="small">小型按钮</lu_button>
            </lu_badge>

            <lu_badge :value="7245" :isDot="true">
                <lu_button type="danger" size="small">小型按钮</lu_button>
            </lu_badge>

            <lu_badge :value="7245" :hidden="true">
                <lu_button type="danger" size="small">小型按钮</lu_button>
            </lu_badge>
        </p>

        






        <!-- <lu_alert></lu_alert> -->
    </div>
</template>

<script>
export default {
    name: 'index',
    data () {
        return {
            radio:1
        }
    },
    mounted(){

    },
    watch: {
        // 'radio'(val, oldValue) {
        //     console.log(val)
        // }
    },
    methods:{
        tap(){
            this.$lu_toast('lu_toast实例')
        },

	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    
</style>
