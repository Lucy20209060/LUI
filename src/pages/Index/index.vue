<template>
    <div class="hello-wrap">
        
        <!-- 按钮 -->
        <h1>按钮 (lu-button)</h1>
        <p>按钮类型 默认/danger/success/warning 四种 [type="danger"]</p>
        <p>
            <lu-button @click="tapd">默认按钮</lu-button>
            <lu-button type="danger" @click="tapa">危险按钮</lu-button>
            <lu-button type="success" @click="tapb">成功按钮</lu-button>
            <lu-button type="warning" @click="tapc">警告按钮</lu-button>
        </p>

        <p>滑过按钮 四种类型 同上 [:plain="true"]</p>
        <p>  
            <lu-button :plain="true" @click="tap">默认按钮</lu-button>
            <lu-button :plain="true" type="danger"  @click="tap">危险按钮</lu-button>
            <lu-button :plain="true" type="success" @click="tap">成功按钮</lu-button>
            <lu-button :plain="true" type="warning" @click="tap">警告按钮</lu-button>
        </p>

        <p>按钮大小 超大(large) / 默认 / 小型(small) / 超小型(mini) 四种 [size="large"]</p>
        <p>
            <lu-button type="danger" size="large">超大按钮</lu-button>
            <lu-button type="danger">默认按钮</lu-button>
            <lu-button type="danger" size="small">小型按钮</lu-button>
            <lu-button type="danger" size="mini">微小按钮</lu-button>
        </p>
        
        <p>去除按钮默认圆角 [:radius="false"]</p>
        <p>
            <lu-button type="danger" :radius="false">去除默认的圆角</lu-button>
        </p>

        <p>按钮禁用 [:disabled="true"]</p>
        <p>
            <lu-button type="danger" :disabled="true" @click="tap">按钮禁用</lu-button>
            <lu-button :plain="true" :disabled="true" type="success" @click="tap">按钮禁用</lu-button>
        </p>
        
        <p>按钮添加图标 icon="lu-icon-delete2"</p>
        <p>
            <lu-button icon="lu-icon-delete2">默认按钮</lu-button>
            <lu-button type="warning" icon="lu-icon-search">警告按钮</lu-button>
        </p>

        <hr/>

        <h1>Badge 标记 (lu-badge)</h1>
        <P>数据[:value="7245"] 隐藏Badge [:hidden="true"] 默认false，是否红点显示 [:isDot="true"] 默认 false 设置颜色[color="#333"] 默认 红色</P>
        <p>
            <lu-badge :value="97786" color="#333">
                <lu-button size="small">小型按钮</lu-button>
            </lu-badge>

            <lu-badge :value="7245" :isDot="true">
                <lu-button size="small">小型按钮</lu-button>
            </lu-badge>

            <lu-badge :value="7245" :hidden="true">
                <lu-button size="small">小型按钮</lu-button>
            </lu-badge>
        </p>

        <hr/>

        <h1>移动端 信息弹窗提示 (this.$lu_toast)</h1>
        <p>提示信息字符串[message:string], 显示位置[position:top/middle/boottom], 显示时间长度[duration:time] 添加自己的class[className="my-class"]</p>
        <p>
            <lu-button type="success" @click="toast">点击弹窗提示</lu-button>
        </p>

        <hr/>

        <h1>switch 开关 (lu-switch)</h1>
        <p>@change,@input事件，返回值 true/false , 绑定初始值[v-model=" "] , 禁用[:disabled="true"]</p>
        <p>
            <lu-switch v-model="witch1" @change="change1">{{witch1}}</lu-switch>
            <lu-switch v-model="witch2" @input="input1" :disabled="true"></lu-switch>
        </p>

        <hr/>

        <h1>PC端 信息弹窗提示 (this.$lu_message)</h1>
        <p>弹窗类型 默认（info）/error/success/warning 四种 [type="danger"]</p>
        <p>
            <lu-button @click="tapd">默认按钮</lu-button>
            <lu-button type="danger" @click="tapa">危险按钮</lu-button>
            <lu-button type="success" @click="tapb">成功按钮</lu-button>
            <lu-button type="warning" @click="tapc">警告按钮</lu-button>
        </p>
        
        <hr/>

        <h1>input输入框 (lu-input)</h1>
        <p>v-model="value"绑定值，maxlength最大输入长度 ，输入框大小 超大(large) / 默认 / 小型(small) / 超小型(mini) 四种 [size="large"],输入时触发@input=" "</p>
        <p>
            <lu-input 
                v-model="inputValue0" 
                maxlength="5" 
                size="large" 
                @input="changeInput"
                @focus="focusInput"
                @blur="blurInput"
            />
            <span>{{inputValue0}}</span>
        </p>
        <p>
            <lu-input v-model="inputValue1"></lu-input>
            <span>{{inputValue1}}</span>
        </p>
        <p>
            <lu-input v-model="inputValue2" size="small" ></lu-input>
            <span>{{inputValue2}}</span>
        </p>
        <p>
            <lu-input v-model="inputValue3" size="mini"></lu-input>
            <span>{{inputValue3}}</span>
        </p>

        <hr/>

        <h1>Tag标签 (lu-tag)</h1>
        <p>(默认) / gray / primary / success / warning / danger 六种类型 也可以通过color="#009e4d"设置背景色</p>
        <p>:closable="true" 是否可关闭 默认false</p>
        <p>
            <lu-tag :closable="true" @close="closeTag(1)">默认标签</lu-tag>
            <lu-tag type="gray" :closable="true">gray标签</lu-tag>
            <lu-tag type="primary" :closable="true">primary标签</lu-tag>
            <lu-tag type="success" :closable="true">success标签</lu-tag>
            <lu-tag type="warning" :closable="true">warning标签</lu-tag>
            <lu-tag type="danger" :closable="true">danger标签</lu-tag>
            <lu-tag color="#009e4d" :closable="true" @close="closeTag(2)">自定义背景色标签</lu-tag>
        </p>

        <hr/>

        <h1>Notification通知 (this.$lu_notify)</h1>
        <p>
            <lu-button @click="notify1">可自动关闭</lu-button>
            <lu-button @click="notify2">不可自动关闭</lu-button>
        </p>
        <P>
            <lu-button @click="notify3">info类</lu-button>
            <lu-button @click="notify4" type="success">success类</lu-button>
            <lu-button @click="notify5" type="warning">warning类</lu-button>
            <lu-button @click="notify6" type="danger">error类</lu-button>
            <lu-button @click="notify7">偏移的消息</lu-button>
        </P>
        
        <hr/>
        <h1>图标(lu-icon)</h1>

        <ul class="lu-icon">
            <li>
                <lu-icon className="lu-icon-top2"></lu-icon>
            </li>
            <li>lu-icon-top2</li>
        </ul>

        <ul class="lu-icon">
            <li>
                <lu-icon className="lu-icon-down2"></lu-icon>
            </li>
            <li>lu-icon-down2</li>
        </ul>

        <ul class="lu-icon">
            <li>
                <lu-icon className="lu-icon-left2"></lu-icon>
            </li>
            <li>lu-icon-left2</li>
        </ul>

        <ul class="lu-icon">
            <li>
                <lu-icon className="lu-icon-right2"></lu-icon>
            </li>
            <li>lu-icon-right2</li>
        </ul>

        <br/>

        <ul class="lu-icon">
            <li>
                <lu-icon className="lu-icon-top"></lu-icon>
            </li>
            <li>lu-icon-top</li>
        </ul>

        <ul class="lu-icon">
            <li>
                <lu-icon className="lu-icon-down"></lu-icon>
            </li>
            <li>lu-icon-down</li>
        </ul>

        <ul class="lu-icon">
            <li>
                <lu-icon className="lu-icon-left"></lu-icon>
            </li>
            <li>lu-icon-left</li>
        </ul>

        <ul class="lu-icon">
            <li>
                <lu-icon className="lu-icon-right"></lu-icon>
            </li>
            <li>lu-icon-right</li>
        </ul>

        <br/>

        <ul class="lu-icon">
            <li>
                <lu-icon className="lu-icon-info"></lu-icon>
            </li>
            <li>lu-icon-info</li>
        </ul>

        <ul class="lu-icon">
            <li>
                <lu-icon className="lu-icon-info2"></lu-icon>
            </li>
            <li>lu-icon-info2</li>
        </ul>

        <ul class="lu-icon">
            <li>
                <lu-icon className="lu-icon-error"></lu-icon>
            </li>
            <li>lu-icon-error</li>
        </ul>

        <ul class="lu-icon">
            <li>
                <lu-icon className="lu-icon-success"></lu-icon>
            </li>
            <li>lu-icon-success</li>
        </ul>

        <br/>

        <ul class="lu-icon">
            <li>
                <lu-icon className="lu-icon-search"></lu-icon>
            </li>
            <li>lu-icon-search</li>
        </ul>

        <ul class="lu-icon">
            <li>
                <lu-icon className="lu-icon-delete"></lu-icon>
            </li>
            <li>lu-icon-delete</li>
        </ul>

        <ul class="lu-icon">
            <li>
                <lu-icon className="lu-icon-delete2"></lu-icon>
            </li>
            <li>lu-icon-delete2</li>
        </ul>

        <ul class="lu-icon">
            <li>
                <lu-icon className="lu-icon-menu"></lu-icon>
            </li>
            <li>lu-icon-menu</li>
        </ul>

        <br/>

        <ul class="lu-icon">
            <li>
                <lu-icon className="lu-icon-warning"></lu-icon>
            </li>
            <li>lu-icon-warning</li>
        </ul>

        <ul class="lu-icon">
            <li>
                <lu-icon className="lu-icon-more"></lu-icon>
            </li>
            <li>lu-icon-more</li>
        </ul>

        <ul class="lu-icon">
            <li>
                <lu-icon className="lu-icon-left-arrow"></lu-icon>
            </li>
            <li>lu-icon-left-arrow</li>
        </ul>

        <ul class="lu-icon">
            <li>
                <lu-icon className="lu-icon-right-arrow"></lu-icon>
            </li>
            <li>lu-icon-right-arrow</li>
        </ul>

        <ul class="lu-icon">
            <li>......</li>
        </ul>

        <br/>

        <ul class="lu-icon">
            <li><lu-button icon="lu-icon-delete2">图标按钮</lu-button></li>
        </ul>

        <hr>

        <h1>四位验证码输入框</h1>
        
        <p>1-6位验证码输入框  设置单个框的大小[cellWidth="50px"] change事件[@change="changeNum"]返回输入框中的值(string类型)</p>

        <p>
            <lu-code-input :num='3' cellWidth="50px" @change="changeNum" />
        </p>

        <hr>

        <h1>分页</h1>
        <p>page-count 总页数 默认10</p>
        <p>current-page 当前页数 默认1</p>
        <p>prev-text / next-text  替代图标显示的 上一页 / 下一页 文字</p><br>
        <p>
            <!-- page-count  pageCount -->
            <lu-pagination 
                :small="true" 
                :page-count="100" 
                :current-page="currentPage" 
                @current-change="handleCurrentChange"
                @prev-click="prevClick"
                @next-click="nextClick"
                
            />
        </p>

        <hr>

        <h1>时间选择器</h1>
        <p>
            <lu-date-picker @change="dateOnChange" />
        </p>

        <hr>

        <h1>Tabs 标签页</h1>
        <p>default-value 默认值</p>
        <p>@change value值改变时触发改函数</p>
        <br>
        <p>
            <lu-tab :default-value="defaultValue" :tabs="tabs" @change="tabChange"/>
        </p>

        <hr>

        <h1>Alert 警告</h1>
        <p>title 标题</p>
        <p>type 类型 success/info(默认)/warning</p>
        <p>center 内容居中</p>
        <p>show-icon 显示类型图标</p>
        <p>description 描述语言</p>
        <p>closable 显示关闭按钮 @close 关闭函数</p>
        <br>
        <p>
            <lu-alert 
                title="成功提示的文案"
                type="success"
                description="文字说明文字说明文字说明文字说明文字说明文字说明"
                show-icon 
                :closable="false"
            />

            <br />

            <lu-alert 
                title="消息提示的文案"
                type="info"
                description="文字说明文字说明文字说明文字说明文字说明文字说明"
                show-icon 
                center
            />

            <br />

            <lu-alert 
                type="warning"
                description="文字说明文字说明文字说明文字说明文字说明文字说明"
                show-icon 
            />

            <br />

            <lu-alert 
                title="错误提示的文案"
                type="error"
                description="文字说明文字说明文字说明文字说明文字说明文字说明"
                @close="close()"
            />
        </p>

        <hr>

        <h1>Radio 单选框(lu-radio)</h1>
        <p>name 单选框name属性</p>
        <br>
        <p>
            <lu-radio name="radio" v-model="radio" :resource="resource"  />
        </p>

        <hr>

        <h1>InputNumber 计数器(lu-input-number)</h1>
        <p>step 计数器步长</p>
        <p>min max 最小值 最大值</p>
        <br>
        <p>
            <lu-input-number v-model="numberInputValue" :step="1" :min="-2" :max="10" />
        </p> 

        <hr>

        <h1>Progress 进度条(lu-progress)</h1>
        <p>percent 百分比</p>
        <p>size 大小 large/medium/small（默认）</p>
        <p>shape类型 circle 圆形/line 直线（默认）</p>
        <br>
        <p>
            <lu-progress :percent="percentNumber" size="large" shape="circle" />
            <lu-progress :percent="percentNumber" size="medium" shape="circle" />
            <lu-progress :percent="percentNumber" size="small" shape="circle" /> 

            <lu-progress :percent="percentNumber" size="large" /> <br>
            <lu-progress :percent="percentNumber" size="medium" /> <br>
            <lu-progress :percent="percentNumber" size="small" /> <br>
            <lu-button @click="percentAdd">add</lu-button>
        </p> 
        <hr>

        <h1>VirtualList 虚拟列表(lu-virtualList)</h1>
        <p>
            <lu-virtualList 
                width="200px"
                height="280px"
                :dataSource="bigData" 
            />
        </p>

        <hr>
        <h1>Scrollbar 滚动条(lu-scrollbar)</h1>
        <p>@scroll 滚动触发函数</p>
        <p style="width: 10%; height: 500px">
            <lu-scrollbar @scroll="">
                <div 
                    style='height:20px'
                    v-for="(item,index) in bigData"
                    :key="index"
                >{{item.key}}</div>
            </lu-scrollbar>
        </p> 

        <hr>
        <h1>Ellipsis 多行省略(lu-ellipsis)</h1>
        <p>text 文本</p>
        <p>lineLimit 省略行数 默认1</p>
        <p>width 宽度 默认100%</p>
        <p>lineHeight 字体line-height</p>
        <p>fontSize 字体font-size</p>
        <br>
        <p>
            <lu-ellipsis
                text="奥雷连诺的衣服沾满了污泥和呕吐出来的脏东西。这时，皮拉·苔列娜只和自己的两个小儿子住在一起；她什么也没问他，就把他领到一个床铺，用湿布擦净他的脸，脱掉他的衣服，然后自己也脱得精光，放下蚊帐，免得两个儿子醒来看见。她等待留在原先那个村子的男人，等待离开这个村子的男人，等待那些被她的纸牌占卜弄得蒙头转向的男人，已经等得厌倦了；等呀盼呀，她的皮肤已经打皱了，乳房干瘪了，心里的欲火也熄灭了。皮拉·特列娜在黑暗中摸到了奥雷连诺，把一只手放在他的肚子上，母亲一般温情地吻了吻他的脖子，低声说：我可怜的孩子，奥雷连诺战粟起来。他一点没有迟延，平稳地离开了岩石累累的悲袁的河岸，恍惚觉得雷麦黛丝变成了无边天际的沼泽，这片沼泽洋溢着原始动物的气息，散发出刚刚熨过的床单的味儿，他到了沼泽表面，却哭了。开头，这是不由自主的、断断续续的啜泣，然后，他就难以遏制地泪如泉涌。他心中感到极度的痛苦和难受。她用指尖抚摸着他的头发，等他把似乎使他难以生活下去的隐衷吐露出来。接着，皮拉·苔列娜问道：于是，奥雷连诺告诉了她。她笑了起来；这种笑声往日曾把鸽子吓得飞到空中，现在却没有惊醒她的两个孩子。--皮拉·苔列娜打趣地说。可是奥雷连诺在这笑语后面觉到了深刻的同情。他走出房间时，不仅不再怀疑自己的男性特征，而且放下了几个月来心中痛苦的重负，因为皮拉·苔列娜突然答应帮他的忙。"
            />
        </p> 
        <br>
        <p>
            <lu-ellipsis
                :lineLimit="4"
                text="He would walk along groping in the air, although he passed between objects with an inexplicable fluidity, as if be were endowed with some instinct of direction based on an immediate prescience. One day he forgot to put in his false teeth, which at night he left in a glass of water beside his bed, and he never put them in again. When Úrsula undertook the enlargement of the house, she had them build him a special room next to Aureliano's workshop, far from the noise and bustle of the house, with a window flooded with light and a bookcase where she herself put in order the books that were almost destroyed by dust and moths, the flaky stacks of paper covered with indecipherable signs, and the glass with his false teeth, where some aquatic plants with tiny yellow flowers had taken root."
            />
        </p> 


        



    </div>
