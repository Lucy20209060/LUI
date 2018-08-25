<template>
    <div class="svg-wrap">
        <!-- 
            rect 创建矩形 以及矩形的变种 
            fill 填充颜色
            stroke 定义一条线，文本或元素轮廓颜色
            stroke-width 定义了一条线，文本或元素轮廓厚度
            stroke-linecap 定义不同类型的开放路径的终结(形状)
            fill-opacity 填充色的透明度
            stroke-opacity 边框的透明度
        -->

        <div class="svg-demo">
            <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <rect 
                    width="50%" 
                    height="50%" 
                    fill='red'
                    stroke-width='10'
                    fill-opacity='0.6'
                    stroke-opacity='0.3'
                    stroke='rgb(0,0,0)'
                />
            </svg>
        </div>


        <div class="svg-demo">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <g fill="none" stroke="black" stroke-width="6">
                    <path stroke-linecap="butt" d="M5 20 l215 0" />
                    <path stroke-linecap="round" d="M5 40 l215 0" />
                    <path stroke-linecap="square" d="M5 60 l215 0" />
                </g>
            </svg>
        </div>

        <!-- 
            circle 创建圆 
            cx cy 定义圆的中心坐标
            r 定义圆的半径
        -->
        <div class="svg-demo">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <circle 
                    cx="100" 
                    cy="100" 
                    r="60" 
                    stroke="black"
                    stroke-width="2" 
                    fill="red"
                />
            </svg>
        </div>

        <!-- 
            ellipse 创建椭圆
            cx cy 定义椭圆的中心坐标
            rx ry 定义椭圆x y轴的半径
         -->
        <div class="svg-demo">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <ellipse 
                    cx="100" 
                    cy="100" 
                    rx="80" 
                    ry="50"
                    style="fill:yellow;stroke:purple;stroke-width:2"
                />
            </svg>
        </div>
        <div class="svg-demo"></div>
        <div class="svg-demo"></div>
        <div class="svg-demo"></div>
        <div class="svg-demo"></div>
        <div class="svg-demo"></div>
        <div class="svg-demo"></div>
        <div class="svg-demo"></div>
        <div class="svg-demo"></div>
        <div class="svg-demo"></div>
        <div class="svg-demo"></div>
        <div class="svg-demo"></div>
        <div class="svg-demo"></div>
        <div class="svg-demo"></div>
        <div class="svg-demo"></div>






    </div>
</template>

<script>

export default {
    name: 'svg',
    data () {
        return {
            
        }
    },
    mounted(){
        
    },
    methods:{
        
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.svg-demo{
        display: inline-block;
        width: 200px;
        height: 200px;
    }
</style>