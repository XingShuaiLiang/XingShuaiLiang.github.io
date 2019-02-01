---
layout: post
title:  "Java传递String类型变量的过程"
date:   2019-02-01 09:04:05 +0800
categories: Java
tags: Java
author: XingShuai Liang
mathjax: true
---

* content
{:toc}

网络上各种博客都在讲一些参数传递的问题，其中有一句话：在Java中只有值传递没有引用传递。
这个问题很早之前我也很是不解，但从代码中可以十分明了的看出他的传递过程。

首先来看String类型：

```bash
	public static void main(String[] args) {
		String Val0 = new String("Unchanged");
		changeStr(Val0);
		System.out.println(Val0);
	}
	static void changeStr(String str)
	{
		str = "Tochange";
	}
	Console输出：Unchanged
```
如果为引用传递的话那么现在Val0的值应该为Tochange才对，但事实并非如此，原因在于:
```bash
	static void changeStr(String str)
	{
		//str = "Tochange";
	}
```
开头说到了“在Java中只有值传递没有引用传递”
所以str = "Tochange";实际上并不是直接给传递过来的str对象赋值，而是执行了一个String str = new String("Tochange");的过程。