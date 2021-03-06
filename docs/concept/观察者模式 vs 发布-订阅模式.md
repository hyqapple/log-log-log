# 观察者模式 vs 发布-订阅模式

> 观察者模式和发布订阅模式的有什么区别？

## 观察者模式

观察者模式 在软件设计中是一个对象，维护一个依赖列表，当任何状态发生改变自动通知它们。

## 发布-订阅设计模式

在发布-订阅模式，消息的发送方，叫做发布者（publishers），消息不会直接发送给特定的接收者，叫做订阅者。

## 区别

- 在观察者模式中，观察者是知道 Subject 的，Subject 一直保持对观察者进行记录。然而，在发布订阅模式中，发布者和订阅者不知道对方的存在。它们只有通过消息代理进行通信。

- 在发布订阅模式中，组件是松散耦合的，正好和观察者模式相反。

- 观察者模式大多数时候是同步的，比如当事件触发，Subject 就会去调用观察者的方法。而发布-订阅模式大多数时候是异步的（使用消息队列）。

- 观察者 模式需要在单个应用程序地址空间中实现，而发布-订阅更像交叉应用模式。

## links

- [观察者模式 vs 发布-订阅模式](https://juejin.im/post/5a14e9edf265da4312808d86)
