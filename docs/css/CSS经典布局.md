# CSS 经典布局

## 居中布局

### 水平居中

```html
<div class="parent">
  <div class="child">DEMO</div>
</div>
```

#### inline-block text-align

先将子框由块级元素改变为行内块元素，再通过设置行内块元素居中以达到水平居中。

```css
.child {
  display: inline-block;
}
.parent {
  text-align: center;
}
```

#### table margin

先将子框设置为块级表格来显示（类似 `<table>`），再设置子框居中以达到水平居中。

```css
.child {
  display: table;
  margin: 0 auto;
}
```

#### absolute transform

将子框设置为绝对定位，移动子框，使子框左侧距离相对框左侧边框的距离为相对框宽度的一半，再通过向左移动子框的一半宽度以达到水平居中。当然，在此之前，我们需要设置父框为相对定位，使父框成为子框的相对框。

```css
.parent {
  position: relative;
}
.child {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
```

#### flex margin

通过 CSS3 中的布局利器 flex 将子框转换为 flex item，再设置子框居中以达到居中。

```css
.parent {
  display: flex;
}
.child {
  margin: 0 auto;
}
```

#### flex justify-content

通过 CSS3 中的布局利器 flex 中的 justify-content 属性来达到水平居中。

```css
.parent {
  display: flex;
  justify-content: center;
}
```

### 垂直居中

#### table-cell vertical-align

通过将父框转化为一个表格单元格显示（类似 `<td>` 和 `<th>`），再通过设置属性，使表格单元格内容垂直居中以达到垂直居中。

```css
.parent {
  display: table-cell;
  vertical-align: middle;
}
```

#### absolute transform translate

类似于水平居中时的 absolute+transform 原理。将子框设置为绝对定位，移动子框，使子框上边距离相对框上边边框的距离为相对框高度的一半，再通过向上移动子框的一半高度以达到垂直居中。当然，在此之前，我们需要设置父框为相对定位，使父框成为子框的相对框。

```css
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
```

#### flex

使用 flex 布局

```css
.parent {
  display: flex;
  align-items: center;
}
```

### 水平垂直居中

#### transform translate

```css
.parent {
  position: relative;
}
.child {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: tranplate(-50%, -50%);
}
```

#### flex

```css
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

## 多列布局

### 定宽+自适应

```html
<div class="parent">
  <div class="left">
    <p>left</p>
  </div>
  <div class="right">
    <p>right</p>
  </div>
</div>
```

#### float overflow

通过将左边框脱离文本流，设置右边规定当内容溢出元素框时发生的事情以达到多列布局。

```css
.left {
  float: left;
  width: 100px;
  margin-right: 20px;
}
.right {
  overflow: hidden;
}
```

#### float margin

通过将左框脱离文本流，加上右框向右移动一定的距离，以达到视觉上的多列布局

```css
.left {
  float: left;
  width: 100px;
}
.right {
  margin-left: 120px;
}
```

#### float margin（改良版）

在 1）的基础之上，通过向右框添加一个父框，再加上设置左、右父框属性使之产生 BFC 以去除 bug。

```html
<div class="parent">
  <div class="left">
    <p>left</p>
  </div>
  <div class="rigth-fix">
    <div class="right">
      <p>right</p>
      <p>right</p>
    </div>
  </div>
</div>
```

```css
.left {
  float: left;
  width: 100px;
  position: relative;
}
.right-fix {
  float: right;
  width: 100%;
  margin-left: -100px;
}
.right {
  margin-left: 120px;
}
```

#### flex

```css
.parent {
  display: flex;
}
.left {
  width: 100px;
  margin-right: 20px;
}
.right {
  flex: 1;
}
```

### 两列定宽 一列自适应

```html
<div class="parent">
  <div class="left">
    <p>left</p>
  </div>
  <div class="center">
    <p>center</p>
  </div>
  <div class="right">
    <p>right</p>
    <p>right</p>
  </div>
</div>
```

```css
.left,
.center {
  float: left;
  width: 100px;
  margin-right: 20px;
}
.right {
  overflow: hidden;
}
```

### 不定宽 自适应

```html
<div class="parent">
  <div class="left">
    <p>left</p>
  </div>
  <div class="right">
    <p>right</p>
    <p>right</p>
  </div>