</template>

<script>
export default {
    name: 'index',
    data () {
        return {
            percentNumber: 0,
            radio:3,
            witch1:true,
            witch2:false,
            inputValue0:null,
            inputValue1:null,
            inputValue2:null,
            inputValue3:null,
            currentPage:6,

            resource:[
                {
                    label:'选择1',
                    value:1,
                    disabled:false
                },
                {
                    label:'选择2',
                    value:2
                },
                {
                    label:'选择3',
                    value:3,
                    disabled:true
                },
                {
                    label:'选择4',
                    value:4,
                    disabled:false
                },
                {
                    label:'选择5',
                    value:5,
                    disabled: 324
                }
            ],

            numberInputValue: -5,

            defaultValue: 'about',
            tabs:[
                {
                    label:"标题1",
                    value:'index',
                    content:'哈哈哈哈哈哈哈哈哈'
                },
                {
                    label:"标题2标题2",
                    value:'about',
                    content:'呵呵呵呵呵呵'
                },
                {
                    label:"标题3标题3标题3标题3",
                    value:'mine',
                    content:'嘿嘿嘿嘿嘿'
                },
                {
                    label:"标题4标题4标题4标题4",
                    value:'detail',
                    content:'哟哟哟哟哟哟哟哟'
                },
                {
                    label:"标题5",
                    value:'homePage',
                    content:''
                },
                {
                    label:"标题6",
                    value:'user'
                }
            ]
        }
    },
    computed: {
        bigData: function() {
            const data = [];
            for (let i = 0; i < 10000; i++) {
                data.push({ 
                    value: i,
                    key: `${i}`
                });
            }
            return data
        }
    },
    mounted(){

        // let jse = new this.$jsEncrypt.JSEncrypt()
        // let encrypted = jse.encrypt('Hello, world')
        // console.log(encrypted)

    },
    watch: {
        'numberInputValue'(val, oldValue) {
            console.log(val)
        }
    },
    methods:{
        percentAdd(){
            if(this.percentNumber >= 100){
                this.percentNumber = 0;
            }else{
                this.percentNumber = this.percentNumber + 10
            }
        },
        tabChange(index,value){
            console.log(index,value)
        },
        close() {
            console.log('close')
        },
        dateOnChange(value) {
            console.log(value)
        },

        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            this.currentPage = val
        },
        prevClick(val){
            console.log(`上一页`);
            this.currentPage = val
        },
        nextClick(val){
            console.log(`下一页`);
            this.currentPage = val
        },
        changeNum(value){
            console.log(value)
        },
        notify1(){
            const h = this.$createElement;
            console.log({
              title: '标题名称',
              message: h(
                'p', 
                { style: 'color: red'}, 
                '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案'
                )
            })

            this.$lu_notify({
              title: '标题名称',
              message: h(
                'p', 
                { style: 'color: red'}, 
                '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案'
                ),
              onClose:function(){
                console.log('回调函数onClose')
              },
              onClick:function(){
                console.log('回调函数onClick')
              }
            });
        },

        notify2(){
            this.$lu_notify({
              title: '提示',
              message: '这是一条不会自动关闭的消息',
              duration: 0
            });
        },

        notify3(){
            this.$lu_notify({
              title: '提示',
              message: '这是一条提示消息',
              type: 'info'
            });
        },

        notify4(){
            this.$lu_notify({
              title: '成功',
              message: '这是一条成功的提示消息',
              type: 'success'
            });
        },
        notify5(){
            this.$lu_notify({
              title: '警告',
              message: '这是一条警告的提示消息',
              type: 'warning'
            });
        },
        notify6(){
            this.$lu_notify({
              title: '错误',
              message: '这是一条错误的提示消息',
              type: 'error'
            });
        },

        notify7(){
            this.$lu_notify({
              title: '成功',
              message: '这是一条成功的提示消息',
              type: 'success',
              offset: 100
            });
        },

        closeTag(index){
            console.log('closeTag事件触发',index)
        },
        blurInput(){
            console.log('blurInput失焦事件触发')
        },

        focusInput(){
            console.log('focusInput聚焦事件触发')
        },

        changeInput(value){
            console.log(value)
        },

        change1(value){
            console.log(this)
            // this.$lu_toast(`${value}`)
        },

        input1(value){
            // console.log(value)
            this.$lu_toast(`${value}`)
        },

        tap(){},

        tapa(){
            // this.$lu_message('lu_toast实例')

            // console.log(this.$lu_message('lu_toast实例'))

            this.$lu_message({
                type:'error',
                message: '危险 错误 提示',
                duration:30000,
                showClose:true,
                onClose:function(){
                    console.log(11)
                }
            })
        },

        tapb(){

            this.$lu_message({
                type:'success',
                message: '操作成功',
                duration:3000,
                showClose:true,
                onClose:function(e){
                    // 
                    console.log('回调返回的是实例',e)
                }
            })
        },

        tapc(){

            this.$lu_message.warning('警告提示')

            // this.$anchu_message.info('we21e');
        },

        tapd(){

            this.$lu_message.info('默认提示框')

            //     this.$anchu_messageBox.confirm('是否删除该商品？', {
            //     confirmButtonText: '确定',
            //     cancelButtonText: '取消',
            //     type: 'networkAnomaly'
            // }).then(() => {

                

            // }).catch(() => {
            //         // 取消
            // });
        },

        toast(){
            // console.log(this)
            this.$lu_toast({
              message: '信息弹窗提示',
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
    p{
        padding-left: 40px;
    }
    .lu-icon{
        display: inline-block;
        width: 150px;
        margin: 0;
        padding: 20px;
        text-align: center;
        list-style: none;
        i{
            font-size: 30px;
        }
    }
</style>
