# 计算器
<center><h1>计算器</h1></center>
<center>
<template>
    <div>
    <input type="text" class="el-input__inner" id="num" width="50px" placeholder="起始倍数" value="1" /><br/><br/>
    <input type="text" class="el-input__inner" id="num0" width="50px" placeholder="已投入"value="0" /><br/><br/>
    <input type="text" class="el-input__inner" id="num1" width="50px" placeholder="奖金" /><br/><br/>
    <input type="text" class="el-input__inner" id="num2" width="50px" placeholder="利润"/><br/><br/>
    <input type="text" class="el-input__inner" id="num3" width="50px" placeholder="最大倍数" value="1000"/><br/> <br/>
        <button class="el-button el-button--primary" @click="change">{{buttonName}}</button>
         <div v-for="item in result" > 
            <span>{{ item.次数 }} {{ item.倍 }} {{ item.消费 }} {{ item.利润 }} </span>
          </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                buttonName: "计算",
                 i : 1,
                 play: '',
                 lr: '',
                 t: '',
                 m: '',
                 b: '',
                result: [{ /*message: '',*/
                           次数: '',
                           倍: '',
                           消费: '',
                           利润: ''}]
            };
        },
        methods: {
            change() {
            this.i = 1,
            this.play= '',
            this.lr = '',
            this.t = '',
            this.m = '',
            this.b = '',
            this.result = [{次数: '',
                            倍: '',
                            消费: '',
                            利润: ''}],
            this.play= parseFloat(document.getElementById("num1").value);
            this.lr= parseFloat(document.getElementById("num2").value);
            this.t= parseFloat(document.getElementById("num3").value);
            this.m = parseFloat(document.getElementById("num0").value);
            this.b = parseFloat(document.getElementById("num").value);
            for(; this.b < this.t; this.b++){
                for (; this.lr < this.b * this.play - (this.m + this.b * 2); this.i++) {
                    this.m += this.b * 2;
                    this.result.push({
                        /*message: "次数 >> " + this.i + "   倍 >> "  + this.b + "   消费 >> " + this.m + "  利润 >> " + (this.b * this.play-this.m),*/
                        次数: "次数 : " + this.i,
                        倍: "倍数 ：" + this.b,
                        消费: "消费 : "+ this.m,
                        利润: "利润 : " + (this.b * this.play-this.m)
                    })                  
                }
            }           
            }
        }
    };

 </script>
<style>
.el-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 50%;
}
.el-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
}
button, input, select, textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
}

button {
    -webkit-appearance: button;
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: buttontext;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: center;
    align-items: flex-start;
    cursor: default;
    background-color: buttonface;
    box-sizing: border-box;
    margin: 0em;
    font: 400 13.3333px Arial;
    padding: 1px 6px;
    border-width: 2px;
    border-style: outset;
    border-color: buttonface;
    border-image: initial;
}
.el-button--primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
}
.demo-icon .source button {
    margin: 0 20px;
}

</style>
</center>
