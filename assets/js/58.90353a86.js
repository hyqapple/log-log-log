(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{258:function(t,i,e){"use strict";e.r(i);var n=e(0),a=Object(n.a)({},(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"bfc、ifc、gfc-和-ffc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bfc、ifc、gfc-和-ffc"}},[t._v("#")]),t._v(" BFC、IFC、GFC 和 FFC")]),t._v(" "),e("h2",{attrs:{id:"bfc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bfc"}},[t._v("#")]),t._v(" BFC")]),t._v(" "),e("p",[t._v('BFC(Block Formatting Contexts)直译为"块级格式化上下文"。Block Formatting Contexts 就是页面上的一个隔离的渲染区域，容器里面的子元素不会在布局上影响到外面的元素，反之也是如此。如何产生 BFC？\nfloat 的值不为 none。')]),t._v(" "),e("p",[t._v("overflow 的值不为 visible。\nposition 的值不为 relative 和 static。\ndisplay 的值为 table-cell, table-caption, inline-block 中的任何一个。\n那 BFC 一般有什么用呢？比如常见的多栏布局，结合块级别元素浮动，里面的元素则是在一个相对隔离的环境里运行。")]),t._v(" "),e("h2",{attrs:{id:"ifc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ifc"}},[t._v("#")]),t._v(" IFC")]),t._v(" "),e("p",[t._v('IFC(Inline Formatting Contexts)直译为"内联格式化上下文"，IFC 的 line box（线框）高度由其包含行内元素中最高的实际高度计算而来（不受到竖直方向的 padding/margin 影响)\nIFC 中的 line box 一般左右都贴紧整个 IFC，但是会因为 float 元素而扰乱。float 元素会位于 IFC 与与 line box 之间，使得 line box 宽度缩短。 同个 ifc 下的多个 line box 高度会不同。 IFC 中时不可能有块级元素的，当插入块级元素时（如 p 中插入 div）会产生两个匿名块与 div 分隔开，即产生两个 IFC，每个 IFC 对外表现为块级元素，与 div 垂直排列。\n那么 IFC 一般有什么用呢？')]),t._v(" "),e("p",[t._v("水平居中：当一个块要在环境中水平居中时，设置其为 inline-block 则会在外层产生 IFC，通过 text-align 则可以使其水平居中。")]),t._v(" "),e("p",[t._v("垂直居中：创建一个 IFC，用其中一个元素撑开父元素的高度，然后设置其 vertical-align:middle，其他行内元素则可以在此父元素下垂直居中。")]),t._v(" "),e("h2",{attrs:{id:"gfc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gfc"}},[t._v("#")]),t._v(" GFC")]),t._v(" "),e("p",[t._v('GFC(GridLayout Formatting Contexts)直译为"网格布局格式化上下文"，当为一个元素设置 display 值为 grid 的时候，此元素将会获得一个独立的渲染区域，我们可以通过在网格容器（grid container）上定义网格定义行（grid definition rows）和网格定义列（grid definition columns）属性各在网格项目（grid item）上定义网格行（grid row）和网格列（grid columns）为每一个网格项目（grid item）定义位置和空间。\n那么 GFC 有什么用呢，和 table 又有什么区别呢？首先同样是一个二维的表格，但 GridLayout 会有更加丰富的属性来控制行列，控制对齐以及更为精细的渲染语义和控制。')]),t._v(" "),e("h2",{attrs:{id:"ffc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ffc"}},[t._v("#")]),t._v(" FFC")]),t._v(" "),e("p",[t._v('FFC(Flex Formatting Contexts)直译为"自适应格式化上下文"，display 值为 flex 或者 inline-flex 的元素将会生成自适应容器（flex container），可惜这个牛逼的属性只有谷歌和火狐支持，不过在移动端也足够了，至少 safari 和 chrome 还是 OK 的，毕竟这俩在移动端才是王道。\nFlex Box 由伸缩容器和伸缩项目组成。通过设置元素的 display 属性为 flex 或 inline-flex 可以得到一个伸缩容器。设置为 flex 的容器被渲染为一个块级元素，而设置为 inline-flex 的容器则渲染为一个行内元素。\n伸缩容器中的每一个子元素都是一个伸缩项目。伸缩项目可以是任意数量的。伸缩容器外和伸缩项目内的一切元素都不受影响。简单地说，Flexbox 定义了伸缩容器内伸缩项目该如何布局。')]),t._v(" "),e("h2",{attrs:{id:"links"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#links"}},[t._v("#")]),t._v(" links")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://juejin.im/entry/5938daf7a0bb9f006b2295db",target:"_blank",rel:"noopener noreferrer"}},[t._v("小科普：到底什么是 BFC、IFC、GFC 和 FFC"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);i.default=a.exports}}]);