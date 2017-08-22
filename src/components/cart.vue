<template>
    <div class="hello-wrap">
        <lu_button @click="tap0">大超哥</lu_button>
        <lu_button @click="tap1">大超哥</lu_button>
        <lu_button @click="tap2">大超哥</lu_button>
        <lu_button @click="tap3">大超哥</lu_button>
    </div>
</template>

<script>

export default {

    name: 'hello',
    data () {
        return {
            
        }
    },
    mounted(){

    },
    methods:{
        tap0(){
                this.$lu_messagebox.confirm('是否确定删除该商品', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'authentication'
        }).then(() => {
          console.log(111111111)
        }).catch(() => {
          console.log(222222222)     
        });
        },

        tap1() {
        this.$anchu_messageBox.confirm('是否确定删除该商品', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'cancelOrder'
        }).then(() => {
          console.log(111111111)
        }).catch(() => {
          console.log(222222222)     
        });
      },


      tap2() {
        this.$anchu_messageBox.confirm('是否确定删除该商品', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'cancelRefund'
        }).then(() => {
          console.log(111111111)
        }).catch(() => {
          console.log(222222222)     
        });
      },



      tap3() {
        this.$anchu_messageBox.confirm('是否确定删除该商品', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'confirmReceipt'
        }).then(() => {
          console.log(111111111)
        }).catch(() => {
          console.log(222222222)     
        });
      },	
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	$class-pre:'hello';
	.#{$class-pre}{
		&-wrap{
			font-size: 30px;
			i{
				color: red;
			}
		}
	}
</style>
