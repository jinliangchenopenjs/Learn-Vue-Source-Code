(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{262:function(_,v,e){"use strict";e.r(v);var t=e(2),o=Object(t.a)({},(function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h2",{attrs:{id:"_1-前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-前言"}},[_._v("#")]),_._v(" 1. 前言")]),_._v(" "),e("p",[_._v("众所周知，"),e("code",[_._v("Vue")]),_._v("最大的特点之一就是数据驱动视图，那么什么是数据驱动视图呢？在这里，我们可以把数据理解为状态，而视图就是用户可直观看到页面。页面不可能是一成不变的，它应该是动态变化的，而它的变化也不应该是无迹可寻的，它或者是由用户操作引起的，亦或者是由后端数据变化引起的，不管它是因为什么引起的，我们统称为它的状态变了，它由前一个状态变到了后一个状态，页面也就应该随之而变化，所以我们就可以得到如下一个公式：")]),_._v(" "),e("p",[e("font",{attrs:{color:"red"}},[e("strong",[_._v("UI = render(state)")])])],1),_._v(" "),e("p",[_._v("上述公式中：状态"),e("code",[_._v("state")]),_._v("是输入，页面"),e("code",[_._v("UI")]),_._v("输出，状态输入一旦变化了，页面输出也随之而变化。我们把这种特性称之为数据驱动视图。")]),_._v(" "),e("p",[_._v("OK，有了基本概念以后，我们再把上述公式拆成三部分："),e("code",[_._v("state")]),_._v("、"),e("code",[_._v("render()")]),_._v("以及"),e("code",[_._v("UI")]),_._v("。我们知道"),e("code",[_._v("state")]),_._v("和"),e("code",[_._v("UI")]),_._v("都是用户定的，而不变的是这个"),e("code",[_._v("render()")]),_._v("。所以"),e("code",[_._v("Vue")]),_._v("就扮演了"),e("code",[_._v("render()")]),_._v("这个角色，当"),e("code",[_._v("Vue")]),_._v("发现"),e("code",[_._v("state")]),_._v("变化之后，经过一系列加工，最终将变化反应在"),e("code",[_._v("UI")]),_._v("上。")]),_._v(" "),e("p",[_._v("那么第一个问题来了，"),e("code",[_._v("Vue")]),_._v("怎么知道"),e("code",[_._v("state")]),_._v("变化了呢？")]),_._v(" "),e("h2",{attrs:{id:"_2-什么是变化侦测"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-什么是变化侦测"}},[_._v("#")]),_._v(" 2. 什么是变化侦测")]),_._v(" "),e("p",[_._v("那"),e("code",[_._v("Vue")]),_._v("是怎么知道"),e("code",[_._v("state")]),_._v("变化了呢？换句话说，数据变化了是怎么通知给"),e("code",[_._v("Vue")]),_._v("呢？那么，这就引出了"),e("code",[_._v("Vue")]),_._v("中的变化侦测。")]),_._v(" "),e("p",[_._v("变化侦测就是追踪状态，亦或者说是数据的变化，一旦发生了变化，就要去更新视图。")]),_._v(" "),e("p",[_._v("变化侦测可不是个新名词，它在目前的前端三大框架中均有涉及。在"),e("code",[_._v("Angular")]),_._v("中是通过脏值检查流程来实现变化侦测；在"),e("code",[_._v("React")]),_._v("是通过对比虚拟"),e("code",[_._v("DOM")]),_._v("来实现变化侦测，而在"),e("code",[_._v("Vue")]),_._v("中也有自己的一套变化侦测实现机制。")]),_._v(" "),e("p",[_._v("那么，接下来我们就通过阅读源码来学习一下"),e("code",[_._v("Vue")]),_._v("是怎么实现自己的对数据变化进行侦测的机制。")]),_._v(" "),e("h2",{attrs:{id:"_3-总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-总结"}},[_._v("#")]),_._v(" 3. 总结")]),_._v(" "),e("p",[_._v("首先，我们知道了什么是数据驱动视图。数据驱动视图简单来说就是数据变化引起视图变化，那么第一步就是先要知道数据什么时候发生变化，也就是说对数据的变化要进行侦测。")]),_._v(" "),e("p",[_._v("其次，数据的变化侦测在三大框架中均有涉及，不同的框架有着自己的一套侦测机制。")]),_._v(" "),e("p",[_._v("最后，我们从源码出发，学习在"),e("code",[_._v("Vue")]),_._v("中是如何对数据进行变化侦测的。")])])}),[],!1,null,null,null);v.default=o.exports}}]);