</div>
```

```css
.left {
  float: left;
  margin-right: 20px;
}
.right {
  overflow: hidden;
}
.left p {
  width: 200px;
}
```

### 两列不定宽 一列自适应

```html
<div class="parent">
  <div class="left">
    <p>left</p>
  </div>
  <div class="center">
    <p>center</p>
  </div>
  <div class="right">
    <p>right</p>
    <p>right</p>
  </div>
</div>
```

```css
.left,
.center {
  float: left;
  margin-right: 20px;
}
.right {
  overflow: hidden;
}
.left p,
.center p {
  width: 100px;
}
```

### 等分布局

```html
<div class="parent">
  <div class="column"><p>1</p></div>
  <div class="column"><p>2</p></div>
  <div class="column"><p>3</p></div>
  <div class="column"><p>4</p></div>
</div>
```

```css
.parent {
  display: flex;
}
.column {
  flex: 1;
}
.column + .column {
  margin-left: 20px;
}
```

## 全屏布局

### position

```html
<div class="parent">
  <div class="top">top</div>
  <div class="left">left</div>
  <div class="right">
    <div class="inner">right</div>
  </div>
  <div class="bottom">bottom</div>
</div>
```

```css
html,
body,
.parent {
  margin: 0;
  height: 100%;
  overflow: hidden;
}
.top {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: blue;
}
.left {
  position: absolute;
  left: 0;
  top: 100px;
  bottom: 50px;
  width: 200px;
  background: red;
}
.right {
  position: absolute;
  left: 200px;
  top: 100px;
  bottom: 50px;
  right: 0;
  background: pink;
  overflow: auto;
}
.right .inner {
  min-height: 1000px;
}
.bottom {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 50px;
  background: black;
}
```

### flex

```html
<div class="parent">
  <div class="top">top</div>
  <div class="middle">
    <div class="left">left</div>
    <div class="right">
      <div class="inner">right</div>
    </div>
  </div>
  <div class="bottom">bottom</div>
</div>
```

```css
html,
body,
.parent {
  margin: 0;
  height: 100%;
  overflow: hidden;
}
.parent {
  display: flex;
  flex-direction: column;
}
.top {
  background: blue;
}
.bottom {
  background: black;
}
.middle {
  flex: 1;
  display: flex;
}
.left {
  background: red;
}
.right {
  flex: 1;
  overflow: auto;
  background: pink;
}
.right .inner {
  min-height: 1000px;
}
```

### 圣杯布局

```html
<div class="left">左栏</div>
<div class="right">右栏</div>
<div class="middle">中间栏</div>
```

```css
.left {
  width: 200px;
  height: 300px;
  background: red;
  float: left;
}
.right {
  width: 150px;
  height: 300px;
  background: green;
  float: right;
}
.middle {
  height: 300px;
  background: yellow;
  margin-left: 220px;
  margin-right: 160px;
}
```

### 双飞翼布局

```html
<article class="container">
  <div class="center">
    <div class="inner">双飞翼布局</div>
  </div>
  <div class="left"></div>
  <div class="right"></div>
</article>
```

```css
.container {
  min-width: 600px;
}
.left {
  float: left;
  width: 200px;
  height: 400px;
  background: red;
  margin-left: -100%;
}
.center {
  float: left;
  width: 100%;
  height: 500px;
  background: yellow;
}
.center .inner {
  margin: 0 200px; //新增部分
}
.right {
  float: left;
  width: 200px;
  height: 400px;
  background: blue;
  margin-left: -200px;
}
```

### 粘连布局

```html
<div id="wrap">
  <div class="main">
    main <br />
    main <br />
    main <br />
  </div>
</div>
<div id="footer">footer</div>
```

```css
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%; //高度一层层继承下来
}
#wrap {
  min-height: 100%;
  background: pink;
  text-align: center;
  overflow: hidden;
}
#wrap .main {
  padding-bottom: 50px;
}
#footer {
  height: 50px;
  line-height: 50px;
  background: deeppink;
  text-align: center;
  margin-top: -50px;
}
```

## links

- [一篇全面的 CSS 布局学习指南 [译]](https://juejin.im/post/5b3b56a1e51d4519646204bb)
- [CSS 布局解决方案（终结版）](https://segmentfault.com/a/1190000013565024)
- [CSS 布局经典问题初步整理](https://brianway.github.io/2017/05/18/css-layout-classical-problems/)
