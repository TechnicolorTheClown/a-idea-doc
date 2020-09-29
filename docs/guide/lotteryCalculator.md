# 彩票计算器
<center><h1>彩票计算器</h1></center>
<center>
<html>
    <head>
        <meta charset="UTF-8">
        <title>彩票计算器</title>
    </head>
    <style>
        body{
        border: 2px #00FFFF;    
        }
    </style>
    <body style="background-repeat: no-repeat;margin-left: 10px;">
        <p>
            <h1>简易计算器</h1>
            <input type="text" id="num" width="50px" placeholder="起始倍数" value="1" /><br/>
            <input type="text" id="num0" width="50px" placeholder="已投入"value="0" /><br/>
            <input type="text" id="num1" width="50px" placeholder="奖金" /><br/>
            <input type="text" id="num2" width="50px" placeholder="利润"/><br/>
            <input type="text" id="num3" width="50px" placeholder="最大倍数" value="1000"/>
            <input type="button" value="计算" onclick="cal()" style="color: #FF0000;"/><br/>
            <div id="divValue"></div>
            <span id="result"></span>
        </p>
    </body>
    <script type="text/javascript">
        function cal(){
            var play= parseFloat(document.getElementById("num1").value);
            var lr= parseFloat(document.getElementById("num2").value);
            var t= parseFloat(document.getElementById("num3").value);
            var m = parseFloat(document.getElementById("num0").value);
            var b = parseFloat(document.getElementById("num").value);
            var spanValue = "";
            var i = 1;
            for(; b < t; b++){
                for (; lr < b * play - (m + b * 2); i++) {
                    m += b * 2;
                    spanValue = spanValue + "次数>" + i + "倍>"  + b + "消费>" + m + "利润>" + (b * play-m);      
                }
                document.getElementById("result").innerText=spanValue;
            }            
        }
    </script>
    </html>

</center>

