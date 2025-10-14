import{_ as h,d as g,c as b,a as t,w as i,v as r,b as d,e as c,f as m,r as u,o as f}from"./sites-Bu3uYr-A.js";import{P as v}from"./prism-bash-zcnM7wlG.js";const w=`<template>
  <view>
    <view class="demo-desc">
      红点徽标
    </view>
    <view class="demo-wrapper">
      <t-badge
        dot
        t-class="wrapper"
        content="消息"
      />
      <t-badge
        dot
        :offset="[1, -1]"
        t-class="wrapper"
      >
        <t-icon
          name="notification"
          size="48rpx"
          aria-label="通知"
        />
      </t-badge>
      <t-badge
        dot
        :offset="[1, 1]"
        t-class="wrapper"
      >
        <t-button>按钮</t-button>
      </t-badge>
    </view>

    <view class="demo-desc">
      数字徽标
    </view>
    <view class="demo-wrapper">
      <t-badge
        count="8"
        content="消息"
        :offset="[4]"
        t-class="wrapper"
      />
      <t-badge
        count="2"
        :offset="[2, -2]"
        t-class="wrapper"
      >
        <t-icon
          name="notification"
          size="48rpx"
          aria-label="通知"
        />
      </t-badge>
      <t-badge
        count="8"
        :offset="[2, 2]"
        t-class="wrapper"
      >
        <t-button>按钮</t-button>
      </t-badge>
    </view>

    <view class="demo-desc">
      自定义徽标
    </view>
    <view class="demo-wrapper">
      <t-badge
        count="NEW"
        :offset="[0, 2]"
        aria-role="button"
      >
        <t-button
          icon="notification"
          aria-label="通知"
          shape="square"
          size="large"
        />
      </t-badge>
    </view>
  </view>
</template>

<script>
import tBadge from 'tdesign-uniapp/badge/badge';
import tIcon from 'tdesign-uniapp/icon/icon';
import tButton from 'tdesign-uniapp/button/button';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tBadge,
    tIcon,
    tButton,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
<\/script>
<style>
@import './index.css';
</style>
`,_=`<template>
  <view>
    <!--
  由于 button 被 t-badeg包裹，t-badge 中存在 role="option", 导致button中的 role=button 失去作用。相当于button 被申明了 role=presentation
  因此提升了 aria-role=button 到 t-badge上
  可参考： https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/option_role
  https://www.zhangxinxu.com/wordpress/2017/01/voiceover-aria-web-accessible-iphone/
-->

    <view class="demo-desc">
      圆形徽标
    </view>
    <view class="demo-wrapper">
      <t-badge
        count="2"
        :offset="[2, -2]"
      >
        <t-icon
          name="notification"
          size="48rpx"
          aria-label="通知"
        />
      </t-badge>
    </view>

    <view class="demo-desc">
      方形徽标
    </view>
    <view class="demo-wrapper">
      <t-badge
        count="2"
        shape="square"
        :offset="[1, -2]"
      >
        <t-icon
          name="notification"
          size="48rpx"
          aria-label="通知"
        />
      </t-badge>
    </view>

    <view class="demo-desc">
      气泡徽标
    </view>
    <view class="demo-wrapper">
      <t-badge
        count="领积分"
        shape="bubble"
        aria-role="button"
      >
        <t-button
          icon="shop"
          aria-label="商店"
          shape="square"
          size="large"
        />
      </t-badge>
    </view>

    <view
      class="demo-desc"
      style="margin-bottom: 32rpx"
    >
      角标
    </view>
    <t-cell
      title="单行标题"
      t-class="t-class-cell"
    >
      <template
        #note
      >
        <t-badge
          count="New"
          :offset="skylineRender ? ['-16rpx', '-56rpx'] : [0, 0]"
          shape="ribbon"
        />
      </template>
    </t-cell>
  </view>
</template>

<script>
import tBadge from 'tdesign-uniapp/badge/badge';
import tCell from 'tdesign-uniapp/cell/cell';
import tIcon from 'tdesign-uniapp/icon/icon';
import tButton from 'tdesign-uniapp/button/button';
import SkylineBehavior from 'packages/demo/src/mixins/skyline.js';

export default {
  components: {
    tBadge,
    tCell,
    tIcon,
    tButton,
  },
  mixins: [SkylineBehavior],
  data() {
    return {
      skylineRender: false,
    };
  },
  options: {
    styleIsolation: 'apply-shared',
  },
  created() {},
  methods: {},
};
<\/script>
<style>
@import './index.css';
</style>
`,x=`<template>
  <view>
    <view class="demo-desc">
      Large
    </view>

    <view class="block">
      <t-avatar
        icon="user"
        size="large"
        :badge-props="{count: 8, size: 'large', offset: [7, 7]}"
      />
    </view>

    <view class="demo-desc">
      Middle
    </view>

    <view class="block">
      <t-avatar
        icon="user"
        :badge-props="{count: 8, offset: [5, 5]}"
      />
    </view>
  </view>
</template>

<script>
// import tBadge from 'tdesign-uniapp/badge/badge';
import tAvatar from 'tdesign-uniapp/avatar/avatar';
export default {
  components: {
    // tBadge,
    tAvatar,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
<\/script>
<style>
@import './index.css';
</style>
`,y=g({data(){return{DemoexamplebaseCode:w,DemoexamplethemeCode:_,DemoexamplesizeCode:x}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(e){this.$route.query.tab!==e&&this.$router.push({query:{tab:e}})}}},mounted(){const{tdDocContent:e,tdDocHeader:a,tdDocTabs:n,tdDocPhone:o}=this.$refs,l="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/badge/badge";a&&(a.docInfo={title:"Badge 徽标",desc:"用于告知用户，该区域的状态变化或者待处理任务的数量。"}),n&&(n.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],n.onchange=({detail:p})=>this.tab=p),o&&(o.qrcodeUrl=l),v.highlightAll(),this.$emit("loaded",()=>{e.pageStatus="show"})}}),D={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},E={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"data","component-name":"badge"},k=["tab"],z={name:"DEMO"},A=d(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>全局引入，在 miniprogram 根目录下的<code>app.json</code>中配置，局部引入，在需要引入的页面或组件的<code>index.json</code>中配置。</p><div class="language-json"><pre><code><span class="token property">&quot;usingComponents&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;t-badge&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tdesign-miniprogram/badge/badge&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="代码演示">代码演示 <a class="header-anchor" href="#代码演示"></a></h2><p><a href="https://developers.weixin.qq.com/s/TgaeQimG73SD" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a></p><blockquote style="background-color:#d9e1ff;font-size:15px;line-height:26px;margin:16px 0 0;padding:16px;border-radius:6px;color:#0052d9;"><p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i &gt; 构建npm包 &gt; 勾选 &quot;将JS编译成ES5&quot;</p></blockquote><h3 id="组件类型">组件类型 <a class="header-anchor" href="#组件类型"></a></h3>`,7),S={class:"tdesign-demo-wrapper tdesign-demo-item-- README-base tdesign-demo-item-- README"},q=["code"],B={slot:"action"},N=t("h3",{id:"组件样式"},[m("组件样式 "),t("a",{class:"header-anchor",href:"#组件样式"})],-1),C={class:"tdesign-demo-wrapper tdesign-demo-item-- README-theme tdesign-demo-item-- README"},R=["code"],M={slot:"action"},I=t("h3",{id:"组件尺寸"},[m("组件尺寸 "),t("a",{class:"header-anchor",href:"#组件尺寸"})],-1),$={class:"tdesign-demo-wrapper tdesign-demo-item-- README-size tdesign-demo-item-- README"},T=["code"],j={slot:"action"},P=d('<h2 id="faq">FAQ <a class="header-anchor" href="#faq"></a></h2><h3 id="如何处理由-ribbon-徽标溢出导致页面出现横向滚动？">如何处理由 ribbon 徽标溢出导致页面出现横向滚动？ <a class="header-anchor" href="#如何处理由-ribbon-徽标溢出导致页面出现横向滚动？"></a></h3><p>角标溢出问题建议从父容器组件处理。如 <a href="https://github.com/Tencent/tdesign-miniprogram/issues/3063" title="如 #3063 " target="_blank" rel="noopener noreferrer"> #3063 </a>，可以给父容器 <code>cell</code> 组件添加 <code>overflow: hidden</code>，处理溢出造成页面出现横向滚动的问题。</p>',3),V={ref:"tdDocPhone"},O=t("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/badge/badge",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),U=[O],G=t("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"badge"},null,-1),H={name:"API"},Q=d('<h3 id="badge-props">Badge Props <a class="header-anchor" href="#badge-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>color</td><td>String</td><td>-</td><td>颜色</td><td>N</td></tr><tr><td>content</td><td>String</td><td>-</td><td>徽标内容，示例：<code>content=&#39;自定义内容&#39;</code>。也可以使用默认插槽定义</td><td>N</td></tr><tr><td>count</td><td>String / Number / Slot</td><td>0</td><td>徽标右上角内容。可以是数字，也可以是文字。如：&#39;new&#39;/3/99+。特殊：值为空表示使用插槽渲染。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>dot</td><td>Boolean</td><td>false</td><td>是否为红点</td><td>N</td></tr><tr><td>max-count</td><td>Number</td><td>99</td><td>封顶的数字值</td><td>N</td></tr><tr><td>offset</td><td>Array</td><td>-</td><td>设置状态点的位置偏移，示例：[-10, 20] 或 [&#39;10em&#39;, &#39;8rem&#39;]。TS 类型：<code>Array&lt;string \\| number&gt;</code></td><td>N</td></tr><tr><td>shape</td><td>String</td><td>circle</td><td>形状。可选项：circle/square/bubble/ribbon</td><td>N</td></tr><tr><td>show-zero</td><td>Boolean</td><td>false</td><td>当数值为 0 时，是否展示徽标</td><td>N</td></tr><tr><td>size</td><td>String</td><td>medium</td><td>尺寸。可选项：medium/large</td><td>N</td></tr></tbody></table><h3 id="badge-external-classes">Badge External Classes <a class="header-anchor" href="#badge-external-classes"></a></h3><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td>t-class</td><td>根节点样式类</td></tr><tr><td>t-class-content</td><td>内容样式类</td></tr><tr><td>t-class-count</td><td>计数样式类</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-badge-basic-height</td><td>32rpx</td><td>-</td></tr><tr><td>--td-badge-basic-padding</td><td>8rpx</td><td>-</td></tr><tr><td>--td-badge-basic-width</td><td>32rpx</td><td>-</td></tr><tr><td>--td-badge-bg-color</td><td>@error-color</td><td>-</td></tr><tr><td>--td-badge-border-radius</td><td>4rpx</td><td>-</td></tr><tr><td>--td-badge-bubble-border-radius</td><td>20rpx 20rpx 20rpx 1px</td><td>-</td></tr><tr><td>--td-badge-content-text-color</td><td>@text-color-primary</td><td>-</td></tr><tr><td>--td-badge-dot-size</td><td>16rpx</td><td>-</td></tr><tr><td>--td-badge-font-size</td><td>@font-size-xs</td><td>-</td></tr><tr><td>--td-badge-font-weight</td><td>600</td><td>-</td></tr><tr><td>--td-badge-large-font-size</td><td>@font-size-s</td><td>-</td></tr><tr><td>--td-badge-large-height</td><td>40rpx</td><td>-</td></tr><tr><td>--td-badge-large-padding</td><td>10rpx</td><td>-</td></tr><tr><td>--td-badge-text-color</td><td>@text-color-anti</td><td>-</td></tr></tbody></table>',7),W=[Q],F={name:"DESIGN"},J=d('<h3 id="何时使用">何时使用 <a class="header-anchor" href="#何时使用"></a></h3><p>当需要展示特定对象的状态变化或承载运营性质提示时使用。</p><h3 id="组件搭配使用">组件搭配使用 <a class="header-anchor" href="#组件搭配使用"></a></h3><h5 id="徽标与选项卡、底部标签栏组合使用，置于文字段的右上方，用于展示状态信息或营销信息。">徽标与<a href="./tabs">选项卡</a>、<a href="./tab-bar">底部标签栏</a>组合使用，置于文字段的右上方，用于展示状态信息或营销信息。 <a class="header-anchor" href="#徽标与选项卡、底部标签栏组合使用，置于文字段的右上方，用于展示状态信息或营销信息。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/badge/badge-1.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/badge/badge-2.png"></div></div><hr><h5 id="徽标与头像组合使用，可作为消息提示或数量提示。">徽标与<a href="./avatar">头像</a>组合使用，可作为消息提示或数量提示。 <a class="header-anchor" href="#徽标与头像组合使用，可作为消息提示或数量提示。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/badge/badge-3.png"></div></div><h3 id="常见用法">常见用法 <a class="header-anchor" href="#常见用法"></a></h3><h5 id="当用户只需要关注是否有消息，而无需关注消息数量时，可使用红点型徽标；当提示的信息需要精确显示数量时，应使用带数字的徽标。">当用户只需要关注是否有消息，而无需关注消息数量时，可使用红点型徽标；当提示的信息需要精确显示数量时，应使用带数字的徽标。 <a class="header-anchor" href="#当用户只需要关注是否有消息，而无需关注消息数量时，可使用红点型徽标；当提示的信息需要精确显示数量时，应使用带数字的徽标。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/badge/badge-4.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/badge/badge-5.png"></div></div><h3 id="推荐-慎用示例">推荐/慎用示例 <a class="header-anchor" href="#推荐-慎用示例"></a></h3><h5 id="建议根据场景和信息类型定义最长字数，不宜出现过长的情况。">建议根据场景和信息类型定义最长字数，不宜出现过长的情况。 <a class="header-anchor" href="#建议根据场景和信息类型定义最长字数，不宜出现过长的情况。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/badge/badge-6.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/good.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/badge/badge-7.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div></div><h3 id="相似组件">相似组件 <a class="header-anchor" href="#相似组件"></a></h3><table><thead><tr><th style="text-align:left;">组件名</th><th style="text-align:left;">何时使用</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./tag">标签</a></td><td style="text-align:left;">当需要展示内容本身的属性、状态、类别、营销情况时作为纯展示使用；或者当大量的内容数据需要根据类型进行选择筛选时使用。</td></tr></tbody></table>',16),L=[J],K=t("div",{style:{"margin-top":"48px"}},[t("td-doc-history",{time:"1760416906856"})],-1),X=t("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function Y(e,a,n,o,l,p){const s=u("Stackblitz");return f(),b("td-doc-content",D,[t("td-doc-header",E,null,512),t("td-doc-tabs",{ref:"tdDocTabs",tab:e.tab},null,8,k),i(t("div",null,[t("div",z,[A,t("div",S,[t("td-doc-demo",{code:e.DemoexamplebaseCode,language:"markup","show-code":"",mode:"open","demo-name":"base","component-name":" README"},[t("div",B,[c(s,{"demo-name":"base","component-name":" README",code:e.DemoexamplebaseCode},null,8,["code"])])],8,q)]),N,t("div",C,[t("td-doc-demo",{code:e.DemoexamplethemeCode,language:"markup","show-code":"",mode:"open","demo-name":"theme","component-name":" README"},[t("div",M,[c(s,{"demo-name":"theme","component-name":" README",code:e.DemoexamplethemeCode},null,8,["code"])])],8,R)]),I,t("div",$,[t("td-doc-demo",{code:e.DemoexamplesizeCode,language:"markup","show-code":"",mode:"open","demo-name":"size","component-name":" README"},[t("div",j,[c(s,{"demo-name":"size","component-name":" README",code:e.DemoexamplesizeCode},null,8,["code"])])],8,T)]),P]),t("td-doc-phone",V,U,512),G],512),[[r,e.tab==="demo"]]),i(t("div",H,W,512),[[r,e.tab==="api"]]),i(t("div",F,L,512),[[r,e.tab==="design"]]),K,X],512)}const et=h(y,[["render",Y]]);export{et as default};
