(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{302:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"prototype"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prototype"}},[t._v("#")]),t._v(" prototype")]),t._v(" "),a("blockquote",[a("p",[t._v("Each object has a private property which holds a link to another object called its prototype.")])]),t._v(" "),a("ul",[a("li",[t._v("每一个构造函数都拥有一个 "),a("code",[t._v("prototype")]),t._v(" 属性，这个属性指向一个对象，也就是原型对象。当使用这个构造函数创建实例的时候，"),a("code",[t._v("prototype")]),t._v(" 属性指向的原型对象就成为实例的原型对象。")]),t._v(" "),a("li",[t._v("原型对象默认拥有一个 "),a("code",[t._v("constructor")]),t._v(" 属性，指向指向它的那个构造函数（也就是说构造函数和原型对象是互相指向的关系）。")]),t._v(" "),a("li",[t._v("每个对象都拥有一个隐藏的属性"),a("code",[t._v("[[prototype]]")]),t._v("，指向它的原型对象，这个属性可以通过 "),a("code",[t._v("Object.getPrototypeOf(obj)")]),t._v(" 或 "),a("code",[t._v("obj.__proto__")]),t._v(" 来访问。")]),t._v(" "),a("li",[t._v("实际上，构造函数的 "),a("code",[t._v("prototype")]),t._v(" 属性与它创建的实例对象的"),a("code",[t._v("[[prototype]]")]),t._v("属性指向的是同一个对象，"),a("code",[t._v("对象.__proto__ === 函数.prototype")])]),t._v(" "),a("li",[t._v("如上文所述，原型对象就是用来存放实例中共有的那部分属性")]),t._v(" "),a("li",[t._v("在 "),a("code",[t._v("JavaScript")]),t._v(" 中，所有的对象都是由它的原型对象继承而来，反之，所有的对象都可以作为原型对象存在。")]),t._v(" "),a("li",[t._v("访问对象的属性时，"),a("code",[t._v("JavaScript")]),t._v(" 会首先在对象自身的属性内查找，若没有找到，则会跳转到该对象的原型对象中查找。")])]),t._v(" "),a("p",[t._v("所有原型链的终点都是 "),a("code",[t._v("Object")]),t._v(" 函数的 prototype 属性")]),t._v(" "),a("p",[t._v("当谈到继承时，JavaScript 只有一种结构：对象。每个实例对象（ object ）都有一个私有属性（称之为 "),a("code",[t._v("__proto__")]),t._v(" ）指向它的构造函数的原型对象（"),a("code",[t._v("prototype")]),t._v("）。该原型对象也有一个自己的原型对象( "),a("code",[t._v("__proto__")]),t._v(" ) ，层层向上直到一个对象的原型对象为 null。根据定义，null 没有原型，并作为这个原型链中的最后一个环节。")]),t._v(" "),a("p",[t._v("还有人觉得我的分析很抽象，所以，我再总结一下，如果要一句话理解 JS 中的原型是什么，那就是，对象的原型就指的对象的父对象。每个对象都有父对象，父对象本身也有父对象（爷对象？）。而原型链呢，很像过去家谱的概念，可以从你往上追溯你父亲，到爷爷，到太爷爷一直到头，这就形成了一个链条，如果其中每个人都比作一个对象，那么这个链条就是原型链。")]),t._v(" "),a("p",[t._v("因此，当你执行：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" o "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("JavaScript 实际上执行的是：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" o "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\no"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("然后，当你执行：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("someProp\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("它检查 o 是否具有 someProp 属性。如果没有，它会查找 Object.getPrototypeOf(o).someProp，如果仍旧没有，它会继续查找 Object.getPrototypeOf(Object.getPrototypeOf(o)).someProp。")]),t._v(" "),a("h2",{attrs:{id:"links"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#links"}},[t._v("#")]),t._v(" links")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain",target:"_blank",rel:"noopener noreferrer"}},[t._v("Inheritance and the prototype chain"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/5a94c0de5188257a8929d837",target:"_blank",rel:"noopener noreferrer"}},[t._v("三分钟看完 JavaScript 原型与原型链"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/5c72a1766fb9a049ea3993e6",target:"_blank",rel:"noopener noreferrer"}},[t._v("2019 面试准备 - JS 原型与原型链"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/5835853f570c35005e413b19",target:"_blank",rel:"noopener noreferrer"}},[t._v("三张图搞懂 JavaScript 的原型对象与原型链"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=r.exports}}]);