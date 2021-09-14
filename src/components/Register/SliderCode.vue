<template>
  <!-- <div class="form-item"> -->
      <div class="jc-range" :class="rangeStatus ? 'success':'' ">
          <i @mousedown="rangeMove" :class="rangeStatus?successIcon:startIcon" ></i>
          {{rangeStatus?successText:startText}}
      <!-- </div> -->
  </div>
</template>

<script>
export default {
    props:{
        //成功之后的函数
        successFunction:{
            type:Function,
        },
        //成功图标
        successIcon:{
            type :String,
            default:'el-icon-success'
        },
        //成功文字
        successText:{
            type:String,
            default:'验证成功',
        },
        //开始图标
        startIcon:{
            type:String,
            default: 'el-icon-d-arrow-right',
        },
		//开始的文字
		startText: {
			type: String,
			default: '拖动滑块到最右边'
		},
        //失败之后的函数
        errorFun:{
            type: Function
        },
        //或者用值来进行监听
        status:{
            type:String,
        }
    },
    data(){
        return{
            disX:0,
            rangeStatus:false,
        }
    },
    methods:{
        rangeMove(e){
            let ele = e.target
            let startX = e.clientX
            let eleWidth = ele.offsetWidth
            let parentWidth = ele.parentElement.offsetWidth
            let MaxX = parentWidth - eleWidth
            if(this.rangeStatus){
                //不运行
                return false
            }
            document.onmousemove=(e)=>{
                let endX = e.clientX
                this.disX = endX - startX
                if(this.disX<=0){
                    this.disX = 0
                }
                if(this.disX >= MaxX - eleWidth){
                    this.disX = MaxX
                }
                ele.style.transition = '.1 all'
                ele.style.transform = 'translateX(' + this.disX +'px)'
                e.preventDefault()
            }
            document.onmouseup=()=>{
                if(this.disX !== MaxX){
                    ele.style.transition = '.5 all'
                    ele.style.transform = 'translateX(0)'
                    //执行成功函数
                    this.errorFun && this.errorFun()
                }else{
                    this.rangeStatus = true
                    if(this.status){
                        this.$parent[this.status] = true
                    }
                    this.successFun && this.successFun();
                }
                document.onmousemove = null;
                document.onmouseup = null;
            }
        }
    }
}
</script>

<style scoped>
.jc-range{
    width: 300px;
	background-color: #e8e8e8;
	position: relative;
	transition: 1s all;
	user-select: none;
	color: #333;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 34px; 
}
.jc-range i{
	position: absolute;
	left: 0;
	width: 40px;
	height: 100%;
	color: #919191;
	background-color: #fff;
	border: 1px solid #bbb;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
}
.jc-range.success{
	background-color: #7AC23C;
	color: #fff;
}
.jc-range.success i{
    font-size: 20px;
	color: #7AC23C;
}
</style>