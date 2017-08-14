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

        <!-- <h1>单选框</h1>

        <lu_radio v-model="radio" name="tem" label="1">aaa</lu_radio>
        <lu_radio v-model="radio" name="tem" label="2">bbb</lu_radio>
        <lu_radio v-model="radio" name="tem" label="3">ccc</lu_radio>

        <hr/> -->

        <h1>Badge 标记</h1>
        <P>数据[:value="7245"] 隐藏Badge [:hidden="true"] 默认false，是否红点显示 [:isDot="true"] 默认 false 设置颜色[color="#333"] 默认 红色</P>
        <p>
            <lu_badge :value="97786" color="#333">
                <lu_button size="small">小型按钮</lu_button>
            </lu_badge>

            <lu_badge :value="7245" :isDot="true">
                <lu_button size="small">小型按钮</lu_button>
            </lu_badge>

            <lu_badge :value="7245" :hidden="true">
                <lu_button size="small">小型按钮</lu_button>
            </lu_badge>
        </p>

        <hr/>

        <h1>移动端 信息弹窗提示</h1>
        <p>提示信息字符串[message:string], 显示位置[position:top/middle/boottom], 显示时间长度[duration:time] 添加自己的class[className="my-class"]</p>
        <p>
            <lu_button type="success" @click="toast">点击弹窗提示</lu_button>
        </p>

        <hr/>

        <h1>switch 开关</h1>
        <p>@change,@input事件，返回值 true/false , 绑定初始值[v-model=" "] , 禁用[:disabled="true"]</p>
        <lu_switch v-model="witch1" @change="change1">{{witch1}}</lu_switch>
        <lu_switch v-model="witch2" @input="input1" :disabled="true">{{witch2}}</lu_switch>

        <hr/>

    </div>
</template>

<script>
export default {
    name: 'index',
    data () {
        return {
            radio:1,
            witch1:true,
            witch2:false
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
        change1(value){
            console.log(value)
            this.$lu_toast(`${value}`)
        },
        input1(value){
            console.log(value)
            this.$lu_toast(`${value}`)
        },
        tap(){
            this.$lu_toast('lu_toast实例')

        },
        toast(){
            
            this.$lu_toast({
              message: 'this.$lu_toast()实例',
              position: 'top',
              duration: 1500
            });
        }

	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .hello-wrap{
        padding-bottom: 500px;
    }
</style>
