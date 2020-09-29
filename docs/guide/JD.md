# 京东准点秒杀脚本
<center><h1>京东准点秒杀脚本</h1></center>
<center>
# 直接上菜

## 1.浏览器打开 ，登录京东

<img alt="" class="has" height="415" src="https://img-blog.csdnimg.cn/20191110012055782.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3Rhbmdjdg==,size_16,color_FFFFFF,t_70" width="800">

 

## 2.选择要抢购的商品

<img alt="" class="has" height="445" src="https://img-blog.csdnimg.cn/20191110013745491.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3Rhbmdjdg==,size_16,color_FFFFFF,t_70" width="800">

## 3.按键盘F12,打开开发者模式,选择Console选项卡

<img alt="" class="has" height="408" src="https://img-blog.csdnimg.cn/2019111001402939.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3Rhbmdjdg==,size_16,color_FFFFFF,t_70" width="800">

## 4.把以下代码粘贴在Console里面,修改代码里开始抢购时间(有二处时间)

```
var nIntervId;
var count = 1;
var goDate;
function go() {
    console.log("正在帮你抢购 ＊ 刷新" + count + "次");
    //console.log("host:" + window.location.hostname);
    count++;   
    if (Date.now() &gt;= new Date("2019-11-10 01:45:59")) {
        console.log("开始抢购" + Date.now());

        // 抢购
        if ($(parent.frames[0].document).find("#choose-btn-ko").length == 1) {
            console.log("(++++++++++++抢购");
            var sku = window.location.pathname.replace(/[^0-9]/ig, "");
            var ref = "//cart.jd.com/gate.action?pid=" + sku + "&amp;pcount=1&amp;ptype=1";
            console.log("https:" + ref);
            //5089237
            $(parent.frames[0].document).find("#choose-btn-ko").attr("href", ref);//                 
            parent.frames[0].document.getElementById("choose-btn-ko").click();
            return;
        }

        //预约抢购
        if ($(parent.frames[0].document).find("#btn-reservation").length == 1) {
            console.log("(++++++++++++正在预约抢购");

            parent.frames[0].document.getElementById("btn-reservation").click();
            return;
        }

        //秒杀   
        if ($(parent.frames[0].document).find("#InitCartUrl").length == 1) {
            console.log("(++++++++++++正在秒杀");
            parent.frames[0].document.getElementById("InitCartUrl").click();
            return;
        }

        //去购物车结算
        if ($(parent.frames[0].document).find("#GotoShoppingCart").length == 1) {
            console.log("(++++++++++++正在去购物车结算");
            parent.frames[0].document.getElementById("GotoShoppingCart").click();
        }

        //去结算        
        if ($(parent.frames[0].document).find(".submit-btn").length == 1) {
            console.log("(++++++++++++正在去结算");

            //只提交我抢购的商品
            //var sku = window.location.pathname.replace(/[^0-9]/ig, "");                 

            //$("#toggle-checkboxes_up").trigger("click");
            //全不选择
            //parent.frames[0].document.getElementById("toggle-checkboxes_up").click();

            //$(parent.frames[0].document).find('input:checkbox').attr("checked",false);
            //$(parent.frames[0].document).find("input:checkbox[value^='"+sku+"']").trigger("click");

            //$(parent.frames[0].document).find("input:checkbox[value^='"+sku+"']").attr("checked",true);

            parent.frames[0].document.getElementsByClassName("submit-btn")[0].click();
        }
        //提交订单order-submit
        if ($(parent.frames[0].document).find("#order-submit").length == 1) {
            console.log("(++++++++++++正在提交订单");
            //$(parent.frames[0].document).find(".payment-item item-selected online-payment")

            //在线支付
            parent.frames[0].document.getElementById("order-submit").click();
        }
    }
}
function rewrite(current) {
    fr4me = '&lt;frameset cols=\'*\'&gt;\n&lt;frame src=\'' + current + '\'/&gt;';
    fr4me += '&lt;/frameset&gt;';
    with (document) { write(fr4me); void (close()) };
}


//注入sql
rewrite(window.location.href);

//这里需要注意的是，prompt有两个参数，前面是提示的话，后面是当对话框出来后，在对话框里的默认值
var d = prompt("请输入抢购开始时间", "2019-11-10 01:45:59");
//如果返回的有内容
if (d) {
    try {
        goDate = new Date(d);
        console.log("设定时间成功:" + goDate);

        alert("监控期间,请保持标签页在最前面");
        //go(); 0.25秒执行一次
        nIntervId = setInterval("go()", 250);
    }
    catch (e) {
        alert("时间格式不正确,请使用yyyy-MM-dd hh:mm:ss格式,精确到秒, 请重试");
    }
}
else {
    alert("请抢购时间, 请重重试");

}


/*
    clearInterval(nIntervId);//停止监控
    */
```

<img alt="" class="has" height="379" src="https://img-blog.csdnimg.cn/20191110014146579.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3Rhbmdjdg==,size_16,color_FFFFFF,t_70" width="800">

 

## 5.键盘按回车键，确认时间，执行抢购

<img alt="" class="has" height="378" src="https://img-blog.csdnimg.cn/20191110014329996.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3Rhbmdjdg==,size_16,color_FFFFFF,t_70" width="800">、

## 6.代码执行抢购

<img alt="" class="has" height="378" src="https://img-blog.csdnimg.cn/2019111001462864.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3Rhbmdjdg==,size_16,color_FFFFFF,t_70" width="800">

 

## 7.抢购完成,付款

<img alt="" class="has" height="357" src="https://img-blog.csdnimg.cn/20191110014914353.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3Rhbmdjdg==,size_16,color_FFFFFF,t_70" width="800">


</center>
