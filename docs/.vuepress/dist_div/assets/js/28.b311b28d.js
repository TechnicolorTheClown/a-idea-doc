(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{507:function(e,r,t){"use strict";t.r(r);var a=t(4),s=Object(a.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"部署项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署项目"}},[e._v("#")]),e._v(" 部署项目")]),e._v(" "),t("p",[e._v("本项目可以使用 "),t("code",[e._v("tomcat")]),e._v(" 或者 "),t("code",[e._v("nginx")]),e._v(" 部署，在这里分享下常规部署 "),t("code",[e._v("[Nginx]")]),e._v(" 与使用Docker部署的两种方式")]),e._v(" "),t("h2",{attrs:{id:"ssh工具推荐"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssh工具推荐"}},[e._v("#")]),e._v(" SSH工具推荐")]),e._v(" "),t("p",[e._v("先分享个好用的 SSH 工具 "),t("a",{attrs:{href:"http://www.hostbuf.com/t/988.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("FinalShell"),t("OutboundLink")],1),e._v("，后面部署会使用到")]),e._v(" "),t("h4",{attrs:{id:"配置-nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置-nginx"}},[e._v("#")]),e._v(" 配置 nginx")]),e._v(" "),t("p",[e._v("我们可以使用 "),t("code",[e._v("nginx")]),e._v(" 代理 "),t("code",[e._v("java")]),e._v("服务，添加配置")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('server {\n    listen 80;\n    server_name 域名/当前服务器外网IP;\n    location / {\n        proxy_pass http://127.0.0.1:8000; #这里的端口记得改成项目对应的哦\n        proxy_set_header X-Forwarded-Proto $scheme;\n        proxy_set_header X-Forwarded-Port $server_port;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection "upgrade";\n        }\n    }\n')])])]),t("h3",{attrs:{id:"部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[e._v("#")]),e._v(" 部署")])])}),[],!1,null,null,null);r.default=s.exports}}]);