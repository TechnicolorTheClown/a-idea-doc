(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{498:function(t,n,e){"use strict";e.r(n);var a=e(4),s=Object(a.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"京东准点秒杀脚本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#京东准点秒杀脚本"}},[t._v("#")]),t._v(" 京东准点秒杀脚本")]),t._v(" "),e("center",[e("h1",[t._v("京东准点秒杀脚本")])]),t._v(" "),e("center",[t._v("\n# 直接上菜\n"),e("h2",{attrs:{id:"_1-浏览器打开-登录京东"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-浏览器打开-登录京东"}},[t._v("#")]),t._v(" 1.浏览器打开 ，登录京东")]),t._v(" "),e("img",{staticClass:"has",attrs:{alt:"",height:"415",src:"https://img-blog.csdnimg.cn/20191110012055782.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3Rhbmdjdg==,size_16,color_FFFFFF,t_70",width:"800"}}),t._v(" "),e("p"),t._v(" "),e("h2",{attrs:{id:"_2-选择要抢购的商品"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-选择要抢购的商品"}},[t._v("#")]),t._v(" 2.选择要抢购的商品")]),t._v(" "),e("img",{staticClass:"has",attrs:{alt:"",height:"445",src:"https://img-blog.csdnimg.cn/20191110013745491.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3Rhbmdjdg==,size_16,color_FFFFFF,t_70",width:"800"}}),t._v(" "),e("h2",{attrs:{id:"_3-按键盘f12-打开开发者模式-选择console选项卡"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-按键盘f12-打开开发者模式-选择console选项卡"}},[t._v("#")]),t._v(" 3.按键盘F12,打开开发者模式,选择Console选项卡")]),t._v(" "),e("img",{staticClass:"has",attrs:{alt:"",height:"408",src:"https://img-blog.csdnimg.cn/2019111001402939.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3Rhbmdjdg==,size_16,color_FFFFFF,t_70",width:"800"}}),t._v(" "),e("h2",{attrs:{id:"_4-把以下代码粘贴在console里面-修改代码里开始抢购时间-有二处时间"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-把以下代码粘贴在console里面-修改代码里开始抢购时间-有二处时间"}},[t._v("#")]),t._v(" 4.把以下代码粘贴在Console里面,修改代码里开始抢购时间(有二处时间)")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('var nIntervId;\nvar count = 1;\nvar goDate;\nfunction go() {\n    console.log("正在帮你抢购 ＊ 刷新" + count + "次");\n    //console.log("host:" + window.location.hostname);\n    count++;   \n    if (Date.now() &gt;= new Date("2019-11-10 01:45:59")) {\n        console.log("开始抢购" + Date.now());\n\n        // 抢购\n        if ($(parent.frames[0].document).find("#choose-btn-ko").length == 1) {\n            console.log("(++++++++++++抢购");\n            var sku = window.location.pathname.replace(/[^0-9]/ig, "");\n            var ref = "//cart.jd.com/gate.action?pid=" + sku + "&amp;pcount=1&amp;ptype=1";\n            console.log("https:" + ref);\n            //5089237\n            $(parent.frames[0].document).find("#choose-btn-ko").attr("href", ref);//                 \n            parent.frames[0].document.getElementById("choose-btn-ko").click();\n            return;\n        }\n\n        //预约抢购\n        if ($(parent.frames[0].document).find("#btn-reservation").length == 1) {\n            console.log("(++++++++++++正在预约抢购");\n\n            parent.frames[0].document.getElementById("btn-reservation").click();\n            return;\n        }\n\n        //秒杀   \n        if ($(parent.frames[0].document).find("#InitCartUrl").length == 1) {\n            console.log("(++++++++++++正在秒杀");\n            parent.frames[0].document.getElementById("InitCartUrl").click();\n            return;\n        }\n\n        //去购物车结算\n        if ($(parent.frames[0].document).find("#GotoShoppingCart").length == 1) {\n            console.log("(++++++++++++正在去购物车结算");\n            parent.frames[0].document.getElementById("GotoShoppingCart").click();\n        }\n\n        //去结算        \n        if ($(parent.frames[0].document).find(".submit-btn").length == 1) {\n            console.log("(++++++++++++正在去结算");\n\n            //只提交我抢购的商品\n            //var sku = window.location.pathname.replace(/[^0-9]/ig, "");                 \n\n            //$("#toggle-checkboxes_up").trigger("click");\n            //全不选择\n            //parent.frames[0].document.getElementById("toggle-checkboxes_up").click();\n\n            //$(parent.frames[0].document).find(\'input:checkbox\').attr("checked",false);\n            //$(parent.frames[0].document).find("input:checkbox[value^=\'"+sku+"\']").trigger("click");\n\n            //$(parent.frames[0].document).find("input:checkbox[value^=\'"+sku+"\']").attr("checked",true);\n\n            parent.frames[0].document.getElementsByClassName("submit-btn")[0].click();\n        }\n        //提交订单order-submit\n        if ($(parent.frames[0].document).find("#order-submit").length == 1) {\n            console.log("(++++++++++++正在提交订单");\n            //$(parent.frames[0].document).find(".payment-item item-selected online-payment")\n\n            //在线支付\n            parent.frames[0].document.getElementById("order-submit").click();\n        }\n    }\n}\nfunction rewrite(current) {\n    fr4me = \'&lt;frameset cols=\\\'*\\\'&gt;\\n&lt;frame src=\\\'\' + current + \'\\\'/&gt;\';\n    fr4me += \'&lt;/frameset&gt;\';\n    with (document) { write(fr4me); void (close()) };\n}\n\n\n//注入sql\nrewrite(window.location.href);\n\n//这里需要注意的是，prompt有两个参数，前面是提示的话，后面是当对话框出来后，在对话框里的默认值\nvar d = prompt("请输入抢购开始时间", "2019-11-10 01:45:59");\n//如果返回的有内容\nif (d) {\n    try {\n        goDate = new Date(d);\n        console.log("设定时间成功:" + goDate);\n\n        alert("监控期间,请保持标签页在最前面");\n        //go(); 0.25秒执行一次\n        nIntervId = setInterval("go()", 250);\n    }\n    catch (e) {\n        alert("时间格式不正确,请使用yyyy-MM-dd hh:mm:ss格式,精确到秒, 请重试");\n    }\n}\nelse {\n    alert("请抢购时间, 请重重试");\n\n}\n\n\n/*\n    clearInterval(nIntervId);//停止监控\n    */\n')])])]),e("img",{staticClass:"has",attrs:{alt:"",height:"379",src:"https://img-blog.csdnimg.cn/20191110014146579.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3Rhbmdjdg==,size_16,color_FFFFFF,t_70",width:"800"}}),t._v(" "),e("p"),t._v(" "),e("h2",{attrs:{id:"_5-键盘按回车键-确认时间-执行抢购"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-键盘按回车键-确认时间-执行抢购"}},[t._v("#")]),t._v(" 5.键盘按回车键，确认时间，执行抢购")]),t._v(" "),e("p",[e("img",{staticClass:"has",attrs:{alt:"",height:"378",src:"https://img-blog.csdnimg.cn/20191110014329996.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3Rhbmdjdg==,size_16,color_FFFFFF,t_70",width:"800"}}),t._v("、")]),t._v(" "),e("h2",{attrs:{id:"_6-代码执行抢购"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-代码执行抢购"}},[t._v("#")]),t._v(" 6.代码执行抢购")]),t._v(" "),e("img",{staticClass:"has",attrs:{alt:"",height:"378",src:"https://img-blog.csdnimg.cn/2019111001462864.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3Rhbmdjdg==,size_16,color_FFFFFF,t_70",width:"800"}}),t._v(" "),e("p"),t._v(" "),e("h2",{attrs:{id:"_7-抢购完成-付款"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-抢购完成-付款"}},[t._v("#")]),t._v(" 7.抢购完成,付款")]),t._v(" "),e("img",{staticClass:"has",attrs:{alt:"",height:"357",src:"https://img-blog.csdnimg.cn/20191110014914353.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3Rhbmdjdg==,size_16,color_FFFFFF,t_70",width:"800"}})])],1)}),[],!1,null,null,null);n.default=s.exports}}]);