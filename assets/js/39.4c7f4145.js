(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{239:function(t,s,a){"use strict";a.r(s);var e=a(0),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"跨域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跨域"}},[t._v("#")]),t._v(" 跨域")]),t._v(" "),a("h2",{attrs:{id:"方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[t._v("#")]),t._v(" 方法")]),t._v(" "),a("ul",[a("li",[t._v("JSONP")]),t._v(" "),a("li",[t._v("CORS")]),t._v(" "),a("li",[t._v("postMessage")])]),t._v(" "),a("h2",{attrs:{id:"为什么会出现跨域问题？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么会出现跨域问题？"}},[t._v("#")]),t._v(" 为什么会出现跨域问题？")]),t._v(" "),a("p",[t._v("出于浏览器的同源策略限制，浏览器会拒绝跨域请求。")]),t._v(" "),a("h2",{attrs:{id:"什么情况才算作跨域？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么情况才算作跨域？"}},[t._v("#")]),t._v(" 什么情况才算作跨域？")]),t._v(" "),a("p",[t._v("非同源请求，均为跨域。名词解释：同源 —— 如果两个页面拥有相同的协议（protocol），端口（port）和主机（host），那么这两个页面就属于同一个源（origin）。")]),t._v(" "),a("h2",{attrs:{id:"为什么有跨域需求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么有跨域需求"}},[t._v("#")]),t._v(" 为什么有跨域需求?")]),t._v(" "),a("p",[t._v("工程服务化后，不同职责的服务分散在不同的工程中，往往这些工程的域名是不同的，但一个需求可能需要对应到多个服务，这时便需要调用不同服务的接口，因此会出现跨域。")]),t._v(" "),a("h2",{attrs:{id:"jsonp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsonp"}},[t._v("#")]),t._v(" JSONP")]),t._v(" "),a("p",[t._v("虽然因为同源策略的影响，不能通过 XMLHttpRequest 请求不同域上的数据（Cross-origin reads）。但是，在页面上引入不同域上的 js 脚本文件却是可以的（Cross-origin embedding）。因此在 js 文件载入完毕之后，触发回调，可以将需要的 data 作为参数传入。")]),t._v(" "),a("h2",{attrs:{id:"cors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cors"}},[t._v("#")]),t._v(" CORS")]),t._v(" "),a("blockquote",[a("p",[t._v("Cross-origin resource sharing")])]),t._v(" "),a("p",[t._v("CORS 是 W3C 推荐的一种新的官方方案，能使服务器支持 XMLHttpRequest 的跨域请求。CORS 实现起来非常方便，只需要增加一些 HTTP 头，让服务器能声明允许的访问来源。")]),t._v(" "),a("h2",{attrs:{id:"postmessage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#postmessage"}},[t._v("#")]),t._v(" postMessage")]),t._v(" "),a("p",[t._v("window.postMessage(message,targetOrigin) 方法是 html5 新引进的特性，可以使用它来向其它的 window 对象发送消息，无论这个 window 对象是属于同源或不同源，目前 IE8+、FireFox、Chrome、Opera 等浏览器都已经支持 window.postMessage 方法。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("otherWindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("postMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" targetOrigin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("transfer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"links"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#links"}},[t._v("#")]),t._v(" links")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://juejin.im/post/59c132415188256bb018e825",target:"_blank",rel:"noopener noreferrer"}},[t._v("跨域"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/5815f4abbf22ec006893b431#heading-7",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端跨域整理"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/5a2f92c65188253e2470f16d",target:"_blank",rel:"noopener noreferrer"}},[t._v("正确面对跨域，别慌"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/5b91d3be5188255c95380b5e",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端跨域方法论"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000011145364",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端常见跨域解决方案（全）"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);