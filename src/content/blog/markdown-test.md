---
title: "Markdown 渲染测试"
pubDate: 2024-11-20
description: "测试所有 Markdown 功能，包括标题、列表、代码块和数学公式。"
author: "San Zhang"
tags: ["Test", "Markdown"]
category: "Technology"
---

# 一级标题测试

这是一段普通文本，用于测试段落渲染。

## 二级标题测试

这是二级标题下的内容。

### 三级标题测试

这是三级标题下的内容。

## 列表测试

### 无序列表

- 第一项
- 第二项
- 第三项
  - 嵌套项 1
  - 嵌套项 2
- 第四项

### 有序列表

1. 第一步
2. 第二步
3. 第三步
   1. 子步骤 1
   2. 子步骤 2
4. 第四步

## 代码测试

### 行内代码

这是一段包含 `inline code` 的文本。

### 代码块

```javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));
```

```python
def hello_world():
    print("Hello, World!")
    
hello_world()
```

## 数学公式测试

### 行内公式

这是一个行内数学公式：$a^2 + b^2 = c^2$，勾股定理。

另一个例子：$E = mc^2$

### 块级公式

$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

$$
\frac{d}{dx}\left( \int_{0}^{x} f(u)\,du\right)=f(x)
$$

$$
\sum_{i=1}^{n} i = \frac{n(n+1)}{2}
$$

## 引用块

> 这是一段引用文本。
> 可以包含多行内容。
> 
> 引用块可以很长。

## 链接和加粗

这是一个 [链接示例](https://example.com)。

这是 **加粗文本** 和 *斜体文本*。

## 表格

| 列1 | 列2 | 列3 |
|-----|-----|-----|
| 数据1 | 数据2 | 数据3 |
| 数据4 | 数据5 | 数据6 |
| 数据7 | 数据8 | 数据9 |

## 分隔线

---

## 混合测试

1. 这是一个包含 `代码` 的列表项
2. 这是一个包含 **加粗** 的列表项
3. 这是一个包含数学公式 $x^2 + y^2 = r^2$ 的列表项

完成测试！
