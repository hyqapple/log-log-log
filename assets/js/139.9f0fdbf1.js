(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{337:function(e,t,r){"use strict";r.r(t);var i=r(0),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"fiber"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fiber"}},[e._v("#")]),e._v(" Fiber")]),e._v(" "),r("h2",{attrs:{id:"背景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[e._v("#")]),e._v(" 背景")]),e._v(" "),r("p",[e._v("在这里面 React 会递归比对 VirtualDOM 树，找出需要变动的节点，然后同步更新它们, 一气呵成。这个过程 React 称为 Reconcilation(中文可以译为协调).")]),e._v(" "),r("p",[e._v("为了给用户制造一种应用很快的'假象'，我们不能让一个程序长期霸占着资源. 你可以将浏览器的渲染、布局、绘制、资源加载(例如 HTML 解析)、事件响应、脚本执行视作操作系统的'进程'，我们需要通过某些调度策略合理地分配 CPU 资源，从而提高浏览器的用户响应速率, 同时兼顾任务执行效率。")]),e._v(" "),r("p",[e._v("所以 React 通过 Fiber 架构，让自己的 Reconcilation 过程变成可被中断。 '适时'地让出 CPU 执行权，除了可以让浏览器及时地响应用户的交互")]),e._v(" "),r("p",[e._v("当时被大家拍手叫好的 VDOM，为什么今日会略显疲态，这还要从它的工作原理说起。在 react 发布之初，设想未来的 UI 渲染会是异步的，从 setState() 的设计和 react 内部的事务机制可以看出这点。在 react@16 以前的版本，reconciler（现被称为 stack reconciler ）采用自顶向下递归，从根组件或 setState() 后的组件开始，更新整个子树。如果组件树不大不会有问题，但是当组件树越来越大，递归遍历的成本就越高，持续占用主线程，这样主线程上的布局、动画等周期性任务以及交互响应就无法立即得到处理，造成顿卡的视觉效果。")]),e._v(" "),r("p",[e._v("那么这个问题如何解决，这就是 fiber reconciler 要做的事了。简而言之可以看下图，将要执行的 JS 做拆分，保证不会阻塞主线程（Main thread）即可。")]),e._v(" "),r("h2",{attrs:{id:"工作原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#工作原理"}},[e._v("#")]),e._v(" 工作原理")]),e._v(" "),r("p",[e._v("React 通过 Fiber 将树的遍历变成了链表的遍历")]),e._v(" "),r("p",[e._v("Reconciliation(协调阶段) 和 Commit(提交阶段).")]),e._v(" "),r("p",[e._v("React Fiber 也被称为虚拟栈帧(Virtual Stack Frame)")]),e._v(" "),r("ul",[r("li",[e._v("React 应用中的基础单元是组件，应用以组件树形式组织，渲染组件；")]),e._v(" "),r("li",[e._v("Fiber 调和器基础单元则是 fiber（调和单元），应用以 fiber 树形式组织，应用 Fiber 算法；")]),e._v(" "),r("li",[e._v("组件树和 fiber 树结构对应，一个组件实例有一个对应的 fiber 实例；")]),e._v(" "),r("li",[e._v("Fiber 负责整个应用层面的调和，fiber 实例负责对应组件的调和；")])]),e._v(" "),r("p",[e._v("除了 Fiber 工作单元的拆分，两阶段的拆分也是一个非常重要的改造，在此之前都是一边 Diff 一边提交的。先来看看这两者的区别:")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("协调阶段: 可以认为是 Diff 阶段, 这个阶段可以被中断, 这个阶段会找出所有节点变更，例如节点新增、删除、属性变更等等, 这些变更 React 称之为'副作用(Effect)' . 以下生命周期钩子会在协调阶段被调用：")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("constructor")])]),e._v(" "),r("li",[r("code",[e._v("componentWillMount")]),e._v(" "),r("code",[e._v("废弃")])]),e._v(" "),r("li",[r("code",[e._v("componentWillReceiveProps")]),e._v(" "),r("code",[e._v("废弃")])]),e._v(" "),r("li",[r("code",[e._v("static getDerivedStateFromProps")])]),e._v(" "),r("li",[r("code",[e._v("shouldComponentUpdate")])]),e._v(" "),r("li",[r("code",[e._v("componentWillUpdate")]),e._v(" "),r("code",[e._v("废弃")])]),e._v(" "),r("li",[r("code",[e._v("render")])])])]),e._v(" "),r("li",[r("p",[e._v("提交阶段: 将上一个阶段计算出来的需要处理的**副作用(Effects)**一次性执行了。这个阶段必须同步执行，不能被打断. 这些生命周期钩子在提交阶段被执行:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("getSnapshotBeforeUpdate")]),e._v(" 严格来说，这个是在进入 commit 阶段前调用")]),e._v(" "),r("li",[r("code",[e._v("componentDidMount")])]),e._v(" "),r("li",[r("code",[e._v("componentDidUpdate")])]),e._v(" "),r("li",[r("code",[e._v("componentWillUnmount")])])])])]),e._v(" "),r("h2",{attrs:{id:"links"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#links"}},[e._v("#")]),e._v(" links")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://juejin.im/post/5ab7b3a2f265da2378403e57",target:"_blank",rel:"noopener noreferrer"}},[e._v("React Fiber"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/37095662",target:"_blank",rel:"noopener noreferrer"}},[e._v("React Fiber 架构"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://juejin.im/post/5dadc6045188255a270a0f85",target:"_blank",rel:"noopener noreferrer"}},[e._v("这可能是最通俗的 React Fiber(时间分片) 打开方式"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://juejin.im/post/5be969656fb9a049ad76931f",target:"_blank",rel:"noopener noreferrer"}},[e._v("浅析 React Fiber"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=a.exports}}]);